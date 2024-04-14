import React from "react";
import { render, screen } from "@testing-library/react";
import Wallet from "../../../components/atoms/Wallet";
import CarContext from "../../../contexts/CarContext";

describe("Wallet component", () => {
  test("renders wallet icon", () => {
    render(
      <CarContext.Provider value={{ totalPrice: 100 }}>
        <Wallet />
      </CarContext.Provider>
    );
    const walletIcon = screen.getByTestId("wallet-icon");
    expect(walletIcon).toBeInTheDocument();
  });

  test("renders total price", () => {
    render(
      <CarContext.Provider value={{ totalPrice: 100 }}>
        <Wallet />
      </CarContext.Provider>
    );
    const totalPrice = screen.getByText("$100");
    expect(totalPrice).toBeInTheDocument();
  });
});
