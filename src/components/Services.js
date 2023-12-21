// import React from 'react';
// import './services.css';
// const Services = () => {
//   return (
//     <div className='service-container'>
//       <div className='static-part'>
//         <div className='static-title'>Our Services</div>
//         <div className='static-desc'>
//           We help enterprises transform their innovative ideas into successful
//           products from scratch.
//         </div>
//         <div className='static-desc'>
//           {' '}
//           From custom product and web development to migrating legacy systems to
//           modern and efficient Jamstack architecture, we take care of the
//           technical complexities, so your team can focus on what you do best.
//         </div>
//       </div>
//       <div className='scroll-part'>
//         <div className='scroll-container'>
//           <div>Yes</div>
//         </div>
//         <div className='scroll-container'>
//           <div>Yes</div>
//         </div>
//         <div className='scroll-container'>
//           <div>Yes</div>
//         </div>
//         <div className='scroll-container'>
//           <div>Yes</div>
//         </div>
//         <div className='scroll-container'>
//           <div>Yes</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React, { useRef, useEffect } from 'react';
import './services.css';

const Services = () => {
  const scrollPartRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPart = scrollPartRef.current;
      const staticPart = scrollPart.previousElementSibling;

      if (
        scrollPart.scrollTop <
        scrollPart.scrollHeight - scrollPart.clientHeight
      ) {
        staticPart.style.position = 'fixed';
        staticPart.style.top = '0';
      } else {
        staticPart.style.position = 'unset';
      }
    };

    // Capture current value for consistent reference:
    let currentScrollPart = scrollPartRef.current; // Capture before attaching listener

    currentScrollPart.addEventListener('scroll', handleScroll);

    return () => {
      currentScrollPart.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='service-container'>
      <div className='static-part'>
        {/* Static content here */}
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
      <div className='scroll-part' ref={scrollPartRef}>
        {/* Scrollable content here */}
        <div className='scroll-container'>
          <div>Yes</div>
        </div>
        <div className='scroll-container'>
          <div>Yes</div>
        </div>
        <div className='scroll-container'>
          <div>Yes</div>
        </div>
        <div className='scroll-container'>
          <div>Yes</div>
        </div>
        <div className='scroll-container'>
          <div>Yes</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
