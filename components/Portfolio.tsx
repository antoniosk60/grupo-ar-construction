
import React, { useState, useEffect } from 'react';
import { Project } from '../types';

const GITHUB_IMG_BASE = 'https://raw.githubusercontent.com/antoniosk60/IMGAR/main/img/';

const projects: Project[] = [
  { 
    id: '1', 
    title: 'Residencial San Ángel', 
    category: 'Electricidad', 
    description: 'Instalación eléctrica residencial certificada', 
    fullDescription: 'Implementación integral de cableado estructurado, iluminación LED inteligente y actualización de tableros de carga. El proyecto se ejecutó bajo la estricta observancia de la norma NOM-001-SEDE, garantizando no solo la funcionalidad sino la seguridad total de la infraestructura eléctrica residencial.',
    services: ['Cableado Estructurado', 'Tableros de Distribución', 'Iluminación LED', 'Certificación NOM'],
    imageUrl: 'input_file_4.png', 
    year: 2024,
    client: 'Privado',
    location: 'CDMX, MX'
  },
  { 
    id: '2', 
    title: 'Planta Industrial Electromex', 
    category: 'Construcciones', 
    description: 'Subestación y automatización industrial', 
    fullDescription: 'Montaje especializado de subestación eléctrica de media tensión y cuadros de distribución de gran capacidad para planta de manufactura pesada. El alcance incluyó la instalación de sistemas de energía crítica (UPS) y la automatización de líneas de producción para optimizar el consumo energético.',
    services: ['Subestaciones', 'UPS Industrial', 'Cuadros de Control', 'Automatización'],
    imageUrl: 'input_file_8.png', 
    year: 2023,
    client: 'Electromex S.A.',
    location: 'Toluca, Edo. Méx.'
  },
  { 
    id: '3', 
    title: 'Infraestructura de Red', 
    category: 'Telecomunicaciones', 
    description: 'Red de alta performance empresarial', 
    fullDescription: 'Diseño y despliegue de infraestructura de red de datos Cat6a con tecnología de roaming WiFi 6 para cobertura total en áreas corporativas. Se integró un sistema de seguridad CCTV 4K con análisis de video inteligente Hikvision. Todos los nodos fueron certificados con equipo Fluke Networks para asegurar el cumplimiento de estándares internacionales.',
    services: ['WiFi 6 Enterprise', 'CCTV 4K Hikvision', 'Fibra Óptica', 'Certificación Fluke'],
    imageUrl: 'input_file_3.png', 
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
    imageUrl: 'input_file_15.png', 
    year: 2023,
    client: 'Privado',
    location: 'Monterrey, NL'
  },
  { 
    id: '5', 
    title: 'Impermeabilización de Nave', 
    category: 'Impermeabilización', 
    description: 'Impermeabilización en Losa Maciza', 
    fullDescription: 'Tratamiento técnico de superficies de concreto mediante la aplicación de sistemas multicapa. Se utilizaron membranas asfálticas de refuerzo y selladores acrílicos elastoméricos de alta reflectividad para reducir la temperatura interna de la nave. El proyecto cubre más de 2,500 m2 con garantía extendida.',
    services: ['Láminas Asfálticas', 'Membrana Líquida', 'Diagnóstico de Filtraciones', 'Sellado de Grietas'],
    imageUrl: 'input_file_10.png', 
    year: 2024,
    client: 'Almacenes Industriales S.A.',
    location: 'Monterrey, NL'
  },
  { 
    id: '6', 
    title: 'Electromovilidad Tesla', 
    category: 'Electricidad', 
    description: 'Instalación de cargadores eléctricos', 
    fullDescription: 'Implementación de estaciones de carga para vehículos eléctricos (Tesla Wall Connector) en entornos residenciales y corporativos. Incluye la adecuación de la infraestructura eléctrica, protecciones térmicas dedicadas y balanceo de cargas para asegurar una carga eficiente y segura.',
    services: ['Tesla Wall Connector', 'Protecciones Eléctricas', 'Balanceo de Carga', 'Certificación'],
    imageUrl: 'input_file_5.png', 
    year: 2024,
    client: 'Privado',
    location: 'CDMX, MX'
  },
  { 
    id: '7', 
    title: 'Remodelación Arquitectónica', 
    category: 'Construcciones', 
    description: 'Diseño y ejecución de fachadas modernas', 
    fullDescription: 'Renovación integral de fachadas con acabados contemporáneos e iluminación arquitectónica integrada. El proyecto destaca por el uso de texturas oscuras y juegos de luces que realzan la volumetría del edificio durante la noche, creando un impacto visual sofisticado.',
    services: ['Fachadas Modernas', 'Iluminación Arquitectónica', 'Acabados Premium', 'Diseño Exterior'],
    imageUrl: 'input_file_0.png', 
    year: 2024,
    client: 'Privado',
    location: 'Querétaro, QRO'
  },
  { 
    id: '8', 
    title: 'Mantenimiento de Cubiertas', 
    category: 'Impermeabilización', 
    description: 'Sistemas de protección industrial', 
    fullDescription: 'Aplicación de sistemas de impermeabilización de alto desempeño en cubiertas industriales de gran escala. Se emplearon tecnologías de poliuretano y membranas TPO para garantizar una estanqueidad absoluta y resistencia a condiciones climáticas extremas.',
    services: ['Membranas TPO', 'Poliuretano Líquido', 'Mantenimiento Preventivo', 'Aislamiento Térmico'],
    imageUrl: 'input_file_13.png', 
    year: 2023,
    client: 'Logística Global',
    location: 'Puebla, PUE'
  },
  { 
    id: '9', 
    title: 'Diseño de Interiores', 
    category: 'Remodelaciones', 
    description: 'Espacios corporativos y residenciales', 
    fullDescription: 'Creación de ambientes interiores que combinan funcionalidad y estética. Uso de paneles de madera con iluminación indirecta (backlight) para crear atmósferas cálidas y modernas. Cada detalle fue cuidadosamente seleccionado para reflejar la identidad del cliente.',
    services: ['Carpintería Fina', 'Iluminación Indirecta', 'Mobiliario a Medida', 'Diseño de Interiores'],
    imageUrl: 'input_file_16.png', 
    year: 2024,
    client: 'Privado',
    location: 'CDMX, MX'
  },
  { 
    id: '10', 
    title: 'Sistemas de Bombeo', 
    category: 'Construcciones', 
    description: 'Control y automatización de bombeo', 
    fullDescription: 'Diseño e instalación de tableros de control para sistemas de bombeo simultaneador. Incluye protecciones térmicas, alternadores electrónicos y sensores de nivel para garantizar el suministro constante de agua en edificaciones de gran altura.',
    services: ['Control de Bombeo', 'Tableros de Fuerza', 'Automatización', 'Mantenimiento'],
    imageUrl: 'input_file_7.png', 
    year: 2023,
    client: 'Condominio Torre Sur',
    location: 'CDMX, MX'
  },
  { 
    id: '11', 
    title: 'Impermeabilización Residencial', 
    category: 'Impermeabilización', 
    description: 'Protección contra humedad en azoteas', 
    fullDescription: 'Aplicación de sistemas impermeabilizantes reforzados con malla de poliéster en áreas residenciales. El proceso incluye limpieza profunda, sellado de grietas críticas y aplicación de capas protectoras con alta resistencia a la intemperie.',
    services: ['Malla de Refuerzo', 'Sellado de Grietas', 'Impermeabilizante Acrílico', 'Garantía 10 años'],
    imageUrl: 'input_file_11.png', 
    year: 2024,
    client: 'Privado',
    location: 'Edo. Méx, MX'
  },
  { 
    id: '12', 
    title: 'Instalaciones Especiales', 
    category: 'Remodelaciones', 
    description: 'Iluminación y acabados de diseño', 
    fullDescription: 'Ejecución de instalaciones eléctricas decorativas y montaje de luminarias de diseño en espacios de doble altura. Se trabajó en conjunto con arquitectos de interiores para lograr una integración perfecta entre la iluminación y los acabados arquitectónicos.',
    services: ['Luminarias de Diseño', 'Doble Altura', 'Instalación Eléctrica', 'Acabados Finos'],
    imageUrl: 'input_file_18.png', 
    year: 2024,
    client: 'Galería de Arte',
    location: 'CDMX, MX'
  },
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = ['Todos', 'Electricidad', 'Construcciones', 'Remodelaciones', 'Impermeabilización'];

  const filteredProjects = activeFilter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  useEffect(() => {
    if (!selectedProject) {
      document.body.style.overflow = 'unset';
      return;
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };

    document.body.style.overflow = 'hidden';
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
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800' }}
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
               <div className="flex items-center justify-between mb-4">
                 <span className="px-3 py-1 bg-amber-500/10 text-amber-600 text-[10px] font-black uppercase tracking-widest rounded-full">{project.category}</span>
                 <span className="text-slate-400 text-[10px] font-bold">{project.year}</span>
               </div>
               <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-amber-500 transition-colors font-display leading-tight">{project.title}</h3>
               <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-6 font-medium">
                 {project.description}
               </p>
               <div className="flex items-center gap-2 text-slate-900 font-bold text-xs group-hover:gap-4 transition-all">
                 <span>VER EXPEDIENTE</span>
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
               </div>
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
              <div className="p-6 sm:p-8 lg:p-16 overflow-y-auto flex-1 custom-scrollbar">
                {/* Close Button Desktop */}
                <button onClick={() => setSelectedProject(null)} className="hidden lg:flex absolute top-10 right-10 z-50 w-12 h-12 bg-slate-50 hover:bg-amber-500 text-slate-900 hover:text-white rounded-full items-center justify-center transition-all border border-slate-200 shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                <div className="flex items-center gap-3 mb-6 sm:mb-8">
                  <span className="px-4 sm:px-5 py-1.5 sm:py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-amber-500/20">{selectedProject.category}</span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{selectedProject.year}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 mb-8 sm:mb-10 leading-[1.1] tracking-tight">{selectedProject.title}</h3>
                
                <div className="grid grid-cols-2 gap-6 sm:gap-10 mb-10 sm:mb-12 border-y border-slate-100 py-8 sm:py-10">
                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Socio Estratégico</h4>
                    <p className="font-bold text-slate-900 text-base sm:text-lg">{selectedProject.client || 'Residencial'}</p>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Territorio</h4>
                    <p className="font-bold text-slate-900 text-base sm:text-lg">{selectedProject.location || 'México'}</p>
                  </div>
                </div>

                <div className="mb-10 sm:mb-14">
                  <h4 className="text-slate-900 font-black mb-4 sm:mb-6 uppercase text-xs tracking-[0.3em] flex items-center gap-4">
                    Memoria Técnica
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </h4>
                  <p className="text-slate-600 leading-[1.8] text-base sm:text-lg font-medium italic">
                    "{selectedProject.fullDescription}"
                  </p>
                </div>

                <div className="mb-10 sm:mb-14">
                  <h4 className="text-slate-900 font-black mb-6 sm:mb-8 uppercase text-xs tracking-[0.3em] flex items-center gap-4">
                    Alcance Operativo
                    <div className="h-px bg-slate-100 flex-1"></div>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedProject.services.map((service, i) => (
                      <div key={i} className="group/service bg-slate-50 border border-slate-100 p-3 sm:p-4 rounded-2xl flex items-center gap-3 sm:gap-4 transition-all hover:bg-white hover:shadow-xl hover:border-amber-200">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white text-amber-500 rounded-lg flex items-center justify-center shadow-sm group-hover/service:bg-amber-500 group-hover/service:text-white transition-colors">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-slate-700 text-xs sm:text-sm font-black">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sticky Footer in Modal */}
              <div className="p-6 sm:p-8 lg:p-12 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4 sm:gap-6">
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">¿Tienes un proyecto similar?</p>
                  <p className="text-slate-900 font-black text-sm font-display">Solicita un diagnóstico hoy</p>
                </div>
                <a 
                  href="#contacto" 
                  onClick={handleCtaClick} 
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 sm:gap-4 bg-amber-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 group active:scale-95"
                >
                  Contactar Ingeniería
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
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
