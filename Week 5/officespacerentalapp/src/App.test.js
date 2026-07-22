import { render, screen } from '@testing-library/react';
import App from './App';

test('renders office space heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Affordable Range/i);
  expect(headingElement).toBeInTheDocument();
});


