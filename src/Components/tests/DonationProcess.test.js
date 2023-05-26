import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DonationProcess from '../DonationProcess';

describe('DonationProcess', () => {
  test('nextPhoto updates state correctly', () => {
    const { container } = render(<DonationProcess />);
    const nextButton = container.querySelector('.next-button');

    fireEvent.click(nextButton);

    expect(container.getAttribute('data-current-img')).toBe('First');
    expect(container.getAttribute('data-fade')).toBe('true');

    fireEvent.click(nextButton);

    expect(container.getAttribute('data-current-img')).toBe('Hero');
    expect(container.getAttribute('data-fade')).toBe('true');
  });
});
