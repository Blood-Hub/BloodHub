import backgroundImage from "../img/garrett-sears-T57t6ZUT2Kc-unsplash.jpg";
import React, { useState, useEffect } from 'react';
import '../styles/BloodCenters.css'
{/*Stephen Rheeder image*/}
{/*Chang Duong image*/}



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
  
  

  const handleSubmit = (e) => {
    e.preventDefault();

    setBloodCenters([]);
    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode({ address: postcode }, (results, status) => {
      if (status === 'OK' && results[0]) {
        const { lat, lng } = results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
      }
    });
  };

  const [ setIsRevealed] = useState(false);
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
  </div>
  
  <div className="overlay"></div>
  <div className="bgimage" style={{ backgroundImage: `url(${backgroundImage})` }}>

  <div className="overlay1"></div>

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
          
          </div>
        </form>
        </div>
        <div className="map-container">
          <div className='map-screen' id="map">
            <ul>
              {bloodCenters.map((center) => (
                <li
                  key={center.place_id}
                  onMouseEnter={() => setHoveredBloodCenter(center)}
                  onMouseLeave={() => setHoveredBloodCenter(null)}
                >
                  <h3>{center.name}</h3>
                  <p>{center.vicinity}</p>
                  <p>{center.formatted_phone_number}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="blood-center-info">
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

