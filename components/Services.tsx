
import React from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    title: 'Electricidad Profesional',
    description: 'Instalaciones residenciales e industriales bajo norma NOM-001-SEDE. Subestaciones y tableros de potencia.',
    color: 'from-amber-500 via-amber-600 to-orange-500',
    borderColor: 'group-hover:border-amber-500/50 hover:shadow-amber-500/10',
    tagColor: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
    link: '/electricidad',
    badge: 'NOM-001-SEDE',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Construcción e Infraestructura',
    description: 'Obra civil, naves industriales e infraestructura. Cimentaciones profundas y celdas operativas.',
    color: 'from-sky-500 via-blue-600 to-indigo-600',
    borderColor: 'group-hover:border-sky-500/50 hover:shadow-sky-500/10',
    tagColor: 'bg-sky-500/10 text-sky-600 border-sky-500/20',
    link: '/construcciones',
    badge: 'Obra Civil Heavy',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Remodelaciones Corporativas',
    description: 'Transformación integral de oficinas y corporativos. Layouts de alta eficiencia y acabados premium.',
    color: 'from-emerald-500 via-teal-500 to-emerald-600',
    borderColor: 'group-hover:border-emerald-500/50 hover:shadow-emerald-500/10',
    tagColor: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20',
    link: '/remodelaciones',
    badge: 'Llave en Mano',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: 'Impermeabilización Industrial',
    description: 'Protección estanca garantizada por hasta 10 años. Membranas TPO, PVC y poliuretanos de alto desempeño.',
    color: 'from-purple-500 via-indigo-600 to-blue-600',
    borderColor: 'group-hover:border-purple-500/50 hover:shadow-purple-500/10',
    tagColor: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
    link: '/impermeabilizaciones',
    badge: 'Garantía 10 Años',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-black uppercase tracking-widest mb-4">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          Especialidades Técnicas de Alto Impacto
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">Soluciones <span className="text-gradient">Integrales</span></h2>
        <p className="mt-4 sm:mt-6 text-slate-500 max-w-2xl mx-auto text-base sm:text-lg font-medium">Ingeniería aplicada para el sector residencial, comercial e industrial en México.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`group relative p-8 sm:p-10 bg-white rounded-[2.5rem] border border-slate-200/80 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden cursor-pointer ${service.borderColor}`}
            onClick={() => navigate(service.link)}
          >
            <div className={`absolute -right-4 -top-4 w-40 h-40 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 rounded-full blur-3xl transition-opacity duration-700`}></div>
            
            <div className="flex items-center justify-between mb-8">
              <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {service.icon}
              </div>
              <span className={`px-2.5 py-1 text-[10px] font-black uppercase tracking-wider rounded-full border ${service.tagColor}`}>
                {service.badge}
              </span>
            </div>
            
            <h3 className="text-2xl font-black mb-3 text-slate-900 leading-tight tracking-tight group-hover:text-amber-600 transition-colors">{service.title}</h3>
            <p className="text-slate-500 leading-relaxed font-medium text-sm sm:text-base">
              {service.description}
            </p>
            
            <div className="mt-8 flex items-center gap-2 text-amber-600 font-black text-xs group-hover:translate-x-1 transition-transform duration-300">
              <span>EXPLORAR CASOS DE ÉXITO</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </div>
          </div>
        ))}
      </div>

      {/* Methodology Section */}
      <div className="mt-20 sm:mt-32 p-8 sm:p-12 md:p-20 bg-slate-950 rounded-[2.5rem] sm:rounded-[3.5rem] text-white relative overflow-hidden border border-slate-800 shadow-2xl">
        {/* Glow ambient backgrounds */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-black uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Metodología de Escala Industrial
            </div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black font-display mb-6 sm:mb-8 leading-tight">Diseño, Ejecución y <span className="text-gradient">Certificación</span></h3>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium">
              No solo construimos; integramos soluciones técnicas rigurosas que cumplen con los más altos estándares internacionales de seguridad, durabilidad y eficiencia energética.
            </p>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Diagnóstico Técnico y Normativo', desc: 'Evaluación exhaustiva de instalaciones, cumplimiento NOM-001 y diagnóstico de vulnerabilidades.', color: 'text-amber-400' },
                { step: '02', title: 'Ingeniería de Detalle en 3D/BIM', desc: 'Planificación milimétrica con simulación de cargas, planos ejecutivos y memorias de cálculo.', color: 'text-cyan-400' },
                { step: '03', title: 'Ejecución Maestra y Control', desc: 'Cuadrillas especializadas bajo supervisión técnica constante e inspección de calidad.', color: 'text-emerald-400' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 items-start p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-colors">
                  <span className={`font-black text-xl sm:text-2xl font-display ${item.color}`}>{item.step}</span>
                  <div>
                    <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=90&w=1200" 
                alt="Metodología de trabajo Grupo AR" 
                className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 sm:-bottom-8 -left-6 sm:-left-8 bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-amber-500/30 max-w-[260px] sm:max-w-xs shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <p className="text-white font-black text-base">Garantía Total AR</p>
              </div>
              <p className="text-slate-300 text-xs font-medium leading-relaxed">Todos nuestros proyectos cuentan con póliza de garantía extendida y soporte de emergencia 24/7.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
