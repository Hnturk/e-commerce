import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../pages/ProductCard";
import CarContext from "../../contexts/CarContext";

describe("ProductCard", () => {

  const mockSetCarData = jest.fn();
  const mockCartProducts = [{ name: "Car 1", price: 100, count: 2, id: 1},
                            { name: "Car 2", price: 200, count: 2, id: 2}];
  const mockCar = { image: "image1.jpg", name: "Car 1", price: 100, description: "Description 1", id: 1};

  test("renders Navbar component", () => {
    render(
    <CarContext.Provider value={{setCarData: mockSetCarData, cartProducts: mockCartProducts}}>
      <ProductCard car={mockCar}/>
    </CarContext.Provider>
  );
    const navbarComponent = screen.getByTestId("navbar");
    expect(navbarComponent).toBeInTheDocument();
  });

  test("renders ProductContainer component", () => {
    render(
      <CarContext.Provider value={{setCarData: mockSetCarData, cartProducts: mockCartProducts}}>
        <ProductCard car={mockCar} />
      </CarContext.Provider>
    );
    const productContainerComponent = screen.getByTestId("product-container");
    expect(productContainerComponent).toBeInTheDocument();
  });
});