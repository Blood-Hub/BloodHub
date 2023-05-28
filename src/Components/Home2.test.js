import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from './Home'
import { useState, useEffect } from '@testing-library/react'
import { JSDOM } from 'jsdom';
import JSDOMEnvironment from 'jest-environment-jsdom';

describe('Home', () => {
	beforeAll(() => {
		  const { JSDOMEnvironment } = JSDOM;
		  const dom = new JSDOM('<!doctype html><html><body></body></html>');
		  global.document = dom.window.document;
		  global.window = dom.window;
		  global.navigator = {
		    userAgent: 'node.js',
		  };
		});
		
		afterAll(() => {
		  delete global.document;
		  delete global.window;
		  delete global.navigator;
		});

		it('renders home component', () => {
	render(<Home />);
	const headerElement = screen.getByText
		'Donate Blood: Be a Hero, Save Lives Today'	
	// const headerElement=screen.getByRole('banner');
	expect(headerElement).toBeInTheDocument()

	const donateButton = screen.getByText('Donate Here')
	expect(donateButton).toBeInTheDocument()

	const [showContent,setShowContent]
		=useState(false)
		expect(useState).toBeFalsy

		it('renders correctly', () => {
			const component = render.create(
				<Link page="./bloodcenters"></Link>,
				);
			   let tree = component.toJSON();
			expect(tree).toMatchSnapshot();
			});
		
	});
});


	

	


