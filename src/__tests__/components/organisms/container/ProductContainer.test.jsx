import React from "react";
import { render, screen } from "@testing-library/react";
import CarContext from "../../../../contexts/CarContext";
import ProductContainer from "../../../../components/organisms/container/ProductContainer";

describe("ProductContainer component", () => {

  const mockProduct = {
    id: 1,
    name: "Car 1",
    brand: "Brand 1",
    model: "Model 1",
    description: "Description 1",
    price: 100,
    image: "image1.jpg",
  };

  const mockCartProducts = [{ id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1", count: 2}, 
                            { id: 2, name: "Car 2", brand: "Brand 2", model: "Model 2", count: 1}];

  test("renders OpenCart component", () => {
    render(
      <CarContext.Provider value={{ product: mockProduct, cartProducts: mockCartProducts }}>
        <ProductContainer />
      </CarContext.Provider>
    );
    const openCartComponent = screen.getByTestId("open-cart");
    expect(openCartComponent).toBeInTheDocument();
  });

  test("renders ShopBar component", () => {
    render(
      <CarContext.Provider value={{ product: mockProduct, cartProducts: mockCartProducts }}>
        <ProductContainer />
      </CarContext.Provider>
    );
    const shopBarComponent = screen.getByTestId("shop-bar");
    expect(shopBarComponent).toBeInTheDocument();
  });

  test("renders ProductDetail component", () => {
    render(
      <CarContext.Provider value={{ product: mockProduct, cartProducts: mockCartProducts }}>
        <ProductContainer />
      </CarContext.Provider>
    );
    const productDetailComponent = screen.getByTestId("product-detail");
    expect(productDetailComponent).toBeInTheDocument();
  });
});