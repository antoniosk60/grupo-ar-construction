
import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Electricidad Profesional',
    description: 'Instalaciones residenciales e industriales bajo norma NOM-001-SEDE. Subestaciones y tableros.',
    color: 'from-amber-500 to-orange-400',
    link: '/electricidad',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Construcciones',
    description: 'Obra civil, residencial e industrial. Cimentaciones, estructuras y urbanización.',
    color: 'from-slate-700 to-slate-900',
    link: '/construcciones',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Remodelaciones',
    description: 'Transformación integral de espacios. Diseño 3D, cocinas modernas y acabados de lujo.',
    color: 'from-emerald-500 to-teal-400',
    link: '/remodelaciones',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Impermeabilización',
    description: 'Protección definitiva contra humedad. Membranas asfálticas y acrílicos elastoméricos.',
    color: 'from-indigo-500 to-purple-400',
    link: '/impermeabilizaciones',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-20">
        <span className="block text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Especialidades Técnicas</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">Soluciones <span className="text-gradient">Integrales</span></h2>
        <p className="mt-4 sm:mt-6 text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">Ingeniería aplicada para el sector residencial, comercial e industrial en México.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group relative p-8 sm:p-10 bg-white rounded-[2.5rem] sm:rounded-[3rem] border border-slate-100 transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] hover:-translate-y-4 overflow-hidden cursor-pointer"
            onClick={() => navigate(service.link)}
          >
            <div className={`absolute -right-4 -top-4 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-700`}></div>
            
            <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[2rem] bg-gradient-to-br ${service.color} text-white flex items-center justify-center mb-8 sm:mb-10 shadow-xl group-hover:rotate-6 transition-transform duration-500`}>
              {service.icon}
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-slate-900 leading-tight tracking-tight">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium text-base sm:text-lg">
              {service.description}
            </p>
            
            <div className="mt-8 sm:mt-10 flex items-center gap-3 text-amber-600 font-black text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              EXPLORAR CASOS DE ÉXITO
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology Section */}
      <div className="mt-20 sm:mt-32 p-8 sm:p-12 md:p-20 bg-slate-900 rounded-[2.5rem] sm:rounded-[4rem] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div>
            <span className="block text-amber-500 font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-6">Nuestra Metodología</span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display mb-6 sm:mb-8 leading-tight">Diseño, Ejecución y <span className="text-gradient">Certificación</span></h3>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
              No solo construimos; integramos soluciones técnicas que cumplen con los más altos estándares internacionales de seguridad y eficiencia.
            </p>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Diagnóstico Técnico', desc: 'Evaluación exhaustiva de necesidades y normativas.' },
                { step: '02', title: 'Ingeniería de Detalle', desc: 'Planificación milimétrica con software de vanguardia.' },
                { step: '03', title: 'Ejecución Maestra', desc: 'Construcción bajo supervisión técnica constante.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 items-start">
                  <span className="text-amber-500 font-black text-xl sm:text-2xl font-display">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-lg sm:text-xl mb-1">{item.title}</h4>
                    <p className="text-slate-500 text-sm sm:text-base">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" 
                alt="Metodología de trabajo" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 sm:-bottom-10 -left-6 sm:-left-10 glass-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 max-w-[240px] sm:max-w-xs">
              <p className="text-slate-900 font-black text-base sm:text-lg mb-2">Garantía Total</p>
              <p className="text-slate-500 text-xs sm:text-sm font-medium">Todos nuestros servicios cuentan con póliza de garantía y soporte técnico 24/7.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
