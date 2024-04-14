import React from "react";
import { render, screen } from "@testing-library/react";
import Checkout from "../../../components/molecules/Checkout";
import CarContext from "../../../contexts/CarContext";

describe("Checkout component", () => {
  test("renders total price correctly", () => {
    const totalPrice = 100;
    render(
      <CarContext.Provider value={{ totalPrice }}>
        <Checkout />
      </CarContext.Provider>
    );
    const totalPriceElement = screen.getByTestId("checkout-text");
    expect(totalPriceElement).toBeInTheDocument();
  });

  test("renders checkout button", () => {
    const totalPrice = 100;
    render(
      <CarContext.Provider value={{ totalPrice }}>
        <Checkout />
      </CarContext.Provider>
    );
    const checkoutButton = screen.getByTestId("checkout-button");
    expect(checkoutButton).toBeInTheDocument();
  });
});
