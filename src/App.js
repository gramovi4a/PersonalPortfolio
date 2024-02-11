import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import {Banner } from './components/Banner/Banner';
import {About } from './components/About/About';
import {Skills} from './components/Skills/Skills';
import {Projects} from './components/Projects/Projects';
import {Contact} from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
