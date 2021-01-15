import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const element = screen.getByText(/Heroes of Warcraft/i);
  expect(element).toBeDefined();
});
