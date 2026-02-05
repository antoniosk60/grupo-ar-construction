
import React, { useState, useEffect } from 'react';
import { Project } from '../types';

const imgResidencialElectricidad = new URL('../assets/img/servicios/electricidad/resi.jpg', import.meta.url).href;
const imgIndustrialElectricidad = new URL('../assets/img/servicios/electricidad/industrial.jpg', import.meta.url).href;
const imgTelecomEstructurado = new URL('../assets/img/servicios/telecomunicaciones/estructurado.jpg', import.meta.url).href;
const imgRemodelacionesLujo = new URL('../assets/img/servicios/remodelaciones/marmol.jpg', import.meta.url).href;
const imgImpermeabilizacionLosa = new URL('../assets/img/servicios/impermeabilizacion/ImperFinal.jpg', import.meta.url).href;
const imgCctv = new URL('../assets/img/servicios/telecomunicaciones/telecomunicacion.jpg', import.meta.url).href;

const projects: Project[] = [
  { 
    id: '1', 
    title: 'Residencial San Ángel', 
    category: 'Electricidad', 
    description: 'Instalación eléctrica residencial certificada', 
    fullDescription: 'Implementación integral de cableado estructurado, iluminación LED inteligente y actualización de tableros de carga. El proyecto se ejecutó bajo la estricta observancia de la norma NOM-001-SEDE, garantizando no solo la funcionalidad sino la seguridad total de la infraestructura eléctrica residencial.',
    services: ['Cableado Estructurado', 'Tableros de Distribución', 'Iluminación LED', 'Certificación NOM'],
    imageUrl: imgResidencialElectricidad, 
    year: 2024,
    client: 'Privado',
    location: 'CDMX, MX'
  },
  { 
    id: '2', 
    title: 'Planta Industrial Electromex', 
    category: 'Industrial', 
    description: 'Subestación y automatización industrial', 
    fullDescription: 'Montaje especializado de subestación eléctrica de media tensión y cuadros de distribución de gran capacidad para planta de manufactura pesada. El alcance incluyó la instalación de sistemas de energía crítica (UPS) y la automatización de líneas de producción para optimizar el consumo energético.',
    services: ['Subestaciones', 'UPS Industrial', 'Cuadros de Control', 'Automatización'],
    imageUrl: imgIndustrialElectricidad, 
    year: 2023,
    client: 'Electromex S.A.',
    location: 'Toluca, Edo. Méx.'
  },
  { 
    id: '3', 
    title: 'Corporativo WiFi 6', 
    category: 'Telecomunicaciones', 
    description: 'Red de alta performance empresarial', 
    fullDescription: 'Diseño y despliegue de infraestructura de red de datos Cat6a con tecnología de roaming WiFi 6 para cobertura total en áreas corporativas. Se integró un sistema de seguridad CCTV 4K con análisis de video inteligente Hikvision. Todos los nodos fueron certificados con equipo Fluke Networks para asegurar el cumplimiento de estándares internacionales.',
    services: ['WiFi 6 Enterprise', 'CCTV 4K Hikvision', 'Fibra Óptica', 'Certificación Fluke'],
    imageUrl: imgTelecomEstructurado, 
    year: 2024,
    client: 'Tech Solutions Corp',
    location: 'Monterrey, NL'
  },
  { 
    id: '4', 
    title: 'Residencial Las Lomas', 
    category: 'Remodelaciones', 
    description: 'Remodelación de lujo con diseño 3D', 
    fullDescription: 'Transformación arquitectónica de áreas sociales, cocina y baños principales. Se emplearon materiales de alta gama como mármol calacatta y grifería de diseño. El proceso incluyó una fase previa de renderizado 3D fotorrealista que permitió al cliente visualizar y ajustar cada detalle antes de la ejecución física.',
    services: ['Diseño 3D', 'Acabados en Mármol', 'Cocinas Integrales', 'Iluminación Ambiental'],
    imageUrl: imgRemodelacionesLujo, 
    year: 2023,
    client: 'Privado',
    location: 'Monterrey, NL'
  },
  { 
    id: '5', 
    title: 'Nave Industrial Almacenes', 
    category: 'Impermeabilización', 
    description: 'Impermeabilización en Losa Maciza', 
    fullDescription: 'Tratamiento técnico de superficies de concreto mediante la aplicación de sistemas multicapa. Se utilizaron membranas asfálticas de refuerzo y selladores acrílicos elastoméricos de alta reflectividad para reducir la temperatura interna de la nave. El proyecto cubre más de 2,500 m2 con garantía extendida.',
    services: ['Láminas Asfálticas', 'Membrana Líquida', 'Diagnóstico de Filtraciones', 'Sellado de Grietas'],
    imageUrl: imgImpermeabilizacionLosa, 
    year: 2024,
    client: 'Almacenes Industriales S.A.',
    location: 'Monterrey, NL'
  },
  { 
    id: '6', 
    title: 'CCTV Centro Comercial', 
    category: 'Telecomunicaciones', 
    description: 'Sistema de videovigilancia IP', 
    fullDescription: 'Implementación de un ecosistema de seguridad electrónica centralizado para un centro comercial de gran afluencia. Instalación de cámaras IP con visión nocturna avanzada, reconocimiento de placas vehiculares y centro de monitoreo 24/7 con capacidad de almacenamiento redundante.',
    services: ['Seguridad Electrónica', 'Reconocimiento Facial', 'Servidores de Video', 'Monitoreo Centralizado'],
    imageUrl: imgCctv, 
    year: 2024,
    client: 'Plaza Galerías',
    location: 'Guadalajara, JAL'
  },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = ['Todos', 'Electricidad', 'Telecomunicaciones', 'Remodelaciones', 'Impermeabilización', 'Industrial'];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setSelectedProject(null);
    const element = document.getElementById('contacto');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
        <div className="max-w-2xl">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Nuestro Historial</h2>
          <p className="text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">Proyectos de <span className="text-gradient">Éxito</span></p>
        </div>
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-2xl">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl text-xs font-black transition-all duration-300 relative ${
                activeFilter === filter 
                  ? 'text-slate-900' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {activeFilter === filter && (
                <div className="absolute inset-0 bg-white shadow-md rounded-xl animate-in fade-in zoom-in duration-300"></div>
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            onClick={() => setSelectedProject(project)}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] cursor-pointer ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
          >
            <div className="aspect-[16/11] overflow-hidden relative">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-black text-white mb-4 font-display">{project.title}</h3>
                  <div className="flex items-center gap-3">
                    <span className="bg-amber-500 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest">Detalles del Proyecto</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-10">
               <div className="flex items-center justify-between mb-3">
                 <span className="text-amber-600 text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                 <span className="text-slate-400 text-[10px] font-bold">{project.year}</span>
               </div>
               <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-amber-500 transition-colors font-display leading-tight">{project.title}</h3>
               <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 lg:p-8 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          
          <div className="relative bg-white w-full max-w-7xl h-full sm:h-[90vh] overflow-hidden sm:rounded-[3rem] shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col lg:flex-row">
            {/* Close Button Mobile */}
            <button onClick={() => setSelectedProject(null)} className="lg:hidden absolute top-6 right-6 z-50 w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full flex items-center justify-center transition-all border border-white/20 backdrop-blur-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Media Side */}
            <div className="lg:w-7/12 relative h-[40vh] lg:h-auto overflow-hidden bg-slate-100">
              <img src={selectedProject.imageUrl} alt={selectedProject.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/20 to-transparent pointer-events-none"></div>
            </div>

            {/* Content Side */}
            <div className="lg:w-5/12 flex flex-col bg-white h-[60vh] lg:h-auto">
              <div className="p-8 lg:p-16 overflow-y-auto flex-1 custom-scrollbar">
                {/* Close Button Desktop */}
                <button onClick={() => setSelectedProject(null)} className="hidden lg:flex absolute top-10 right-10 z-50 w-12 h-12 bg-slate-50 hover:bg-amber-500 text-slate-900 hover:text-white rounded-full items-center justify-center transition-all border border-slate-200 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="flex items-center gap-3 mb-8">
                  <span className="px-5 py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-amber-500/20">{selectedProject.category}</span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{selectedProject.year}</span>
                </div>

                <h3 className="text-4xl lg:text-5xl font-black font-display text-slate-900 mb-10 leading-[1.1] tracking-tight">{selectedProject.title}</h3>
                
                <div className="grid grid-cols-2 gap-10 mb-12 border-y border-slate-100 py-10">
                  <div className="space-y-2">
                    <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Socio Estratégico</h4>
                    <p className="font-bold text-slate-900 text-lg">{selectedProject.client || 'Residencial'}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Territorio</h4>
                    <p className="font-bold text-slate-900 text-lg">{selectedProject.location || 'México'}</p>
                  </div>
                </div>

                <div className="mb-14">
                  <h4 className="text-slate-900 font-black mb-6 uppercase text-xs tracking-[0.3em] flex items-center gap-4">
                    Memoria Técnica
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </h4>
                  <p className="text-slate-600 leading-[1.8] text-lg font-medium italic">
                    "{selectedProject.fullDescription}"
                  </p>
                </div>

                <div className="mb-14">
                  <h4 className="text-slate-900 font-black mb-8 uppercase text-xs tracking-[0.3em] flex items-center gap-4">
                    Alcance Operativo
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.services.map((service, i) => (
                      <div key={i} className="group/service bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-white hover:shadow-xl hover:border-amber-200">
                        <div className="w-8 h-8 bg-white text-amber-500 rounded-lg flex items-center justify-center shadow-sm group-hover/service:bg-amber-500 group-hover/service:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-slate-700 text-sm font-black">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky Footer in Modal */}
              <div className="p-8 lg:p-12 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-6">
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">¿Tienes un proyecto similar?</p>
                  <p className="text-slate-900 font-black text-sm font-display">Solicita un diagnóstico hoy</p>
                </div>
                <a 
                  href="#contacto" 
                  onClick={handleCtaClick} 
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-4 bg-amber-500 text-white px-10 py-5 rounded-2xl font-black hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 group active:scale-95"
                >
                  Contactar Ingeniería
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
