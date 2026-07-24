
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { getImageUrl, handleImageError } from '../types';

const Electricidad: React.FC = () => {
  const gallery = [
    {
      url: 'input_file_2.png',
      title: 'Tablero de Distribución Principal',
      description: 'Peinado y conexión de tablero principal con protecciones térmicas de alta precisión.'
    },
    {
      url: 'input_file_3.png',
      title: 'Infraestructura Eléctrica',
      description: 'Instalación de tubería conduit y cableado estructurado para naves industriales.'
    },
    {
      url: 'input_file_5.png',
      title: 'Estación de Carga Tesla',
      description: 'Instalación certificada de Tesla Wall Connector con balanceo de carga dinámico.'
    },
    {
      url: 'input_file_6.png',
      title: 'Centro de Carga Residencial',
      description: 'Actualización de centros de carga para cumplimiento con norma NOM-001-SEDE.'
    },
    {
      url: 'input_file_8.png',
      title: 'Tablero de Control Industrial',
      description: 'Montaje de cuadros de control para maquinaria pesada y automatización.'
    },
    {
      url: 'input_file_9.png',
      title: 'Sistema de Tierras',
      description: 'Implementación de sistemas de puesta a tierra y pararrayos para protección de equipos.'
    }
  ];

  return (
    <div className="pt-24 pb-16 sm:pb-24">
      <Helmet>
        <title>Electricidad Industrial y Residencial | Grupo AR</title>
        <meta name="description" content="Servicios de instalaciones eléctricas de alta precisión, balanceo de cargas, peinado de tableros y estaciones de carga certificados bajo la norma NOM-001-SEDE por Grupo AR." />
        <meta property="og:title" content="Electricidad Industrial y Residencial | Grupo AR" />
        <meta property="og:description" content="Peinado de tableros, instalaciones residenciales e industriales autorizadas y cargadores para vehículos eléctricos." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src={getImageUrl("input_file_2.png")} 
            className="w-full h-full object-cover opacity-40"
            alt="Electricidad"
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, 'Electricidad')}
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
              <Zap className="w-4 h-4" />
              Servicios Especializados
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-display text-white mb-6 leading-tight">
              Ingeniería <span className="text-gradient">Eléctrica</span> de Precisión
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Soluciones integrales en media y baja tensión, cumpliendo con los más altos estándares de seguridad y normatividad nacional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-black font-display text-slate-900 mb-8">Nuestra Experiencia en Electricidad</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                En Grupo AR, entendemos que la infraestructura eléctrica es el corazón de cualquier proyecto. Nos especializamos en el diseño, ejecución y mantenimiento de sistemas eléctricos para sectores residenciales, comerciales e industriales.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                Nuestro equipo de ingenieros certificados garantiza que cada instalación sea eficiente, segura y escalable, utilizando materiales de primera calidad y tecnología de vanguardia.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  'Subestaciones Eléctricas',
                  'Tableros de Distribución',
                  'Instalaciones Industriales',
                  'Sistemas de Iluminación LED',
                  'Tierras Físicas y Pararrayos',
                  'Dictámenes de Verificación'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-2xl font-black font-display text-slate-900 mb-6 text-center">¿Necesitas un diagnóstico?</h3>
              <p className="text-slate-500 text-center mb-8">
                Realizamos levantamientos técnicos y auditorías para optimizar tu consumo y asegurar tu instalación.
              </p>
              <Link 
                to="/#contacto" 
                className="flex items-center justify-center gap-3 bg-amber-500 text-white px-8 py-4 rounded-2xl font-black hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 group"
              >
                Contactar Especialista
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
            <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900">Evidencia de <span className="text-gradient">Calidad</span></h2>
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
                    onError={(e) => handleImageError(e, 'Electricidad')}
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

export default Electricidad;
