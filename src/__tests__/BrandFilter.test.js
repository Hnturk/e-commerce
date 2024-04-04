import React from "react";
import { render } from "@testing-library/react";
import BrandFilter from "../components/Container/BrandFilter";
import userEvent from "@testing-library/user-event";

jest.mock("../context/Context.jsx", () => ({
  useContext: jest.fn().mockReturnValue({
    brandData: [{ brand: "Toyota" }, { brand: "Honda" }, { brand: "Ford" }],
    setBrandSearch: jest.fn(),
    cars: [
      { brand: "Toyota", model: "Camry" },
      { brand: "Honda", model: "Accord" },
      { brand: "Ford", model: "Fusion" },
    ],
    setCars: jest.fn(),
    data: [
      { brand: "Toyota", model: "Camry" },
      { brand: "Honda", model: "Accord" },
      { brand: "Ford", model: "Fusion" },
    ],
  }),
}));

describe("BrandFilter", () => {
  beforeEach(() => {
    render(<BrandFilter />);
  });

  test("renders brand options", () => {
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Toyota")).toBeInTheDocument();
    expect(screen.getByText("Honda")).toBeInTheDocument();
    expect(screen.getByText("Ford")).toBeInTheDocument();
  });

  test("selects brand when clicked", () => {
    const toyotaCheckbox = screen.getByLabelText("Toyota");
    userEvent.click(toyotaCheckbox);
    expect(toyotaCheckbox).toBeChecked();

    // userEvent.click(toyotaCheckbox);
    // expect(toyotaCheckbox).not.toBeChecked();
  });

  test("filters cars by selected brand", () => {
    const toyotaCheckbox = screen.getByLabelText("Toyota");

    userEvent.click(toyotaCheckbox);
    expect(toyotaCheckbox).toBeChecked();
    expect(getByLabelText("Camry")).toBeInTheDocument();
    expect(getByLabelText("Accord")).not.toBeInTheDocument();
    expect(getByLabelText("Fusion")).not.toBeInTheDocument();
  });
});
