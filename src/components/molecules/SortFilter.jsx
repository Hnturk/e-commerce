import { useContext } from "react";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import CarContext from "../../contexts/CarContext.jsx";

const options = [
  { label: "Old to New", value: "oldToNew" },
  { label: "New to Old", value: "newToOld" },
  { label: "Price high to low", value: "highToLow" },
  { label: "Price low to high", value: "lowToHigh" },
];
export default function SortFilter() {
  const { setSelectedValue, selectedValue } = useContext(CarContext);

  function handleClick(value) {
    setSelectedValue(value);
  }

  return (
    <Paper
      data-testid="sort-filter"
      sx={{ minWidth: "190px", width: "50%", height: "200px" }}
    >
      <FormControl sx={{ paddingLeft: "10px" }}>
        <FormLabel id="BrandFilter">Sort</FormLabel>
        <RadioGroup>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={
                <Radio
                  checked={option.value === selectedValue}
                  onChange={() => handleClick(option.value)}
                />
              }
              label={option.label}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Paper>
  );
}
