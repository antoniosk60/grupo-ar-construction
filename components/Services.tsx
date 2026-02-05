
import React from 'react';

const services = [
  {
    title: 'Electricidad Profesional',
    description: 'Instalaciones residenciales e industriales bajo norma NOM-001-SEDE. Subestaciones y tableros.',
    color: 'from-amber-500 to-orange-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Telecomunicaciones',
    description: 'Redes Cat6/6a, Fibra Óptica y Seguridad CCTV. Certificación de nodos con equipo Fluke.',
    color: 'from-blue-500 to-cyan-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.345 8.344c5.857-5.858 15.454-5.858 21.31 0" />
      </svg>
    ),
  },
  {
    title: 'Remodelaciones',
    description: 'Transformación integral de espacios. Diseño 3D, cocinas modernas y acabados de lujo.',
    color: 'from-emerald-500 to-teal-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Impermeabilización',
    description: 'Protección definitiva contra humedad. Membranas asfálticas y acrílicos elastoméricos.',
    color: 'from-indigo-500 to-purple-400',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Especialidades Técnicas</h2>
        <p className="text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">Soluciones <span className="text-gradient">Integrales</span></p>
        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">Ingeniería aplicada para el sector residencial, comercial e industrial en México.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative p-10 bg-white rounded-[2.5rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-3 overflow-hidden cursor-pointer"
            onClick={() => {
              const el = document.getElementById('proyectos');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className={`absolute -right-4 -top-4 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}></div>
            
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
              {service.icon}
            </div>
            
            <h3 className="text-2xl font-black mb-4 text-slate-900 leading-tight">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium">
              {service.description}
            </p>
            
            <div className="mt-8 flex items-center gap-2 text-slate-900 font-bold text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Ver proyectos realizados
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
