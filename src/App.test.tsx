import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('the header is rendered', () => {
  render(<App />);
  const headerElement = screen.getByText(/Roosevelt/i);
  expect(headerElement).toBeInTheDocument();
});
