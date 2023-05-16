import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

const NavBar = () => {
	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					Blood Hub
				</Link>
				<Navbar.Toggle aria-controls='navbarNav' />
				<Navbar.Collapse id='navbarNav'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<Link to='/bloodcenters' className='nav-link'>
								Where to donate
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/why-give-blood' className='nav-link'>
								Why give Blood
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/who-can-give-blood' className='nav-link'>
								Who can give blood
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/eligibility' className='nav-link'>
								Eligibility Quiz
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/donation-process' className='nav-link'>
								The donation process
							</Link>
						</li>
						{/* Add more navigation links as needed */}
					</ul>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}

export default NavBar
