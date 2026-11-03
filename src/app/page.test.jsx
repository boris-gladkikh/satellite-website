import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Homepage from './page';
import Navigation from '@/components/Navigation';

vi.mock('next/navigation', () => ({ usePathname: () => '/' }));

test('renders the homepage heading', () => {
  render(<Homepage />);
  expect(screen.getByRole('heading', { name: /homepage/i })).toBeInTheDocument();
});

test('navigation marks the current page as active', () => {
  render(<Navigation />);
  expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('link', { name: /music/i })).not.toHaveAttribute('aria-current');
});
