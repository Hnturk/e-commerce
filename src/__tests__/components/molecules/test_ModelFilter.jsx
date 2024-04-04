import { render, fireEvent } from '@testing-library/react';
import { CarContext } from '../../../contexts/CarContext';
import ModelFilter from '../../../components/molecules/ModelFilter';

test('renders ModelFilter component with correct models', () => {
  const modelData = ['Model A', 'Model B', 'Model C']; // Replace with the actual model data
  const { getByLabelText } = render(
    <CarContext.Provider value={{ modelData }}>
      <ModelFilter />
    </CarContext.Provider>
  );

  // Assert that the ModelFilter component renders with the correct models
  expect(getByLabelText('Model A')).toBeInTheDocument();
  expect(getByLabelText('Model B')).toBeInTheDocument();
  expect(getByLabelText('Model C')).toBeInTheDocument();
});

test('filters car data based on selected models', () => {
  const setCarData = jest.fn();
  const carData = [
    { model: 'Model A', brand: 'Brand A' },
    { model: 'Model B', brand: 'Brand B' },
    { model: 'Model C', brand: 'Brand C' },
  ]; // Replace with the actual car data
  const { getByLabelText } = render(
    <CarContext.Provider value={{ setCarData, carData }}>
      <ModelFilter />
    </CarContext.Provider>
  );

  // Select Model A and Model B
  fireEvent.click(getByLabelText('Model A'));
  fireEvent.click(getByLabelText('Model B'));

  // Assert that the car data is filtered correctly
  expect(setCarData).toHaveBeenCalledWith([
    { model: 'Model A', brand: 'Brand A' },
    { model: 'Model B', brand: 'Brand B' },
  ]);
});

test('filters car data based on selected brands when no models are selected', () => {
  const setCarData = jest.fn();
  const data = [
    { model: 'Model A', brand: 'Brand A' },
    { model: 'Model B', brand: 'Brand B' },
    { model: 'Model C', brand: 'Brand C' },
  ]; // Replace with the actual data
  const selected = new Set(['Brand A', 'Brand B']); // Replace with the actual selected brands
  const { getByLabelText } = render(
    <CarContext.Provider value={{ setCarData, data, selected }}>
      <ModelFilter />
    </CarContext.Provider>
  );

  // Assert that the car data is filtered correctly
  expect(setCarData).toHaveBeenCalledWith([
    { model: 'Model A', brand: 'Brand A' },
    { model: 'Model B', brand: 'Brand B' },
  ]);
});

test('resets car data when no models and brands are selected', () => {
  const setCarData = jest.fn();
  const data = [
    { model: 'Model A', brand: 'Brand A' },
    { model: 'Model B', brand: 'Brand B' },
    { model: 'Model C', brand: 'Brand C' },
  ]; // Replace with the actual data
  const { getByLabelText } = render(
    <CarContext.Provider value={{ setCarData, data }}>
      <ModelFilter />
    </CarContext.Provider>
  );

  // Assert that the car data is reset
  expect(setCarData).toHaveBeenCalledWith([
    { model: 'Model A', brand: 'Brand A' },
    { model: 'Model B', brand: 'Brand B' },
    { model: 'Model C', brand: 'Brand C' },
  ]);
});

test('handles model selection correctly', () => {
  const setSelectedModels = jest.fn();
  const selectedModels = new Set(['Model A']); // Replace with the actual selected models
  const { getByLabelText } = render(
    <CarContext.Provider value={{ setSelectedModels, selectedModels }}>
      <ModelFilter />
    </CarContext.Provider>
  );

  // Deselect Model A
  fireEvent.click(getByLabelText('Model A'));

  // Assert that the selected models are updated correctly
  expect(setSelectedModels).toHaveBeenCalledWith(new Set());
});

test('handles model search correctly', () => {
  const { getByLabelText } = render(
    <CarContext.Provider value={{}}>
      <ModelFilter />
    </CarContext.Provider>
  );

  // Enter "Model A" in the search input
  fireEvent.change(getByLabelText('Search Model'), { target: { value: 'Model A' } });

  // Assert that the search query is updated correctly
  expect(getByLabelText('Search Model')).toHaveValue('Model A');
});