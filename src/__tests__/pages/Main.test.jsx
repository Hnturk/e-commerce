import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "../../pages/Main";

describe("Main component", () => {
  test("renders the Navbar component", () => {
    try {
      render(<Main />);
      const navbarComponent = screen.getByTestId("navbar");
      expect(navbarComponent).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  test("renders the Container component", () => {
    try {
      render(<Main />);
      const containerComponent = screen.getByTestId("container");
      expect(containerComponent).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });
});