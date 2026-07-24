
import React from 'react';

interface Testimonial {
  id: number;
  name: string;
  company?: string;
  text: string;
  photoUrl?: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ing. Roberto Méndez",
    company: "Desarrollos Verticales S.A.",
    text: "La precisión técnica de Grupo-AR en la instalación de la subestación eléctrica fue impecable. Cumplieron con los plazos y superaron nuestras expectativas de seguridad.",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    name: "Arq. Elena Rodríguez",
    company: "Estudio R+A",
    text: "Trabajar con ellos en la remodelación corporativa fue una experiencia fluida. Su capacidad para interpretar diseños complejos y llevarlos a la realidad es excepcional.",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    name: "Carlos Slim Domit",
    company: "Inmobiliaria Carso",
    text: "El sistema de telecomunicaciones y WiFi 6 implementado en nuestras oficinas centrales ha transformado nuestra operatividad. Soporte técnico de primer nivel.",
    rating: 5,
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-20">
        <span className="block text-amber-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">Confianza de Nuestros Socios</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-slate-900 tracking-tight">Voz de la <span className="text-gradient">Experiencia</span></h2>
        <p className="mt-4 sm:mt-6 text-slate-500 max-w-2xl mx-auto text-base sm:text-lg">Lo que dicen los líderes de la industria sobre nuestro compromiso con la excelencia.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="group relative bg-white p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2"
          >
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 sm:top-10 sm:right-10 text-amber-500/10 group-hover:text-amber-500/20 transition-colors">
              <svg className="w-12 h-12 sm:w-16 sm:h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H12.017V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H3.017V21H5.017Z" />
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 font-medium italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 sm:gap-5">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-50 shadow-sm">
                  {testimonial.photoUrl ? (
                    <img 
                      src={testimonial.photoUrl} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-amber-500/10 text-amber-500 font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-slate-900 font-black text-lg leading-tight">{testimonial.name}</h3>
                  {testimonial.company && (
                    <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mt-1">{testimonial.company}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
