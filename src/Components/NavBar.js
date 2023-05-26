import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import '../styles/NavBar.css'
import Logo from '../Components/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLocationDot,
	faHeartPulse,
	faDroplet,
	faClipboardQuestion,
	faArrowAltCircleRight,
} from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
	return (
		<Navbar
			expand='lg'
			className='navbar-transparent'
			style={{ marginTop: '20px' }}>
			<div className='container'>
				<Link to='/home' className='navbar-brand'>
					<Logo style={{ width: '50px', height: '50px' }} />
				</Link>
				<Navbar.Toggle aria-controls='navbarNav' />
				<Navbar.Collapse id='navbarNav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<Link to='/bloodcenters' className='nav-link'>
								<FontAwesomeIcon icon={faLocationDot} className='nav-icon' />
								Where to donate
							</Link>
						</li>

						<li className='nav-item'>
							<Link to='/why-give-blood' className='nav-link'>
								<FontAwesomeIcon icon={faHeartPulse} className='nav-icon' />
								Why give Blood
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/who-can-give-blood' className='nav-link'>
								<FontAwesomeIcon icon={faDroplet} className='nav-icon' />
								Who can give blood
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/eligibility' className='nav-link'>
								<FontAwesomeIcon
									icon={faClipboardQuestion}
									className='nav-icon'
								/>
								Eligibility Quiz
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/donation-process' className='nav-link'>
								<FontAwesomeIcon
									icon={faArrowAltCircleRight}
									className='nav-icon'
								/>
								The donation process
							</Link>
						</li>
					</ul>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}

export default NavBar
