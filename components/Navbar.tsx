
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Testimonios', href: '/testimonios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const serviceLinks = [
    { name: 'Electricidad', href: '/electricidad' },
    { name: 'Impermeabilizaciones', href: '/impermeabilizaciones' },
    { name: 'Remodelaciones', href: '/remodelaciones' },
    { name: 'Construcciones', href: '/construcciones' },
  ];

  useEffect(() => {
    // Scroll handling or section indicators aren't strictly required to intercept clicks anymore.
  }, [location.pathname]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link 
              to="/"
              className={`text-2xl font-black font-display tracking-tighter cursor-pointer ${isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-white'}`}
            >
              GRUPO<span className="text-amber-500">-AR</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 group ${
                    location.pathname === link.href 
                      ? 'text-amber-500' 
                      : (isScrolled || location.pathname !== '/' ? 'text-slate-700 hover:text-amber-500' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 transition-transform duration-300 origin-left ${location.pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </Link>
              ))}
              
              {/* Services Dropdown (Simplified for this example) */}
              <div className="relative group/dropdown px-4 py-2">
                <button className={`text-sm font-bold transition-all duration-300 flex items-center gap-1 ${isScrolled || location.pathname !== '/' ? 'text-slate-700' : 'text-white'}`}>
                  Especialidades
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-2xl rounded-2xl p-4 opacity-0 translate-y-2 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:translate-y-0 group-hover/dropdown:visible transition-all duration-300 border border-slate-100">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-amber-500 rounded-xl transition-all"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contacto"
                className="ml-4 bg-amber-500 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 transform hover:-translate-y-0.5"
              >
                Cotizar Ahora
              </Link>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className={`p-2 rounded-xl transition-colors ${isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-[60] transition-all duration-500 ${isOpen ? 'visible' : 'invisible pointer-events-none'}`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-slate-950/60 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
          <div className="p-6 flex justify-between items-center border-b border-slate-100">
            <span className="text-xl font-black font-display tracking-tighter text-slate-900">
              MENU
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl bg-slate-100 text-slate-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`block px-6 py-4 text-2xl font-black rounded-2xl transition-all ${
                  location.pathname === link.href 
                    ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                    : 'text-slate-700 hover:bg-slate-50'
                } ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-4 pb-2 px-6">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Especialidades</p>
              <div className="grid grid-cols-1 gap-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-4 py-3 text-lg font-bold text-slate-700 hover:bg-slate-50 rounded-xl transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-8 border-t border-slate-100">
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-amber-500 text-white px-5 py-5 rounded-2xl text-xl font-black hover:bg-amber-600 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/20"
            >
              Cotizar Ahora
            </Link>
            <p className="mt-6 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
              © 2026 Grupo AR
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
