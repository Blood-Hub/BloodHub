import React from 'react';
import { render, screen } from '@testing-library/react';
//import userEvent from '@testing-library/user-event';
import WhygiveBlood, { getRandomInt } from './WhygiveBlood';

import 'source-map-support/register';

describe('WhygiveBlood Component', () => {
  const mockRandom = jest.spyOn(Math, 'random').mockReturnValue(0.5);

  beforeEach(() => {
    mockRandom.mockClear();
  });

  test('getRandomInt returns the correct value', () => {
    const min = 18;
    const max = 70;
    const randomInt = getRandomInt(min, max);

    expect(randomInt).toBeGreaterThanOrEqual(min);
    expect(randomInt).toBeLessThanOrEqual(max);
    expect(mockRandom).toHaveBeenCalledTimes(1);
  });

  test('data state is populated correctly', () => {
    render(<WhygiveBlood />);

    const seriesCount = 2;
    const serieLength = 5;

    const seriesLabels = screen.getAllByLabelText((label) =>
      series.some((serie) => serie.includes(Number(label.textContent)))
    );
    const chartItems = screen.getAllByTestId('Charts--item');

    expect(seriesLabels.length).toBe(seriesCount);
    expect(chartItems.length).toBe(seriesCount * serieLength);
  });

  // test('animation is triggered on initial click', () => {
  //   render(<WhygiveBlood />);

  //   const initialImage = screen.getByTestId('slideshow-placeholder');
  //   userEvent.click(initialImage);

  //   expect(screen.queryByTestId('animation-triggered')).toBeInTheDocument();
  // });
});
