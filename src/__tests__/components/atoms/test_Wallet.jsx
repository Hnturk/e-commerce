import { render } from '@testing-library/react';
import { CarContext } from '../../../contexts/CarContext';
import Wallet from '../../../components/atoms/Wallet';

test('renders Wallet component with correct total price', () => {
  const totalPrice = 100; // Replace with the actual total price value
  const { getByText } = render(
    <CarContext.Provider value={{ totalPrice }}>
      <Wallet />
    </CarContext.Provider>
  );

  // Assert that the Wallet component renders with the correct total price
  expect(getByText('$100')).toBeInTheDocument();
});

test('renders Wallet component with correct styling', () => {
  const totalPrice = 100; // Replace with the actual total price value
  const { getByText } = render(
    <CarContext.Provider value={{ totalPrice }}>
      <Wallet />
    </CarContext.Provider>
  );

  // Assert that the Wallet component renders with the correct styling
  const walletElement = getByText('$100');
  expect(walletElement).toHaveStyle({
    display: 'flex',
    alignItems: 'center',
    gap: '1',
    color: '#fff',
  });
});