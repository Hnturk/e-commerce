import { render } from '@testing-library/react';
import FilterBar from '../../../components/organisms/container/containerContent/FilterBar';

test('renders FilterBar component with correct styling', () => {
  const { getByTestId } = render(<FilterBar />);

  // Assert that the FilterBar component renders with the correct styling
  const filterBarElement = getByTestId('filter-bar');
  expect(filterBarElement).toHaveStyle({
    display: 'flex',
    flexDirection: 'column',
    alignItems: {
      xs: 'center',
      sm: 'center',
      md: 'flex-end',
      lg: 'center',
      xl: 'flex-end',
    },
    justifyContent: 'flex-start',
    height: '100%',
    width: {
      xs: '250px',
      sm: '250px',
      md: '100%',
      lg: '100%',
      xl: '100%',
    },
    gap: 3,
    margin: 0,
    paddingRight: '10px',
    paddingTop: '20px',
    padding: {
      md: '12px 0',
      lg: '10px 20px',
    },
  });
});

test('renders SortFilter, BrandFilter, and ModelFilter components', () => {
  const { getByTestId } = render(<FilterBar />);

  // Assert that the SortFilter component is rendered
  const sortFilterElement = getByTestId('sort-filter');
  expect(sortFilterElement).toBeInTheDocument();

  // Assert that the BrandFilter component is rendered
  const brandFilterElement = getByTestId('brand-filter');
  expect(brandFilterElement).toBeInTheDocument();

  // Assert that the ModelFilter component is rendered
  const modelFilterElement = getByTestId('model-filter');
  expect(modelFilterElement).toBeInTheDocument();
});