const apiKey = process.env.REACT_APP_API_KEY
const places = [
	{ latitude: 40.88378, longitude: -73.880612 }, // Place 1
	{ latitude: 34.052235, longitude: -118.243683 }, // Place 2
]

const getGeocodeData = async (place) => {
	try {
		const response = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${place.latitude},${place.longitude}&key=${apiKey}`
		)
		const data = await response.json()
		console.log('Geocode Data:', data) // Add this line to inspect the data
		return data
	} catch (error) {
		throw new Error('Error calling Google API:', error)
	}
}

export const fetchGeocodeDataForPlaces = async () => {
	try {
		const geocodeDataArray = await Promise.all(
			places.map((place) => getGeocodeData(place))
		)

		console.log('Geocode Data Array:', geocodeDataArray) // Add this line to inspect the data array

		const coordinates = geocodeDataArray.map((data) => {
			const { lat, lng } = data.results[0].geometry.location
			return { lat, lng }
		})

		console.log('Coordinates:', coordinates) // Add this line to inspect the coordinates

		return coordinates
	} catch (error) {
		console.error('Error fetching geocode data:', error)
		return []
	}
}

export default fetchGeocodeDataForPlaces
