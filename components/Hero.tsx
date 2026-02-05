
import React from 'react';

const Hero: React.FC = () => {
  const heroBackgroundUrl = new URL('../assets/img/servicios/electricidad/industrial.jpg', import.meta.url).href;
  const heroCardUrl = new URL('../assets/img/servicios/remodelaciones/marmol.jpg', import.meta.url).href;

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
      <div className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-slate-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-60 scale-105 transition-transform duration-[20s] hover:scale-100"
          style={{ backgroundImage: `url('${heroBackgroundUrl}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-slate-950"></div>
        
        {/* Animated Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-6 animate-in fade-in slide-in-from-top duration-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Líderes en Innovación Constructiva
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-display leading-[1.1] text-white mb-8 animate-in slide-in-from-left duration-700">
              Ingeniería que <br />
              <span className="text-gradient">Trasciende</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-lg animate-in slide-in-from-left duration-1000">
              Transformamos la visión arquitectónica en realidades industriales sólidas. Unimos tecnología de vanguardia con maestría artesanal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom duration-1000">
              <a 
                href="#proyectos" 
                onClick={(e) => handleSmoothScroll(e, 'proyectos')}
                className="group relative bg-amber-500 hover:bg-amber-600 text-white px-10 py-5 rounded-2xl font-bold text-center transition-all overflow-hidden shadow-2xl shadow-amber-500/30"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explorar Portafolio
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </a>
              <a 
                href="#servicios" 
                onClick={(e) => handleSmoothScroll(e, 'servicios')}
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-10 py-5 rounded-2xl font-bold text-center transition-all"
              >
                Nuestra Metodología
              </a>
            </div>
          </div>

          {/* Floating Feature Card */}
          <div className="hidden lg:block animate-float">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-700 rounded-3xl blur opacity-20"></div>
              <div className="relative glass-card p-8 rounded-3xl border border-white/20">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-6">
                  <img 
                    src={heroCardUrl}
                    className="w-full h-full object-cover"
                    alt="Proyecto destacado"
                  />
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-black font-display text-slate-900 mb-1">Mty Corporate</h3>
                    <p className="text-slate-500 text-sm font-medium">Proyecto del Año 2024</p>
                  </div>
                  <div className="bg-amber-500 text-white p-3 rounded-xl shadow-lg">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
