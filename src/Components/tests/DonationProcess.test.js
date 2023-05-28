import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DonationProcess from '../DonationProcess';


describe('DonationProcess', () => {
  test('carousel changes on click', () => {
    render(<DonationProcess />);

   
    const initialImage = screen.getByAltText('Slideshow Blood Donation');
    const initialImageSrc = initialImage.src;
    const initialTextElement = screen.getByTestId('image-text'); 
    const initialTextContent = initialTextElement.textContent;

  
    userEvent.click(initialImage);

    
    const afterClickImage = screen.getByAltText('Slideshow Blood Donation');
    const afterClickTextElement = screen.getByTestId('image-text');
    const afterClickTextContent = afterClickTextElement.textContent;

    
    expect(afterClickImage.src).not.toBe(initialImageSrc);
    expect(afterClickTextContent).not.toBe(initialTextContent);
  });
});


