import React, { useState } from 'react';
import './whoarewe.css';

const Whoarewe = () => {
  const [color, setColor] = useState(false);

  const changeCol = () => {
    if (window.scrollY >= 770) {
      setColor(true);
    } else setColor(false);
  };

  window.addEventListener('scroll', changeCol);
  return (
    <div className={`about-container ${color ? 'negative' : ''}`}>
      <div className={`about-text ${color ? 'negative' : ''}`}>
        We are architects, designers, advisors and planners designing a better
        future.
      </div>
      <div className={`button-container ${color ? 'negative' : ''}`}>
        <div className='button'>Who We Are</div>
      </div>
    </div>
  );
};

export default Whoarewe;
