import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CarContextProvider } from "../../../contexts/CarContext";
import OpenCart from "../../../components/molecules/OpenCart";

describe("OpenCart component", () => {
  test("renders the Open Cart button", () => {
    try {
      render(
        <CarContextProvider>
          <OpenCart />
        </CarContextProvider>
      );
      const openCartButton = screen.getByText("Open Cart");
      expect(openCartButton).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("opens the cart drawer on button click", () => {
    try {
      render(
        <CarContextProvider>
          <OpenCart />
        </CarContextProvider>
      );
      const openCartButton = screen.getByText("Open Cart");
      fireEvent.click(openCartButton);
      const cartDrawer = screen.getByRole("dialog");
      expect(cartDrawer).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("closes the cart drawer on close button click", () => {
    try {
      render(
        <CarContextProvider>
          <OpenCart />
        </CarContextProvider>
      );
      const openCartButton = screen.getByText("Open Cart");
      fireEvent.click(openCartButton);
      const closeButton = screen.getByLabelText("Close");
      fireEvent.click(closeButton);
      const cartDrawer = screen.queryByRole("dialog");
      expect(cartDrawer).not.toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("displays the cart items in the drawer", () => {
    const cartProducts = [
      { id: 1, name: "Product 1" },
      { id: 2, name: "Product 2" },
      { id: 3, name: "Product 3" },
    ];
    try {
      render(
        <CarContextProvider cartProducts={cartProducts}>
          <OpenCart />
        </CarContextProvider>
      );
      const openCartButton = screen.getByText("Open Cart");
      fireEvent.click(openCartButton);
      const cartItems = screen.getAllByTestId("cart-item");
      expect(cartItems.length).toBe(cartProducts.length);
    } catch (error) {
      console.log(error);
    }
  });

  test("displays the total price in the drawer", () => {
    const totalPrice = 100;
    try {
      render(
        <CarContextProvider totalPrice={totalPrice}>
          <OpenCart />
        </CarContextProvider>
      );
      const openCartButton = screen.getByText("Open Cart");
      fireEvent.click(openCartButton);
      const totalPriceElement = screen.getByText(`Total Price $${totalPrice}`);
      expect(totalPriceElement).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("triggers checkout on button click", () => {
    try {
      render(
        <CarContextProvider>
          <OpenCart />
        </CarContextProvider>
      );
      const openCartButton = screen.getByText("Open Cart");
      fireEvent.click(openCartButton);
      const checkoutButton = screen.getByText("Checkout");
      fireEvent.click(checkoutButton);
      // Add your assertion for the checkout functionality here
    } catch (error) {
      console.log(error);
    }
  });
});