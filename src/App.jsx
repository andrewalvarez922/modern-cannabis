import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Brands from './components/Brands';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary-black min-h-screen text-white font-sans selection:bg-accent-green selection:text-primary-black">
      <Navbar />
      <Hero />
      <ValueProps />
      <Brands />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
