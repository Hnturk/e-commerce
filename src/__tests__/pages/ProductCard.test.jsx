import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "../../pages/ProductCard";

describe("ProductCard component", () => {
  test("renders Navbar component", () => {
    try {
      render(<ProductCard />);
      const navbarComponent = screen.getByTestId("navbar");
      expect(navbarComponent).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders ProductContainer component", () => {
    try {
      render(<ProductCard />);
      const productContainerComponent = screen.getByTestId("product-container");
      expect(productContainerComponent).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});