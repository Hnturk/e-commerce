import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "../../../../components/organisms/navbar/Navbar";
import CarContext from "../../../../contexts/CarContext";

describe("Navbar component", () => {

  const mockCarData = [
    { name: "Car 1", brand: "Brand 1", model: "Model 1" },
    { name: "Car 2", brand: "Brand 2", model: "Model 2" },] 

  const setCarData = jest.fn();
  const setAnchorEl = jest.fn();
  test("renders logo", () => {
    render(
      <CarContext.Provider value={{ carData: mockCarData, setCarData, setAnchorEl }}>
        <Navbar />
      </CarContext.Provider>
    );
    const logoElement = screen.getByText("Eteration");
    expect(logoElement).toBeInTheDocument();
  });

  test("renders search bar", () => {
    render(
      <CarContext.Provider value={{ carData: mockCarData, setCarData, setAnchorEl }}>
        <Navbar />
      </CarContext.Provider>
    );
    const searchBarElement = screen.getByTestId("search-bar");
    expect(searchBarElement).toBeInTheDocument();
  });

  test("renders account icon", () => {
        render(
      <CarContext.Provider value={{ carData: mockCarData, setCarData, setAnchorEl }}>
        <Navbar />
      </CarContext.Provider>
    );
    const accountIconElement = screen.getByTestId("AccountCircleIcon");
    expect(accountIconElement).toBeInTheDocument();
  });

  test("renders wallet icon", () => {
        render(
      <CarContext.Provider value={{ carData: mockCarData, setCarData, setAnchorEl }}>
        <Navbar />
      </CarContext.Provider>
    );
    const walletIconElement = screen.getByTestId("wallet-icon");
    expect(walletIconElement).toBeInTheDocument();
  });
});