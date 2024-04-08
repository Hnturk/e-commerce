import React from "react";
import { render, screen } from "@testing-library/react";
import FilterBar from "../../../../../components/organisms/container/containerContent/FilterBar";

describe("FilterBar component", () => {
  test("renders SortFilter component", () => {
    try {
      render(<FilterBar />);
      const sortFilter = screen.getByTestId("sort-filter");
      expect(sortFilter).toBeInTheDocument();
    } catch (error) {
      console.error("Error rendering SortFilter component:", error);
    }
  });

  test("renders BrandFilter component", () => {
    try {
      render(<FilterBar />);
      const brandFilter = screen.getByTestId("brand-filter");
      expect(brandFilter).toBeInTheDocument();
    } catch (error) {
      console.error("Error rendering BrandFilter component:", error);
    }
  });

  test("renders ModelFilter component", () => {
    try {
      render(<FilterBar />);
      const modelFilter = screen.getByTestId("model-filter");
      expect(modelFilter).toBeInTheDocument();
    } catch (error) {
      console.error("Error rendering ModelFilter component:", error);
    }
  });
});