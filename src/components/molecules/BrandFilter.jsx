import { useContext, useState, useEffect, useMemo } from "react";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CarContext from "../../contexts/CarContext.jsx";
import { v4 as uuidv4 } from "uuid";

export default function BrandFilter() {
  const { brandData, setCarData, data, setModelData, selected, setSelected } =
    useContext(CarContext);
  const [query, setQuery] = useState("");

  const filteredBrands = useMemo(() => {
    if (query) {
      return brandData
        ? Array.from(brandData).filter((brand) =>
            brand.toLowerCase().includes(query.toLowerCase())
          )
        : [];
    }
    return brandData ? Array.from(brandData) : [];
  }, [brandData, query]);

  useEffect(() => {
    filterData();
  }, [selected]);

  const filterData = () => {
    if (selected && selected.size > 0) {
      const filteredCarData = data.filter((car) => selected.has(car.brand));
      setCarData(filteredCarData);
      const filteredModels = Array.from(
        new Set(filteredCarData.map((car) => car.model))
      );
      setModelData(filteredModels);
    } else {
      setCarData(data);
      const originalModels = Array.from(new Set(data?.map((car) => car.model)));
      setModelData(originalModels);
    }
  };

  const handleBrandSelection = (brand) => {
    const updatedSelected = new Set(selected);
    updatedSelected.has(brand)
      ? updatedSelected.delete(brand)
      : updatedSelected.add(brand);
    setSelected(updatedSelected);
    filterData();
  };

  const handleBrandSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Paper
      elevation={4}
      data-testid="brand-filter"
      sx={{ minWidth: "190px", width: "50%", height: "190px" }}
    >
      <TextField
        id="outlinedsearch"
        label="Search Brand"
        type="search"
        onChange={handleBrandSearch}
      />
      <FormGroup row sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}>
        {filteredBrands.map((brand) => (
          <FormControlLabel
            key={uuidv4()}
            sx={{ minWidth: "150px" }}
            control={
              <Checkbox
                onChange={() => handleBrandSelection(brand)}
                checked={selected.has(brand)}
              />
            }
            value={brand}
            label={brand}
          />
        ))}
      </FormGroup>
    </Paper>
  );
}
