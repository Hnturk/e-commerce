import { render } from '@testing-library/react';
import ShopBar from '../../../../../components/organisms/container/containerContent/ShopBar';

test('renders ShopBar component with correct styling', () => {
  const { getByTestId } = render(<ShopBar />);

  // Assert that the ShopBar component renders with the correct styling
  const shopBarElement = getByTestId('shop-bar');
  expect(shopBarElement).toHaveStyle({
    width: '100%',
    height: '100%',
    margin: 0,
    paddingLeft: '10px',
    paddingTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    alignItems: 'flex-start',
    padding: '12px 0',
  });
});

test('renders ShopBar component with ShoppingCart and Checkout components', () => {
  const { getByTestId } = render(<ShopBar />);

  // Assert that the ShopBar component renders with the ShoppingCart and Checkout components
  const shoppingCartElement = getByTestId('shopping-cart');
  const checkoutElement = getByTestId('checkout');
  expect(shoppingCartElement).toBeInTheDocument();
  expect(checkoutElement).toBeInTheDocument();
});