import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders Mall Visitor Counter header', () => {
  render(<App />);
  const titleElement = screen.getByText(/Mall Visitor Counter/i);
  expect(titleElement).toBeInTheDocument();
});

test('increments entry count on Login button click', () => {
  render(<App />);
  const loginButton = screen.getByRole('button', { name: /Login/i });
  const entryCountDisplay = screen.getByText(/People Entered/i).nextSibling;
  
  // Initial entry count should be 0
  expect(entryCountDisplay.textContent).toBe('0');
  
  // Click login
  fireEvent.click(loginButton);
  
  // Entry count should be 1
  expect(entryCountDisplay.textContent).toBe('1');
});

test('increments exit count on Exit button click', () => {
  render(<App />);
  const exitButton = screen.getByRole('button', { name: /Exit/i });
  const exitCountDisplay = screen.getByText(/People Exited/i).nextSibling;
  
  // Initial exit count should be 0
  expect(exitCountDisplay.textContent).toBe('0');
  
  // Click exit
  fireEvent.click(exitButton);
  
  // Exit count should be 1
  expect(exitCountDisplay.textContent).toBe('1');
});
