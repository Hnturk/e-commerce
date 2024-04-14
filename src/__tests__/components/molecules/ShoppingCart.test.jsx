import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingCart from "../../../components/molecules/ShoppingCart";
import CarContext from "../../../contexts/CarContext";

describe("ShoppingCart component", () => {
  const cartProducts = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  test("renders cart items correctly", () => {
    render(
      <CarContext.Provider value={{ cartProducts }}>
        <ShoppingCart />
      </CarContext.Provider>
    );
  });
});
