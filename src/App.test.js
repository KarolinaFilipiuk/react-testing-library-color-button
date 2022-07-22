import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';
import {
  FIRST_COLOR,
  SECOND_COLOR,
  FIRST_COLOR_WITH_SPACES,
  SECOND_COLOR_WITH_SPACES,
} from './colors';

test('button has correct initial color', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: `Change to ${SECOND_COLOR_WITH_SPACES}`,
  });

  expect(colorButton).toHaveStyle({ backgroundColor: FIRST_COLOR });

  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: SECOND_COLOR });
  expect(colorButton).toHaveTextContent(`Change to ${FIRST_COLOR_WITH_SPACES}`);
});

test('initial conditions', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: `Change to ${SECOND_COLOR_WITH_SPACES}`,
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button on first click and enables on second click', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: `Change to ${SECOND_COLOR_WITH_SPACES}`,
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);

  expect(colorButton).toBeDisabled();
  expect(checkbox).toBeChecked();

  fireEvent.click(checkbox);

  expect(colorButton).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test(`Disabled button has gray background and reverts to ${FIRST_COLOR_WITH_SPACES}`, () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: `Change to ${SECOND_COLOR_WITH_SPACES}`,
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: FIRST_COLOR });
});

test(`Disabled button has gray background and reverts to ${SECOND_COLOR_WITH_SPACES}`, () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {
    name: `Change to ${SECOND_COLOR_WITH_SPACES}`,
  });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(colorButton);

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({ backgroundColor: SECOND_COLOR });
});

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
