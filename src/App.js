import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Advice from './pages/Advice';
import Accumulator from './pages/Accumulator';
import PreRetiree from './pages/PreRetiree';
import ContactPage from './pages/ContactPage';
import Nav from './pages/components/Nav';
import Footer from './pages/components/Footer';
import HeroImage from './pages/components/HeroImage';
import AboutSage from './pages/components/AboutSage';
import ClientType from './pages/components/ClientType';
import Testimonials from './pages/components/Testimonials';
import ContactMini from './pages/components/ContactMini';

// HomePage
const Home = () => (
  <div className='homepage'>
    <div className='hero-image'>
      <HeroImage />
    </div>
    <div className='about-sage-mini'>
      <AboutSage />
    </div>
    <div className='client-type'>
      <ClientType />
    </div>
    <div className='testimonials'>
      <Testimonials />
    </div>
    <div className='contact-mini'>
      <ContactMini />
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/advice' element={<Advice />} />
          <Route path='/accumulator' element={<Accumulator />} />
          <Route path='/preretiree' element={<PreRetiree />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
