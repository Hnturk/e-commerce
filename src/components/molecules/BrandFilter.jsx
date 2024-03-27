import { useContext, useState, React, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import CarContext from "../../contexts/CarContext";

function BrandFilter() {
  const { brandData, setCarData } = useContext(CarContext);
  const uniqueBrands = [...new Set(brandData.map((car) => car.brand))];
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [search, setSearch] = useState("");

  function handleSelection(brand) {
    setSelectedBrands((prev) => 
    prev.includes(brand) ? prev.filter(item => item !== brand)
    : [...prev, brand])
    const filteredData = uniqueBrands.filter((item) => item.toLowerCase().includes(selectedBrands));
    setCarData(filteredData);
  }

  function handleSearch(e) {
    const brand = e.target.value.toLowerCase();
    setSearch(brand);

    if (search === "") {
      setFilteredBrands(uniqueBrands);
    } else {
      const filteredData = uniqueBrands.filter((item) =>
        item.toLowerCase().includes(search));
      setFilteredBrands(filteredData);

    }
  }

  useEffect(() => {
    setFilteredBrands(uniqueBrands);
  }, [brandData]);

  return (
    <Paper
      elevation={4}
      sx={{ minWidth: "190px", width: "50%", height: "190px" }}
    >
      <TextField
        id="outlined-search"
        label="Search Brand"
        type="search"
        onChange={handleSearch}
      />
      <FormGroup
        row={true}
        sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}
      >
        {filteredBrands.map((brand, index) => {
          return (
            <FormControlLabel
              key={index}
              sx={{ minWidth: "150px"}}
              control={<Checkbox 
              onChange={() => handleSelection(brand)}
              checked={selectedBrands.includes(brand)}/>}
              label={brand}      
            />
          );
        })}
      </FormGroup>
    </Paper>
  );
}

export default BrandFilter;
