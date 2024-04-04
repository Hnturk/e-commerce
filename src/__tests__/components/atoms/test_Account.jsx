import { render } from '@testing-library/react';
import Account from '../../components/atoms/Account';

test('renders Account component', () => {
  const { getByText } = render(<Account />);
  
  // Assert that the Account component renders without errors
  expect(getByText('Mehmet Han')).toBeInTheDocument();
});

test('renders Account component with correct link', () => {
  const { getByRole } = render(<Account />);
  
  // Assert that the Account component renders a link with the correct href
  const linkElement = getByRole('link');
  expect(linkElement).toHaveAttribute('href', '/');
});

test('renders Account component with correct styling', () => {
  const { getByText } = render(<Account />);
  
  // Assert that the Account component renders with the correct styling
  const accountElement = getByText('Mehmet Han');
  expect(accountElement).toHaveStyle({
    minWidth: '150px',
    display: 'flex',
    gap: '1',
    color: '#fff',
  });
});