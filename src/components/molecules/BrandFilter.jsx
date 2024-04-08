import { useContext, useState, useEffect, useMemo } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CarContext from "../../contexts/CarContext";

export default function BrandFilter() {
  const { brandData, setCarData, data, setModelData, selected, setSelected } = useContext(CarContext);
  const [query, setQuery] = useState("");

  const filteredBrands = useMemo(() => {
    if (query) {
      return Array.from(brandData).filter((car) => car.brand.toLowerCase().includes(query.toLowerCase()));
    }
    return Array.from(brandData);
  }, [brandData, query]);

  useEffect(() => {
    filterData();
  }, [selected, query]);

  const filterData = () => {
    if (selected.size > 0) {
      const filteredCarData = data.filter((car) => selected.has(car.brand));
      setCarData(filteredCarData);
      const filteredModels = Array.from(new Set(filteredCarData.map((car) => ({model: car.model, id: car.id}))));
      setModelData(filteredModels);
    } else {
      setCarData(data);
      const originalModels = Array.from(new Set(data.map((car) => ({model: car.model, id: car.id}))));
      setModelData(originalModels);
    }
  };

  const handleBrandSelection = (brand) => {
    const updatedSelected = new Set(selected);
    updatedSelected.has(brand) ? updatedSelected.delete(brand) : updatedSelected.add(brand);
    setSelected(updatedSelected);
    filterData();
  };

  const handleBrandSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Paper elevation={4} sx={{ minWidth: "190px", width: "50%", height: "190px" }}>
      <TextField id="outlinedsearch" label="Search Brand" type="search" onChange={handleBrandSearch} />
      <FormGroup row sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}>
        {filteredBrands.map((car) => (
          <FormControlLabel
            key={car.id}
            sx={{ minWidth: "150px" }}
            control={<Checkbox onChange={() => handleBrandSelection(car.brand)} checked={selected.has(car.brand)} />}
            label={car.brand}
          />
        ))}
      </FormGroup>
    </Paper>
  );
}
