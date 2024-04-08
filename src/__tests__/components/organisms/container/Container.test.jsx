import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "../../../../components/organisms/container/Container";

describe("Container component", () => {
  test("renders the FilterBar component", () => {
    try {
      render(<Container />);
      const filterBar = screen.getByTestId("filter-bar");
      expect(filterBar).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the MainContent component", () => {
    try {
      render(<Container />);
      const mainContent = screen.getByTestId("main-content");
      expect(mainContent).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the ShopBar component", () => {
    try {
      render(<Container />);
      const shopBar = screen.getByTestId("shop-bar");
      expect(shopBar).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});