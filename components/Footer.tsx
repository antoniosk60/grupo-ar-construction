
import React from 'react';
import { CONTACT_EMAIL, WHATSAPP_NUMBER_DISPLAY, WHATSAPP_NUMBER_E164 } from '../contactInfo';

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'top')} className="text-3xl font-black font-display tracking-tighter text-white block mb-6">
              GRUPO<span className="text-amber-500">-AR</span>
            </a>
            <p className="mt-2 text-slate-400 text-lg leading-relaxed max-w-md">
              Expertos en soluciones integrales para electricidad, telecomunicaciones, remodelaciones e impermeabilización. Calidad y profesionalismo en cada proyecto.
            </p>
            <div className="mt-6 space-y-2">
               <p className="flex items-center gap-2">
                 <span className="text-amber-500">📧</span> <a className="hover:text-amber-500 transition-colors" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
               </p>
               <p className="flex items-center gap-2">
                 <span className="text-amber-500">📱</span> <a className="hover:text-amber-500 transition-colors" href={`https://wa.me/${WHATSAPP_NUMBER_E164}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_NUMBER_DISPLAY}</a>
               </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, 'servicios')} className="hover:text-amber-500 transition-colors">Electricidad</a></li>
              <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, 'servicios')} className="hover:text-amber-500 transition-colors">Telecomunicaciones</a></li>
              <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, 'servicios')} className="hover:text-amber-500 transition-colors">Remodelaciones</a></li>
              <li><a href="#servicios" onClick={(e) => handleSmoothScroll(e, 'servicios')} className="hover:text-amber-500 transition-colors">Impermeabilización</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Social</h4>
            <div className="flex flex-col space-y-4">
              <a href={`https://wa.me/${WHATSAPP_NUMBER_E164}`} target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                WhatsApp Directo
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors flex items-center gap-2">
                Facebook
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-amber-500 transition-colors flex items-center gap-2">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p>&copy; 2025 Grupo AR. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'top')} className="hover:text-white transition-colors">Aviso de Privacidad</a>
            <a href="#inicio" onClick={(e) => handleSmoothScroll(e, 'top')} className="hover:text-white transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
