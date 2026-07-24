import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquarePlus, Quote, CheckCircle, User } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  company?: string;
  text: string;
  rating: number;
  date: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ing. Roberto Méndez",
    company: "Desarrollos Verticales S.A.",
    text: "La precisión técnica de Grupo-AR en la instalación de la subestación eléctrica fue impecable. Cumplieron con los plazos y superaron nuestras expectativas de seguridad.",
    rating: 5,
    date: "14 Ene, 2026"
  },
  {
    id: 2,
    name: "Arq. Elena Rodríguez",
    company: "Estudio R+A",
    text: "Trabajar con ellos en la remodelación corporativa fue una experiencia fluida. Su capacidad para interpretar diseños complejos y llevarlos a la realidad es excepcional.",
    rating: 5,
    date: "28 Feb, 2026"
  },
  {
    id: 3,
    name: "Carlos Slim Domit",
    company: "Inmobiliaria Carso",
    text: "El sistema de telecomunicaciones y WiFi 6 implementado en nuestras oficinas centrales ha transformado nuestra operatividad. Soporte técnico de primer nivel.",
    rating: 5,
    date: "10 Mar, 2026"
  },
  {
    id: 4,
    name: "Dra. Sofía Vázquez",
    company: "Clínicas Médicas del Centro",
    text: "Excelente servicio de impermeabilización en nuestros quirófanos y áreas críticas. Cero humedad tras las lluvias de la temporada. Altamente recomendados.",
    rating: 5,
    date: "02 Abr, 2026"
  },
  {
    id: 5,
    name: "Ing. Alejandro Torres",
    company: "Industrias Metálicas del Norte",
    text: "El peinado de tableros eléctricos y sistemas de tierras físicas brindó la estabilidad de voltaje que nuestras máquinas de control numérico necesitaban.",
    rating: 5,
    date: "19 May, 2026"
  }
];

const TestimoniosPage: React.FC = () => {
  const [list, setList] = useState<Testimonial[]>(initialTestimonials);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);
  const [success, setSuccess] = useState(false);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newTestimonial: Testimonial = {
      id: Date.now(),
      name,
      company: company || 'Cliente Particular',
      text,
      rating,
      date: 'Hoy mismo'
    };

    setList([newTestimonial, ...list]);
    setName('');
    setCompany('');
    setText('');
    setRating(5);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  return (
    <div className="pt-24 pb-16 sm:pb-24 bg-slate-50 min-h-screen">
      <Helmet>
        <title>Testimonios y Reseñas de Clientes | Grupo AR</title>
        <meta name="description" content="Opiniones honestas de ingenieros, arquitectos y clientes sobre las obras, proyectos eléctricos, impermeabilizaciones e instalaciones de Grupo AR." />
        <meta property="og:title" content="Testimonios y Reseñas de Clientes | Grupo AR" />
        <meta property="og:description" content="Conoce la experiencia de trabajar con nosotros. Calidad, garantía y precisión técnica avalada por nuestros clientes." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-slate-950 to-slate-950 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black font-display mb-4 tracking-tight"
          >
            Nuestros <span className="text-gradient">Clientes Hablan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            La satisfacción de quienes confían en Grupo AR es nuestra mejor carta de recomendación. Conoce las opiniones de ingenieros, arquitectos y propietarios.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Reviews List */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display mb-8 flex items-center gap-3">
                <Quote className="text-amber-500 w-8 h-8 rotate-180" />
                Reseñas de la Comunidad
              </h2>

              <div className="space-y-6">
                <AnimatePresence initial={false}>
                  {list.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20, y: 10 }}
                      animate={{ opacity: 1, x: 0, y: 0 }}
                      className="bg-white p-6 sm:p-8 rounded-[2rem] border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < item.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-200'}`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                          {item.date}
                        </span>
                      </div>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 italic">
                        "{item.text}"
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center font-black">
                          <User className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold leading-tight text-sm sm:text-base">
                            {item.name}
                          </h4>
                          {item.company && (
                            <p className="text-amber-600 text-xs font-bold uppercase tracking-wider mt-0.5">
                              {item.company}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Submit review Form */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-md lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
                  <MessageSquarePlus className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-display text-slate-900">
                  Dejar una Opción
                </h3>
              </div>

              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                ¿Has trabajado con Grupo AR? Nos encantaría conocer tu opinión para seguir ofreciendo servicios de excelencia.
              </p>

              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-800 text-sm flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">¡Testimonio publicado con éxito!</p>
                      <p className="text-xs text-emerald-600 mt-1">Gracias por ser parte del crecimiento constante de Grupo AR en México.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Ing. Carlos Pérez"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-slate-50 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                    Empresa u Organización (Opcional)
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Ej. Consorcio Constructor / Particular"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-slate-50 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                    Calificación
                  </label>
                  <div className="flex gap-2 py-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(null)}
                        className="p-1 focus:outline-none transition-transform active:scale-110"
                      >
                        <Star
                          className={`w-7 h-7 transition-colors ${
                            star <= (hoveredStar ?? rating)
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-slate-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                    Tu Testimonio *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Cuéntanos brevemente sobre la calidad de nuestros servicios..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 bg-slate-50 font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-white py-4 rounded-xl font-black hover:bg-amber-600 shadow-lg shadow-amber-500/10 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquarePlus className="w-5 h-5" />
                  Publicar Testimonio
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimoniosPage;
