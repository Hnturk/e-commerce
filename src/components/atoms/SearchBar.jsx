import * as React from "react";
import { useState, useContext } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CarContext from "../../contexts/CarContext";

export default function SearchBar() {

  const { carData, setCarData, data } = useContext(CarContext);

  const [isExpanded, setIsExpanded] = useState(false);
  const [search, setSearch] = useState("");

  function handleMouse() {
    setIsExpanded(!isExpanded);
  }

  function handleSearch(e) {
    const searchedCar = e.target.value.toLowerCase();
    setSearch(searchedCar);

    if (search === "") {
      setCarData(data);
    } else {
      const searchedData = data.filter((item) =>
        item.name.toLowerCase().includes(search));
      setCarData(searchedData);
      console.log(carData);
    }
    
  }

  return (
    <Paper
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      elevation={1}
      className={`search-bar ${isExpanded ? "expanded" : ""}`}
      sx={{
        height: "38px",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "clamp(150px, 21vw, 450px)",
        minWidth: "150px",
        marginRight: "clamp(20px, 6.8vw, 113px)"
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" onChange={handleSearch}/>
    </Paper>
  );
}
