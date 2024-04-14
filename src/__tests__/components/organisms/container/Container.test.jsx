import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "../../../../components/organisms/container/Container";
import CarContext from "../../../../contexts/CarContext";

describe("Container component", () => {

  const mockCartProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "image1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "image2",
    },
  ];

  const mockData = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "image1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "image2",
    },
  ];

  const mockSelected = new Set(["brand1", "brand2", "brand3"]);

  const setCarData = jest.fn();
  const setModelData = jest.fn();

  const mockCarContext = {
    isLoading: false,
    cartProducts: mockCartProducts,
    selected: mockSelected,
    data: mockData,
    setCarData,
    setModelData,
  };

  test("renders FilterBar component", () => {
    render(
      <CarContext.Provider value={mockCarContext}>
        <Container />
      </CarContext.Provider>
    );
    const filterBarComponent = screen.getByTestId("filter-bar");
    expect(filterBarComponent).toBeInTheDocument();
  });

  test("renders MainContent component", () => {
    render(
      <CarContext.Provider value={mockCarContext}>
        <Container />
      </CarContext.Provider>
    );
    const mainContentComponent = screen.getByTestId("main-content");
    expect(mainContentComponent).toBeInTheDocument();
  });

  test("renders ShopBar component", () => {
    render(
      <CarContext.Provider value={mockCarContext}>
        <Container />
      </CarContext.Provider>
    );
    const shopBarComponent = screen.getByTestId("shop-bar");
    expect(shopBarComponent).toBeInTheDocument();
  });
});