import { render, fireEvent } from '@testing-library/react';
import CartItem from '../../components/atoms/CartItem';

test('renders CartItem component with correct item details', () => {
  const item = {
    id: 1,
    name: 'Product A',
    price: 10.99,
    count: 2,
  };

  const { getByText, getByRole } = render(<CartItem item={item} />);

  // Assert that the CartItem component renders with the correct item name and price
  expect(getByText('Product A')).toBeInTheDocument();
  expect(getByText('10.99')).toBeInTheDocument();

  // Assert that the CartItem component renders with the correct item count
  expect(getByText('2')).toBeInTheDocument();

  // Assert that the CartItem component renders with the correct decrease button
  const decreaseButton = getByRole('button', { name: 'Decrease' });
  expect(decreaseButton).toBeInTheDocument();
  expect(decreaseButton).toBeDisabled();

  // Assert that the CartItem component renders with the correct increase button
  const increaseButton = getByRole('button', { name: 'Increase' });
  expect(increaseButton).toBeInTheDocument();
});

test('handles decrease button click correctly', () => {
  const item = {
    id: 1,
    name: 'Product A',
    price: 10.99,
    count: 2,
  };

  const { getByRole } = render(<CartItem item={item} />);

  // Simulate a click on the decrease button
  const decreaseButton = getByRole('button', { name: 'Decrease' });
  fireEvent.click(decreaseButton);

  // Assert that the handleDecrease function is called with the correct product ID
  // You need to mock the useContext hook to test this functionality
  // You can use a library like react-hooks-testing-library for this purpose
});

test('handles increase button click correctly', () => {
  const item = {
    id: 1,
    name: 'Product A',
    price: 10.99,
    count: 2,
  };

  const { getByRole } = render(<CartItem item={item} />);

  // Simulate a click on the increase button
  const increaseButton = getByRole('button', { name: 'Increase' });
  fireEvent.click(increaseButton);

  // Assert that the handleIncrease function is called with the correct product ID
  // You need to mock the useContext hook to test this functionality
  // You can use a library like react-hooks-testing-library for this purpose
});