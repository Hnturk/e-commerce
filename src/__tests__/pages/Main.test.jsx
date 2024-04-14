import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "../../pages/Main";
import CarContext from "../../contexts/CarContext";

describe("Main", () => {
  const setCarData = jest.fn();
  const setModelData = jest.fn();
  
  const mockData = [ {name: "Car 1", price: 100, count: 2, id: 1}, {name: "Car 2", price: 200, count: 2, id: 2}];
  const mockSelected = new Set(["brand1", "brand2", "brand3"]); 
  const mockCartProducts = [
    { name: "Car 1", price: 100, count: 2, id: 1 },
    { name: "Car 2", price: 200, count: 2, id: 2 },
  ];
  test("renders Navbar component", () => {
    render(
      <CarContext.Provider
        value={{ setCarData, cartProducts: mockCartProducts, setModelData, selected: mockSelected, data: mockData }}
      >
        <Main />
      </CarContext.Provider>
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });

  test("renders Container component", () => {
    render(
      <CarContext.Provider
        value={{ setCarData, cartProducts: mockCartProducts, setModelData, selected: mockSelected, data: mockData }}
      >
        <Main />
      </CarContext.Provider>
    );
    const container = screen.getByTestId("container");
    expect(container).toBeInTheDocument();
  });
});
