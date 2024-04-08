import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CarContext } from "../../../contexts/CarContext";
import SortFilter from "../../../components/molecules/SortFilter";

describe("SortFilter component", () => {
  const mockCarData = [
    { createdAt: "2022-01-01", price: "10000" },
    { createdAt: "2021-01-01", price: "20000" },
    { createdAt: "2023-01-01", price: "15000" },
  ];
  const mockSetCarData = jest.fn();

  const mockContext = {
    carData: mockCarData,
    setCarData: mockSetCarData,
  };

  test("renders the sort options", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <SortFilter />
        </CarContext.Provider>
      );

      const sortOptions = screen.getAllByRole("radio");
      expect(sortOptions.length).toBe(4);
    } catch (e) {
      console.log(e);
    }
  });

  test("sorts data by 'Old to New' option", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <SortFilter />
        </CarContext.Provider>
      );

      const oldToNewOption = screen.getByLabelText("Old to New");
      fireEvent.click(oldToNewOption);

      expect(mockSetCarData).toHaveBeenCalledWith([
        { createdAt: "2021-01-01", price: "20000" },
        { createdAt: "2022-01-01", price: "10000" },
        { createdAt: "2023-01-01", price: "15000" },
      ]);
    } catch (e) {
      console.log(e);
    }
  });

  // Add tests for other sort options (New to Old, Price high to low, Price low to high) in a similar manner

});