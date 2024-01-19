import './App.css';
import Asthetics from './components/Asthetics';
import Awards from './components/Awards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Numbers from './components/Numbers';
import Projects from './components/Projects';
import Services from './components/Services';
import Whoarewe from './components/Whoarewe';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Whoarewe />
      <Awards />
      <Services />
      <Asthetics />
      <Projects />
      <Numbers />
      <Footer />
    </div>
  );
}

export default App;
