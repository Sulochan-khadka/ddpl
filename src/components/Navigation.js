import React, { useState } from 'react';
import './navigation.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 55) {
      setNavbar(true);
    } else setNavbar(false);
  };

  window.addEventListener('scroll', changeNav);
  return (
    <div className={navbar ? 'active' : 'navigation'}>
      {navbar && (
        <div className='short-nav'>
          <div className='sq-nav'>
            <div className='cir-nav'>
              <FaLinkedinIn />
            </div>
          </div>
          <div className='sq-nav'>
            <div className='cir-nav'>
              <FaXTwitter />
            </div>
          </div>
          <div className='sq-nav'>
            <div className='cir-nav'>
              <FaFacebookF />
            </div>
          </div>
          <div className='sq-nav'>
            <div className='cir-nav'>
              <HiMail />
            </div>
          </div>
        </div>
      )}
      <div
        style={{
          marginLeft: '50px',
          marginRight: '40px',
          fontSize: '30px',
          color: '#ee3224',
          fontWeight: 'bolder',
        }}
      >
        Gensler
      </div>
      <div className='navigation-part' style={{ margin: '0 13px' }}>
        Who We Are
      </div>
      <div className='navigation-part' style={{ margin: '0 13px' }}>
        Expertise
      </div>
      <div className='navigation-part' style={{ margin: '0 13px' }}>
        Projects
      </div>
      <div className='navigation-part' style={{ margin: '0 13px' }}>
        Research & Insights
      </div>
      <div className='navigation-part' style={{ margin: '0 13px' }}>
        Testimonials
      </div>
      <div className='navigation-part' style={{ margin: '0 13px' }}>
        Join Our Team
      </div>
      <div className='navigation-part' style={{ margin: '0 13px' }}>
        Contact Us
      </div>
    </div>
  );
};

export default Navigation;
