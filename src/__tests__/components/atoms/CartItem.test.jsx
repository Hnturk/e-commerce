import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "../../../components/atoms/CartItem";
import CarContext from "../../../contexts/CarContext";

describe("CartItem component", () => {
  const mockCartProducts = [
    { id: 1, name: "Test Product", price: 10, count: 2 },
    { id: 2, name: "Test Product", price: 10, count: 2 },
  ];
  const mockCartItem = {
    id: 1,
    name: "Test Product",
    price: 10,
    count: 2,
  };

  const setCartProducts = jest.fn();
  const setTotalPrice = jest.fn();

  test("renders cart item with correct name and price", () => {
    render(
      <CarContext.Provider value={{}}>
        <CartItem item={mockCartItem} />
      </CarContext.Provider>
    );

    const itemName = screen.getByText(mockCartItem.name);
    const itemPrice = screen.getByText(mockCartItem.price);

    expect(itemName).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
  });
  test("calls handleIncrease when increase button is clicked", () => {
    render(
      <CarContext.Provider
        value={{
          setCartProducts,
          cartProducts: mockCartProducts,
          setTotalPrice,
        }}
      >
        <CartItem item={mockCartItem} />
      </CarContext.Provider>
    );

    const increaseButton = screen.getByTestId("increase-button");
    fireEvent.click(increaseButton);

    expect(setCartProducts).toHaveBeenCalledTimes(1);
    expect(setCartProducts).toHaveBeenCalledWith([
      { count: 3, id: 1, name: "Test Product", price: 10 },
      { count: 2, id: 2, name: "Test Product", price: 10 },
    ]);
  });
  test("calls handleDecrease when decrease button is clicked", () => {
    render(
      <CarContext.Provider
        value={{
          setCartProducts,
          cartProducts: mockCartProducts,
          setTotalPrice,
        }}
      >
        <CartItem item={mockCartItem} />
      </CarContext.Provider>
    );

    const decreaseButton = screen.getByTestId("decrease-button");
    fireEvent.click(decreaseButton);

    expect(setCartProducts).toHaveBeenCalledTimes(2);
    expect(setCartProducts).toHaveBeenCalledWith([
      { count: 1, id: 1, name: "Test Product", price: 10 },
      { count: 2, id: 2, name: "Test Product", price: 10 },
    ]);
  });
});
