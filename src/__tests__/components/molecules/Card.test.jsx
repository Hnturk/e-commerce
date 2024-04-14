import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CarContext from "../../../contexts/CarContext";
import ProductCard from "../../../components/molecules/Card";

describe("ProductCard component", () => {
  const mockCar = {
    id: 1,
    name: "Car 1",
    price: 10000,
    count: 1,
    image: "car1.jpg",
    description: "This is a car.",
  };
  const mockCartProducts = [
    { id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1", count: 2 },
    { id: 2, name: "Car 2", brand: "Brand 2", model: "Model 2", count: 1 },
  ];

  const addToCart = jest.fn();
  const getProduct = jest.fn();

  test("adds car to cart when 'Add to cart' button is clicked", () => {
    render(
      <Router>
        <CarContext.Provider
          value={{ addToCart, cartProducts: [], getProduct }}
        >
          <ProductCard car={mockCar} />
        </CarContext.Provider>
      </Router>
    );

    const addToCartButton = screen.getByTestId("add-to-cart");
    userEvent.click(addToCartButton);
  });

  test("renders car image, price, and name", () => {
    render(
      <Router>
        <CarContext.Provider
          value={{ addToCart, cartProducts: mockCartProducts, getProduct }}
        >
          <ProductCard car={mockCar} />
        </CarContext.Provider>
      </Router>
    );
    const carImage = screen.getByTestId("car-card");
    const carPrice = screen.getByTestId("car-price");
    const carName = screen.getByTestId("car-name");
    expect(carImage).toBeInTheDocument();
    expect(carPrice).toBeInTheDocument();
    expect(carName).toBeInTheDocument();
  });

  test("navigates to product page when card is clicked", () => {
    render(
      <Router>
        <CarContext.Provider
          value={{ addToCart, cartProducts: mockCartProducts, getProduct }}
        >
          <ProductCard car={mockCar} />
        </CarContext.Provider>
      </Router>
    );

    const card = screen.getByTestId("card-action");
    userEvent.click(card);
  });
});
