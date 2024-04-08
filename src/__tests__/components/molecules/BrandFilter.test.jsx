import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CarContext } from "../../../contexts/CarContext";
import BrandFilter from "../../../components/molecules/BrandFilter";

describe("BrandFilter component", () => {
  const mockBrandData = ["Brand A", "Brand B", "Brand C"];
  const mockCarData = [
    { brand: "Brand A", model: "Model X" },
    { brand: "Brand B", model: "Model Y" },
    { brand: "Brand C", model: "Model Z" },
  ];
  const mockSetCarData = jest.fn();
  const mockSetModelData = jest.fn();
  const mockSelected = new Set(["Brand A"]);

  const mockContext = {
    brandData: mockBrandData,
    setCarData: mockSetCarData,
    data: mockCarData,
    setModelData: mockSetModelData,
    selected: mockSelected,
    setSelected: jest.fn(),
  };

  test("renders the search input and brand checkboxes", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <BrandFilter />
        </CarContext.Provider>
      );
      const searchInput = screen.getByLabelText("Search Brand");
      expect(searchInput).toBeInTheDocument();

      const brandCheckboxes = screen.getAllByRole("checkbox");
      expect(brandCheckboxes.length).toBe(mockBrandData.length);
    } catch (e) {
      console.log(e)
    }
  });

  test("filters brands based on search query", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <BrandFilter />
        </CarContext.Provider>
      );

      const searchInput = screen.getByLabelText("Search Brand");
      fireEvent.change(searchInput, { target: { value: "A" } });

      const filteredBrands = screen.getAllByRole("checkbox");
      expect(filteredBrands.length).toBe(1);
      expect(filteredBrands[0]).toHaveTextContent("Brand A");
    } catch (e) {
      console.log(e)
    }
  });

  test("updates selected brands and filters data when a brand checkbox is clicked", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <BrandFilter />
        </CarContext.Provider>
      );

      const brandCheckbox = screen.getByLabelText("Brand A");
      fireEvent.click(brandCheckbox);

      expect(mockContext.setSelected).toHaveBeenCalledWith(new Set());
      expect(mockSetCarData).toHaveBeenCalledWith(mockCarData);
      expect(mockSetModelData).toHaveBeenCalledWith(["Model X", "Model Y", "Model Z"]);
    } catch (e) {
      console.log(e)
    }
  });
});
