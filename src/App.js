import './App.css'
import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import MapComponent from './Components/MapComponent'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/location' element={<MapComponent />} />
			</Routes>
		</div>
	)
}

export default App
