import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../../../components/atoms/SearchBar";
import CarContext from "../../../contexts/CarContext";

describe("SearchBar component", () => {
  test("renders search input", () => {
    render(
      <CarContext.Provider value={{ setCarData: jest.fn(), data: [] }}>
        <SearchBar />
      </CarContext.Provider>
    );
    const searchInput = screen.getByPlaceholderText("Search");
    expect(searchInput).toBeInTheDocument();
  });

  test("updates search value on input change", () => {
    render(
      <CarContext.Provider value={{ setCarData: jest.fn(), data: [] }}>
        <SearchBar />
      </CarContext.Provider>
    );
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });

  test("filters car data based on search value", () => {
    const mockCarData = [
      { name: "Car 1" },
      { name: "Car 2" },
      { name: "Car 3" },
    ];
    const setCarDataMock = jest.fn();
    render(
      <CarContext.Provider
        value={{ setCarData: setCarDataMock, data: mockCarData }}
      >
        <SearchBar />
      </CarContext.Provider>
    );
    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "car 2" } });
    expect(setCarDataMock).toHaveBeenCalledWith([{ name: "Car 2" }]);
  });
});
