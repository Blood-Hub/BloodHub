import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'

test('renders home component', () => {
	render(<Home />)

	const headerElement = screen.getByText(
		'Donate Blood: Be a Hero, Save Lives Today'
	)
	expect(headerElement).toBeInTheDocument()

	const donateButton = screen.getByText('Donate Here')
	expect(donateButton).toBeInTheDocument()
})
