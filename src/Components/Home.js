import React from 'react'
import '../styles/Home.css'
import Logo from './logo'

const Home = () => {
  return (
    <div className='home-banner'>
      <div className='logo-container'>
        <Logo />
      </div>
      <div className='home-content'>
        Home
      </div>
    </div>
  );
}

export default Home;