
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const location = useLocation();

  const serviceLinks = [
    { name: 'Electricidad', href: '/electricidad' },
    { name: 'Impermeabilizaciones', href: '/impermeabilizaciones' },
    { name: 'Remodelaciones', href: '/remodelaciones' },
    { name: 'Construcciones', href: '/construcciones' },
  ];

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Testimonios', href: '/testimonios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const isServiceActive = location.pathname === '/servicios' || serviceLinks.some(s => s.href === location.pathname);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link 
              to="/"
              onClick={() => setIsOpen(false)}
            >
              <Logo 
                size="md" 
                textColor={isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'} 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1 lg:space-x-2 xl:space-x-3">
              {/* Inicio */}
              <Link
                to="/"
                className={`relative px-3.5 py-2 text-sm font-bold transition-all duration-300 group ${
                  location.pathname === '/' 
                    ? 'text-amber-500' 
                    : (isScrolled || location.pathname !== '/' ? 'text-slate-700 hover:text-amber-500' : 'text-white/90 hover:text-white')
                }`}
              >
                Inicio
                <span className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber-500 transition-transform duration-300 origin-left ${location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>

              {/* Servicios Dropdown */}
              <div className="relative group py-2">
                <Link
                  to="/servicios"
                  className={`relative px-3.5 py-2 text-sm font-bold transition-all duration-300 flex items-center gap-1.5 rounded-xl ${
                    isServiceActive 
                      ? 'text-amber-500' 
                      : (isScrolled || location.pathname !== '/' ? 'text-slate-700 hover:text-amber-500' : 'text-white/90 hover:text-white')
                  }`}
                >
                  Servicios
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                  </svg>
                  <span className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber-500 transition-transform duration-300 origin-left ${isServiceActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>

                {/* Dropdown Menu Container with hover bridge */}
                <div className="absolute top-full left-0 pt-2 w-64 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white shadow-2xl rounded-2xl p-3 border border-slate-100">
                    <div className="px-3 py-1.5 mb-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Especialidades</span>
                      <span className="text-[10px] font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">Grupo AR</span>
                    </div>
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className={`flex items-center justify-between px-3.5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                          location.pathname === service.href 
                            ? 'bg-amber-500/10 text-amber-600' 
                            : 'text-slate-700 hover:bg-slate-50 hover:text-amber-500'
                        }`}
                      >
                        <span>{service.name}</span>
                        {location.pathname === service.href && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        )}
                      </Link>
                    ))}
                    <div className="mt-1 pt-2 border-t border-slate-100">
                      <Link
                        to="/servicios"
                        className="block px-3.5 py-2 text-[11px] font-black text-amber-500 hover:text-amber-600 text-center uppercase tracking-wider hover:bg-amber-50 rounded-xl transition-all"
                      >
                        Ver Todos los Servicios →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Nav Links */}
              {navLinks.filter(l => l.name !== 'Inicio').map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-3.5 py-2 text-sm font-bold transition-all duration-300 group ${
                    location.pathname === link.href 
                      ? 'text-amber-500' 
                      : (isScrolled || location.pathname !== '/' ? 'text-slate-700 hover:text-amber-500' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-amber-500 transition-transform duration-300 origin-left ${location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}

              <Link
                to="/contacto"
                className="ml-3 bg-amber-500 text-white px-5 py-2.5 rounded-full text-xs font-black hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 transform hover:-translate-y-0.5 tracking-wide uppercase"
              >
                Cotizar Ahora
              </Link>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`p-2.5 rounded-xl transition-all duration-300 active:scale-90 ${isScrolled || location.pathname !== '/' ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              <motion.svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                animate={isOpen ? "open" : "closed"}
              >
                <motion.path
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 4 6 L 20 6" },
                    open: { d: "M 6 18 L 18 6" }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.path
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 4 12 L 20 12", opacity: 1 },
                    open: { d: "M 4 12 L 20 12", opacity: 0 }
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: "M 4 18 L 20 18" },
                    open: { d: "M 6 6 L 18 18" }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-[100]">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            ></motion.div>
            
            {/* Slide-out Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-slate-950 text-white shadow-2xl border-l border-slate-800 flex flex-col h-full overflow-hidden"
            >
              {/* Background ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Drawer Header */}
              <div className="p-5 sm:p-6 flex justify-between items-center border-b border-slate-800/80 shrink-0 relative z-10 bg-slate-950/90 backdrop-blur-xl">
                <div>
                  <Link 
                    to="/" 
                    onClick={() => setIsOpen(false)}
                  >
                    <Logo size="sm" textColor="text-white" />
                  </Link>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Atención México 24/7</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-amber-500 active:scale-90 transition-all"
                  aria-label="Cerrar menú"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Drawer Body - Scrollable Links */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 relative z-10">
                {/* Main Navigation Links */}
                <div className="space-y-1.5">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-black text-sm transition-all ${
                      location.pathname === '/' 
                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                        : 'text-slate-200 hover:bg-slate-900 hover:text-amber-400'
                    }`}
                  >
                    <span>Inicio</span>
                    {location.pathname === '/' && <span className="w-2 h-2 rounded-full bg-white"></span>}
                  </Link>

                  <Link
                    to="/proyectos"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-black text-sm transition-all ${
                      location.pathname === '/proyectos' 
                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                        : 'text-slate-200 hover:bg-slate-900 hover:text-amber-400'
                    }`}
                  >
                    <span>Proyectos Industriales</span>
                    {location.pathname === '/proyectos' && <span className="w-2 h-2 rounded-full bg-white"></span>}
                  </Link>
                </div>

                {/* Servicios & Sub-Especialidades Card */}
                <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 overflow-hidden">
                  <div className="flex items-center justify-between pr-3">
                    <Link
                      to="/servicios"
                      onClick={() => setIsOpen(false)}
                      className={`flex-1 px-4 py-3.5 text-sm font-black transition-all ${
                        isServiceActive ? 'text-amber-400' : 'text-slate-200'
                      }`}
                    >
                      Nuestras Especialidades
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-2 rounded-xl text-slate-400 hover:text-white"
                      aria-label="Desplegar especialidades"
                    >
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/>
                      </svg>
                    </button>
                  </div>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-3 pb-3 space-y-1 border-t border-slate-800/80 bg-slate-950/60"
                      >
                        {[
                          { name: 'Electricidad y Potencia', href: '/electricidad', icon: '⚡' },
                          { name: 'Impermeabilización Industrial', href: '/impermeabilizaciones', icon: '💧' },
                          { name: 'Remodelación Corporativa', href: '/remodelaciones', icon: '🏢' },
                          { name: 'Obra Civil e Infraestructura', href: '/construcciones', icon: '🏗️' },
                        ].map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-3.5 py-2.5 text-xs font-bold rounded-xl transition-all ${
                              location.pathname === service.href 
                                ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                                : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                            }`}
                          >
                            <span>{service.icon}</span>
                            <span>{service.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Additional Links */}
                <div className="space-y-1.5">
                  <Link
                    to="/testimonios"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-black text-sm transition-all ${
                      location.pathname === '/testimonios' 
                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                        : 'text-slate-200 hover:bg-slate-900 hover:text-amber-400'
                    }`}
                  >
                    <span>Testimonios y Garantías</span>
                    {location.pathname === '/testimonios' && <span className="w-2 h-2 rounded-full bg-white"></span>}
                  </Link>

                  <Link
                    to="/contacto"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl font-black text-sm transition-all ${
                      location.pathname === '/contacto' 
                        ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                        : 'text-slate-200 hover:bg-slate-900 hover:text-amber-400'
                    }`}
                  >
                    <span>Contacto y Ubicación</span>
                    {location.pathname === '/contacto' && <span className="w-2 h-2 rounded-full bg-white"></span>}
                  </Link>
                </div>

                {/* Quick Phone Call Card */}
                <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl flex items-center justify-between mt-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Atención Telefónica Directa</p>
                    <a href="tel:7296853914" className="text-sm font-black text-amber-400 hover:underline">729 685 3914</a>
                  </div>
                  <a
                    href="tel:7296853914"
                    className="p-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl active:scale-95 transition-all shadow-md"
                    aria-label="Llamar a Grupo AR"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Drawer Footer CTA */}
              <div className="p-5 border-t border-slate-800 shrink-0 bg-slate-950/90 relative z-10">
                <Link
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white py-4 px-5 rounded-2xl text-xs font-black uppercase tracking-wider shadow-xl shadow-amber-500/20 active:scale-95 transition-all"
                >
                  <span>Solicitar Levantamiento Sin Costo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
                <p className="mt-3 text-center text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                  © {new Date().getFullYear()} Grupo AR Engineering
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
