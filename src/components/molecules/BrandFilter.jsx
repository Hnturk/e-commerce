import { useContext, useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CarContext from "../../contexts/CarContext";
import { Search } from "@mui/icons-material";
export default function BrandFilter() {
  const {
    brandData,
    setCarData,
    data,
    setModelData,
    carData,
    selected,
    setSelected,
  } = useContext(CarContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (selected.size > 0) {
      const filteredCarData = data.filter((car) => selected.has(car.brand));
      setCarData(filteredCarData);
      const filteredModels = Array.from(
        new Set(filteredCarData.map((car) => car.model)),
      );
      setModelData(filteredModels);
    } else {
      setCarData(data);
      const originalModels = Array.from(new Set(data.map((car) => car.model)));
      setModelData(originalModels);
    }
  }, [selected]);

  function handleBrandSelection(brand) {
    selected.has(brand) ? selected.delete(brand) : selected.add(brand);
    setSelected(new Set(selected));
  }

  function handleBrandSearch(event) {
    setQuery(event.target.value.toLowerCase());
  }

  const filteredBrands = query
    ? brandData.filter((brand) => brand.toLowerCase().includes(query))
    : brandData;

  return (
    <Paper
      elevation={4}
      sx={{ minWidth: "190px", width: "50%", height: "190px" }}
    >
      <TextField
        id="outlinedsearch"
        label="Search Brand"
        type="search"
        onChange={handleBrandSearch}
      />
      <FormGroup row sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}>
        {filteredBrands.map((brand, index) => (
          <FormControlLabel
            key={index}
            sx={{ minWidth: "150px" }}
            control={
              <Checkbox
                onChange={() => handleBrandSelection(brand)}
                checked={selected.has(brand)}
              />
            }
            label={brand}
          />
        ))}
      </FormGroup>
    </Paper>
  );
}
