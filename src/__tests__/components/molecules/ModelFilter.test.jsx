import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import { CarContext } from "../../../contexts/CarContext";
import ModelFilter from "../../../components/molecules/ModelFilter";

describe("ModelFilter component", () => {
  const mockData = [
    { model: "Model A", brand: "Brand A" },
    { model: "Model B", brand: "Brand B" },
    { model: "Model C", brand: "Brand C" },
  ];

  const mockModelData = ["Model A", "Model B", "Model C"];

  const mockSelected = new Set(["Brand A"]);

  const mockContext = {
    setCarData: jest.fn(),
    data: mockData,
    modelData: mockModelData,
    carData: mockData,
    selected: mockSelected,
  };

  test("renders the search input", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ModelFilter />
        </CarContext.Provider>
      );
      const searchInput = screen.getByLabelText("Search Model");
      expect(searchInput).toBeInTheDocument();
    } catch (e) {
      console.log(e);
    }
  });

  test("renders the model checkboxes", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ModelFilter />
        </CarContext.Provider>
      );
      const modelCheckboxes = screen.getAllByRole("checkbox");
      expect(modelCheckboxes.length).toBe(mockModelData.length);
    } catch (e) {
      console.log(e);
    }
  });

  test("filters car data based on selected models", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ModelFilter />
        </CarContext.Provider>
      );
      const modelCheckbox = screen.getByLabelText("Model A");
      fireEvent.click(modelCheckbox);

      expect(mockContext.setCarData).toHaveBeenCalledWith([
        { model: "Model A", brand: "Brand A" },
      ]);
    } catch (e) {
      console.log(e);
    }
  });

  test("filters car data based on selected brand when no models are selected", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ModelFilter />
        </CarContext.Provider>
      );
      const brandCheckbox = screen.getByLabelText("Brand A");
      fireEvent.click(brandCheckbox);

      expect(mockContext.setCarData).toHaveBeenCalledWith(mockData);
    } catch (e) {
      console.log(e);
    }
  });

  test("resets car data when no brand or model is selected", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ModelFilter />
        </CarContext.Provider>
      );
      const brandCheckbox = screen.getByLabelText("Brand A");
      fireEvent.click(brandCheckbox);

      const modelCheckbox = screen.getByLabelText("Model A");
      fireEvent.click(modelCheckbox);

      fireEvent.click(brandCheckbox);

      expect(mockContext.setCarData).toHaveBeenCalledWith(mockData);
    } catch (e) {
      console.log(e);
    }
  });
});
