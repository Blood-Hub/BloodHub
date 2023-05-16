import React from 'react'

const MapComponent = () => {
  return (
    <div>MapComponent</div>
  )
}

export default MapComponent


// import React, { useEffect, useState } from 'react'
// import { useLoadScript } from '@googlemaps/react-wrapper'

// const MapComponent = ({ coordinates }) => {
// 	const { isLoaded } = useLoadScript({
// 		googleMapsApiKey: process.env.REACT_APP_API_KEY, // Replace with your actual API key
// 		libraries: ['maps'],
// 	})

// 	useEffect(() => {
// 		if (isLoaded) {
// 			initMap()
// 		}
// 	}, [isLoaded])

// 	const initMap = () => {
// 		const map = new window.google.maps.Map(document.getElementById('map'), {
// 			zoom: 8,
// 			center: coordinates[0], // Set the center of the map to the first coordinate
// 		})

// 		coordinates.forEach((coordinate) => {
// 			new window.google.maps.Marker({
// 				position: coordinate,
// 				map,
// 			})
// 		})
// 	}

// 	return (
// 		<div>
// 			{isLoaded ? (
// 				<div id='map' style={{ height: '400px', width: '100%' }} />
// 			) : (
// 				<div>Loading...</div>
// 			)}
// 		</div>
// 	)
// }

// export default MapComponent
