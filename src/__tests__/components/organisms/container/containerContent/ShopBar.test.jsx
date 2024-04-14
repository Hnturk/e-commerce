import React from "react";
import { render, screen } from "@testing-library/react";
import ShopBar from "../../../../../components/organisms/container/containerContent/ShopBar";
import CarContext from "../../../../../contexts/CarContext";
describe("ShopBar component", () => {

  const mockCartProducts = [{ id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1", count: 2}, 
                            { id: 2, name: "Car 2", brand: "Brand 2", model: "Model 2", count: 1}];
  test("renders ShoppingCart component", () => {
    render(
      <CarContext.Provider value={{ cartProducts: mockCartProducts }}>
        <ShopBar />
      </CarContext.Provider>
    );
    const shoppingCartComponent = screen.getByTestId("shopping-cart");
    expect(shoppingCartComponent).toBeInTheDocument();
  });

  test("renders Checkout component", () => {
    render(
      <CarContext.Provider value={{ cartProducts: mockCartProducts }}>
        <ShopBar />
      </CarContext.Provider>
    );
    const checkoutComponent = screen.getByTestId("checkout");
    expect(checkoutComponent).toBeInTheDocument();
  });
});