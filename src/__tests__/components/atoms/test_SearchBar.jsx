import { render, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/atoms/SearchBar';

test('renders SearchBar component', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  
  // Assert that the SearchBar component renders without errors
  expect(getByPlaceholderText('Search')).toBeInTheDocument();
});

test('expands SearchBar on mouse enter', () => {
  const { getByTestId } = render(<SearchBar />);
  const searchBar = getByTestId('search-bar');
  
  // Simulate mouse enter event
  fireEvent.mouseEnter(searchBar);
  
  // Assert that the SearchBar expands
  expect(searchBar).toHaveClass('expanded');
});

test('collapses SearchBar on mouse leave', () => {
  const { getByTestId } = render(<SearchBar />);
  const searchBar = getByTestId('search-bar');
  
  // Simulate mouse leave event
  fireEvent.mouseLeave(searchBar);
  
  // Assert that the SearchBar collapses
  expect(searchBar).not.toHaveClass('expanded');
});

test('filters car data based on search input', () => {
  const { getByPlaceholderText, getByTestId } = render(<SearchBar />);
  const inputElement = getByPlaceholderText('Search');
  const searchBar = getByTestId('search-bar');
  
  // Simulate search input
  fireEvent.change(inputElement, { target: { value: 'sedan' } });
  
  // Assert that the car data is filtered correctly
  expect(searchBar).toHaveAttribute('data-car-data', 'filtered');
});

test('resets car data when search input is empty', () => {
  const { getByPlaceholderText, getByTestId } = render(<SearchBar />);
  const inputElement = getByPlaceholderText('Search');
  const searchBar = getByTestId('search-bar');
  
  // Simulate search input
  fireEvent.change(inputElement, { target: { value: '' } });
  
  // Assert that the car data is reset
  expect(searchBar).toHaveAttribute('data-car-data', 'reset');
});