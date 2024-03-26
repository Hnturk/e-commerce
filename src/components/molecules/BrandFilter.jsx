import { useContext, useState, React } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FilterSearch from "../atoms/FilterSearch";
import Paper from "@mui/material/Paper";
import CarContext from "../../contexts/CarContext";

function BrandFilter() {
  const { brandData, setBrandData } = useContext(CarContext);
  const [selectedBrands, setSelectedBrands] = useState([])
  const [Search, setSearch] = useState("")

  function handleChange(brand) {
    setSelectedBrands( (prev) => [...prev, brand])

  }


  function handleSearch(e) {
    const value = e.target.value.toLowerCase();
    setSearch(value);

    if (value === "") {
      setFilteredBrands(brandData);
    } else {
      const filtered = brandData.filter((item) => item.toLowerCase().includes(value));
      setFilteredBrands(filtered);
    }
  };

  const uniqueBrands = [...new Set(brandData.map((car) => car.brand))];
  const renderedBrands = uniqueBrands.map((brand) => {
    return (
      <FormControlLabel
        sx={{ minWidth: "150px" }}
        control={<Checkbox />}
        label={brand}
        onChange={handleChange}
      />
    );
  });

  return (
    <Paper
      elevation={4}
      sx={{ minWidth: "190px", width: "50%", height: "190px" }}
    >
      <FilterSearch label="Search Brand" onChange={handleSearch}/>
      <FormGroup
        row={true}
        sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}
      >
        {renderedBrands}
      </FormGroup>
    </Paper>
  );
}

export default BrandFilter;
