import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
