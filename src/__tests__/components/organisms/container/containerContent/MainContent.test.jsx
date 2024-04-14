import React from "react";
import { render, screen } from "@testing-library/react";
import MainContent from "../../../../../components/organisms/container/containerContent/MainContent";
import CarContext from "../../../../../contexts/CarContext";
import { BrowserRouter as Router } from 'react-router-dom';
describe("MainContent component", () => {
  const mockCarData = [
    { id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1" },
    { id: 2, name: "Car 2", brand: "Brand 2", model: "Model 2" },
    { id: 3, name: "Car 3", brand: "Brand 3", model: "Model 3" },
  ];
  const mockCartProducts = [
    { id: 1, name: "Car 1", brand: "Brand 1", model: "Model 1", count: 2},
    { id: 2, name: "Car 2", brand: "Brand 2", model: "Model 2", count: 3},
    { id: 3, name: "Car 3", brand: "Brand 3", model: "Model 3", count: 1},
  ]
  const mockSetCurrentPage = jest.fn();
  const mocksetCartOpen = jest.fn();
  const mockSetFilterOpen = jest.fn();

  const mockCarContextValue = {
    carData: mockCarData,
    isLoading: false,
    cartProducts: mockCartProducts,
    setCurrentPage: mockSetCurrentPage,
    setCartOpen: mocksetCartOpen,
    setFilterOpen: mockSetFilterOpen
  };

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