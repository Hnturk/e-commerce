import { render, fireEvent } from '@testing-library/react';
import { CarContext } from '../../../contexts/CarContext';
import Card from '../../../components/molecules/Card';

const mockCar = {
  id: 1,
  name: 'Test Car',
  price: 100,
  count: 1,
  image: 'test-image.jpg',
  description: 'Test description',
};

test('renders Card component with correct car details', () => {
  const { getByText, getByAltText } = render(
    <CarContext.Provider value={{ addToCart: jest.fn(), cartProducts: [], getProduct: jest.fn() }}>
      <Card car={mockCar} />
    </CarContext.Provider>
  );

  // Assert that the Card component renders with the correct car details
  expect(getByText('$100')).toBeInTheDocument();
  expect(getByText('Test Car')).toBeInTheDocument();
  expect(getByAltText('Test Car')).toHaveAttribute('src', 'test-image.jpg');
});

test('calls addToCart function when Add to cart button is clicked', () => {
  const addToCartMock = jest.fn();
  const { getByText } = render(
    <CarContext.Provider value={{ addToCart: addToCartMock, cartProducts: [], getProduct: jest.fn() }}>
      <Card car={mockCar} />
    </CarContext.Provider>
  );

  const addToCartButton = getByText('Add to cart');

  // Simulate click event on Add to cart button
  fireEvent.click(addToCartButton);

  // Assert that the addToCart function is called with the correct arguments
  expect(addToCartMock).toHaveBeenCalledWith(100, 'Test Car', 1, 1);
});

test('navigates to /product page and calls getProduct function when card is clicked', () => {
  const navigateMock = jest.fn();
  const getProductMock = jest.fn();
  const { getByTestId } = render(
    <CarContext.Provider value={{ addToCart: jest.fn(), cartProducts: [], getProduct: getProductMock }}>
      <Card car={mockCar} />
    </CarContext.Provider>
  );

  const card = getByTestId('card');

  // Simulate click event on card
  fireEvent.click(card);

  // Assert that the navigate function is called with the correct argument
  expect(navigateMock).toHaveBeenCalledWith('/product');

  // Assert that the getProduct function is called with the correct arguments
  expect(getProductMock).toHaveBeenCalledWith('test-image.jpg', 'Test Car', 100, 'Test description', 1);
});