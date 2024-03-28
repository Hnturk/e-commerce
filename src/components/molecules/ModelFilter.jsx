import { useContext, useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import CarContext from "../../contexts/CarContext";

function ModelFilter() {
  const { modelData, setCarData } = useContext(CarContext);
  const [search, setSearch] = useState("");
  const [selectedModels, setSelectedModels] = useState([]);

  const filteredModels = useMemo(
    () =>
      search
        ? modelData.filter((model) => model.toLowerCase().includes(search))
        : modelData,
    [search, modelData]
  );

  function handleBrandSelection(brand) {
    setSelectedBrands((prevSelectedBrands) =>
      prevSelectedBrands.includes(brand)
        ? prevSelectedBrands.filter((item) => item !== brand)
        : [...prevSelectedBrands, brand]
    );
  }  

  return (
    <Paper elevation={4} sx={{ minWidth: "190px", width: "50%", height: "190px" }}>
      <TextField
        id="outlined-search"
        label="Search Model"
        type="search"
        onChange={handleSearch}
      />
      <FormGroup row sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}>
        {filteredModels.map((model, index) => (
          <FormControlLabel
            key={index}
            sx={{ minWidth: "150px" }}
            control={
              <Checkbox onChange={() => handleSelection(model)} checked={selectedModels.includes(model)} />
            }
            label={model}
          />
        ))}
      </FormGroup>
    </Paper>
  );
}

export default ModelFilter;





