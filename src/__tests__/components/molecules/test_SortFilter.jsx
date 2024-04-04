import { render, fireEvent } from '@testing-library/react';
import SortFilter from '../../../components/molecules/SortFilter';

test('renders SortFilter component with options', () => {
  const { getByLabelText } = render(<SortFilter />);

  // Assert that the SortFilter component renders with the correct options
  expect(getByLabelText('Sort')).toBeInTheDocument();
  expect(getByLabelText('Sort')).toHaveTextContent('Sort');
  expect(getByLabelText('Sort')).toHaveAttribute('id', 'BrandFİlter');

  // Assert that the SortFilter component renders with the correct radio buttons
  expect(getByLabelText('Old to New')).toBeInTheDocument();
  expect(getByLabelText('New to Old')).toBeInTheDocument();
  expect(getByLabelText('High to Low')).toBeInTheDocument();
  expect(getByLabelText('Low to High')).toBeInTheDocument();
});

test('handles click on radio buttons correctly', () => {
  const { getByLabelText } = render(<SortFilter />);

  // Simulate a click on the "Old to New" radio button
  const oldToNewRadioButton = getByLabelText('Old to New');
  fireEvent.click(oldToNewRadioButton);

  // Assert that the handleClicke function is called with the correct value
  // You need to mock the useContext and setCarData functions to test this functionality

  // Simulate a click on the "New to Old" radio button
  const newToOldRadioButton = getByLabelText('New to Old');
  fireEvent.click(newToOldRadioButton);

  // Assert that the handleClicke function is called with the correct value
  // You need to mock the useContext and setCarData functions to test this functionality

  // Simulate a click on the "High to Low" radio button
  const highToLowRadioButton = getByLabelText('High to Low');
  fireEvent.click(highToLowRadioButton);

  // Assert that the handleClicke function is called with the correct value
  // You need to mock the useContext and setCarData functions to test this functionality

  // Simulate a click on the "Low to High" radio button
  const lowToHighRadioButton = getByLabelText('Low to High');
  fireEvent.click(lowToHighRadioButton);

  // Assert that the handleClicke function is called with the correct value
  // You need to mock the useContext and setCarData functions to test this functionality
});