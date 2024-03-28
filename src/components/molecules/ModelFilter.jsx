import { useContext, useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import CarContext from "../../contexts/CarContext";

function ModelFilter() {
  const { modelData, setCarData } = useContext(CarContext);
  const uniqueModels = Array.from(new Set(modelData.map(({ model }) => model)));
  const [search, setSearch] = useState("");
  const [selectedModels, setSelectedModels] = useState([]);

  useEffect(() => {
    setSelectedModels([]);
  }, [modelData]);

  const filteredModels = search
    ? uniqueModels.filter((model) => model.toLowerCase().includes(search.toLowerCase()))
    : uniqueModels;

  const filteredData = modelData.filter((car) => selectedModels.includes(car.model));

  function handleSelection(model) {
    const selected = selectedModels.includes(model)
      ? selectedModels.filter((item) => item !== model)
      : [...selectedModels, model];
    setSelectedModels(selected);
    setCarData(filteredData.filter((car) => selected.includes(car.model)));
  }

  function handleSearch(e) {
    setSearch(e.target.value);
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





