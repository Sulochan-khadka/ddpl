import './App.css';
import Asthetics from './components/Asthetics';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Services from './components/Services';
import Whoarewe from './components/Whoarewe';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Whoarewe />
      <Services />
      <Asthetics />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
