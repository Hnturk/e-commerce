import React from "react";
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from '@mui/material/InputAdornment';


function FilterSearch( {label}) {
  return (
    // <div className="search-area">
    //   <input type="text" onChange={props.onChange} placeholder="Search" />
    // </div>
    <TextField  id="outlined-search" label = {label} type="search"/>
    // InputProps={{
    //   startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
    //   }}
  );
}

export default FilterSearch;
