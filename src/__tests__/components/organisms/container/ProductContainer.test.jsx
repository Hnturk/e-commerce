import React from "react";
import { render, screen } from "@testing-library/react";
import ProductContainer from "../../../../components/organisms/container/ProductContainer";
import { CarContext } from "../../../../contexts/CarContext";

describe("ProductContainer component", () => {
  test("renders the ProductDetail component", () => {
    try {
      const car = {
        id: 1,
        name: "Audi A4",
        price: "$50,000",
        description: "Lorem ipsum dolor sit amet",
        image: "audi-a4.jpg",
      };
      render(
        <CarContext.Provider value={{ product: car }}>
          <ProductContainer />
        </CarContext.Provider>
      );
      const productDetail = screen.getByTestId("product-detail");
      expect(productDetail).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the ShopBar component", () => {
    try {
      render(<ProductContainer />);
      const shopBar = screen.getByTestId("shop-bar");
      expect(shopBar).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the OpenCart component", () => {
    try {
      render(<ProductContainer />);
      const openCart = screen.getByTestId("open-cart");
      expect(openCart).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});