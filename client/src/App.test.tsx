import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import AuthModal from "./components/big/Auth/UI/AuthModal";

test('renders learn react link', () => {
  render(<AuthModal />);
  const linkElement = screen.getByText(/регистрация/i);
  expect(linkElement).toBeInTheDocument();
});
