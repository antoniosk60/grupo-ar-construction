
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Home from './components/Home';
import Electricidad from './components/Electricidad';
import Impermeabilizaciones from './components/Impermeabilizaciones';
import Remodelaciones from './components/Remodelaciones';
import Construcciones from './components/Construcciones';
import ServiciosPage from './components/ServiciosPage';
import ProyectosPage from './components/ProyectosPage';
import TestimoniosPage from './components/TestimoniosPage';
import ContactoPage from './components/ContactoPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/electricidad" element={<Electricidad />} />
          <Route path="/impermeabilizaciones" element={<Impermeabilizaciones />} />
          <Route path="/remodelaciones" element={<Remodelaciones />} />
          <Route path="/construcciones" element={<Construcciones />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/testimonios" element={<TestimoniosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
};

export default App;
