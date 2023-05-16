/* This code is intended for future use to activate the user's current location without the need to search by postal code*/

// import React, { useState, useEffect } from 'react'
// import GoogleMapReact from 'google-map-react'

// const MapMarker = ({ lat, lng }) => (
// 	<div
// 		style={{
// 			width: '20px',
// 			height: '20px',
// 			backgroundColor: 'red',
// 			borderRadius: '50%',
// 		}}
// 		lat={lat}
// 		lng={lng}
// 	/>
// )

// const Map = ({ center }) => (
// 	<div style={{ height: '80vh' }}>
// 		<div style={{ height: 'calc(100vh - 50px)' }}>
// 			<GoogleMapReact
// 				bootstrapURLKeys={{
// 					key: 'AIzaSyCUYh-KDcRyNE_plHrUf9RBKBLd__IX7IQ',
// 				}}
// 				center={center}
// 				defaultZoom={14}>
// 				<MapMarker lat={center.lat} lng={center.lng} />
// 			</GoogleMapReact>
// 		</div>
// 	</div>
// )

// const Home = () => {
// 	const [center, setCenter] = useState({ lat: 0, lng: 0 })
// 	// const [postalCode, setPostalCode] = useState('')
// 	const [keyword, setKeyword] = useState('')

// 	// const handlePostalCodeChange = (event) => {
// 	// 	setPostalCode(event.target.value)
// 	// }

// 	const handleKeywordChange = (event) => {
// 		setKeyword(event.target.value)
// 	}

// 	const handleSearch = async () => {
// 		// Fetch the location details from the postal code
// 		try {
// 			const response = await fetch(
// 				`https://maps.googleapis.com/maps/api/geocode/json?address=${keyword}&key=AIzaSyCUYh-KDcRyNE_plHrUf9RBKBLd__IX7IQ`
// 			)

// 			if (response.ok) {
// 				const data = await response.json()
// 				const location = data.results[0].geometry.location
// 				setCenter({ lat: location.lat, lng: location.lng })
// 			} else {
// 				throw new Error('Failed to fetch location data')
// 			}
// 		} catch (error) {
// 			console.error(error)
// 		}
// 	}

// 	useEffect(() => {
// 		// Get the user's current location geolo api
// 		const getCurrentLocation = () => {
// 			navigator.geolocation.getCurrentPosition(
// 				(position) => {
// 					const { latitude, longitude } = position.coords
// 					setCenter({ lat: latitude, lng: longitude })
// 				},
// 				(error) => {
// 					console.error('Error getting current location:', error)
// 				}
// 			)
// 		}

// 	// call my location
// 		getCurrentLocation()
// 	}, [])

// 	return (
// 		<div>
// 			<div>
// 				{/* <input
// 					type='text'
// 					value={postalCode}
// 					onChange={handlePostalCodeChange}
// 					placeholder='Enter postal code'
// 				/> */}
// 				<input
// 					type='text'
// 					value={keyword}
// 					onChange={handleKeywordChange}
// 					placeholder='Enter a keyword'
// 				/>

// 				<button onClick={handleSearch}>Search</button>
// 			</div>
// 			<Map center={center} />
// 		</div>
// 	)
// }

// export default Home
