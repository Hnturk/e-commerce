import { render } from '@testing-library/react';
import { CarContext } from '../../../contexts/CarContext';
import Checkout from '../../../components/molecules/Checkout';

test('renders Checkout component with correct total price', () => {
  const totalPrice = 100; // Replace with the actual total price value
  const { getByText } = render(
    <CarContext.Provider value={{ totalPrice }}>
      <Checkout />
    </CarContext.Provider>
  );

  // Assert that the Checkout component renders with the correct total price
  expect(getByText('$100')).toBeInTheDocument();
});

test('renders Checkout component with correct styling', () => {
  const totalPrice = 100; // Replace with the actual total price value
  const { getByText } = render(
    <CarContext.Provider value={{ totalPrice }}>
      <Checkout />
    </CarContext.Provider>
  );

  // Assert that the Checkout component renders with the correct styling
  const checkoutElement = getByText('$100');
  expect(checkoutElement).toHaveStyle({
    marginLeft: '10px',
    color: '#1976d2',
  });
});