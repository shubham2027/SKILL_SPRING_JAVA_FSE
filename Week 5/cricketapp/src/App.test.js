import { render, screen } from '@testing-library/react';
import App from './App';

test('renders cricket application heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Cricket Application/i);
  expect(headingElement).toBeInTheDocument();
});

