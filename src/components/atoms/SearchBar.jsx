import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleMouse() {
    setIsExpanded(!isExpanded);
  }

  return (
    <Paper
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      elevation={1}
      className={`search-bar ${isExpanded ? "expanded" : ""}`}
      sx={{
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
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
    </Paper>
  );
}
