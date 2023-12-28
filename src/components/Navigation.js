import React, { useState } from 'react';
import './navigation.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showExpert, setShowExpert] = useState(false);
  const [showResearch, setShowResearch] = useState(false);
  const aboutHandler = () => {
    setShowAbout(!showAbout);
    setShowExpert(false);
    setShowResearch(false);
  };

  const expertiseHandler = () => {
    setShowAbout(false);
    setShowExpert(!showExpert);
    setShowResearch(false);
  };
  const projectsHandler = () => {
    setShowAbout(false);
    setShowExpert(false);
    setShowResearch(false);
  };
  const researchHandler = () => {
    setShowAbout(false);
    setShowExpert(false);
    setShowResearch(!showResearch);
  };
  const testimonialsHandler = () => {
    setShowAbout(false);
    setShowExpert(false);
    setShowResearch(false);
  };
  const joinHandler = () => {
    setShowAbout(false);
    setShowExpert(false);
    setShowResearch(false);
  };
  const contactHandler = () => {
    setShowAbout(false);
    setShowExpert(false);
    setShowResearch(false);
  };

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
          cursor: 'pointer',
        }}
      >
        Gensler
      </div>
      <div
        className='navigation-part'
        style={{ margin: '0 13px' }}
        onClick={aboutHandler}
      >
        Who We Are
      </div>
      {showAbout && (
        <div className='aboutContainer'>
          <div className='texts'>
            <div className='spanContainer'>
              <span className='text'>Firm Profile</span>
            </div>
            <div className='spanContainer'>
              <span className='text'>Our Belief</span>
            </div>
            <div className='spanContainer'>
              <span className='text'>Meet Our Leadership</span>
            </div>
            <div className='spanContainer'>
              <span className='text'>Awards & Empanelments</span>
            </div>
          </div>
        </div>
      )}

      <div
        className='navigation-part'
        style={{ margin: '0 13px' }}
        onClick={expertiseHandler}
      >
        Expertise
      </div>
      {showExpert && (
        <div className='expertContainer'>
          <div className='texts'>
            <div className='spanContainer'>
              <span className='text'>Developer</span>
            </div>
            <div className='spanContainer'>
              <span className='text'>Construction</span>
            </div>
            <div className='spanContainer'>
              <span className='text'>Engineering</span>
            </div>
            <div className='spanContainer'>
              <span className='text'>Consultancy</span>
            </div>
          </div>
        </div>
      )}
      <div
        className='navigation-part'
        style={{ margin: '0 13px' }}
        onClick={projectsHandler}
      >
        Projects
      </div>
      <div
        className='navigation-part'
        style={{ margin: '0 13px' }}
        onClick={researchHandler}
      >
        Research & Insights
      </div>
      {showResearch && (
        <div className='researchContainer'>
          <div className='texts'>
            <div className='spanContainer'>
              <span className='text'>News</span>
            </div>
            <div className='spanContainer'>
              <span className='text'>In Media</span>
            </div>
            <div className='spanContainer'>
              <span className='text'>Blog</span>
            </div>
          </div>
        </div>
      )}
      <div
        className='navigation-part'
        style={{ margin: '0 13px' }}
        onClick={testimonialsHandler}
      >
        Testimonials
      </div>
      <div
        className='navigation-part'
        style={{ margin: '0 13px' }}
        onClick={joinHandler}
      >
        Join Our Team
      </div>
      <div
        className='navigation-part'
        style={{ margin: '0 13px' }}
        onClick={contactHandler}
      >
        Contact Us
      </div>
    </div>
  );
};

export default Navigation;
