import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import BloodCenters from './Components/BloodCenters'
import WhygiveBlood from './Components/WhygiveBlood'
import WhogiveBlood from './Components/WhogiveBlood'
import Eligibility from './Components/Eligibility'
import DonationProcess from './Components/DonationProcess'
import Footer from './Components/Footer'
import Landing from './Components/Landing'

function App() {
	const [isLandingPage, setIsLandingPage] = useState(true)

	const navigateToHome = () => {
		setIsLandingPage(false)
	}

	return (
		<div>
			{!isLandingPage && <NavBar />}
			<Routes>
				<Route path='/' element={<Landing navigateToHome={navigateToHome} />} />
				{!isLandingPage && <Route path='/home/*' element={<Home />} />}
				{!isLandingPage && (
					<Route path='/bloodcenters' element={<BloodCenters />} />
				)}
				{!isLandingPage && (
					<Route path='/why-give-blood' element={<WhygiveBlood />} />
				)}
				{!isLandingPage && (
					<Route path='/who-can-give-blood' element={<WhogiveBlood />} />
				)}
				{!isLandingPage && (
					<Route path='/eligibility' element={<Eligibility />} />
				)}
				{!isLandingPage && (
					<Route path='/donation-process' element={<DonationProcess />} />
				)}
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>

			{!isLandingPage && <Footer />}
		</div>
	)
}

export default App
