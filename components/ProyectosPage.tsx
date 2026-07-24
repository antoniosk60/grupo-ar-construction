import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Portfolio from '../components/Portfolio';
import ImageGallery from '../components/ImageGallery';
import { motion, AnimatePresence } from 'motion/react';
import { HardHat, FolderKanban, Camera } from 'lucide-react';

const ProyectosPage: React.FC = () => {
  const [activeTab, setActiveTab ] = useState<'portfolio' | 'gallery'>('gallery');

  return (
    <div className="pt-24 pb-16 sm:pb-24">
      <Helmet>
        <title>Portafolio de Proyectos y Obras de Ingeniería | Grupo AR</title>
        <meta name="description" content="Explora nuestra galería de proyectos construidos, peinado de tableros eléctricos, impermeabilizaciones industriales y remodelaciones de alto diseño por Grupo AR." />
        <meta property="og:title" content="Portafolio de Proyectos y Obras de Ingeniería | Grupo AR" />
        <meta property="og:description" content="Casos de éxito y fotos en HD detallando nuestras soluciones premium de construcción, electricidad, remodelación y más." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://grupo-ar-construction.vercel.app/proyectos" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portafolio de Proyectos y Obras de Ingeniería | Grupo AR" />
        <meta name="twitter:description" content="Casos de éxito y fotos en HD detallando nuestras soluciones premium de construcción, electricidad, remodelación y más." />
        <link rel="canonical" href="https://grupo-ar-construction.vercel.app/proyectos" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-900 to-slate-900 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <HardHat className="w-4 h-4" />
            Galería y Casos de Éxito
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black font-display mb-4 tracking-tight"
          >
            Nuestros <span className="text-gradient">Proyectos</span> Realizados
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Descubre nuestra trayectoria a través de resultados reales. Cada proyecto refleja nuestro compromiso inquebrantable con la durabilidad, precisión y seguridad.
          </motion.p>

          {/* Tab Selector */}
          <div className="flex justify-center mt-12">
            <div className="inline-flex p-1.5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-black transition-all duration-300 relative ${
                  activeTab === 'gallery' ? 'text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                {activeTab === 'gallery' && (
                  <motion.div
                    layoutId="activeSubTabBg"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="absolute inset-0 bg-amber-500 rounded-xl"
                  />
                )}
                <Camera className="w-4 h-4 relative z-10" />
                <span className="relative z-10 uppercase tracking-wider">Galería de Inspección</span>
              </button>

              <button
                onClick={() => setActiveTab('portfolio')}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs font-black transition-all duration-300 relative ${
                  activeTab === 'portfolio' ? 'text-slate-900' : 'text-slate-300 hover:text-white'
                }`}
              >
                {activeTab === 'portfolio' && (
                  <motion.div
                    layoutId="activeSubTabBg"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="absolute inset-0 bg-amber-500 rounded-xl"
                  />
                )}
                <FolderKanban className="w-4 h-4 relative z-10" />
                <span className="relative z-10 uppercase tracking-wider">Fichas de Proyectos</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portfolio Grid */}
      <section className="py-16 bg-white min-h-[40vh]">
        <AnimatePresence mode="wait">
          {activeTab === 'gallery' ? (
            <motion.div
              key="gallery-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <ImageGallery />
            </motion.div>
          ) : (
            <motion.div
              key="portfolio-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <Portfolio />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default ProyectosPage;
