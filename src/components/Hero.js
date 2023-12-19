import React, { useState } from 'react';
import Slider from 'react-slick';
import image1 from '../img/designers-22Q4-1.jpg';
import image2 from '../img/architects-22Q4-1.jpg.avif';
import image3 from '../img/research-22Q4.jpg.avif';
import image4 from '../img/planners-22Q4-1.jpg';
import image5 from '../img/advisors-22Q4-1.jpg.avif';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import './hero.css';

const Hero = () => {
  const [active, setActive] = useState(false);
  const banners = [
    {
      id: 1,
      title: 'designers',
      image: image1,
    },
    {
      id: 2,
      title: 'architects',
      image: image2,
    },
    {
      id: 3,
      title: 'researchers',
      image: image3,
    },
    {
      id: 4,
      title: 'planners',
      image: image4,
    },
    {
      id: 5,
      title: 'advisors',
      image: image5,
    },
  ];
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const buttonClick = () => {
    setActive(!active);
  };
  return (
    <div>
      <Slider {...settings}>
        {banners.map((item) => (
          <div className='slide-container'>
            <div className='image-description'>
              The future isn’t happening to us,{' '}
              <div className='image-text' style={{ display: 'flex' }}>
                we are its&nbsp;
                <div className='text-in'>{item.title}</div> .{' '}
              </div>
            </div>
            <div className='in-button' onClick={buttonClick}>
              I'm interested in
              {active && (
                <div className='interested-container'>
                  <div className='options'>
                    <div className='option-text'>Who Are We</div>
                    <div className='option-text'>Expertise</div>
                    <div className='option-text'>Projects</div>
                    <div className='option-text'>Research & Insights</div>
                    {/* <div className='option-text'>Testimonials</div>
                    <div className='option-text'>Join Our Team</div>
                    <div className='option-text'>Contact Us</div> */}
                  </div>
                </div>
              )}
              {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>
            <img
              src={item.image}
              alt='the best one'
              style={{ height: '100%', width: '100%' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
