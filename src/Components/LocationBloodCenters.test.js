import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { Await, BrowserRouter } from 'react-router-dom'; n
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Screen } from '@testing-library/dom';
import { JSDOM } from 'jsdom';

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
