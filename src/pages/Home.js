import React from 'react';
import Hero from '../components/Hero';
import Whoarewe from '../components/Whoarewe';
import Awards from '../components/Awards';
import Services from '../components/Services';
import Asthetics from '../components/Asthetics';
import Projects from '../components/Projects';
import Numbers from '../components/Numbers';

const Home = () => {
  return (
    <div>
      <Hero />
      <Whoarewe />
      <Awards />
      <Services />
      <Asthetics />
      <Projects />
      <Numbers />
    </div>
  );
};

export default Home;
