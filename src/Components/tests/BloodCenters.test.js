import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import BloodCenters from '../BloodCenters';

describe('BloodCenters', () => {
  test('renders blood center list correctly', () => {
    
    render(<BloodCenters />);

    
    const bloodCenterItem = screen.getByTestId('blood-center-item');
    expect(bloodCenterItem).toBeInTheDocument();

   
    const searchText = 'Blood Donation location Finder';
    const textElement = screen.getByText(searchText);
    expect(textElement).toBeInTheDocument();

    
  });
});
