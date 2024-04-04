import { useContext, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Paper from "@mui/material/Paper";
import CarContext from "../../contexts/CarContext";

const options = [
  { label: "Old to New", value: "oldToNew" },
  { label: "New to Old", value: "newToOld" },
  { label: "Price high to low", value: "highToLow" },
  { label: "Price low to high", value: "lowToHigh" },
];
export default function SortFilter() {
  const { carData, setCarData } = useContext(CarContext);
  const [selectedValue, setSelectedValue] = useState("");

  function handleClick(value) {
    setSelectedValue(value);

    let sortedData = [];
    switch (value) {
      case "oldToNew":
        sortedData = [...carData].sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );
        break;
      case "newToOld":
        sortedData = [...carData].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        break;
      case "highToLow":
        sortedData = [...carData].sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price),
        );
        break;
      case "lowToHigh":
        sortedData = [...carData].sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price),
        );
        break;
      default:
        break;
    }
    setCarData(sortedData);
  }

  return (
    <Paper sx={{ minWidth: "190px", width: "50%", height: "200px" }}>
      <FormControl sx={{ paddingLeft: "10px" }}>
        <FormLabel id="BrandFİlter">Sort</FormLabel>
        <RadioGroup>
          {options.map((option) => (
            <FormControlLabel
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
