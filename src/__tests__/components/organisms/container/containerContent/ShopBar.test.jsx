import React from "react";
import { render, screen } from "@testing-library/react";
import ShopBar from "../../../../../components/organisms/container/containerContent/ShopBar";

describe("ShopBar component", () => {
  test("renders the ShoppingCart component", () => {
    try {
      render(<ShopBar />);
      const shoppingCart = screen.getByTestId("shopping-cart");
      expect(shoppingCart).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the Checkout component", () => {
    try {
      render(<ShopBar />);
      const checkout = screen.getByTestId("checkout");
      expect(checkout).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});