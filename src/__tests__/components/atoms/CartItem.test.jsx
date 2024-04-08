import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CarContextProvider } from "../../../contexts/CarContext";
import CartItem from "../../../components/atoms/CartItem";

describe("CartItem component", () => {
  test("renders the item name and price", () => {
    try {
      const item = { id: 1, name: "Product 1", price: 10, count: 1 };
      render(
        <CarContextProvider>
          <CartItem item={item} />
        </CarContextProvider>
      );
      const itemName = screen.getByText("Product 1");
      const itemPrice = screen.getByText("10");
      expect(itemName).toBeInTheDocument();
      expect(itemPrice).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("increases the item count on button click", () => {
    try {
      const item = { id: 1, name: "Product 1", price: 10, count: 1 };
      render(
        <CarContextProvider>
          <CartItem item={item} />
        </CarContextProvider>
      );
      const increaseButton = screen.getByRole("button", {
        name: /add circle outline rounded icon/i,
      });
      fireEvent.click(increaseButton);
      const itemCount = screen.getByText("2");
      expect(itemCount).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("decreases the item count on button click", () => {
    try {
      const item = { id: 1, name: "Product 1", price: 10, count: 2 };
      render(
        <CarContextProvider>
          <CartItem item={item} />
        </CarContextProvider>
      );
      const decreaseButton = screen.getByRole("button", {
        name: /remove circle outline rounded icon/i,
      });
      fireEvent.click(decreaseButton);
      const itemCount = screen.getByText("1");
      expect(itemCount).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("disables decrease button when item count is 0", () => {
    try {
      const item = { id: 1, name: "Product 1", price: 10, count: 0 };
      render(
        <CarContextProvider>
          <CartItem item={item} />
        </CarContextProvider>
      );
      const decreaseButton = screen.getByRole("button", {
        name: /remove circle outline rounded icon/i,
      });
      expect(decreaseButton).toBeDisabled();
    } catch (error) {
      console.log(error);
    }
  });
});