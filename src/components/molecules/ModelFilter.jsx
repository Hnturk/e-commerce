import { useContext, useState, useEffect } from "react";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";
import CarContext from "../../contexts/CarContext";

function ModelFilter() {
  const { modelData, selectedModels, setSelectedModels } =
    useContext(CarContext);
  const [query, setQuery] = useState("");

  function handleModelSelection(model) {
    selectedModels.has(model)
      ? selectedModels.delete(model)
      : selectedModels.add(model);
    setSelectedModels(new Set(selectedModels));
  }

  function handleModelSearch(event) {
    setQuery(event.target.value.toLowerCase().trim());
  }

  const filteredModels = query
    ? modelData.filter((model) => model.toLowerCase().includes(query))
    : modelData;

  return (
    <Paper
      data-testid="model-filter"
      elevation={4}
      sx={{ minWidth: "190px", width: "50%", height: "190px" }}
    >
      <TextField
        id="outlined-search"
        label="Search Model"
        type="search"
        onChange={handleModelSearch}
      />
      <FormGroup row sx={{ marginLeft: 2, overflowY: "auto", maxHeight: 120 }}>
        {filteredModels &&
          filteredModels.map((model) => (
            <FormControlLabel
              key={uuidv4()}
              sx={{ minWidth: "150px" }}
              value={model}
              control={
                <Checkbox
                  data-testid="model-checkbox"
                  onChange={() => handleModelSelection(model)}
                  checked={selectedModels.has(model)}
                />
              }
              label={model}
            />
          ))}
      </FormGroup>
    </Paper>
  );
}

export default ModelFilter;
