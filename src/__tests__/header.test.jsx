import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Header from '@/components/Header';

let pathname = '/';
vi.mock('next/navigation', () => ({ usePathname: () => pathname }));

test('marks the current page in the nav', () => {
  pathname = '/music';
  render(<Header />);
  expect(screen.getByRole('link', { name: 'Music' })).toHaveAttribute('aria-current', 'page');
  expect(screen.getByRole('link', { name: 'Home' })).not.toHaveAttribute('aria-current');
});

test('no nav item is active on a news post', () => {
  pathname = '/news/medusa-out-now';
  render(<Header />);
  for (const name of ['Home', 'About', 'Music', 'Contact']) {
    expect(screen.getByRole('link', { name })).not.toHaveAttribute('aria-current');
  }
});
