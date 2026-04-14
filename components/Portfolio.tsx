import React, { useState, useEffect, useCallback } from 'react';
import { Project, GalleryImage } from '../types';
import { projects } from '../data/projects';



// ─── Sub-componente: Galería con navegación ────────────────────────────────────
interface ProjectGalleryProps {
  images: GalleryImage[];
  projectTitle: string;
  initialIndex?: number;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, projectTitle, initialIndex = 0 }) => {
  const [current, setCurrent] = useState(initialIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning || index === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 250);
  }, [current, isTransitioning]);

  const prev = () => goTo((current - 1 + images.length) % images.length);
  const next = () => goTo((current + 1) % images.length);

  // Navegación con teclado ← →
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [current]);

  const img = images[current];

  return (
    <div className="w-full h-full flex flex-col">
      {/* Imagen principal */}
      <div className="relative flex-1 overflow-hidden bg-slate-900 min-h-0">
        <img
          src={img.url}
          alt={`${projectTitle} — ${img.caption ?? ''}`}
          className={`w-full h-full object-cover transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        />

        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Badge fase + caption */}
        {(img.phase || img.caption) && (
          <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
            {img.phase && (
              <span className="inline-block bg-amber-500 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full mb-2 shadow-lg">
                {img.phase}
              </span>
            )}
            {img.caption && (
              <p className="text-white font-semibold text-sm lg:text-base drop-shadow">{img.caption}</p>
            )}
          </div>
        )}

        {/* Botones anterior / siguiente — solo si hay más de 1 imagen */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 hover:bg-amber-500 border border-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Foto siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/15 hover:bg-amber-500 border border-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all hover:scale-110 active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Contador */}
            <div className="absolute top-4 right-4 bg-slate-950/60 backdrop-blur-sm text-white text-[10px] font-black px-3 py-1.5 rounded-full border border-white/10">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {/* Tira de miniaturas — solo si hay más de 1 imagen */}
      {images.length > 1 && (
        <div className="flex gap-2 p-3 bg-slate-950 overflow-x-auto shrink-0">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ver foto ${i + 1}`}
              className={`relative shrink-0 w-16 h-12 lg:w-20 lg:h-14 rounded-lg overflow-hidden border-2 transition-all ${i === current
                ? 'border-amber-500 scale-105 shadow-lg shadow-amber-500/30'
                : 'border-transparent opacity-50 hover:opacity-80'
                }`}
            >
              <img src={img.url} alt={img.caption ?? `Foto ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Componente principal Portfolio ───────────────────────────────────────────
const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [startImageIndex, setStartImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = ['Todos', 'Electricidad', 'Telecomunicaciones', 'Remodelaciones', 'Impermeabilización', 'Industrial', 'Equipo', 'Construcción', 'Ingeniería'];

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
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';
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
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  // Fotos a mostrar en el modal (usa "images" si existe, sino imagen principal)
  const getGalleryImages = (project: Project): GalleryImage[] => {
    if (project.images && project.images.length > 0) return project.images;
    return [{ url: project.imageUrl, caption: 'Vista general' }];
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ── Encabezado + filtros ────────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
        <div className="max-w-2xl">
          <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Nuestro Historial</h2>
          <p className="text-slate-900 text-4xl lg:text-5xl font-black font-display leading-tight">
            Proyectos que hablan <br />
            <span className="text-slate-400">por sí solos.</span>
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all overflow-hidden ${activeFilter === filter
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
            >
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid de proyectos ───────────────────────────────────────────────── */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {filteredProjects.map((project, index) => {
          const allImages = getGalleryImages(project);
          const maxThumbs = 4;
          const visibleThumbs = allImages.slice(1, maxThumbs + 1);
          const extraCount = allImages.length - 1 - maxThumbs;

          const openAtIndex = (imgIndex: number) => {
            setStartImageIndex(imgIndex);
            setSelectedProject(project);
          };

          return (
            <div
              key={project.id}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            >
              {/* Imagen principal */}
              <div
                className="aspect-[16/11] overflow-hidden relative cursor-pointer"
                onClick={() => openAtIndex(0)}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">{project.category}</span>
                    <h3 className="text-2xl font-black text-white mb-4 font-display">{project.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="bg-amber-500 text-white px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest">Ver galería</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Miniatura grid ─────────────────────────────────────────── */}
              {visibleThumbs.length > 0 && (
                <div className="px-6 pt-4 pb-0">
                  <div className={`grid gap-2 ${visibleThumbs.length === 1 ? 'grid-cols-1' : visibleThumbs.length === 2 ? 'grid-cols-2' : visibleThumbs.length === 3 ? 'grid-cols-3' : 'grid-cols-4'}`}>
                    {visibleThumbs.map((thumb, i) => {
                      const isLast = i === visibleThumbs.length - 1 && extraCount > 0;
                      const actualIndex = i + 1; // offset by 1 since index 0 is the main image
                      return (
                        <button
                          key={i}
                          onClick={(e) => { e.stopPropagation(); openAtIndex(actualIndex); }}
                          className="relative h-16 w-full rounded-xl overflow-hidden group/thumb focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all hover:scale-105 hover:shadow-lg active:scale-95"
                        >
                          <img
                            src={thumb.url}
                            alt={thumb.caption ?? `Foto ${actualIndex + 1}`}
                            className="w-full h-full object-cover transition-all duration-300 group-hover/thumb:brightness-110"
                          />
                          {isLast && (
                            <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] flex items-center justify-center">
                              <span className="text-white text-sm font-black">+{extraCount}</span>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Info card */}
              <div className="p-6 pt-4 cursor-pointer" onClick={() => openAtIndex(0)}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-amber-600 text-[10px] font-black uppercase tracking-widest">{project.category}</span>
                  <span className="text-slate-400 text-[10px] font-bold">{project.year}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-amber-500 transition-colors font-display leading-tight">{project.title}</h3>
                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">{project.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Modal de detalle con galería ───────────────────────────────────── */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 lg:p-8 animate-in fade-in duration-300">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" onClick={() => setSelectedProject(null)} />

          <div className="relative bg-white w-full max-w-7xl h-full sm:h-[92vh] overflow-hidden sm:rounded-[3rem] shadow-2xl animate-in zoom-in-95 duration-500 flex flex-col lg:flex-row">

            {/* ── Lado izquierdo: Galería ─────────────────────────────────── */}
            <div className="lg:w-7/12 relative h-[45vh] lg:h-auto overflow-hidden bg-slate-900 flex flex-col">
              {/* Botón cerrar mobile */}
              <button
                onClick={() => setSelectedProject(null)}
                className="lg:hidden absolute top-4 right-4 z-50 w-10 h-10 bg-white/20 hover:bg-white text-white hover:text-slate-900 rounded-full flex items-center justify-center transition-all border border-white/20 backdrop-blur-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <ProjectGallery
                images={getGalleryImages(selectedProject)}
                projectTitle={selectedProject.title}
                initialIndex={startImageIndex}
              />
            </div>

            {/* ── Lado derecho: Contenido ─────────────────────────────────── */}
            <div className="lg:w-5/12 flex flex-col bg-white h-[55vh] lg:h-auto">
              <div className="p-8 lg:p-16 overflow-y-auto flex-1 custom-scrollbar">

                {/* Botón cerrar desktop */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="hidden lg:flex absolute top-10 right-10 z-50 w-12 h-12 bg-slate-50 hover:bg-amber-500 text-slate-900 hover:text-white rounded-full items-center justify-center transition-all border border-slate-200 shadow-sm"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Tags */}
                <div className="flex items-center gap-3 mb-8 flex-wrap">
                  <span className="px-5 py-2 bg-amber-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-amber-500/20">
                    {selectedProject.category}
                  </span>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{selectedProject.year}</span>
                  {/* Contador de fotos en el modal */}
                  {(selectedProject.images?.length ?? 0) > 1 && (
                    <span className="px-4 py-2 bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.15em] rounded-full flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
                        <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={2} />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15l-5-5L5 21" />
                      </svg>
                      {selectedProject.images!.length} fotos de avance
                    </span>
                  )}
                </div>

                {/* Título */}
                <h3 className="text-4xl lg:text-5xl font-black font-display text-slate-900 mb-10 leading-[1.1] tracking-tight">
                  {selectedProject.title}
                </h3>

                {/* Meta */}
                <div className="grid grid-cols-2 gap-10 mb-12 border-y border-slate-100 py-10">
                  <div className="space-y-2">
                    <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Socio Estratégico</h4>
                    <p className="font-bold text-slate-900 text-lg">{selectedProject.client ?? 'Residencial'}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Territorio</h4>
                    <p className="font-bold text-slate-900 text-lg">{selectedProject.location ?? 'México'}</p>
                  </div>
                </div>

                {/* Descripción */}
                <div className="mb-14">
                  <h4 className="text-slate-900 font-black mb-6 uppercase text-xs tracking-[0.3em] flex items-center gap-4">
                    Memoria Técnica
                    <div className="h-px bg-slate-100 flex-1" />
                  </h4>
                  <p className="text-slate-600 leading-[1.8] text-lg font-medium italic">
                    "{selectedProject.fullDescription}"
                  </p>
                </div>

                {/* Servicios */}
                <div className="mb-14">
                  <h4 className="text-slate-900 font-black mb-8 uppercase text-xs tracking-[0.3em] flex items-center gap-4">
                    Alcance Operativo
                    <div className="h-px bg-slate-100 flex-1" />
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedProject.services.map((service, i) => (
                      <div key={i} className="group/service bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center gap-4 transition-all hover:bg-white hover:shadow-xl hover:border-amber-200">
                        <div className="w-8 h-8 bg-white text-amber-500 rounded-lg flex items-center justify-center shadow-sm group-hover/service:bg-amber-500 group-hover/service:text-white transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-slate-700 text-sm font-black">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer sticky del modal */}
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
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
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
