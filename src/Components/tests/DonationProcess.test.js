import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DonationProcess from '../DonationProcess';

describe('DonationProcess', () => {
  test('nextPhoto updates state correctly', () => {
    const { container } = render(<DonationProcess />);
    const nextButton = container.querySelector('.next-button');

    // Check if the nextButton element exists
    if (nextButton) {
      fireEvent.click(nextButton);

      expect(container.getAttribute('data-current-img')).toBe(images[4]);
      expect(container.getAttribute('data-fade')).toBe('true');

      fireEvent.click(nextButton);

      expect(container.getAttribute('data-current-img')).toBe(images[5]);
      expect(container.getAttribute('data-fade')).toBe('true');
    } else {
      // Handle the case when nextButton is not found
      throw new Error('Unable to find element with class "next-button"');
    }
  });
});
