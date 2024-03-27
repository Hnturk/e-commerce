import {React, useState, useEffect, useContext} from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import CarContext from "../../contexts/CarContext";

function ModelFilter() {
  const { modelData, setCarData } = useContext(CarContext);
  const uniqueModels = [...new Set(modelData.map((car) => car.model))];
  const [filteredModels, setFilteredModels] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [search, setSearch] = useState("");

  function handleSelection(model) {
    setSelectedModels((prev) => 
    prev.includes(model) ? prev.filter(item => item !== model)
    : [...prev, model])
    const filteredData = uniqueModels.filter((item) => item.toLowerCase().includes(selectedModels));
    setCarData(filteredData);
  }

  function handleSearch(e) {
    const model = e.target.value.toLowerCase();
    setSearch(model);

    if (search === "") {
      setFilteredModels(uniqueModels);
    } else {
      const filteredData = uniqueModels.filter((item) =>
        item.toLowerCase().includes(search));
      setFilteredModels(filteredData);

    }
  }

  useEffect(() => {
    setFilteredModels(uniqueModels);
  }, [modelData]);

  return (
    <Paper
      elevation={4}
      sx={{ minWidth: "190px", width: "50%", height: "190px" }}
    >
      <TextField
        id="outlined-search"
        label="Search Model"
        type="search"
        onChange={handleSearch}
      />
      <FormGroup
        row={true}
        sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}
      >
        {filteredModels.map((model, index) => {
          return (
            <FormControlLabel
              key={index}
              sx={{ minWidth: "150px" }}
              control={
                <Checkbox
                  onChange={() => handleSelection(model)}
                  checked={selectedModels.includes(model)}
                />
              }
              label={model}
            />
          );
        })}
      </FormGroup>
    </Paper>
  );
}

export default ModelFilter;
