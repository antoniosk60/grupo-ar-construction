import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, Construction, Paintbrush, ShieldCheck, ChevronRight, CheckCircle2 } from 'lucide-react';

const specialties = [
  {
    title: 'Ingeniería Eléctrica',
    description: 'Instalaciones completas residenciales, comerciales e industriales según la norma NOM-001-SEDE. Gestión de subestaciones, tableros de transferencia automática, peinado de tableros de distribución de alta precisión y balanceo dinámico de cargas.',
    colorText: 'text-amber-500',
    colorBg: 'bg-amber-500/10 hover:bg-amber-500/15',
    colorBorder: 'border-amber-500/20',
    icon: <Zap className="w-10 h-10 text-amber-500" />,
    link: '/electricidad',
    bullets: [
      'Subestaciones Eléctricas de media tensión',
      'Tableros de fuerza y control automatizados',
      'Certificaciones bajo normas oficiales NOM',
      'Instalación certificada de cargadores Tesla'
    ]
  },
  {
    title: 'Construcción y Obra Civil',
    description: 'Gestión integral de proyectos estructurales, cimentaciones profundas, muros de contención, estructuras de concreto armado y metálicas. Soluciones seguras con un estricto control de calidad técnico y presupuestal.',
    colorText: 'text-slate-800',
    colorBg: 'bg-slate-500/10 hover:bg-slate-500/15',
    colorBorder: 'border-slate-500/20',
    icon: <Construction className="w-10 h-10 text-slate-800" />,
    link: '/construcciones',
    bullets: [
      'Estructuras de concreto armado y metálicas',
      'Obras de infraestructura y urbanización',
      'Gestión integral con supervisión de obra',
      'Cimentaciones con altos estándares de seguridad'
    ]
  },
  {
    title: 'Remodelaciones de Alto Nivel',
    description: 'Redistribución inteligente y acabados premium para condominios, oficinas y áreas exteriores. Diseños 3D realistas, plafonería acústica, iluminación arquitectónica indirecta y recubrimientos en mármol y granito.',
    colorText: 'text-emerald-500',
    colorBg: 'bg-emerald-500/10 hover:bg-emerald-500/15',
    colorBorder: 'border-emerald-500/20',
    icon: <Paintbrush className="w-10 h-10 text-emerald-500" />,
    link: '/remodelaciones',
    bullets: [
      'Modelado de espacios comerciales y residenciales',
      'Acabados premium en mármol, granito y maderas',
      'Carpintería integrada y detalles a medida',
      'Sistemas de iluminación LED indirecta'
    ]
  },
  {
    title: 'Impermeabilizaciones con Garantía',
    description: 'Sistemas multicapa de alta estanqueidad y reflectividad solar. Mantos prefabricados modificados con SBS, sistemas acrílicos elastoméricos de alto rendimiento y poliuretano líquido para techumbres, muros y cisternas.',
    colorText: 'text-blue-500',
    colorBg: 'bg-blue-500/10 hover:bg-blue-500/15',
    colorBorder: 'border-blue-500/20',
    icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
    link: '/impermeabilizaciones',
    bullets: [
      'Aislamiento térmico integrado en recubrimientos',
      'Protección de azoteas industriales y comerciales',
      'Tratamiento de juntas frías y grietas estructurales',
      'Garantías extendidas por escrito hasta de 10 años'
    ]
  }
];

const ServiciosPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 sm:pb-24">
      <Helmet>
        <title>Nuestros Servicios Especializados | Grupo AR</title>
        <meta name="description" content="Descubre nuestros servicios de Ingeniería Eléctrica de alta tensión, Obra Civil, Remodelación Premium e Impermeabilización del más alto nivel técnico." />
        <meta property="og:title" content="Nuestros Servicios Especializados | Grupo AR" />
        <meta property="og:description" content="Ofrecemos soluciones integrales de diseño, ingeniería, construcción y mantenimiento con certificaciones y garantías garantizadas." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80" />
        <meta property="og:url" content="https://grupo-ar-construction.vercel.app/servicios" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuestros Servicios Especializados | Grupo AR" />
        <meta name="twitter:description" content="Ofrecemos soluciones integrales de diseño, ingeniería, construcción y mantenimiento con certificaciones y garantías garantizadas." />
        <link rel="canonical" href="https://grupo-ar-construction.vercel.app/servicios" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950 to-slate-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl font-black font-display mb-6 tracking-tight">
              Nuestras <span className="text-gradient">Especialidades</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
              Soluciones integrales de ingeniería y arquitectura con los mayores estándares técnicos de calidad y seguridad en México.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialties list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {specialties.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-[3.5rem] border ${spec.colorBorder} ${spec.colorBg} shadow-sm transition-all duration-300`}
              >
                {/* Icon & Title */}
                <div className="lg:col-span-4 flex flex-col items-start space-y-4">
                  <div className="p-5 rounded-2xl bg-white shadow-md inline-block">
                    {spec.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
                    {spec.title}
                  </h2>
                  <button
                    onClick={() => navigate(spec.link)}
                    className="flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-black text-sm uppercase tracking-wider group"
                  >
                    Ver galería detallada
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Description and bullet points */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    {spec.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {spec.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                        <span className="font-bold text-slate-700 text-sm sm:text-base">
                          {bullet}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Banner */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Garantía Total de Obra</h3>
          <p className="text-3xl sm:text-5xl font-black font-display text-slate-900 max-w-2xl mx-auto mb-6">
            Confianza respaldada por <span className="text-gradient">pólizas de fianza</span>
          </p>
          <p className="text-slate-500 max-w-xl mx-auto text-base sm:text-lg mb-8">
            Para tu total tranquilidad, en todos nuestros contratos industriales e institucionales brindamos pólizas escritas que respaldan los vicios ocultos y la máxima durabilidad de los materiales.
          </p>
          <div className="flex justify-center">
            <button
              onClick={() => navigate('/contacto')}
              className="bg-amber-500 text-white px-8 py-4 rounded-full font-black hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 active:scale-95 transform hover:-translate-y-0.5"
            >
              Iniciar Proyecto de Obra
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiciosPage;
