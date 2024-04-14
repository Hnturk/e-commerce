import React from "react";
import { render, screen } from "@testing-library/react";
import FilterBar from "../../../../../components/organisms/container/containerContent/FilterBar";
import CarContext from "../../../../../contexts/CarContext";

describe("FilterBar component", () => {
  const mockData = [
    { name: "Car 1", brand: "Brand 1", model: "Model 1" },
    { name: "Car 2", brand: "Brand 2", model: "Model 2" },
    { name: "Car 3", brand: "Brand 3", model: "Model 3" },
  ];

  const mockCarData = [
    { name: "Car 1", brand: "Brand 1", model: "Model 1" },
    { name: "Car 2", brand: "Brand 2", model: "Model 2" },
    { name: "Car 3", brand: "Brand 3", model: "Model 3" },
  ];

  const setCarData = jest.fn();
  const setModelData = jest.fn();

  const mockSelected = new Set(["brand1", "brand2", "brand3"]);

  test("renders SortFilter component", () => {
    render(
      <CarContext.Provider
        value={{
          carData: mockCarData,
          setCarData,
          setModelData,
          selected: mockSelected,
          data: mockData,
        }}
      >
        <FilterBar />
      </CarContext.Provider>
    );
    const sortFilterComponent = screen.getByTestId("sort-filter");
    expect(sortFilterComponent).toBeInTheDocument();
  });

  test("renders BrandFilter component", () => {
    render(
      <CarContext.Provider
        value={{
          carData: mockCarData,
          setCarData,
          setModelData,
          selected: mockSelected,
          data: mockData,
        }}
      >
        <FilterBar />
      </CarContext.Provider>
    );
    const brandFilterComponent = screen.getByTestId("brand-filter");
    expect(brandFilterComponent).toBeInTheDocument();
  });

  test("renders ModelFilter component", () => {
    render(
      <CarContext.Provider
        value={{
          carData: mockCarData,
          setCarData,
          setModelData,
          selected: mockSelected,
          data: mockData,
        }}
      >
        <FilterBar />
      </CarContext.Provider>
    );
    const modelFilterComponent = screen.getByTestId("model-filter");
    expect(modelFilterComponent).toBeInTheDocument();
  });

  test("renders FilterBar component correctly", () => {
    render(
      <CarContext.Provider
        value={{
          carData: mockCarData,
          setCarData,
          setModelData,
          selected: mockSelected,
          data: mockData,
        }}
      >
        <FilterBar />
      </CarContext.Provider>
    );
    const filterBarComponent = screen.getByTestId("filter-bar");
    expect(filterBarComponent).toBeInTheDocument();
  });
});
