import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Minimize2, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Search, 
  MapPin, 
  Layers, 
  Calendar,
  Building2
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Electricidad' | 'Construcciones' | 'Remodelaciones' | 'Impermeabilización' | 'Telecomunicaciones';
  location: string;
  year: number;
  description: string;
  imageUrl: string;
  aspect: 'square' | 'portrait' | 'landscape';
}

const galleryProjects: GalleryItem[] = [
  {
    id: "g-1",
    title: "Corporativo Paseo de la Reforma",
    category: "Construcciones",
    location: "Sinaloa, México",
    year: 2025,
    description: "Diseño estructural avanzado y acabados monumentales con louvers térmicos de aluminio.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait"
  },
  {
    id: "g-2",
    title: "Residencia Lomas de Chapultepec",
    category: "Remodelaciones",
    location: "CDMX, México",
    year: 2026,
    description: "Proyecto de remodelación interior premium con acabados en mármol Calacatta e iluminación indirecta sintonizable.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g-3",
    title: "Peinado de Tableros Eléctricos Toluca",
    category: "Electricidad",
    location: "Edo. de México, México",
    year: 2025,
    description: "Configuración, peinado de alta densidad y balanceo dinámico de cargas en planta de manufactura automotriz.",
    imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    aspect: "square"
  },
  {
    id: "g-4",
    title: "Cimentación de Nave Industrial",
    category: "Construcciones",
    location: "Monterrey, Nuevo León",
    year: 2024,
    description: "Estudio de suelo estructural y vaciado continuo de vigas de concreto de alta resistencia sísmica.",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g-5",
    title: "Impermeabilización Elastomérica Querétaro",
    category: "Impermeabilización",
    location: "Querétaro, Qro.",
    year: 2026,
    description: "Sistemas reflectivos premium de poliuretano reduciendo hasta 5 grados centígrados la temperatura interna.",
    imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait"
  },
  {
    id: "g-6",
    title: "Plafón Acústico San Pedro",
    category: "Remodelaciones",
    location: "San Pedro Garza García, N.L.",
    year: 2025,
    description: "Montaje e integración de luminarias empotradas lineales y plafón suspendido de alta absorción acústica.",
    imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g-7",
    title: "Subestación Tipo Pedestal 500 kVA",
    category: "Electricidad",
    location: "Guadalajara, Jalisco",
    year: 2025,
    description: "Pruebas de resistencia de aislamiento y blindaje de tierras físicas según normativo NOM-001-SEDE.",
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80",
    aspect: "square"
  },
  {
    id: "g-8",
    title: "Villa Residencial Chukum",
    category: "Construcciones",
    location: "Tulum, Quintana Roo",
    year: 2026,
    description: "Obra de muros curvos en pasta fina Chukum natural integrando ingenierías de consumo sustentable.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait"
  },
  {
    id: "g-9",
    title: "Sistemas de Enrutamiento WiFi 6",
    category: "Telecomunicaciones",
    location: "Santa Fe, CDMX",
    year: 2026,
    description: "Site principal de datos con redundancia por fibra óptica e instalación de domos exteriores CCTV 4K.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g-10",
    title: "Manto Prefabricado con Gravilla SBS",
    category: "Impermeabilización",
    location: "Coatzacoalcos, Veracruz",
    year: 2025,
    description: "Fusión con soplete de membranas modificadas contra salitre y humedad extrema en costa.",
    imageUrl: "https://images.unsplash.com/photo-1534237176120-b75d3db82275?auto=format&fit=crop&w=1200&q=80",
    aspect: "square"
  },
  {
    id: "g-11",
    title: "Adecuación Eléctrica para Tesla Chargers",
    category: "Electricidad",
    location: "Polanco, CDMX",
    year: 2026,
    description: "Canalizaciones blindadas y balanceador automático dinámico de potencia residencial.",
    imageUrl: "https://images.unsplash.com/photo-1513828729027-d4f3b25f9b48?auto=format&fit=crop&w=1200&q=80",
    aspect: "landscape"
  },
  {
    id: "g-12",
    title: "Cocina Corporativa Acabado Roble",
    category: "Remodelaciones",
    location: "San Luis Potosí, SLP",
    year: 2025,
    description: "Detalle de carpintería fina modular integrada en herrajes invisibles con acabado de laca premium anti-rayas.",
    imageUrl: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    aspect: "portrait"
  }
];

const ImageGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const [zoomCoords, setZoomCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const imgContainerRef = useRef<HTMLDivElement | null>(null);

  const filters = ['Todos', 'Electricidad', 'Construcciones', 'Remodelaciones', 'Impermeabilización', 'Telecomunicaciones'];

  const filteredItems = activeFilter === 'Todos'
    ? galleryProjects
    : galleryProjects.filter(p => p.category === activeFilter);

  // Keyboard navigation & body scrolling
  useEffect(() => {
    if (lightboxIndex === null) {
      document.body.style.overflow = 'unset';
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex, filteredItems.length]);

  // Slideshow autoadvance
  useEffect(() => {
    if (isRotating && lightboxIndex !== null) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRotating, lightboxIndex]);

  const handleOpen = (item: GalleryItem) => {
    // Find index in current filtered list
    const index = filteredItems.findIndex(x => x.id === item.id);
    setLightboxIndex(index !== -1 ? index : 0);
    setIsZoomed(false);
  };

  const handleClose = () => {
    setLightboxIndex(null);
    setIsRotating(false);
    setIsZoomed(false);
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleNext = () => {
    setIsZoomed(false);
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % filteredItems.length;
    });
  };

  const handlePrev = () => {
    setIsZoomed(false);
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + filteredItems.length) % filteredItems.length;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distanceX = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distanceX > minSwipeDistance) {
      handleNext();
    } else if (distanceX < -minSwipeDistance) {
      handlePrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleToggleSlideshow = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRotating(!isRotating);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imgContainerRef.current) return;
    const rect = imgContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomCoords({ x, y });
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imgContainerRef.current) return;
    const rect = imgContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomCoords({ x, y });
  };

  const activeProject = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Category Filter Pills */}
      <div className="flex flex-col items-center mb-10 sm:mb-16">
        <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4 text-center">
          Inspiración Técnica & Detalle Técnico
        </h2>
        <h3 className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight text-center mb-8 leading-tight">
          Galería de <span className="text-gradient">Espacios & Estructuras</span>
        </h3>

        {/* Scrollable container on small devices, wrapped on larger */}
        <div className="w-full flex justify-center overflow-x-auto pb-4 sm:pb-0 scrollbar-none">
          <div className="flex sm:flex-wrap justify-start sm:justify-center gap-2 p-1.5 bg-slate-100 rounded-3xl max-w-full md:max-w-4xl shadow-inner border border-slate-200/50 whitespace-nowrap px-4 sm:px-1.5">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setIsZoomed(false);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs font-black transition-all duration-300 relative shrink-0 ${
                  activeFilter === filter 
                    ? 'text-slate-900 font-bold' 
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="activeFilterBg"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="absolute inset-0 bg-white shadow-sm border border-slate-200/20 rounded-2xl"
                  />
                )}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Masonry-style Multi-column gallery */}
      <motion.div 
        layout
        className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 [column-fill:_balance]"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => {
            const aspectClass = item.aspect === 'portrait' 
              ? 'h-[280px] min-[400px]:h-[350px] sm:h-[420px]' 
              : item.aspect === 'square' 
                ? 'h-[220px] min-[400px]:h-[260px] sm:h-[280px]' 
                : 'h-[160px] min-[400px]:h-[190px] sm:h-[210px]';

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleOpen(item)}
                className="break-inside-avoid relative group rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-slate-100 bg-white shadow-[0_15px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_30px_60px_rgba(245,158,11,0.08)] cursor-pointer select-none"
              >
                <div className={`relative w-full ${aspectClass} overflow-hidden`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-amber-400 text-[9px] font-black uppercase tracking-widest block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-white text-lg font-black font-display tracking-tight leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-slate-300 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10 text-white text-[10px] font-black tracking-wider uppercase">
                        <Search className="w-3.5 h-3.5 text-amber-500" />
                        <span>Inspeccionar Obra</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Always-on Bottom info ribbon */}
                <div className="p-5 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <h5 className="text-slate-800 font-bold text-sm tracking-tight line-clamp-1 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h5>
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-wider block mt-0.5">
                      {item.location}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 font-black text-[9px] rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Dynamic Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] flex flex-col bg-slate-950/98 backdrop-blur-xl select-none text-white overflow-hidden h-[100dvh]"
            onClick={handleClose}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Toolbar */}
            <div className="relative w-full h-14 sm:h-20 border-b border-white/5 flex items-center justify-between px-4 sm:px-8 z-[120]" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="bg-amber-500 text-white font-black text-[9px] sm:text-[10px] px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full uppercase tracking-widest shrink-0">
                  {activeProject.category}
                </span>
                <span className="text-slate-400 text-[10px] sm:text-xs font-bold hidden sm:inline-flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {activeProject.location}
                </span>
              </div>

              {/* Counter Indicator */}
              <div className="text-slate-300 font-bold text-xs sm:text-base font-mono bg-white/5 px-3 py-1 rounded-full border border-white/5 sm:bg-transparent sm:border-0 sm:px-0 sm:py-0">
                {lightboxIndex + 1} <span className="text-slate-600">/</span> {filteredItems.length}
              </div>

              {/* Utility buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <button
                  onClick={handleToggleSlideshow}
                  title={isRotating ? "Pausar reproducción" : "Iniciar reproducción automática"}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
                    isRotating 
                      ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/20' 
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
                  }`}
                >
                  {isRotating ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white animate-pulse" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-300" />}
                </button>

                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  title={isZoomed ? "Reducir" : "Ampliar detalle"}
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
                    isZoomed 
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                      : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5'
                  }`}
                >
                  {isZoomed ? <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                </button>

                <button
                  onClick={handleClose}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 hover:bg-red-500/10 hover:text-red-400 text-slate-300 hover:border-red-500/20 border border-white/5 rounded-xl flex items-center justify-center transition-all"
                  title="Cerrar galería (Esc)"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Slideshow Progress Bar */}
            {isRotating && (
              <div className="w-full h-0.5 sm:h-1 bg-white/5 relative z-[120]">
                <motion.div
                  key={lightboxIndex}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                  className="h-full bg-amber-500"
                />
              </div>
            )}

            {/* Main Stage & Side Navigation */}
            <div className="flex-1 relative flex items-center justify-center p-2 sm:p-6 md:p-8 overflow-hidden">
              
              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="hidden sm:flex absolute left-4 md:left-8 w-10 h-10 md:w-14 md:h-14 bg-white/5 hover:bg-white/10 hover:text-amber-500 text-white rounded-full items-center justify-center transition-all border border-white/10 select-none z-50 cursor-pointer"
                title="Fotografía anterior"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Active Image Canvas */}
              <div 
                ref={imgContainerRef}
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageClick(e);
                }}
                onMouseMove={handleMouseMove}
                className={`relative max-w-[94vw] sm:max-w-[85vw] md:max-w-4xl max-h-[55vh] sm:max-h-[65vh] md:max-h-[70vh] rounded-2xl md:rounded-[2rem] overflow-hidden bg-slate-900 border border-white/5 shadow-2xl transition-all cursor-${isZoomed ? 'zoom-out' : 'zoom-in'}`}
                style={{
                  aspectRatio: activeProject.aspect === 'landscape' ? '16/10' : activeProject.aspect === 'square' ? '1/1' : '3/4'
                }}
              >
                <motion.img
                  key={activeProject.id}
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: 1, 
                    scale: isZoomed ? 2.5 : 1,
                    transformOrigin: isZoomed ? `${zoomCoords.x}% ${zoomCoords.y}%` : 'center'
                  }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Zoom tips overlay */}
                <div className="absolute bottom-3 right-3 bg-slate-950/70 backdrop-blur-md px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-white/5 text-[8px] sm:text-[10px] font-bold text-slate-300 flex items-center gap-1 sm:gap-1.5 pointer-events-none uppercase tracking-wider">
                  <Maximize2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-500" />
                  <span>{isZoomed ? "Encoger" : "Zoom"}</span>
                </div>
              </div>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="hidden sm:flex absolute right-4 md:right-8 w-10 h-10 md:w-14 md:h-14 bg-white/5 hover:bg-white/10 hover:text-amber-500 text-white rounded-full items-center justify-center transition-all border border-white/10 select-none z-50 cursor-pointer"
                title="Siguiente fotografía"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Bottom Panel with Metadata & Thumbnails */}
            <div className="bg-slate-950/85 backdrop-blur-md border-t border-white/5 py-4 pb-6 px-4 sm:px-8 z-[120]" onClick={(e) => e.stopPropagation()}>
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-4 md:gap-6">
                
                {/* Text Metadata */}
                <div className="text-center md:text-left max-w-xl w-full">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                    <span className="text-amber-500 font-bold block text-xs sm:text-sm font-display tracking-tight uppercase">
                      {activeProject.title}
                    </span>
                    <span className="text-slate-600 hidden xs:inline">•</span>
                    <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1 text-[9px] min-w-0 shrink-0">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {activeProject.year}
                    </span>
                    <span className="text-slate-600 hidden xs:inline">•</span>
                    <span className="text-slate-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1 text-[9px] min-w-0 shrink-0">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      {activeProject.category}
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed italic line-clamp-2 md:line-clamp-none">
                    "{activeProject.description}"
                  </p>
                </div>

                {/* Thumbnails Navigator Block */}
                <div className="flex items-center gap-1.5 sm:gap-2 max-w-full overflow-x-auto pb-1.5 pt-1.5 border-t border-white/5 w-full md:w-auto md:border-0 md:pt-0 justify-center md:justify-start custom-scrollbar shrink-0 scroll-smooth">
                  {filteredItems.map((thumb, idx) => (
                    <button
                      key={thumb.id}
                      onClick={() => {
                        setLightboxIndex(idx);
                        setIsZoomed(false);
                      }}
                      className={`relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl overflow-hidden shrink-0 transition-all border-2 ${
                        idx === lightboxIndex 
                          ? 'border-amber-500 scale-105 shadow-md shadow-amber-500/20' 
                          : 'border-transparent opacity-40 hover:opacity-100'
                      }`}
                    >
                      <img src={thumb.imageUrl} alt={thumb.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageGallery;
