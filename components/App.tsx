
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Stats from './components/Stats';
//import ChatBot from './components/ChatBot';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-500 selection:text-white">
      <Navbar isScrolled={isScrolled} />
      
      <main className="flex-grow">
        <section id="inicio">
          <Hero />
        </section>

        <section id="servicios" className="py-24 bg-white">
          <Services />
        </section>

        <section id="proyectos" className="py-24 bg-slate-50">
          <Portfolio />
        </section>

        <Stats />

        <section id="contacto" className="py-24 bg-white overflow-hidden">
          <Contact />
        </section>
      </main>

     {/* <ChatBot /> */} 
          <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default App;
