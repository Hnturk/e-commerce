import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Account from "../../../components/atoms/Account";

describe("Account component", () => {
  it("renders the account link with the correct text", () => {
    render(<Account />);
    const accountLink = screen.getByText("Mehmet Han");
    expect(accountLink).toBeInTheDocument();
  });

  it("renders the account link with the correct href", () => {
    render(<Account />);
    const accountLink = screen.getByRole("link");
    expect(accountLink).toHaveAttribute("href", "/");
  });

  it("renders the account link with the correct color", () => {
    render(<Account />);
    const accountLink = screen.getByText("Mehmet Han");
    expect(accountLink).toHaveStyle({ color: "white" });
  });
});
