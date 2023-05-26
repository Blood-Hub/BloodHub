import React, { useState, useEffect } from 'react'
import '../styles/Home.css'
import 'slick-carousel/slick/slick.css' // Import the carousel styles
import 'slick-carousel/slick/slick-theme.css' // Import the carousel theme styles
import Slider from 'react-slick'
import { Routes, Route } from 'react-router-dom'
import hospital01 from '../videos/hospital01.mp4'
import hospital03 from '../videos/hospital03.mp4'
import { CSSTransition } from 'react-transition-group'
import { useLocation } from 'react-router-dom'

const Home = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 4000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	}

	const [showContent, setShowContent] = useState(false)
	const location = useLocation()

	useEffect(() => {
		if (location.pathname === '/home') {
			setShowContent(true)
		}
	}, [location.pathname])

	return (
		<>
			<header>
				<div className='header-banner'>
					<Routes>
						<Route path='/home' />
					</Routes>
				</div>
			</header>

			<CSSTransition
				in={showContent}
				timeout={4000}
				classNames='fade'
				unmountOnExit>
				<div className='carousel-block'>
					<Slider {...settings}>
						<div>
							<div className='slide-container-home'>
								<video
									autoPlay
									muted
									loop
									style={{
										width: '100%',
										height: '600px',
										objectFit: 'cover',
									}}>
									<source src={hospital01} type='video/mp4' />
								</video>
								<div className='slide-content-home'>
									<h2>Donate Blood: Be a Hero, Save Lives Today! </h2>
									<p> Every drop counts, every donation matters</p>
								</div>
							</div>
						</div>

						<div>
							<div className='slide-container-home'>
								<video
									autoPlay
									muted
									loop
									style={{
										width: '100%',
										height: '600px',
										objectFit: 'cover',
									}}>
									<source src={hospital03} type='video/mp4' />
								</video>
								<div className='slide-content-home'>
									<h2>Donate Blood: Be a Hero, Save Lives Today! </h2>
									<p> Join us and be a part of the lifesaving journey.</p>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</CSSTransition>
		</>
	)
}

export default Home
