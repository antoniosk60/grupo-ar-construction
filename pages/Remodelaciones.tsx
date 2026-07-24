
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, CheckCircle2, ArrowRight } from 'lucide-react';
import { getImageUrl, handleImageError } from '../types';

const Remodelaciones: React.FC = () => {
  const gallery = [
    {
      url: 'input_file_15.png',
      title: 'Interiores de Lujo',
      description: 'Remodelación integral de áreas sociales con acabados premium y diseño de iluminación.'
    },
    {
      url: 'input_file_16.png',
      title: 'Carpintería y Detalles',
      description: 'Diseño de paneles de madera con iluminación indirecta para crear ambientes cálidos.'
    },
    {
      url: 'input_file_17.png',
      title: 'Iluminación Arquitectónica',
      description: 'Integración de sistemas de iluminación LED en plafones y muros para resaltar texturas.'
    },
    {
      url: 'input_file_19.png',
      title: 'Áreas Exteriores y Decks',
      description: 'Instalación de decks de madera y estructuras metálicas para terrazas modernas.'
    },
    {
      url: 'input_file_1.png',
      title: 'Transformación de Espacios',
      description: 'Proceso de obra para redistribución de espacios y actualización de acabados.'
    }
  ];

  return (
    <div className="pt-24 pb-16 sm:pb-24">
      <Helmet>
        <title>Remodelaciones e Interiorismo Premium | Grupo AR</title>
        <meta name="description" content="Diseño y remodelación residencial e institucional. Albañilería fina, plafón falso, carpintería premium y micro-iluminación escénica por Grupo AR." />
        <meta property="og:title" content="Remodelaciones e Interiorismo Premium | Grupo AR" />
        <meta property="og:description" content="Reformas comerciales, oficinas, lofts y casas de alto nivel con acabados arquitectónicos sobresalientes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImageUrl("input_file_15.png")} 
            className="w-full h-full object-cover opacity-40"
            alt="Remodelaciones"
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'Remodelaciones')}
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Home className="w-4 h-4" />
              Diseño y Transformación
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-display text-white mb-6 leading-tight">
              Remodelaciones que <span className="text-gradient">Inspiran</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Elevamos el valor y la estética de tus espacios con diseños contemporáneos y ejecución de obra impecable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black font-display text-slate-900 mb-8">Transformamos tu Visión</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                En Grupo AR, creemos que cada espacio tiene el potencial de ser extraordinario. Nos especializamos en remodelaciones residenciales y comerciales que combinan funcionalidad, confort y estilo.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Desde la actualización de una sola habitación hasta la renovación total de un edificio, nuestro enfoque se centra en la atención al detalle y el uso de materiales de la más alta calidad.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Diseño de Interiores',
                  'Acabados en Mármol y Granito',
                  'Carpintería Residencial',
                  'Plafones e Iluminación',
                  'Actualización de Baños y Cocinas',
                  'Pintura y Recubrimientos'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-black font-display text-slate-900 mb-6 text-center">¿Listo para renovar?</h3>
              <p className="text-slate-500 text-center mb-8">
                Cuéntanos tu idea y nosotros nos encargamos de todo el proceso, desde el diseño conceptual hasta la entrega final.
              </p>
              <Link 
                to="/#contacto" 
                className="flex items-center justify-center gap-3 bg-amber-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 group"
              >
                Cotizar Proyecto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-4">Portafolio</span>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900">Galería de <span className="text-gradient">Remodelaciones</span></h2>
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
                    src={getImageUrl(item.url)} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, 'Remodelaciones')}
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

export default Remodelaciones;
