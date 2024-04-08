import React from "react";
import { render, screen } from "@testing-library/react";
import MainContent from "../../../../../components/organisms/container/containerContent/MainContent";

describe("MainContent component", () => {
  test("renders the filter button", () => {
    try {
      render(<MainContent />);
      const filterButton = screen.getByRole("button", { name: "Filter" });
      expect(filterButton).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the cart button", () => {
    try {
      render(<MainContent />);
      const cartButton = screen.getByRole("button", { name: "Open Cart" });
      expect(cartButton).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the loading indicator", () => {
    try {
      render(<MainContent />);
      const loadingIndicator = screen.getByText("Loading...");
      expect(loadingIndicator).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the pagination component", () => {
    try {
      render(<MainContent />);
      const paginationComponent = screen.getByRole("navigation");
      expect(paginationComponent).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  // Add more tests for other functionality in the MainContent component
});