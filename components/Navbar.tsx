
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

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
              className={`text-2xl font-black font-display tracking-tighter cursor-pointer transition-colors ${isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'}`}
            >
              GRUPO<span className="text-amber-500">-AR</span>
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
      <div className={`lg:hidden fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Slide-out Drawer */}
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col h-full`}>
          {/* Drawer Header */}
          <div className="p-6 flex justify-between items-center border-b border-slate-100 shrink-0">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="text-xl font-black font-display tracking-tighter text-slate-900"
            >
              GRUPO<span className="text-amber-500">-AR</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2.5 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95 transition-all"
              aria-label="Cerrar menú"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Drawer Body - Scrollable Links */}
          <div className="flex-1 overflow-y-auto py-6 px-5 space-y-3">
            {/* Inicio */}
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-5 py-3.5 text-lg font-black rounded-2xl transition-all ${
                location.pathname === '/' 
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              Inicio
            </Link>

            {/* Servicios & Sub-Especialidades */}
            <div className="rounded-2xl border border-slate-100 overflow-hidden bg-slate-50/50">
              <div className="flex items-center justify-between pr-3">
                <Link
                  to="/servicios"
                  onClick={() => setIsOpen(false)}
                  className={`flex-1 px-5 py-3.5 text-lg font-black transition-all ${
                    isServiceActive ? 'text-amber-500' : 'text-slate-800'
                  }`}
                >
                  Servicios
                </Link>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-600"
                  aria-label="Desplegar especialidades"
                >
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} 
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
                    className="px-4 pb-3 space-y-1 border-t border-slate-100 bg-white"
                  >
                    <p className="pt-2 pb-1 px-3 text-[10px] font-black uppercase tracking-widest text-slate-400">Especialidades</p>
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-bold rounded-xl transition-all ${
                          location.pathname === service.href 
                            ? 'bg-amber-500/10 text-amber-600' 
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span>{service.name}</span>
                        {location.pathname === service.href && (
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other main links */}
            {navLinks.filter(l => l.name !== 'Inicio').map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-3.5 text-lg font-black rounded-2xl transition-all ${
                  location.pathname === link.href 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          {/* Drawer Footer CTA */}
          <div className="p-6 border-t border-slate-100 shrink-0 bg-slate-50/50">
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-amber-500 text-white px-5 py-4 rounded-2xl text-base font-black hover:bg-amber-600 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/20 uppercase tracking-wide"
            >
              Cotizar Ahora
            </Link>
            <p className="mt-4 text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} Grupo AR • México
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
