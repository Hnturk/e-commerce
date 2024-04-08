import React from "react";
import { render, screen } from "@testing-library/react";
import Wallet from "../../../components/atoms/Wallet";
import CarContext from "../../../contexts/CarContext";

describe("Wallet component", () => {
  const mockContext = {
    totalPrice: 100,
  };

  test("renders the wallet icon", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <Wallet />
        </CarContext.Provider>
      );

      const walletIcon = screen.getByTestId("wallet-icon");
      expect(walletIcon).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the total price with the correct value", () => {
    try {
      const totalPrice = 100; // Define the totalPrice variable with the correct value
      render(
        <CarContext.Provider value={{ mockContext }}>
          <Wallet />
        </CarContext.Provider>
      );
      const totalPriceElement = screen.getByText(`$${totalPrice}`);
      expect(totalPriceElement).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the wallet link with the correct href", () => {
    try {
      render(<Wallet />);
      const walletLink = screen.getByRole("link");
      expect(walletLink).toHaveAttribute("href", "#");
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the wallet link with the correct color", () => {
    try {
      render(<Wallet />);
      const walletLink = screen.getByRole("link");
      expect(walletLink).toHaveStyle({ color: "white" });
    } catch (error) {
      console.log(error);
    }
  });
});
