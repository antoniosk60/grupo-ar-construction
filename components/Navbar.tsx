
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  const navLinks = [
    { name: 'Inicio', href: '#inicio', id: 'inicio' },
    { name: 'Servicios', href: '#servicios', id: 'servicios' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Contacto', href: '#contacto', id: 'contacto' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a 
              href="#inicio" 
              onClick={(e) => handleLinkClick(e, '#inicio')}
              className={`text-2xl font-black font-display tracking-tighter cursor-pointer ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            >
              GRUPO<span className="text-amber-500">-AR</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1 lg:space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2 text-sm font-bold transition-all duration-300 group ${
                    activeSection === link.id 
                      ? 'text-amber-500' 
                      : (isScrolled ? 'text-slate-700 hover:text-amber-500' : 'text-white/90 hover:text-white')
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-amber-500 transition-transform duration-300 origin-left ${activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                </a>
              ))}
              <a
                href="#contacto"
                onClick={(e) => handleLinkClick(e, '#contacto')}
                className="ml-4 bg-amber-500 text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-amber-600 transition-all shadow-lg hover:shadow-amber-500/20 active:scale-95 transform hover:-translate-y-0.5"
              >
                Cotizar Ahora
              </a>
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
      <div className={`md:hidden fixed inset-x-0 bg-white shadow-2xl transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-2 pb-8 space-y-1 border-t border-slate-100 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-4 py-4 text-lg font-black rounded-2xl transition-colors ${
                activeSection === link.id ? 'bg-amber-50 text-amber-500' : 'text-slate-700 hover:bg-slate-50'
              }`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-4 pt-4">
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="block w-full text-center bg-amber-500 text-white px-5 py-4 rounded-2xl text-lg font-black hover:bg-amber-600 active:scale-[0.98] transition-all"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
