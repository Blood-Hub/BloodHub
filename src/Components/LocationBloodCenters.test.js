import React, { useState } from 'react';
import { render } from '@testing-library/react';

test('find blood donation location', () => {
  function TestComponent() {
    const [postcode, setPostcode] = useState('');
    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [bloodCenters, setBloodCenters] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [hoveredBloodCenter, setHoveredBloodCenter] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
    
  }

  render(<TestComponent />); 
});
