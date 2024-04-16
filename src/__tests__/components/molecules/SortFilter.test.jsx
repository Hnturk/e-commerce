import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SortFilter from "../../../components/molecules/SortFilter";
import CarContext from "../../../contexts/CarContext";

describe("SortFilter component", () => {
  test("renders SortFilter component correctly", () => {
    render(
      <CarContext.Provider value={{ carData: [], setCarData: jest.fn() }}>
        <SortFilter />
      </CarContext.Provider>
    );

    const sortFilterComponent = screen.getByTestId("sort-filter");
    expect(sortFilterComponent).toBeInTheDocument();
  });

  test("changes selectedBrands value and sorts car data correctly", () => {
    const carData = [
      { createdAt: "2022-01-01", price: "10000" },
      { createdAt: "2021-01-01", price: "20000" },
      { createdAt: "2023-01-01", price: "15000" },
    ];
    const setCarDataMock = jest.fn();

    render(
      <CarContext.Provider value={{ carData, setCarData: setCarDataMock }}>
        <SortFilter />
      </CarContext.Provider>
    );

    const radioButtons = screen.getAllByRole("radio");

    fireEvent.click(radioButtons[0]);

    expect(setCarDataMock).toHaveBeenCalledWith([
      { createdAt: "2021-01-01", price: "20000" },
      { createdAt: "2022-01-01", price: "10000" },
      { createdAt: "2023-01-01", price: "15000" },
    ]);

    fireEvent.click(radioButtons[1]);

    expect(setCarDataMock).toHaveBeenCalledWith([
      { createdAt: "2023-01-01", price: "15000" },
      { createdAt: "2022-01-01", price: "10000" },
      { createdAt: "2021-01-01", price: "20000" },
    ]);

    fireEvent.click(radioButtons[2]);

    expect(setCarDataMock).toHaveBeenCalledWith([
      { createdAt: "2021-01-01", price: "20000" },
      { createdAt: "2023-01-01", price: "15000" },
      { createdAt: "2022-01-01", price: "10000" },
    ]);

    fireEvent.click(radioButtons[3]);

    expect(setCarDataMock).toHaveBeenCalledWith([
      { createdAt: "2022-01-01", price: "10000" },
      { createdAt: "2023-01-01", price: "15000" },
      { createdAt: "2021-01-01", price: "20000" },
    ]);
  });
});
