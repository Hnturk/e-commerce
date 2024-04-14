import React from "react";
import { render, screen } from "@testing-library/react";
import { CarContext, Provider } from "../../contexts/CarContext";

describe("CarContext", () => {

  const mockSetData = jest.fn();
  const mockSetCarData = jest.fn();
  const mockSetBrandData = jest.fn();
  const mockSetModelData = jest.fn();
  const mockSetCartProducts = jest.fn();
  const mockSetTotalPrice = jest.fn();
  const mockSetProduct = jest.fn();
  
  const valueToShare = {
    setData: mockSetData,
    setCarData: mockSetCarData,
    setBrandData: mockSetBrandData,
    setModelData: mockSetModelData,
    setCartProducts: mockSetCartProducts,
    setTotalPrice: mockSetTotalPrice,
    setProduct: mockSetProduct
  };
  
  test("renders children components", () => {
    render(
      <CarContext.Provider value={{valueToShare}}>
        <Provider>
          <div data-testid="child-component">Child Component</div>
        </Provider>
      </CarContext.Provider>
    );

    const childComponent = screen.getByTestId("child-component");
    expect(childComponent).toBeInTheDocument();
  });

});