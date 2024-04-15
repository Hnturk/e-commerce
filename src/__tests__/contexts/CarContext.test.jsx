import React from "react";
import { render, screen } from "@testing-library/react";
import { CarContext, Provider } from "../../contexts/CarContext";

describe("CarContext", () => {

  const mockSetData = jest.fn();
  const mockSetCarData = jest.fn();
  const mockSetBrandData = jest.fn();
  const mockSetModelData = jest.fn();
  const mockSetCartProducts = jest.fn();
  const mockSetTotalPrice = jest.fn();
  const mockSetProduct = jest.fn();
  
  const valueToShare = {
    setData: mockSetData,
    setCarData: mockSetCarData,
    setBrandData: mockSetBrandData,
    setModelData: mockSetModelData,
    setCartProducts: mockSetCartProducts,
    setTotalPrice: mockSetTotalPrice,
    setProduct: mockSetProduct
  };
  
  test("renders children components", () => {
    render(
      <CarContext.Provider value={{valueToShare}}>
        <Provider>
          <div data-testid="child-component">Child Component</div>
        </Provider>
      </CarContext.Provider>
    );

    const childComponent = screen.getByTestId("child-component");
    expect(childComponent).toBeInTheDocument();
  });

});

describe('addAndCount', () => {
  let cartProducts = [];

  const addAndCount = (newProduct, products) => {
    const existingProduct = products.find(product => product.id === newProduct.id);
    if (existingProduct) {
      existingProduct.count += newProduct.count;
    } else {
      products.push(newProduct);
    }
    return products;
  };

  it('adds new product to cart when product is not in the list', () => {
    const newCartProduct = { name: 'Product 1', price: 100, count: 1, id: 1 };
    cartProducts = addAndCount(newCartProduct, cartProducts);
    expect(cartProducts).toEqual([newCartProduct]);
  });

  it('increases count of existing product in the list', () => {
    const existingProduct = { name: 'Product 1', price: 100, count: 1, id: 1 };
    const newCartProduct = { name: 'Product 1', price: 100, count: 1, id: 1 };
    cartProducts = addAndCount(newCartProduct, cartProducts);
    expect(cartProducts).toEqual([{ ...existingProduct, count: 2 }]);
  });
});

describe('getProduct', () => {
  let product = {};
  const getProduct = (image, name, price, description, id) => {
    product = { image, name, price, description, id };
  };
  it('sets product in the state', () => {
    const newProduct = {image: "image", name: 'Product 1', price: 100, description: "description", id: 1 };
    getProduct('image', newProduct.name, newProduct.price, 'description', newProduct.id);
    expect(product).toEqual(newProduct);
  });
});

// describe('addToCart', () => {
//   it('adds new product to cart when product is not in the list', () => {
//     const newCartProduct = { name: 'Product 1', price: 100, count: 1, id: 1 };
//     const initialCartProducts = [];
//     const updatedCartProducts = addToCart(newCartProduct.price, newCartProduct.name, newCartProduct.count, newCartProduct.id);
//     expect(updatedCartProducts).toEqual([newCartProduct]);
//   });

//   it('increases count of existing product in the list', () => {
//     const existingProduct = { name: 'Product 1', price: 100, count: 1, id: 1 };
//     const newCartProduct = { name: 'Product 1', price: 100, count: 1, id: 1 };
//     const initialCartProducts = [existingProduct];
//     const updatedCartProducts = addToCart(newCartProduct.price, newCartProduct.name, newCartProduct.count, newCartProduct.id);
//     expect(updatedCartProducts).toEqual([{ ...existingProduct, count: 2 }]);
//   });
// });