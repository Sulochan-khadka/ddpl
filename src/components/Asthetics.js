import React, { useState } from 'react';
import './asthetic.css';
import video from '../assets/videos/sphere-720.mp4';

const Asthetics = () => {
  const [slide, setSlide] = useState(false);

  const changeSlide = () => {
    if (window.scrollY >= 2200) {
      setSlide(true);
      console.log(window.scrollY);
    } else setSlide(false);
  };

  window.addEventListener('scroll', changeSlide);
  return (
    <div className='asthetic-container'>
      <div className='asthetic-title-container'>
        <div className={`asthetic-title-left  ${slide ? 'slide-left' : ''}`}>
          Designing Spaces
        </div>
        <div className={`asthetic-title-right  ${slide ? 'slide-right' : ''}`}>
          Defining Lifestyles
        </div>
      </div>
      <div className='video-container'>
        <video autoPlay muted loop className='hero-vid'>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Asthetics;
