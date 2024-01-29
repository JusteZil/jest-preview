import { render, screen } from '@testing-library/react';
import preview from 'jest-preview';
import App from '../App';

describe('App', () => {
  it('should render button', () => {
    render(<App />);

    // Open http://localhost:3336 to see preview
    // Require to run `jest-preview` server before
    preview.debug();

    expect(screen.getByRole('button')).toBeVisible();
  });
});
