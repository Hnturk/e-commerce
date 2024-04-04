import { render } from '@testing-library/react';
import { CarContext } from '../../../contexts/CarContext';
import ShoppingCart from '../../../components/molecules/ShoppingCart';

test('renders ShoppingCart component with correct cart products', () => {
  const cartProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]; // Replace with the actual cart products

  const { getByText } = render(
    <CarContext.Provider value={{ cartProducts }}>
      <ShoppingCart />
    </CarContext.Provider>
  );

  // Assert that the ShoppingCart component renders with the correct cart products
  expect(getByText('Product 1')).toBeInTheDocument();
  expect(getByText('Product 2')).toBeInTheDocument();
  expect(getByText('Product 3')).toBeInTheDocument();
});

test('renders ShoppingCart component with correct styling', () => {
  const cartProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ]; // Replace with the actual cart products

  const { getByTestId } = render(
    <CarContext.Provider value={{ cartProducts }}>
      <ShoppingCart />
    </CarContext.Provider>
  );

  // Assert that the ShoppingCart component renders with the correct styling
  const shoppingCartElement = getByTestId('shopping-cart');
  expect(shoppingCartElement).toHaveStyle({
    display: 'flex',
    maxWidth: '50%',
    minWidth: '220px',
    height: '270px',
  });
});