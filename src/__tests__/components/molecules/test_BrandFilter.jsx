import { render, fireEvent } from '@testing-library/react';
import { CarContext } from '../../../contexts/CarContext';
import BrandFilter from '../../../components/molecules/BrandFilter';

test('renders BrandFilter component with correct brands', () => {
  const brandData = ['Brand A', 'Brand B', 'Brand C']; // Replace with the actual brand data
  const selected = new Set(['Brand A']); // Replace with the actual selected brands
  const { getByLabelText, getByText } = render(
    <CarContext.Provider value={{ brandData, selected }}>
      <BrandFilter />
    </CarContext.Provider>
  );

  // Assert that the BrandFilter component renders with the correct brands
  brandData.forEach((brand) => {
    const brandCheckbox = getByLabelText(brand);
    expect(brandCheckbox).toBeInTheDocument();
  });
});

test('updates selected brands when brand checkbox is clicked', () => {
  const brandData = ['Brand A', 'Brand B', 'Brand C']; // Replace with the actual brand data
  const selected = new Set(['Brand A']); // Replace with the actual selected brands
  const setCarData = jest.fn();
  const setModelData = jest.fn();
  const setSelected = jest.fn();
  const { getByLabelText } = render(
    <CarContext.Provider value={{ brandData, selected, setCarData, setModelData, setSelected }}>
      <BrandFilter />
    </CarContext.Provider>
  );

  // Simulate clicking on a brand checkbox
  const brandCheckbox = getByLabelText('Brand B');
  fireEvent.click(brandCheckbox);

  // Assert that the selected brands are updated
  expect(setSelected).toHaveBeenCalledWith(new Set(['Brand A', 'Brand B']));
});

test('filters car data when brand checkbox is clicked', () => {
  const brandData = ['Brand A', 'Brand B', 'Brand C']; // Replace with the actual brand data
  const selected = new Set(['Brand A']); // Replace with the actual selected brands
  const data = [
    { brand: 'Brand A', model: 'Model X' },
    { brand: 'Brand B', model: 'Model Y' },
    { brand: 'Brand C', model: 'Model Z' },
  ]; // Replace with the actual car data
  const setCarData = jest.fn();
  const setModelData = jest.fn();
  const setSelected = jest.fn();
  const { getByLabelText } = render(
    <CarContext.Provider value={{ brandData, selected, data, setCarData, setModelData, setSelected }}>
      <BrandFilter />
    </CarContext.Provider>
  );

  // Simulate clicking on a brand checkbox
  const brandCheckbox = getByLabelText('Brand B');
  fireEvent.click(brandCheckbox);

  // Assert that the car data is filtered correctly
  expect(setCarData).toHaveBeenCalledWith([{ brand: 'Brand A', model: 'Model X' }, { brand: 'Brand B', model: 'Model Y' }]);
});

test('updates brand search query when search input is changed', () => {
  const brandData = ['Brand A', 'Brand B', 'Brand C']; // Replace with the actual brand data
  const selected = new Set(['Brand A']); // Replace with the actual selected brands
  const setQuery = jest.fn();
  const { getByLabelText } = render(
    <CarContext.Provider value={{ brandData, selected }}>
      <BrandFilter />
    </CarContext.Provider>
  );

  // Simulate changing the search input value
  const searchInput = getByLabelText('Search Brand');
  fireEvent.change(searchInput, { target: { value: 'Brand' } });

  // Assert that the brand search query is updated
  expect(setQuery).toHaveBeenCalledWith('Brand');
});