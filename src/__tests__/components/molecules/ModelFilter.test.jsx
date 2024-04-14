import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModelFilter from "../../../components/molecules/ModelFilter";
import CarContext from "../../../contexts/CarContext";

describe("ModelFilter component", () => {
  const setCarData = jest.fn();
  const data = [
    {
      name: "lamborgini",
      model: "sedan",
      brand: "lamborgini",
      description: "description",
      price: 1000000,
      image: "image",
    },
    {
      name: "lamborgini",
      model: "suv",
      brand: "lamborgini",
      description: "description",
      price: 1000000,
      image: "image",
    },
  ];
  const modelData = ["sedan", "suv", "hatchback"];
  const selected = new Set();
  const selectedModels = new Set();
  test("renders search input", () => {
    render(
      <CarContext.Provider value={{ setCarData, data, modelData, selected, selectedModels }}>
        <ModelFilter />
      </CarContext.Provider>
    );
    const searchInput = screen.getByLabelText("Search Model");
    expect(searchInput).toBeInTheDocument();
  });

  test("filters models based on search input", () => {
    render(
      <CarContext.Provider value={{ setCarData, data, modelData, selected, selectedModels }}>
        <ModelFilter />
      </CarContext.Provider>
    );
    const searchInput = screen.getByLabelText("Search Model");
    fireEvent.change(searchInput, { target: { value: "sedan" } });
    const modelCheckboxes = screen.getAllByTestId("model-checkbox");
    expect(modelCheckboxes.length).toBe(1);
  });
  // TODO TEST FAİL
  test("updates selected models when checkboxes are clicked", () => {
    render(
      <CarContext.Provider
        value={{ setCarData, data, modelData, selected, selectedModels }}
      >
        <ModelFilter />
      </CarContext.Provider>
    );
  
    const modelCheckbox = screen.getAllByTestId("model-checkbox");
    fireEvent.click(modelCheckbox[0]);
  
    expect(setCarData).toHaveBeenCalledTimes(2);
    expect(selectedModels.has("sedan")).toBe(true);
  });
});
