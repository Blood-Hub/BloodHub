import './App.css'
import React from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import BloodCenters from './Components/LocationBloodCenters'
import WhygiveBlood from './Components/WhygiveBlood'
import WhogiveBlood from './Components/WhogiveBlood'
import Eligibility from './Components/Eligibility'
import DonationProcess from './Components/DonationProcess'
import Footer from './Components/Footer'
import Landing from './Components/Landing'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
	return (
		<div>
			<NavBar />

			<Routes>
				
				
				<Route path='/' element={<Landing />} />
				<Route path='/home' element={<Home />} />
				<Route path='/bloodcenters' element={<BloodCenters />} />
				<Route path='/why-give-blood' element={<WhygiveBlood />} />
				<Route path='/who-can-give-blood' element={<WhogiveBlood />} />
				<Route path='/eligibility' element={<Eligibility />} />
				<Route path='/donation-process' element={<DonationProcess />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
