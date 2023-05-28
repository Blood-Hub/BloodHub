module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: ['node_modules'],
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.gif$/,
        type: 'asset/inline',
      },
      {
        test: /\.(ttf|eot|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    alias: {
      config$: './configs/app-config.js',
      react: './vendor/react-master',
    },
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      'bower_components',
      'shared',
      '/shared/vendor/modules',
    ],
  },
};

import { Await, BrowserRouter } from 'react-router-dom';
import { render } from 'react-router-dom';
import Landing from './Landing';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {Screen } from '@testing-library/dom';
import { JSDOM } from 'jsdom';
import { fireEvent } from '@testing-library/react';

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

describe('landing Component', () => {
  beforeAll(() => {
    const { document } = new JSDOM('<!doctype html><html><body></body></html>').window;
    global.document = document;
  });

  afterAll(() => {
    delete global.document;
  });

  
    jest.mock('react-router-dom', () =>{
      const mocknavigate= jest.fn();
      return {
      useNavigate: () => mocknavigate,
    };
  });
  
  it('renders without errors', () =>
  {render(<Landing/>)
    expect(screen.getByText('Welcome to BLO')).toBeInTheDocument();
    expect(screen.getByText('Every Drop saves lives')).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Enter'})).toBeInTheDocument();
  })
})


//  Await act(async() => {
// userEvent.click(screen.getByRole('button', { name: 'Enter' }));
// jest.advanceTimersByTime(1000);
// });

it('calls navigateToHome function and navigates to /home on button click', async () => {
  const navigateToHome = jest.fn();
  const mocknavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    useNavigate: () => mocknavigate
  }));

expect(navigateToHome).toHaveBeenCalledTimes(1);
expect(mocknavigate).toHaveBeenCalledWith();

jest.mock(
  ('../videos/bgvideo.mp4', () => 'test-file-stub')

('react-router-dom', () => { 
  it ('renders without errors', () => {
    render(<landing/>);
    const linkElement = screen.getByText(/Welcome to BloodHub/i);
    expect(linkElement).tobeInTheDocument();
  });

   "jest"; {
    "moduleNameMapper"; {
    "\\.(css|less)$";"identity-obj-proxy",
    "\\.(mp4|webm)$"; "..\jest.config.js"
    }
  }
}));
});
