import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, act } from '@testing-library/react';
import Landing from '../Landing';

jest.useFakeTimers(); 

test('should navigate to why page', () => {
  const navigateToHome = jest.fn();

  const { getByText } = render(
    <BrowserRouter>
      <Landing navigateToHome={navigateToHome} />
    </BrowserRouter>
  );

  fireEvent.click(getByText('Enter'));

  act(() => {
    jest.runAllTimers();
  });

  expect(navigateToHome).toHaveBeenCalled();
});
