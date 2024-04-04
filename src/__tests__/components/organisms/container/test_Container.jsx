import { render } from '@testing-library/react';
import { CarContext } from '../../../../contexts/CarContext';
import Container from '../../../../components/organisms/container/Container';

test('renders Container component with correct styling', () => {
  const isLoading = false; // Replace with the actual isLoading value
  const { getByTestId } = render(
    <CarContext.Provider value={{ isLoading }}>
      <Container />
    </CarContext.Provider>
  );

  // Assert that the Container component renders with the correct styling
  const containerElement = getByTestId('container');
  expect(containerElement).toHaveStyle({
    height: 'calc(100vh - 77px)',
    display: 'grid',
    gridTemplateColumns: '0 2.75fr 6.1fr 3.15fr',
    gridGap: '20px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 0,
  });
});

test('renders Container component with FilterBar and MainContent', () => {
  const isLoading = false; // Replace with the actual isLoading value
  const { getByTestId, getByLabelText } = render(
    <CarContext.Provider value={{ isLoading }}>
      <Container />
    </CarContext.Provider>
  );

  // Assert that the Container component renders with FilterBar and MainContent
  const filterBarElement = getByLabelText('Filter Bar');
  const mainContentElement = getByLabelText('Main Content');
  expect(filterBarElement).toBeInTheDocument();
  expect(mainContentElement).toBeInTheDocument();
});

test('renders Container component with ShopBar', () => {
  const isLoading = false; // Replace with the actual isLoading value
  const { getByLabelText } = render(
    <CarContext.Provider value={{ isLoading }}>
      <Container />
    </CarContext.Provider>
  );

  // Assert that the Container component renders with ShopBar
  const shopBarElement = getByLabelText('Shop Bar');
  expect(shopBarElement).toBeInTheDocument();
});