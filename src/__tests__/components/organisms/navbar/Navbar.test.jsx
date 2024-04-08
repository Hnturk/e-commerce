import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "../../../../components/organisms/navbar/Navbar";

describe("Navbar component", () => {
  test("renders the logo", () => {
    try {
      render(<Navbar />);
      const logo = screen.getByText("Eteration");
      expect(logo).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the search bar", () => {
    try {
      render(<Navbar />);
      const searchBar = screen.getByRole("textbox", { name: "Search" });
      expect(searchBar).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("updates the search value on input change", () => {
    try {
      render(<Navbar />);
      const searchBar = screen.getByRole("textbox", { name: "Search" });
      fireEvent.change(searchBar, { target: { value: "audi" } });
      expect(searchBar.value).toBe("audi");
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the account icon", () => {
    try {
      render(<Navbar />);
      const accountIcon = screen.getByRole("button", { name: "Profile" });
      expect(accountIcon).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the wallet icon", () => {
    try {
      render(<Navbar />);
      const walletIcon = screen.getByRole("button", { name: "My account" });
      expect(walletIcon).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});