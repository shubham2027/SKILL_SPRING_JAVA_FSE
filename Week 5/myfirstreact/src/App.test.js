import { render, screen } from '@testing-library/react';
import App from './App';

test('renders items information header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Items Information/i);
  expect(headerElement).toBeInTheDocument();
});
