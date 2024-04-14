import Paper from "@mui/material/Paper";
import React from "react";
import { useState, useContext, useEffect } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CarContext from "../../contexts/CarContext";

export default function SearchBar() {
  const { setCarData, data } = useContext(CarContext);

  const [isExpanded, setIsExpanded] = useState(false);
  const [search, setSearch] = useState("");



  useEffect(() => {
    search
      ? setCarData(
          data.filter((car) => car.name.toLowerCase().includes(search))
        )
      : setCarData(data);
  }, [search, data, setCarData]);

  return (
    <Paper
      data-testid = "search-bar"
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      elevation={1}
      className={`search-bar ${isExpanded ? "expanded" : ""}`}
      sx={{
        height: "38px",
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "150px",
        marginRight: { xs: "0px", sm: "0px", md: "0px", xl: "113px" },
        width: { xs: "85%", sm: "85%", md: "370px", lg: "450px", xl: "450px" },
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search"
        onChange={handleSearch}
      />
    </Paper>
  );

  function handleMouse() {
    setIsExpanded(!isExpanded);
  }

  function handleSearch(event) {
    setSearch(event.target.value.toLowerCase());
  }
}
