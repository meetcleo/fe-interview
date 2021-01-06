import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome logo', () => {
  render(<App />);
  const imgElement = screen.getByAltText(/Welcome!/i);
  expect(imgElement).toBeInTheDocument();
});
