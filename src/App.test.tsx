import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Move History" element', () => {
  render(<App />);
  const moveHistoryElement = screen.getByText(/Move History/i);
  expect(moveHistoryElement).toBeInTheDocument();
});
