import { BrowserRouter as Router, Route } from 'react-router-dom';
import { render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter, Routes } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import 'matchmedia-polyfill';
import 'matchmedia-polyfill/matchMedia.addListener';

import Home from '../Home';

jest.mock('react-slick', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const Slider = jest.fn();
Slider.mockImplementation(() => null);

describe('/Home', () => {
  test('renders home component', async () => {
    await render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </MemoryRouter>

    );

    await waitFor(() => {
      const headerElement = screen.getByTestId('h2-test', { exact: false });
      expect(headerElement).toBeInTheDocument();
    });

    const donateButton = screen.getByTestId('custom-button-home');
    expect(donateButton).toBeInTheDocument();
  });
});
