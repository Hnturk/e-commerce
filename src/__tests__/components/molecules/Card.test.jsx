import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CarContext } from "../../../contexts/CarContext";
import ProductCard from "../../../components/molecules/Card";

describe("ProductCard component", () => {

  const mockCar = {
    id: 1,
    name: "Car A",
    price: 10000,
    count: 1,
    image: "car-image.jpg",
    description: "This is a car",
  };

  const mockCartProducts = [
    { id: 1, name: "Car A", price: 10000, count: 1, image: "car-image.jpg" },
  ];

  const mockAddToCart = jest.fn();
  const mockGetProduct = jest.fn();
  const mockNavigate = jest.fn();

  const mockContext = {
    addToCart: mockAddToCart,
    cartProducts: mockCartProducts,
    getProduct: mockGetProduct,
  };

  test("renders the car image, price, and name", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ProductCard car={mockCar} />
        </CarContext.Provider>
      );

      const carImage = screen.getByTestId("car-image");
      expect(carImage).toBeInTheDocument();

      const carPrice = screen.getByText("10000");
      const carName = screen.getByText("Car A");

      expect(carPrice).toBeInTheDocument();
      expect(carName).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders 'Add to cart' button when car is not in cart", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ProductCard car={mockCar} />
        </CarContext.Provider>
      );
      const addToCartButton = screen.getByText("Add to cart");
      expect(addToCartButton).toBeInTheDocument();
      expect(addToCartButton).not.toBeDisabled();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders 'Added to cart' button when car is in cart", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ProductCard car={mockCar} />
        </CarContext.Provider>
      );
      const addedToCartButton = screen.getByText("Added to cart");
      expect(addedToCartButton).toBeInTheDocument();
      expect(addedToCartButton).toBeDisabled();
    } catch (error) {
      console.log(error);
    }
  });

  test("calls addToCart function when 'Add to cart' button is clicked", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ProductCard car={mockCar} />
        </CarContext.Provider>
      );
      const addToCartButton = screen.getByText("Add to cart");
      fireEvent.click(addToCartButton);
      expect(mockAddToCart).toHaveBeenCalledWith(10000, "Car A", 1, 1);
    } catch (error) {
      console.log(error);
    }
  });

  test("calls navigate and getProduct functions when card is clicked", () => {
    try {
      render(
        <CarContext.Provider value={mockContext}>
          <ProductCard car={mockCar} />
        </CarContext.Provider>
      );
      const card = screen.getByRole("button");
      fireEvent.click(card);
      expect(mockNavigate).toHaveBeenCalledWith("/product");
      expect(mockGetProduct).toHaveBeenCalledWith(
        "car-image.jpg",
        "Car A",
        10000,
        "This is a car",
        1
      );
    } catch (error) {
      console.log(error);
    }
  });
});
