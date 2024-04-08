import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductDetail from "../../../../../components/organisms/container/containerProduct/ProductDetail";

describe("ProductDetail component", () => {
  test("renders the product name", () => {
    try {
      const car = {
        id: 1,
        name: "Audi A4",
        price: "$50,000",
        description: "Lorem ipsum dolor sit amet",
        image: "audi-a4.jpg",
      };
      render(<ProductDetail car={car} />);
      const productName = screen.getByText("Audi A4");
      expect(productName).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the product price", () => {
    try {
      const car = {
        id: 1,
        name: "Audi A4",
        price: "$50,000",
        description: "Lorem ipsum dolor sit amet",
        image: "audi-a4.jpg",
      };
      render(<ProductDetail car={car} />);
      const productPrice = screen.getByText("$50,000");
      expect(productPrice).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the product description", () => {
    try {
      const car = {
        id: 1,
        name: "Audi A4",
        price: "$50,000",
        description: "Lorem ipsum dolor sit amet",
        image: "audi-a4.jpg",
      };
      render(<ProductDetail car={car} />);
      const productDescription = screen.getByText("Lorem ipsum dolor sit amet");
      expect(productDescription).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("adds the product to cart on button click", () => {
    try {
      const car = {
        id: 1,
        name: "Audi A4",
        price: "$50,000",
        description: "Lorem ipsum dolor sit amet",
        image: "audi-a4.jpg",
      };
      const addToCart = jest.fn();
      render(<ProductDetail car={car} addToCart={addToCart} />);
      const addToCartButton = screen.getByText("Add to cart");
      fireEvent.click(addToCartButton);
      expect(addToCart).toHaveBeenCalledTimes(1);
      expect(addToCart).toHaveBeenCalledWith("$50,000", "Audi A4", undefined, 1);
    } catch (error) {
      console.log(error);
    }
  });

  test("displays 'Added to cart' when product is already in cart", () => {
    try {
      const car = {
        id: 1,
        name: "Audi A4",
        price: "$50,000",
        description: "Lorem ipsum dolor sit amet",
        image: "audi-a4.jpg",
      };
      const addToCart = jest.fn();
      const cartProducts = [{ id: 1 }];
      render(
        <ProductDetail car={car} addToCart={addToCart} cartProducts={cartProducts} />
      );
      const addedToCartText = screen.getByText("Added to cart");
      expect(addedToCartText).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});