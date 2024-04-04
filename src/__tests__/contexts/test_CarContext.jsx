import { render, act } from '@testing-library/react';
import axios from 'axios';
import { CarContext, Provider } from '../../contexts/CarContext';

jest.mock('axios');

describe('CarContext', () => {
  afterEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('fetches data and sets state correctly', async () => {
    const mockData = [
      { id: 1, brand: 'Brand 1', model: 'Model 1' },
      { id: 2, brand: 'Brand 2', model: 'Model 2' },
    ];

    axios.get.mockResolvedValueOnce({ data: mockData });

    let rendered;
    await act(async () => {
      rendered = render(
        <Provider>
          <CarContext.Consumer>
            {({ fetchData, data }) => {
              fetchData();
              return <div>{data.length}</div>;
            }}
          </CarContext.Consumer>
        </Provider>
      );
    });

    const dataElement = rendered.getByText('2');
    expect(dataElement).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('YOUR_API_ENDPOINT');

    const localStorageData = JSON.parse(localStorage.getItem('cartProducts'));
    expect(localStorageData).toEqual([]);
  });

  test('adds and counts cart products correctly', () => {
    const mockData = [
      { id: 1, brand: 'Brand 1', model: 'Model 1' },
      { id: 2, brand: 'Brand 2', model: 'Model 2' },
    ];

    const rendered = render(
      <Provider>
        <CarContext.Consumer>
          {({ addAndCount, cartProducts }) => {
            addAndCount(mockData[0]);
            addAndCount(mockData[1]);
            return <div>{cartProducts.length}</div>;
          }}
        </CarContext.Consumer>
      </Provider>
    );

    const cartProductsElement = rendered.getByText('2');
    expect(cartProductsElement).toBeInTheDocument();

    const localStorageData = JSON.parse(localStorage.getItem('cartProducts'));
    expect(localStorageData).toEqual(mockData);
  });

  test('adds product to cart and updates total price correctly', () => {
    const mockProduct = { id: 1, name: 'Product 1', price: 100, count: 1 };

    const rendered = render(
      <Provider>
        <CarContext.Consumer>
          {({ addToCart, totalPrice }) => {
            addToCart(mockProduct.price, mockProduct.name, mockProduct.count, mockProduct.id);
            return <div>{totalPrice}</div>;
          }}
        </CarContext.Consumer>
      </Provider>
    );

    const totalPriceElement = rendered.getByText('100');
    expect(totalPriceElement).toBeInTheDocument();

    const localStorageTotalPrice = localStorage.getItem('totalPrice');
    expect(localStorageTotalPrice).toBe('100');
  });
});