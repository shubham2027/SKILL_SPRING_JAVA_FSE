import { render, screen } from '@testing-library/react';
import App from './App';

test('renders github repositories header', () => {
  render(<App />);
  const headerElement = screen.getByText(/GitHub Repositories for techiesyed/i);
  expect(headerElement).toBeInTheDocument();
});
