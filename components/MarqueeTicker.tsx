import React from 'react';

const TickerItem: React.FC<{ text: string; highlight?: string; colorScheme?: 'amber' | 'cyan' | 'emerald' }> = ({ text, highlight, colorScheme = 'amber' }) => {
  const badgeStyles = {
    amber: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40',
    emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
  }[colorScheme];

  const dotStyles = {
    amber: 'bg-amber-500 shadow-[0_0_8px_#f59e0b]',
    cyan: 'bg-cyan-400 shadow-[0_0_8px_#38bdf8]',
    emerald: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
  }[colorScheme];

  return (
    <div className="flex items-center gap-3 px-6 py-2.5 text-xs font-black uppercase tracking-wider text-slate-200 whitespace-nowrap bg-slate-900/60 border border-slate-800/60 rounded-full mx-1.5 shadow-md">
      <span className={`w-2 h-2 rounded-full ${dotStyles} animate-pulse`}></span>
      <span>{text}</span>
      {highlight && (
        <span className={`border px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${badgeStyles}`}>
          {highlight}
        </span>
      )}
    </div>
  );
};

const MarqueeTicker: React.FC = () => {
  const items: Array<{ text: string; highlight: string; colorScheme: 'amber' | 'cyan' | 'emerald' }> = [
    { text: "Cumplimiento Estricto Norma NOM-001-SEDE 2012 y CFE", highlight: "Certificados", colorScheme: "amber" },
    { text: "Atención Técnica de Emergencia 24/7 en Toda la República", highlight: "Respuesta Inmediata", colorScheme: "cyan" },
    { text: "Más de 150,000 m² Edificados e Impermeabilizados", highlight: "+150k m²", colorScheme: "emerald" },
    { text: "Subestaciones Eléctricas de Alta y Media Tensión", highlight: "Potencia Industrial", colorScheme: "amber" },
    { text: "Garantía de Estanqueidad en Membranas de Impermeabilización", highlight: "Hasta 10 Años", colorScheme: "cyan" },
    { text: "Redes Corporativas Cat6A, Fibra Óptica y CCTV 4K", highlight: "Alta Velocidad", colorScheme: "emerald" },
  ];

  return (
    <div className="bg-slate-950 border-y border-amber-500/20 py-3 overflow-hidden relative z-20 shadow-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      <div className="flex w-max animate-marquee space-x-2">
        {[...items, ...items, ...items].map((item, idx) => (
          <TickerItem key={idx} text={item.text} highlight={item.highlight} colorScheme={item.colorScheme} />
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
