import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/Login';
import '@testing-library/jest-dom';

test('renders learn react link', () => {
  render(<App isMobileDevice={false}/>);
  const loginParagraph = screen.getByText(/Login/i);
  expect(loginParagraph).toBeInTheDocument();
});
