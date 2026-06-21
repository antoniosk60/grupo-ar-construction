
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Droplets, CheckCircle2, ArrowRight } from 'lucide-react';

const Impermeabilizaciones: React.FC = () => {
  const gallery = [
    {
      url: 'input_file_10.png',
      title: 'Impermeabilización de Azotea',
      description: 'Aplicación de sistema acrílico reforzado con malla de poliéster para máxima durabilidad.'
    },
    {
      url: 'input_file_11.png',
      title: 'Preparación de Superficie',
      description: 'Limpieza profunda y sellado de grietas críticas antes de la aplicación del sistema.'
    },
    {
      url: 'input_file_12.png',
      title: 'Sistema de Malla Reforzada',
      description: 'Instalación de malla de refuerzo en puntos críticos y juntas de expansión.'
    },
    {
      url: 'input_file_13.png',
      title: 'Acabado Reflectivo',
      description: 'Capa final de alta reflectividad para reducción de temperatura interna en naves industriales.'
    },
    {
      url: 'input_file_14.png',
      title: 'Protección de Muros',
      description: 'Aplicación de selladores hidrofugantes en muros exteriores para prevenir humedad.'
    }
  ];

  return (
    <div className="pt-24 pb-16 sm:pb-24">
      <Helmet>
        <title>Sistemas de Impermeabilización Profesional | Grupo AR</title>
        <meta name="description" content="Especialistas en impermeabilización elastomérica, mantos prefabricados SBS, sistemas reflectivos térmicos y control de filtraciones por Grupo AR." />
        <meta property="og:title" content="Sistemas de Impermeabilización Profesional | Grupo AR" />
        <meta property="og:description" content="Protege tus losas, azoteas, naves industriales y muros contra humedad extrema y filtraciones con garantía certificada." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="input_file_13.png" 
            className="w-full h-full object-cover opacity-40"
            alt="Impermeabilización"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Droplets className="w-4 h-4" />
              Protección Estructural
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-display text-white mb-6 leading-tight">
              Sistemas de <span className="text-gradient">Impermeabilización</span> Avanzada
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Blindamos tu patrimonio contra la humedad con tecnologías de alto desempeño y garantías extendidas por escrito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black font-display text-slate-900 mb-8">Especialistas en Estanqueidad</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                La humedad es el enemigo silencioso de cualquier construcción. En Grupo AR, ofrecemos soluciones definitivas para filtraciones en azoteas, muros, cisternas y cimentaciones.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Utilizamos sistemas multicapa que combinan elasticidad, resistencia a rayos UV y durabilidad extrema, adaptándonos a las necesidades específicas de cada superficie.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Sistemas Acrílicos',
                  'Mantos Prefabricados',
                  'Poliuretano Líquido',
                  'Sistemas Cementosos',
                  'Inyección de Grietas',
                  'Aislamiento Térmico'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-black font-display text-slate-900 mb-6 text-center">¿Tienes filtraciones?</h3>
              <p className="text-slate-500 text-center mb-8">
                No esperes a que el daño sea mayor. Solicita una inspección técnica sin costo para evaluar el estado de tus cubiertas.
              </p>
              <a 
                href="/#contacto" 
                className="flex items-center justify-center gap-3 bg-amber-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 group"
              >
                Solicitar Inspección
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Portafolio</h2>
            <p className="text-4xl sm:text-5xl font-black font-display text-slate-900">Proyectos de <span className="text-gradient">Impermeabilización</span></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.url} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-black text-slate-900 mb-3 font-display">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impermeabilizaciones;
