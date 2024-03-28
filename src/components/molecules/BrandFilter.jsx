import { useContext, useState, useEffect, useMemo } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CarContext from "../../contexts/CarContext";

export default function BrandFilter() {
  const { brandData } = useContext(CarContext);
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filteredBrands = useMemo(
    () =>
      search
        ? brandData.filter((brand) => brand.toLowerCase().includes(search))
        : brandData,
    [search, brandData]
  );

  function handleBrandSelection(brand) {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((item) => item !== brand)
        : [...prevSelectedBrands, brand]
    );
  }

  function handleBrandSearch(event) {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <Paper elevation={4} sx={{ minWidth: "190px", width: "50%", height: "190px" }}>
      <TextField
        id="outlined-search"
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
                checked={selectedBrands.includes(brand)}
              />
            }
            label={brand}
          />
        ))}
      </FormGroup>
    </Paper>
  );
}


