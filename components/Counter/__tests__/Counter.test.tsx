import { expect, describe, it, afterEach, beforeEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  // Clean up after each test
  afterEach(() => {
    cleanup();
  });

  it('renders the Counter component with initial count of 0', () => {
    expect(screen.getByText('0')).toBeDefined();
  });

  it('increments count when increment button is clicked', () => {
    const incrementButton = screen.getByText('Increment');
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeDefined();
  });

  it('decrements count when decrement button is clicked', () => {
    const decrementButton = screen.getByText('Decrement');
    fireEvent.click(decrementButton);
    expect(screen.getByText('-1')).toBeDefined();
  });

  it('can increment and decrement multiple times', () => {
    const incrementButton = screen.getByText('Increment');
    const decrementButton = screen.getByText('Decrement');

    // Increment twice
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('2')).toBeDefined();

    // Decrement once
    fireEvent.click(decrementButton);
    expect(screen.getByText('1')).toBeDefined();
  });
});
