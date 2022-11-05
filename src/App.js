import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Home, Services, About, Gallery, Contact, Portfolio } from './components';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar home="Home" services="Services" portfolio="Portfolio" about="About" gallery="Gallery" contact="Contact" />

        <Routes>

          <Route path="/" element={<Home />} /> */

          <Route path="/services" element={<Services />} /> 

          <Route path="/portfolio" element={<Portfolio />} /> 

          <Route path="/about" element={<About />} />

          <Route path="/gallery" element={<Gallery />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

          <Footer />

      </BrowserRouter>
    </>
  );
}

export default App;
