
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { HardHat, CheckCircle2, ArrowRight } from 'lucide-react';
import { getImageUrl, handleImageError } from '../types';

const Construcciones: React.FC = () => {
  const gallery = [
    {
      url: 'input_file_0.png',
      title: 'Residencia Contemporánea',
      description: 'Construcción de vivienda de lujo con diseño arquitectónico de vanguardia y acabados premium.'
    },
    {
      url: 'input_file_4.png',
      title: 'Estructuras Especiales',
      description: 'Ejecución de muros curvos y volumetrías complejas con acabados en concreto aparente.'
    },
    {
      url: 'input_file_1.png',
      title: 'Obra Civil y Cimentación',
      description: 'Proceso de cimentación profunda y levantamiento de estructuras de concreto armado.'
    },
    {
      url: 'input_file_19.png',
      title: 'Estructuras Metálicas',
      description: 'Montaje de estructuras de acero para techumbres y áreas sociales de gran claro.'
    }
  ];

  return (
    <div className="pt-24 pb-16 sm:pb-24">
      <Helmet>
        <title>Construcción y Obra Civil de Vanguardia | Grupo AR</title>
        <meta name="description" content="Servicios de construcción premium, estructuras especiales, obra civil y cimentación profunda. Construyendo infraestructuras fuertes y durables." />
        <meta property="og:title" content="Construcción y Obra Civil de Vanguardia | Grupo AR" />
        <meta property="og:description" content="Servicios expertos de obra civil, naves industriales y residenciales con materiales certificados y alta ingeniería." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImageUrl("input_file_0.png")} 
            className="w-full h-full object-cover opacity-40"
            alt="Construcciones"
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'Construcciones')}
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
              <HardHat className="w-4 h-4" />
              Obra Civil e Industrial
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-display text-white mb-6 leading-tight">
              Construimos el <span className="text-gradient">Futuro</span>
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Desde la cimentación hasta los acabados finales, ejecutamos proyectos de construcción con rigor técnico y eficiencia operativa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black font-display text-slate-900 mb-8">Solidez en Cada Detalle</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                En Grupo AR, la construcción es más que levantar muros; es crear infraestructuras que perduren. Nos especializamos en obra civil, residencial e industrial, aplicando las mejores prácticas de ingeniería.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Contamos con la capacidad técnica y el equipo humano para gestionar proyectos de gran complejidad, asegurando el cumplimiento de plazos, presupuestos y normativas de seguridad.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Obra Negra y Gris',
                  'Estructuras de Concreto',
                  'Estructuras Metálicas',
                  'Cimentaciones Profundas',
                  'Urbanización',
                  'Supervisión de Obra'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-black font-display text-slate-900 mb-6 text-center">Inicia tu proyecto hoy</h3>
              <p className="text-slate-500 text-center mb-8">
                ¿Tienes un terreno o un proyecto en mente? Permítenos asesorarte en la planeación y ejecución de tu obra.
              </p>
              <Link 
                to="/#contacto" 
                className="flex items-center justify-center gap-3 bg-amber-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 group"
              >
                Hablar con un Ingeniero
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
            <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900">Proyectos de <span className="text-gradient">Construcción</span></h2>
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
                    onError={(e) => handleImageError(e, 'Construcciones')}
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

export default Construcciones;
