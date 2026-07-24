import React from 'react';

const TickerItem: React.FC<{ text: string; highlight?: string }> = ({ text, highlight }) => (
  <div className="flex items-center gap-3 px-6 py-2 text-xs font-black uppercase tracking-wider text-slate-300 whitespace-nowrap">
    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
    <span>{text}</span>
    {highlight && (
      <span className="bg-amber-500/20 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded-full text-[10px]">
        {highlight}
      </span>
    )}
  </div>
);

const MarqueeTicker: React.FC = () => {
  const items = [
    { text: "Cumplimiento Estricto Norma NOM-001-SEDE 2012 y CFE", highlight: "Certificados" },
    { text: "Atención Técnica de Emergencia 24/7 en Toda la República", highlight: "Respuesta Inmediata" },
    { text: "Más de 150,000 m² Edificados e Impermeabilizados", highlight: "+150k m²" },
    { text: "Subestaciones Eléctricas de Alta y Media Tensión", highlight: "Potencia Industrial" },
    { text: "Garantía de Estanqueidad en Membranas de Impermeabilización", highlight: "Hasta 10 Años" },
    { text: "Redes Corporativas Cat6A, Fibra Óptica y CCTV 4K", highlight: "Alta Velocidad" },
  ];

  return (
    <div className="bg-slate-950 border-y border-white/10 py-2.5 overflow-hidden relative z-20 shadow-xl">
      <div className="flex w-max animate-marquee space-x-4">
        {[...items, ...items, ...items].map((item, idx) => (
          <TickerItem key={idx} text={item.text} highlight={item.highlight} />
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
