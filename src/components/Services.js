import React, { useState } from 'react';
import video1 from '../assets/videos/production_id_4440931 (1080p).mp4';
import { FaArrowRight } from 'react-icons/fa';
import './services.css';
const Services = () => {
  const [fix, setFix] = useState(false);

  const fixSidebar = () => {
    if (window.scrollY >= 1550 && window.scrollY <= 2530) {
      setFix(true);
    } else setFix(false);
  };

  window.addEventListener('scroll', fixSidebar);
  return (
    <div className='service-container'>
      <div className={fix ? 'static-part fix' : 'static-part'}>
        <div className='static-title'>Our Services</div>
        <div className='static-desc'>
          We help enterprises transform their innovative ideas into successful
          products from scratch.
        </div>
        <div className='static-desc'>
          {' '}
          From custom product and web development to migrating legacy systems to
          modern and efficient Jamstack architecture, we take care of the
          technical complexities, so your team can focus on what you do best.
        </div>
      </div>
      <div className='scroll-part'>
        <div className='scroll-container'>
          <div className='card-title'>This is a dummy video </div>
          <video autoPlay muted loop className='card-video'>
            <source src={video1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='card-readmore-container'>
            <div className='card-readmore'>Read More</div>
            <FaArrowRight />
          </div>
        </div>
        <div className='scroll-container'>
          <div className='card-title'>This is a dummy video </div>
          <video autoPlay muted loop className='card-video'>
            <source src={video1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='card-readmore-container'>
            <div className='card-readmore'>Read More</div>
            <FaArrowRight />
          </div>
        </div>
        <div className='scroll-container'>
          <div className='card-title'>This is a dummy video </div>
          <video autoPlay muted loop className='card-video'>
            <source src={video1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='card-readmore-container'>
            <div className='card-readmore'>Read More</div>
            <FaArrowRight />
          </div>
        </div>
        <div className='scroll-container'>
          <div className='card-title'>This is a dummy video </div>
          <video autoPlay muted loop className='card-video'>
            <source src={video1} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          <div className='card-readmore-container'>
            <div className='card-readmore'>Read More</div>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
