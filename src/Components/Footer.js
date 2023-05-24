import React from 'react'
import '../styles/Footer.css'


const Footer = () => {
	return (
		<footer className='footer-shadow'>
			<div className='container py-5'>
				<div className='row'>
					<div className='col-lg-3'>
						<a href='/' className='d-flex align-items-center p-0 text-dark'>
							<span className='ms-3 h5 font-weight-bold'>BloodHub</span>
						</a>
						<p className='my-3' style={{ width: '250px' }}>
							We are creating High Quality Resources and tools to Aid developers
							during the development of their projects
						</p>
					</div>
					<div className='col-lg-3'>
						<p className='h5 mb-4' style={{ fontWeight: '600' }}>
							Devwares
						</p>
						<ul
							className='list-unstyled'
							style={{ cursor: 'pointer', padding: '0' }}>
							<li>
								<a href='/'>Resources</a>
							</li>
							<li>
								<a href='/'>About Us</a>
							</li>
							<li>
								<a href='/'>Contact</a>
							</li>
							<li>
								<a href='/'>Blog</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-3'>
						<p className='h5 mb-4' style={{ fontWeight: '600' }}>
							Help
						</p>
						<ul
							className='list-unstyled'
							style={{ cursor: 'pointer', padding: '0' }}>
							<li>
								<a href='/'>Support</a>
							</li>
							<li>
								<a href='/'>Sign Up</a>
							</li>
							<li>
								<a href='/'>Sign In</a>
							</li>
						</ul>
					</div>
					<div className='col-lg-3'>
						<p className='h5 mb-4' style={{ fontWeight: '600' }}>
							Products
						</p>
						<ul
							className='list-unstyled'
							style={{ cursor: 'pointer', padding: '0' }}>
							<li>
								<a href='/'>Windframe</a>
							</li>
							<li>
								<a href='/'>Loop</a>
							</li>
							<li>
								<a href='/'>Contrast</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 d-flex justify-content-center align-items-center'>
							<a href='#' className='me-3'>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a href='#' className='me-3'>
								<i className='fab fa-twitter'></i>
							</a>
							<a href='#'>
								<i className='fab fa-instagram'></i>
							</a>
						</div>
						<div className='col-lg-6 d-flex justify-content-center'>
							<small className='text-center' style={{ whiteSpace: 'nowrap', marginLeft: '150px'  }}>
								&copy; BloodHub, 2023. All rights reserved.
							</small>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
