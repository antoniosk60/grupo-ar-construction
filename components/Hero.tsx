
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { getImageUrl, handleImageError } from '../types';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Scroll Parallax Transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative min-h-[640px] sm:min-h-[800px] h-[100dvh] flex items-center overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ 
            backgroundImage: `url('${getImageUrl("input_file_0.png")}')`,
            y: backgroundY
          }}
          className="absolute inset-0 bg-cover bg-center opacity-60 scale-110"
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
        
        {/* Animated Multi-Color Glow Orbs with Mouse & Scroll Parallax */}
        <motion.div 
          style={{ 
            x: useTransform(smoothMouseX, [-0.5, 0.5], [-60, 60]),
            y: orb1Y,
          }}
          className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-amber-500/15 rounded-full blur-[140px] animate-pulse"
        ></motion.div>
        
        <motion.div 
          style={{ 
            x: useTransform(smoothMouseX, [-0.5, 0.5], [60, -60]),
            y: orb2Y,
          }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-500/15 rounded-full blur-[140px] animate-pulse delay-1000"
        ></motion.div>

        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <motion.div 
        style={{ y: textY }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-amber-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Líderes en Innovación Constructiva
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black font-display leading-[1.1] text-white mb-8 animate-in slide-in-from-left duration-700">
              Ingeniería que <br />
              <span className="text-gradient font-display">Trasciende</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-200 mb-10 leading-relaxed max-w-lg font-medium animate-in slide-in-from-left duration-1000">
              Transformamos la visión arquitectónica en realidades industriales sólidas. Unimos tecnología de vanguardia con maestría artesanal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 animate-in fade-in slide-in-from-bottom duration-1000">
              <Link 
                to="/proyectos" 
                className="group relative bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-center transition-all overflow-hidden shadow-2xl shadow-amber-500/40 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center justify-center gap-2 text-base sm:text-lg">
                  Explorar Portafolio
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </Link>
              <Link 
                to="/servicios" 
                className="group bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-slate-700/80 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-center transition-all hover:scale-105 active:scale-95 hover:border-amber-500/40 flex items-center justify-center gap-2 text-base sm:text-lg"
              >
                <span>Nuestra Metodología</span>
                <svg className="w-5 h-5 text-amber-400 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7"/></svg>
              </Link>
            </div>
          </div>

          {/* Floating Feature Card with IGSA-style Dynamic Specs Overlay */}
          <div className="hidden lg:block animate-float relative">
            {/* Top Badge */}
            <div className="absolute -top-4 -left-4 z-20 bg-slate-900/95 text-white backdrop-blur-md px-4 py-2.5 rounded-2xl border border-amber-500/40 shadow-2xl flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 font-display">Operatividad 100% CFE</span>
            </div>

            {/* Bottom Badge */}
            <div className="absolute -bottom-4 -right-4 z-20 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 border border-amber-400/50">
              <span className="text-xs font-black uppercase tracking-wider font-display">NOM-001-SEDE</span>
              <span className="text-[10px] bg-slate-950/40 px-2 py-0.5 rounded-md font-bold text-amber-200">2012</span>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-cyan-500 to-amber-600 rounded-3xl blur opacity-30"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 shadow-2xl">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6 relative group">
                  <img 
                    src={getImageUrl("input_file_15.png")} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="Ingeniería Civil"
                    onError={(e) => handleImageError(e, 'Construcciones')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1">Mty Corporate Hub</p>
                    <p className="text-xs font-medium text-slate-200">Ingeniería & Obra Civil Ejecutada</p>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-black font-display text-slate-900 mb-1">Mty Corporate</h3>
                    <p className="text-slate-500 text-sm font-medium">Proyecto Estrellas 2024</p>
                  </div>
                  <div className="bg-amber-500 text-white p-3 rounded-xl shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => {
          const element = document.getElementById('servicios');
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer text-white/40 hover:text-amber-500 transition-colors focus:outline-none"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-black font-sans group-hover:text-amber-500 transition-colors">Explorar</span>
        <div className="w-5 h-8 border border-white/30 group-hover:border-amber-500/50 rounded-full p-1 flex justify-center items-start transition-colors duration-300">
          <motion.div 
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-1.5 bg-amber-500 rounded-full"
          />
        </div>
      </button>
    </div>
  );
};

export default Hero;
