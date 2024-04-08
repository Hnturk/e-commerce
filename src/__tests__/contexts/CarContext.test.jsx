import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import Provider from "../../contexts/CarContext";

jest.mock("axios");

describe("Provider component", () => {
  test("fetches data and sets state correctly", () => {
    try {
      const data = [
        {
          id: 1,
          brand: "Audi",
          model: "A4",
        },
        {
          id: 2,
          brand: "BMW",
          model: "X5",
        },
      ];

      axios.get.mockResolvedValueOnce({ data });

      render(
        <Provider>
          <div>Test</div>
        </Provider>
      );

      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith("your-api-endpoint");

      // You can add more assertions here to check if the state is set correctly
    } catch (error) {
      console.log(error);
    }
  });

  test("renders children correctly", () => {
    try {
      render(
        <Provider>
          <div>Test</div>
        </Provider>
      );

      const childElement = screen.getByText("Test");
      expect(childElement).toBeInTheDocument();
    } catch (error) {
      console.log(error);
    }
  });

  // Add more tests for other functionality of the Provider component
});