import React from "react";
import { render, screen } from "@testing-library/react";
import { CarContext } from "../../../contexts/CarContext";
import Checkout from "../../../components/molecules/Checkout";

describe("Checkout component", () => {
  const mockTotalPrice = 10000;

  const mockContext = {
    totalPrice: mockTotalPrice,
  };

  test("renders the total price", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <Checkout />
        </CarContext.Provider>
      );

      const totalPrice = screen.getByText(`Total Price $${mockTotalPrice}`);
      expect(totalPrice).toBeInTheDocument();
    } catch (error) {
      console.log(error);

    }
  });

  test("renders the checkout button", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <Checkout />
        </CarContext.Provider>
      );

      const checkoutButton = screen.getByText("Checkout");
      expect(checkoutButton).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});



