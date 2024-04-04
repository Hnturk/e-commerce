import { render, screen } from '@testing-library/react';
import { CarContext } from '../../../../contexts/CarContext';
import ProductContainer from '../../../../components/organisms/container/ProductContainer';

test('renders ProductContainer component with correct total price', () => {
  const product = { id: 1, name: 'Car', price: 100 };
  const totalPrice = 100;
  const cartProducts = [];
  render(
    <CarContext.Provider value={{ product, totalPrice, cartProducts }}>
      <ProductContainer />
    </CarContext.Provider>
  );

  // Assert that the ProductContainer component renders with the correct total price
  const totalPriceElement = screen.getByText('$100');
  expect(totalPriceElement).toBeInTheDocument();
});

test('renders ProductContainer component with cart drawer closed by default', () => {
  const product = { id: 1, name: 'Car', price: 100 };
  const totalPrice = 100;
  const cartProducts = [];
  render(
    <CarContext.Provider value={{ product, totalPrice, cartProducts }}>
      <ProductContainer />
    </CarContext.Provider>
  );

  // Assert that the cart drawer is closed by default
  const cartDrawerElement = screen.queryByRole('dialog');
  expect(cartDrawerElement).not.toBeInTheDocument();
});

test('opens cart drawer when "Open Cart" button is clicked', () => {
  const product = { id: 1, name: 'Car', price: 100 };
  const totalPrice = 100;
  const cartProducts = [];
  render(
    <CarContext.Provider value={{ product, totalPrice, cartProducts }}>
      <ProductContainer />
    </CarContext.Provider>
  );

  // Click on the "Open Cart" button
  const openCartButton = screen.getByText('Open Cart');
  openCartButton.click();

  // Assert that the cart drawer is open
  const cartDrawerElement = screen.getByRole('dialog');
  expect(cartDrawerElement).toBeInTheDocument();
});

test('renders cart items in the cart drawer', () => {
  const product = { id: 1, name: 'Car', price: 100 };
  const totalPrice = 100;
  const cartProducts = [{ id: 1, name: 'Car', price: 100 }];
  render(
    <CarContext.Provider value={{ product, totalPrice, cartProducts }}>
      <ProductContainer />
    </CarContext.Provider>
  );

  // Assert that the cart items are rendered in the cart drawer
  const cartItemElement = screen.getByText('Car');
  expect(cartItemElement).toBeInTheDocument();
});

test('renders checkout button in the cart drawer', () => {
  const product = { id: 1, name: 'Car', price: 100 };
  const totalPrice = 100;
  const cartProducts = [];
  render(
    <CarContext.Provider value={{ product, totalPrice, cartProducts }}>
      <ProductContainer />
    </CarContext.Provider>
  );

  // Assert that the checkout button is rendered in the cart drawer
  const checkoutButtonElement = screen.getByText('Checkout');
  expect(checkoutButtonElement).toBeInTheDocument();
});