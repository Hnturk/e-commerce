import { useContext, useState, useEffect, useMemo } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import CarContext from "../../contexts/CarContext";

function ModelFilter() {
  const { setCarData, data, modelData, carData, brandData, selected } = useContext(CarContext);
  const [query, setQuery] = useState("");
  const [selectedModels, setSelectedModels] = useState(new Set());

  useEffect(() => {
    if (selectedModels.size > 0) {
      const filteredCarData = carData.filter((car) => selectedModels.has(car.model));
      setCarData(filteredCarData);
    } else {
      if (selected.size !== 0 && selectedModels.size === 0) {
      const filteredCarData = data.filter((car) => selected.has(car.brand));
      setCarData(filteredCarData);
    } else if (selected.size === 0 && selectedModels.size === 0) {
      setCarData(data);
    }}
  }, [selectedModels]);

  function handleModelSelection(model) {
      selectedModels.has(model) ? selectedModels.delete(model) : selectedModels.add(model);
      setSelectedModels(new Set(selectedModels));
  }

  function handleModelSearch(event) {
      setQuery(event.target.value.toLowerCase());
  }

  
  const filteredModels = query ? modelData.filter((model) => model.toLowerCase().includes(query)) : modelData;
 
  
  return (
    <Paper elevation={4} sx={{ minWidth: "190px", width: "50%", height: "190px" }}>
      <TextField
        id="outlined-search"
        label="Search Model"
        type="search"
        onChange={handleModelSearch}
      />
      <FormGroup row sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}>
        {filteredModels.map((model, index) => (
          <FormControlLabel
            key={index}
            sx={{ minWidth: "150px" }}
            control={
              <Checkbox 
              onChange={() => handleModelSelection(model)} 
              checked={selectedModels.has(model)} />
            }
            label={model}
          />
        ))}
      </FormGroup>
    </Paper>
  );
}

export default ModelFilter;





