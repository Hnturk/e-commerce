import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OpenCart from "../../../components/molecules/OpenCart";
import CarContext from "../../../contexts/CarContext";

describe("OpenCart component", () => {
  const totalPrice = 0;
  const cartProducts = [];
  test("renders Open Cart button", () => {
    render(
      <CarContext.Provider value={{ totalPrice, cartProducts }}>
        <OpenCart />
      </CarContext.Provider>
    );
    const openCartButton = screen.getByRole("button", { name: /open cart/i });
    expect(openCartButton).toBeInTheDocument();
  });

  test("opens cart drawer when Open Cart button is clicked", () => {
    render(
      <CarContext.Provider value={{ totalPrice, cartProducts }}>
        <OpenCart />
      </CarContext.Provider>
    );
    const openCartButton = screen.getByRole("button", { name: /open cart/i });
    fireEvent.click(openCartButton);
    const cartDrawer = screen.getByTestId("cart-drawer");
    expect(cartDrawer).toBeInTheDocument();
  });

  test("displays total price correctly", () => {
    const totalPrice = 50;
    const cartProducts = [];
    render(
      <CarContext.Provider value={{ totalPrice, cartProducts }}>
        <OpenCart />
      </CarContext.Provider>
    );
    const openCartButton = screen.getByRole("button", { name: /open cart/i });
    fireEvent.click(openCartButton);
    const totalPriceElement = screen.getByTestId("open-cart-total-price");
    expect(totalPriceElement).toBeInTheDocument();
  });
});
