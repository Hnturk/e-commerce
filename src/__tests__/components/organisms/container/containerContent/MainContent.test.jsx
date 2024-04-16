import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MainContent from "../../../../../components/organisms/container/containerContent/MainContent";
import CarContext from "../../../../../contexts/CarContext";
import { BrowserRouter as Router } from "react-router-dom";

describe("MainContent component", () => {
  const mockCarData = [
    { id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1" },
    { id: 2, name: "Car 2", brand: "Brand 2", model: "Model 2" },
    { id: 3, name: "Car 3", brand: "Brand 3", model: "Model 3" },
  ];
  const mockCartProducts = [
    { id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1", count: 2 },
    { id: 2, name: "Car 2", brand: "Brand 2", model: "Model 2", count: 3 },
    { id: 3, name: "Car 3", brand: "Brand 3", model: "Model 3", count: 1 },
  ];
  const mockselectedBrands = new Set([]);
  const mockSetCurrentPage = jest.fn();
  const mockSetCartOpen = jest.fn();
  const mockSetFilterOpen = jest.fn();
  const mockSetCarData = jest.fn();
  const mockSetModelData = jest.fn();

  const mockCarContextValue = {
    carData: mockCarData,
    isLoading: false,
    cartProducts: mockCartProducts,
    setCurrentPage: mockSetCurrentPage,
    setCartOpen: mockSetCartOpen,
    setFilterOpen: mockSetFilterOpen,
    setCarData: mockSetCarData,
    setModelData: mockSetModelData,
    selectedBrands: mockselectedBrands,
  };

  test("Open Cart button click toggles the Cart drawer", () => {
    render(
      <Router>
        <CarContext.Provider value={mockCarContextValue}>
          <MainContent />
        </CarContext.Provider>
      </Router>
    );

    const cartDrawer = screen.getByText("Open Cart");
    const openCartButton = screen.getByTestId("cart-drawer-button");

    expect(cartDrawer).toBeInTheDocument();

    fireEvent.click(openCartButton);

    const drawer = screen.getByTestId("cart-drawer");
    expect(drawer).toBeVisible();
  });

  test("Filter button click toggles the filter drawer", () => {
    render(
      <Router>
        <CarContext.Provider value={mockCarContextValue}>
          <MainContent />
        </CarContext.Provider>
      </Router>
    );

    const filterDrawer = screen.getByText("Filter");
    const filterButton = screen.getByTestId("filter-drawer-button");

    expect(filterDrawer).toBeInTheDocument();

    fireEvent.click(filterButton);

    const drawer = screen.getByTestId("filter-drawer");
    expect(drawer).toBeVisible();
  });

  test("renders filter button", () => {
    render(
      <Router>
        <CarContext.Provider value={mockCarContextValue}>
          <MainContent />
        </CarContext.Provider>
      </Router>
    );
    const filterButton = screen.getByText("Filter");
    expect(filterButton).toBeInTheDocument();
  });

  test("renders cart button", () => {
    render(
      <Router>
        <CarContext.Provider value={mockCarContextValue}>
          <MainContent />
        </CarContext.Provider>
      </Router>
    );
    const cartButton = screen.getByText("Open Cart");
    expect(cartButton).toBeInTheDocument();
  });

  test("renders car cards", () => {
    render(
      <Router>
        <CarContext.Provider value={mockCarContextValue}>
          <MainContent />
        </CarContext.Provider>
      </Router>
    );
    const carCards = screen.getAllByTestId("car-card");
    expect(carCards.length).toBe(mockCarData.length);
  });

  test("renders pagination", () => {
    render(
      <Router>
        <CarContext.Provider value={mockCarContextValue}>
          <MainContent />
        </CarContext.Provider>
      </Router>
    );
    const pagination = screen.getByRole("navigation");
    expect(pagination).toBeInTheDocument();
  });
});
