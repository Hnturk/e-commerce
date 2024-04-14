import React from "react";
import { render, screen } from "@testing-library/react";
import { CarContext } from "../../../../../contexts/CarContext";
import ProductDetail from "../../../../../components/organisms/container/containerProduct/ProductDetail";

describe("ProductDetail component", () => {
  const mockCar = {
    id: 1,
    name: "Car 1",
    brand: "Brand 1",
    model: "Model 1",
    description: "Description 1",
    price: 100,
    image: "image1.jpg",
  };

  const mockCartProducts = [
    { id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1", count: 2 },
    { id: 2, name: "Car 2", brand: "Brand 2", model: "Model 2", count: 1 },
  ];
  const mockAddToCart = jest.fn();
  test("renders product details correctly", () => {
    render(
      <CarContext.Provider value={{ cartProducts: mockCartProducts, addToCart: mockAddToCart }}>
        <ProductDetail car={mockCar} />
      </CarContext.Provider>
    );

    const productName = screen.getByText("Car 1");
    const productPrice = screen.getByText("100");
    const productDescription = screen.getByText("Description 1");

    expect(productName).toBeInTheDocument();
    expect(productPrice).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
  });

  test("renders 'Add to cart' button when car is not in cart", () => {
    render(
      <CarContext.Provider value={{ cartProducts: mockCartProducts, addToCart: mockAddToCart }}>
        <ProductDetail car={mockCar} />
      </CarContext.Provider>
    );

    const addToCartButton = screen.getByTestId("add-to-cart");
    expect(addToCartButton).toBeInTheDocument();
  });

  test("renders 'Added to cart' button when car is already in cart", () => {
    render(
      <CarContext.Provider
        value={{
          cartProducts: [...mockCartProducts, { id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1", count: 1 }],
          addToCart: mockAddToCart
        }}
      >
        <ProductDetail car={mockCar} />
      </CarContext.Provider>
    );

    const addedToCartButton = screen.getByText("Added to cart");

    expect(addedToCartButton).toBeInTheDocument();
  });
});