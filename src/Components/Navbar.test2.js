import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './NavBar.js';


describe('NavBar', () => {
    test('navbars links correctly', () => {
        render(<Navbar/>);
        expect(screen.getByText('Where to donate')).toBeInTheDocument()
        expect(screen.getByText('Why give blood')).toBeInTheDocument()
        expect(screen.getByText('Who can give blood')).toBeInTheDocument()
        expect(screen.getByText('The donation process')).toBeInTheDocument()    
    })

    it('navigates to correct routes when navbar links are clicked', () => {
        render(<Navbar/>);

        const bloodCentersLink = screen.getByText('Where to donate')
        const whyGiveBloodLink = screen.getByText('Why give Blood')
        const whoCanGiveBloodLink = screen.getByText('Who can give blood')
        const eligibilityLink = screen.getByText('Eligibility Quiz')
        const donationProcessLink = screen.getByText('The donation process')
    
        expect(bloodCentersLink).toHaveAttribute('href', '/bloodcenters')
        expect(whyGiveBloodLink).toHaveAttribute('href', '/why-give-blood')
        expect(whoCanGiveBloodLink).toHaveAttribute('href', '/who-can-give-blood')
        expect(eligibilityLink).toHaveAttribute('href', '/eligibility')
        expect(donationProcessLink).toHaveAttribute('href', '/donation-process')
      })
    });