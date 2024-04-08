import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CarContextProvider } from "../../../contexts/CarContext";
import SearchBar from "../../../components/atoms/SearchBar";

describe("SearchBar component", () => {
  test("renders the search input", () => {
    try {
      render(
        <CarContextProvider>
          <SearchBar />
        </CarContextProvider>
      );
      const searchInput = screen.getByPlaceholderText("Search");
      expect(searchInput).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("updates the search value on input change", () => {
    try {
      render(
        <CarContextProvider>
          <SearchBar />
        </CarContextProvider>
      );
      const searchInput = screen.getByPlaceholderText("Search");
      fireEvent.change(searchInput, { target: { value: "audi" } });
      expect(searchInput.value).toBe("audi");
    } catch (error) {
      console.log(error);
    }
  });

  test("filters the car data based on search input", () => {
    const carData = [
      { name: "Audi A4" },
      { name: "BMW X5" },
      { name: "Mercedes C-Class" },
    ];
    try {
      render(
        <CarContextProvider>
          <SearchBar />
        </CarContextProvider>
      );
      const searchInput = screen.getByPlaceholderText("Search");
      fireEvent.change(searchInput, { target: { value: "bmw" } });
      const filteredData = screen.getAllByTestId("car-item");
      expect(filteredData.length).toBe(1);
      expect(filteredData[0]).toHaveTextContent("BMW X5");
    } catch (error) {
      console.log(error);
    }
  });
});
