import * as React from "react";
import { useState, useContext, useEffect} from "react";
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

  function handleSearch(event) {
    setSearch(event.target.value.toLowerCase());
  }

  useEffect(() => {
    search ? setCarData(data.filter((car) => car.name.toLowerCase().includes(search))) : setCarData(data);        
  }, [search]);

  

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
        minWidth: "150px",
        marginRight: { md: "0px", xl: "clamp(20px, 6.8vw, 113px)"},
        width: { md: "480px", xl: "clamp(150px, 21vw, 450px)"}, 
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" onChange={handleSearch}/>
    </Paper>
  );
}
