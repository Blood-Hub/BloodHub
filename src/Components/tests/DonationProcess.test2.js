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

// import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
// import { JSDOM } from 'jsdom';
// import DonationProcess from '../DonationProcess';
// import { response } from 'express';


// beforeAll(() => {
//   const { JSDOMEnvironment } = JSDOM;
//   const dom = new JSDOM('<!doctype html><html><body></body></html>');
//   global.document = dom.window.document;
//   global.window = dom.window;
//   global.navigator = {
//     userAgent: 'node.js',
//   };
// });

// afterAll(() => {
//   delete global.document;
//   delete global.window;
//   delete global.navigator;
// });


// describe('DonationProcess', () => {
//   test('nextPhoto updates state correctly', () => {
//     const { container } = render(<DonationProcess />);
//     const nextPhoto = container.querySelector('.currentImg');

//     // Check if the nextPhoto element exists
//     if (nextPhoto) {
//       fireEvent.click(nextPhoto);

//       expect(container.getAttribute('data-current-img')).toBe(images[4]);
//       expect(container.getAttribute('data-fade')).toBe('true');

//       fireEvent.click(nextPhoto);

     
//       expect(container.getAttribute('data-current-img')).toBe(images[5]);
//       expect(container.getAttribute('data-fade')).toBe('true');
//     } else {
//       // Handle the case when nextPhoto is not found
//      console.log ('Error: Unable to find element with class "next-Photo"');
//     }
    
//   });
//   jest.mock('../img/first.jpeg', () => require('../../__Mocks__/mock-file.js'));
  

// });
