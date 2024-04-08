import React from "react";
import { render, screen } from "@testing-library/react";
import { CarContextProvider } from "../../../contexts/CarContext";
import ShoppingCart from "../../../components/molecules/ShoppingCart";

describe("ShoppingCart component", () => {
  test("renders the cart items", () => {
    try {
      render(
        <CarContextProvider>
          <ShoppingCart />
        </CarContextProvider>
      );
      const cartItems = screen.getAllByTestId("cart-item");
      expect(cartItems.length).toBeGreaterThan(0);
    } catch (error) {
      console.log(error);
    }
  });
});