import React from 'react'
import '../styles/Footer.css'
import hand from '../img/handsblood.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faFacebook,
	faTwitter,
	faLinkedin,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons'



const Footer = () => {
	return (
		
		<footer className='footer-shadow'>
			<div className='container py-5'>
				<div className='row'>
					{/* <img src={hand} alt='hands' className='hands' /> */}
					<div class='newsletter-box'>
						<h2>Subscribe to Our Newsletter</h2>
						<p>Stay up to date with the latest news and updates.</p>
						<form>
							<input type='email' placeholder='Enter your email' required />
							<button type='submit'>Subscribe</button>
						</form>
					</div>
					<p className='my-3-footer'>
						Share a little love, donate a little blood. Your act of kindness can
						bring hope and healing to those in need
					</p>
					<div className='social-icons-container'>
						<div className='social-icons'>
							<FontAwesomeIcon icon={faFacebook} />
							<FontAwesomeIcon icon={faTwitter} />
							<FontAwesomeIcon icon={faLinkedin} />
							<FontAwesomeIcon icon={faYoutube} />
							<FontAwesomeIcon icon={faInstagram} />
						</div>
					</div>
					<div className='col-lg-2'>
						<p className='h5 mb-4' style={{ fontWeight: '10' }}>
							Help & Support
						</p>
						<ul className='list-unstyled' style={{ padding: '0' }}>
							<li className='info-item'>
								<span>Contact Us</span>
								<div className='info-content'>
									<p>Call 13 14 95</p>
								</div>
							</li>
							{/* <li className='info-item'>
								<span>Our Story</span>
								<div className='info-content'>
									<p>Here information about our story.</p>
								</div>
							</li> */}
							<li className='info-item'>
								<span>Get in Touch</span>
								<div className='info-content'>
									<p>done-with-github@bloodhub.com</p>
								</div>
							</li>
						</ul>
					</div>

					<div className='col-lg-10 d-flex align-items-center justify-content-center'>
						<small
							id='copyright'
							className='text-center'
							style={{ whiteSpace: 'nowrap' }}>
							&copy; BloodHub, 2023. All rights reserved.
						</small>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
