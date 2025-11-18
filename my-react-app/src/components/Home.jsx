import React from 'react'
import Navbar from './Navbar';
import HeroBanner from '../assets/hero-banner.jpg'
import Section1 from './Section1';
import Body from './Body';

const Home = () => {
  
  return (
    <div className='w-full' >
      
      
      <img 
        src={HeroBanner} 
        alt="Food delivery banner"
        className="w-full h-auto object-cover"
      />

      
      <Navbar />
      
      <Body />

    </div>
  )
}

export default Home;
