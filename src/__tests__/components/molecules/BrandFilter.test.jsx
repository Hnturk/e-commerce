import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BrandFilter from "../../../components/molecules/BrandFilter";
import CarContext from "../../../contexts/CarContext";

describe("BrandFilter component", () => {
  test("renders search input and brand checkboxes", () => {
    render(
      <CarContext.Provider
        value={{
          brandData: ["Brand 1", "Brand 2"],
          setCarData: jest.fn(),
          data: [],
          setModelData: jest.fn(),
          selected: new Set(),
          setSelected: jest.fn(),
        }}
      >
        <BrandFilter />
      </CarContext.Provider>
    );

    const searchInput = screen.getByLabelText("Search Brand");
    expect(searchInput).toBeInTheDocument();

    const brandCheckboxes = screen.getAllByRole("checkbox");
    expect(brandCheckboxes).toHaveLength(2);
  });

  test("filters brands based on search query", () => {
    render(
      <CarContext.Provider
        value={{
          brandData: ["Brand 1", "Brand 2"],
          setCarData: jest.fn(),
          data: [],
          setModelData: jest.fn(),
          selected: new Set(),
          setSelected: jest.fn(),
        }}
      >
        <BrandFilter />
      </CarContext.Provider>
    );

    const searchInput = screen.getByLabelText("Search Brand");
    fireEvent.change(searchInput, { target: { value: "Brand 1" } });

    const brandCheckboxes = screen.getAllByRole("checkbox");
    expect(brandCheckboxes).toHaveLength(1);
    expect(brandCheckboxes[0]).toHaveAttribute("value", "Brand 1");
  });

  test("updates selected brands and filters data when brand checkbox is clicked", () => {
    const setCarData = jest.fn();
    const setModelData = jest.fn();
    const setSelected = jest.fn();

    render(
      <CarContext.Provider
        value={{
          brandData: ["Brand 1", "Brand 2"],
          setCarData,
          data: [{ brand: "Brand 1", model: "Model 1" }],
          setModelData,
          selected: new Set(),
          setSelected,
        }}
      >
        <BrandFilter />
      </CarContext.Provider>
    );

    const brandCheckbox = screen.getByLabelText("Brand 1");
    fireEvent.click(brandCheckbox);

    expect(setSelected).toHaveBeenCalledWith(new Set(["Brand 1"]));
    expect(setCarData).toHaveBeenCalledWith([
      { brand: "Brand 1", model: "Model 1" },
    ]);
    expect(setModelData).toHaveBeenCalledWith(["Model 1"]);
  });
});
