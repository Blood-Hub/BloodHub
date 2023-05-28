import backgroundImage from "../img/garrett-sears-T57t6ZUT2Kc-unsplash.jpg";
import React, { useState, useEffect } from 'react';
import '../styles/BloodCenters.css';



const DEFAULT_LATITUDE = 51.5074; // Example default latitude
const DEFAULT_LONGITUDE = -0.1278; 

const BloodCenters = () => {
  const [postcode, setPostcode] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [bloodCenters, setBloodCenters] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [hoveredBloodCenter, setHoveredBloodCenter] = useState(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isValidPostcode, setIsValidPostcode] = useState(true);
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setBloodCenters([]);
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: postcode }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const { lat, lng } = results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
        setIsValidPostcode(true);
      }
      else {
        
        setIsValidPostcode(false);
      }

    });
  };

  const [isRevealed, setIsRevealed] = useState(false);
  useEffect(() => {
    if (window.google && window.google.maps) {
      const mapOptions = {
        center: { lat: latitude || DEFAULT_LATITUDE, lng: longitude || DEFAULT_LONGITUDE },
        zoom: 13,
      };

      const mapInstance = new window.google.maps.Map(document.getElementById('map'), mapOptions);
      setMap(mapInstance);

      if (latitude && longitude) {
        new window.google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: mapInstance,
          icon: {
            path: window.google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            fillColor: 'green',
            fillOpacity: 1,
            strokeWeight: 0,
            scale: 6
          },
          optimized: false,
          zIndex: 100,
        });

        const placesService = new window.google.maps.places.PlacesService(mapInstance);
        const request = {
          location: { lat: latitude, lng: longitude },
          radius: 5000,
          keyword: 'blood center',
        };

        placesService.nearbySearch(request, (results, status) => {
          if (status === 'OK') {
            setBloodCenters(results);
          }
        });
      }
    }
  }, [latitude, longitude]);

 

  useEffect(() => {
    if (map && bloodCenters.length > 0) {
      const newMarkers = bloodCenters.map((center) => {
        const marker = new window.google.maps.Marker({
          position: {
            lat: center.geometry.location.lat(),
            lng: center.geometry.location.lng(),
          },
          map: map,
        });

        marker.addListener('mouseover', () => {
          setHoveredBloodCenter(center);
        });

        marker.addListener('mouseout', () => {
          setHoveredBloodCenter(null);
        });

        return marker;
      });

      setMarkers(newMarkers);
      setIsRevealed(true);
      
    }
  }, [map, bloodCenters]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e) => {
    setPostcode(e.target.value);
  };




return (
  <div>
    <div className="blood-center-locator">
    <div className="overlay">
    {/* <svg  cfill="#FF0000"   version="1.1" id="Layer_1" viewBox="0 0 226.194 226.194">
        <g>
          <g>
            <g>
              <path d="M116.157,1.334c-1.535-1.779-4.585-1.779-6.12,0c-3.34,3.875-81.789,95.425-81.789,140.67
                c0,46.423,38.062,84.19,84.849,84.19s84.849-37.766,84.849-84.189C197.946,96.759,119.497,5.208,116.157,1.334z M113.097,218.113
                c-42.33,0-76.768-34.142-76.768-76.109c0-37.469,62.121-114.197,76.768-131.763c14.646,17.566,76.768,94.295,76.768,131.763
                C189.865,183.971,155.427,218.113,113.097,218.113z"/>
              <path d="M125.218,100.941h-24.241v24.242H76.734v24.242h24.242v24.242h24.242v-24.242h24.242v-24.242h-24.242V100.941z
                 M141.38,133.264v8.081h-24.242v24.242h-8.081v-24.242H84.815v-8.081h24.242v-24.242h8.081v24.242H141.38z"/>
              <path d="M134.641,52.235c-1.239-1.859-3.746-2.362-5.603-1.12c-1.857,1.237-2.358,3.746-1.12,5.603l24.242,36.364
                c0.779,1.168,2.06,1.799,3.366,1.799c0.769,0,1.549-0.219,2.237-0.679c1.857-1.237,2.358-3.746,1.12-5.603L134.641,52.235z"/>
            </g>
          </g>
        </g>
      </svg> */}
  </div>
  <div className="overlay"></div>
  <div className="overlay1"></div>
  <div className="bgimage" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="container1">
      <div className="main-content">
        <h2 className='h2-text'>Blood Donation location Finder</h2>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
        
          <div className="enter-pc">
          <input
          type="text"
          placeholder="Enter postcode"
          className={postcode === '' && isFocused ? 'caret' : ''}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
        />
          <button className='search' type="submit"><h4>Search</h4></button>
          {!isValidPostcode && <p className="error-message">Invalid postcode. Please try again.</p>}
          </div>
          
        </form>
        </div>
        <div className="map-container">
          <div className='map-screen' id="map">
          <ul data-testid="blood-center-item">              
          {bloodCenters.map((center) => (
                <li className="hovered"
                  key={center.place_id}
                  data-testid="blood-center-item"
                  onMouseEnter={() => setHoveredBloodCenter(center)}
                  onMouseLeave={() => setHoveredBloodCenter(null)}
                >
                  <h3 >{center.name}</h3>
                  <p>{center.vicinity}</p>
                  <p>{center.formatted_phone_number}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="blood-center-info ">
          <h2 className='location'>Location information will show below</h2>
            {hoveredBloodCenter && (
              <div className="blood-center-info-window">
                
                <h3>{hoveredBloodCenter.name}</h3>
                <p>{hoveredBloodCenter.vicinity}</p>
                <p>{hoveredBloodCenter.formatted_phone_number}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
   

  
    

  );
};

export default BloodCenters;

