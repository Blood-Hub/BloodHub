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
								Blood Centers
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/benefits' className='nav-link'>
								Benefits
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
