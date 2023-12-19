import React from 'react';

import './navigation.css';

const Navigation = () => {
  return (
    <div
      className='navigation'
      style={{
        display: 'flex',
        padding: '10px 10px',
        fontSize: '18px',
        alignItems: 'baseline',
      }}
    >
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
