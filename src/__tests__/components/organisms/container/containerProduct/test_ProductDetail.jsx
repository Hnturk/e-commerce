import { render, screen, fireEvent } from '@testing-library/react';
import { CarContext } from '../../../contexts/CarContext';
import ProductDetail from '../../../components/organisms/container/containerProduct/ProductDetail';

const mockCar = {
  id: 1,
  name: 'Car 1',
  price: 100,
  count: 1,
  image: 'car1.jpg',
  description: 'This is a car.',
};

test('renders ProductDetail component with correct car details', () => {
  render(
    <CarContext.Provider value={{ addToCart: jest.fn(), cartProducts: [] }}>
      <ProductDetail car={mockCar} />
    </CarContext.Provider>
  );

  // Assert that the ProductDetail component renders with the correct car details
  expect(screen.getByText('Car 1')).toBeInTheDocument();
  expect(screen.getByText('$100')).toBeInTheDocument();
  expect(screen.getByText('This is a car.')).toBeInTheDocument();
});

test('calls addToCart function when Add to cart button is clicked', () => {
  const addToCart = jest.fn();
  render(
    <CarContext.Provider value={{ addToCart, cartProducts: [] }}>
      <ProductDetail car={mockCar} />
    </CarContext.Provider>
  );

  // Simulate clicking the Add to cart button
  fireEvent.click(screen.getByText('Add to cart'));

  // Assert that the addToCart function is called with the correct arguments
  expect(addToCart).toHaveBeenCalledWith(100, 'Car 1', 1, 1);
});

test('disables Add to cart button and shows "Added to cart" message when car is already in cart', () => {
  render(
    <CarContext.Provider value={{ addToCart: jest.fn(), cartProducts: [mockCar] }}>
      <ProductDetail car={mockCar} />
    </CarContext.Provider>
  );

  // Assert that the Add to cart button is disabled
  const addToCartButton = screen.getByText('Add to cart');
  expect(addToCartButton).toBeDisabled();

  // Assert that the "Added to cart" message is displayed
  expect(screen.getByText('Added to cart')).toBeInTheDocument();
});