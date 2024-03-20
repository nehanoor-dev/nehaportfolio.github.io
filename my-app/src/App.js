import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage />
      <Skills/>
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
