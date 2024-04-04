import { render, screen, fireEvent } from '@testing-library/react';
import { CarContext } from '../../../contexts/CarContext';
import MainContent from '../../../components/organisms/container/containerContent/MainContent';

const mockCarData = [
  // Replace with mock car data
];

test('renders MainContent component with correct car data', () => {
  render(
    <CarContext.Provider value={{ carData: mockCarData, isLoading: false }}>
      <MainContent />
    </CarContext.Provider>
  );

  // Assert that the MainContent component renders with the correct car data
  const carCards = screen.getAllByTestId('car-card');
  expect(carCards.length).toBe(mockCarData.length);
});

test('opens and closes filter drawer when filter button is clicked', () => {
  render(
    <CarContext.Provider value={{ carData: mockCarData, isLoading: false }}>
      <MainContent />
    </CarContext.Provider>
  );

  // Assert that the filter drawer is initially closed
  const filterDrawer = screen.queryByTestId('filter-drawer');
  expect(filterDrawer).not.toBeInTheDocument();

  // Click the filter button
  const filterButton = screen.getByText('Filter');
  fireEvent.click(filterButton);

  // Assert that the filter drawer is now open
  const openedFilterDrawer = screen.getByTestId('filter-drawer');
  expect(openedFilterDrawer).toBeInTheDocument();

  // Click the filter button again
  fireEvent.click(filterButton);

  // Assert that the filter drawer is now closed
  const closedFilterDrawer = screen.queryByTestId('filter-drawer');
  expect(closedFilterDrawer).not.toBeInTheDocument();
});

test('opens and closes cart drawer when open cart button is clicked', () => {
  render(
    <CarContext.Provider value={{ carData: mockCarData, isLoading: false }}>
      <MainContent />
    </CarContext.Provider>
  );

  // Assert that the cart drawer is initially closed
  const cartDrawer = screen.queryByTestId('cart-drawer');
  expect(cartDrawer).not.toBeInTheDocument();

  // Click the open cart button
  const openCartButton = screen.getByText('Open Cart');
  fireEvent.click(openCartButton);

  // Assert that the cart drawer is now open
  const openedCartDrawer = screen.getByTestId('cart-drawer');
  expect(openedCartDrawer).toBeInTheDocument();

  // Click the open cart button again
  fireEvent.click(openCartButton);

  // Assert that the cart drawer is now closed
  const closedCartDrawer = screen.queryByTestId('cart-drawer');
  expect(closedCartDrawer).not.toBeInTheDocument();
});

test('changes current page when pagination is clicked', () => {
  render(
    <CarContext.Provider value={{ carData: mockCarData, isLoading: false }}>
      <MainContent />
    </CarContext.Provider>
  );

  // Assert that the initial current page is 1
  const initialCurrentPage = screen.getByTestId('current-page');
  expect(initialCurrentPage.textContent).toBe('1');

  // Click the second page in the pagination
  const secondPageButton = screen.getByText('2');
  fireEvent.click(secondPageButton);

  // Assert that the current page is now 2
  const updatedCurrentPage = screen.getByTestId('current-page');
  expect(updatedCurrentPage.textContent).toBe('2');
});