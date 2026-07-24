import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

interface DivisionData {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  icon: string;
  link: string;
  specs: { label: string; value: string }[];
  highlights: string[];
  normative: string;
  guarantee: string;
  executionTime: string;
}

const divisions: DivisionData[] = [
  {
    id: 'electricidad',
    title: 'Electricidad y Potencia',
    badge: 'División Eléctrica',
    tagline: 'Sistemas de alta y media tensión, subestaciones y plantas de emergencia',
    icon: '⚡',
    link: '/electricidad',
    normative: 'NOM-001-SEDE-2012 / CFE',
    guarantee: '5 Años de Garantía Operativa',
    executionTime: 'Atención Inmediata 24/7',
    specs: [
      { label: 'Capacidad Máxima', value: 'Hasta 115 kV / Subestaciones' },
      { label: 'Tiempo de Respuesta', value: '< 2 horas en emergencias' },
      { label: 'Cuadrilla Técnica', value: 'Ingenieros Certificados CFE' },
      { label: 'Sistemas Críticos', value: 'UPS, Transferencia y Plantas' }
    ],
    highlights: [
      'Montaje de subestaciones compactas y pedestales',
      'Balanceo de cargas y auditorías energéticas',
      'Tableros de distribución y control automatizado',
      'Sistemas de tierras físicas y pararrayos'
    ]
  },
  {
    id: 'construcciones',
    title: 'Obra Civil e Infraestructura',
    badge: 'División Civil',
    tagline: 'Cimentaciones pesadas, naves industriales y edificación corporativa',
    icon: '🏗️',
    link: '/construcciones',
    normative: 'Reglamento de Construcciones / NTC',
    guarantee: 'Póliza de Calidad de Estructura',
    executionTime: 'Planificación Gantt Certificada',
    specs: [
      { label: 'Metraje Ejecutado', value: '+150,000 m² construidos' },
      { label: 'Supervisión Obras', value: 'Residencia en Sitio 100%' },
      { label: 'Pruebas Laboratorio', value: 'Ensayos de Concreto y Acero' },
      { label: 'Seguridad Industrial', value: 'Zero-Incidents Protocol' }
    ],
    highlights: [
      'Cimentaciones profundas y losas industriales de alta carga',
      'Estructuras metálicas de grandes claros',
      'Pisos de concreto pulido con fibra estructural',
      'Redes hidrosanitarias y drenaje pluvial industrial'
    ]
  },
  {
    id: 'remodelaciones',
    title: 'Remodelación Corporativa',
    badge: 'División Arqui-Tech',
    tagline: 'Transformación integral de oficinas, espacios comerciales y luxury residencial',
    icon: '🏢',
    link: '/remodelaciones',
    normative: 'Standard BREEAM / WELL Building',
    guarantee: 'Llave en Mano Sin Sobrecostos',
    executionTime: 'Ejecución Nocturna / Sin Paros',
    specs: [
      { label: 'Renderizado 3D', value: 'Fotorrealismo previo 4K' },
      { label: 'Modalidad', value: 'Turnkey (Llave en Mano)' },
      { label: 'Acabados', value: 'Importación Premium & Mármol' },
      { label: 'Iluminación', value: 'Automatización DALI / Lutron' }
    ],
    highlights: [
      'Adecuación de plantas corporativas y salas de juntas',
      'Sistemas de aire acondicionado HVAC inteligente',
      'Cancelería de aluminio y fachadas de cristal templado',
      'Soluciones acústicas y muros divisorios de tabla roca'
    ]
  },
  {
    id: 'impermeabilizaciones',
    title: 'Impermeabilización Industrial',
    badge: 'División Protección',
    tagline: 'Sistemas de sellado y aislamiento térmico para cubiertas de gran escala',
    icon: '💧',
    link: '/impermeabilizaciones',
    normative: 'ASTM / ONCCE Acreditado',
    guarantee: 'Garantía por Escrito hasta 10 Años',
    executionTime: 'Rendimiento > 500 m²/día',
    specs: [
      { label: 'Tecnologías', value: 'TPO, Poliuretano, Asfálticos' },
      { label: 'Pruebas de Calidad', value: 'Inspección Termográfica Flir' },
      { label: 'Reducción Térmica', value: 'Hasta -8°C en interiores' },
      { label: 'Mantenimiento', value: 'Pólizas Anuales de Conservación' }
    ],
    highlights: [
      'Aplicación de sistemas elastoméricos de alta reflectividad',
      'Termofusión de membranas de PVC y TPO de grado industrial',
      'Sellado hermético de grietas, pretiles y bajadas pluviales',
      'Tratamiento anticorrosivo en láminas y estructuras'
    ]
  }
];

const EngineeringInteractiveHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('electricidad');

  // Quick Estimator State
  const [facilityType, setFacilityType] = useState('Nave Industrial');
  const [surfaceM2, setSurfaceM2] = useState(500);
  const [urgency, setUrgency] = useState('Estándar (Planificado)');

  const currentDiv = divisions.find(d => d.id === activeTab) || divisions[0];

  const handleWhatsAppQuote = () => {
    const text = `Hola Grupo AR, deseo solicitar un levantamiento técnico para:\n- *Especialidad:* ${currentDiv.title}\n- *Tipo de Inmueble:* ${facilityType}\n- *Superficie/Alcance:* aprox. ${surfaceM2} m²\n- *Prioridad:* ${urgency}\n¿Podrían ponerse en contacto conmigo para coordinar la visita?`;
    window.open(`https://wa.me/527296853914?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-black uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
            Centro de Mando de Ingeniería
          </div>
          <h2 className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
            División de <span className="text-gradient">Especialidades</span>
          </h2>
          <p className="mt-3 text-slate-500 text-base sm:text-lg max-w-xl font-medium">
            Capacidad operativa de escala industrial con estándares tipo IGSA. Selecciona una división para explorar especificaciones técnicas.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900 text-white p-4 rounded-2xl flex items-center gap-4 shadow-xl border border-slate-800">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Cuadrillas Activas</p>
              <p className="text-sm font-black text-amber-400 font-display">Operando en CDMX, MTY, Toluca y Bajío</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Selector */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {divisions.map((div) => {
          const isActive = activeTab === div.id;
          return (
            <button
              key={div.id}
              onClick={() => setActiveTab(div.id)}
              className={`p-5 rounded-2xl text-left transition-all duration-300 relative border overflow-hidden ${
                isActive
                  ? 'bg-slate-950 text-white border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-slate-50'
              }`}
            >
              {isActive && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl pointer-events-none"></div>
              )}
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl">{div.icon}</span>
                <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${
                  isActive ? 'bg-amber-500 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {div.badge}
                </span>
              </div>
              <h3 className={`font-black text-sm sm:text-base font-display ${isActive ? 'text-white' : 'text-slate-900'}`}>
                {div.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Division Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDiv.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="bg-slate-900 text-white rounded-3xl sm:rounded-[2.5rem] p-5 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden mb-12 sm:mb-16"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Specs & Info (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{currentDiv.icon}</span>
                  <span className="text-amber-400 font-black text-xs uppercase tracking-[0.2em]">{currentDiv.badge}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-black font-display text-white mb-3 leading-tight">
                  {currentDiv.title}
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                  {currentDiv.tagline}
                </p>
              </div>

              {/* Normative Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-xl flex items-center gap-2">
                  <span className="text-amber-400 text-xs">📜</span>
                  <span className="text-xs font-bold text-slate-200">Normativa: {currentDiv.normative}</span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-xl flex items-center gap-2">
                  <span className="text-emerald-400 text-xs">🛡️</span>
                  <span className="text-xs font-bold text-slate-200">{currentDiv.guarantee}</span>
                </div>
                <div className="bg-slate-800/80 border border-slate-700 px-4 py-2 rounded-xl flex items-center gap-2">
                  <span className="text-blue-400 text-xs">⚡</span>
                  <span className="text-xs font-bold text-slate-200">{currentDiv.executionTime}</span>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                  Alcance Operativo Destacado
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentDiv.highlights.map((h, idx) => (
                    <div key={idx} className="bg-slate-950/60 border border-slate-800/80 p-3.5 rounded-xl flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-xs font-bold text-slate-200 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to={currentDiv.link}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-black px-8 py-4 rounded-xl text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
                >
                  Ver Ficha Técnica Completa
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Interactive Live Estimator (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                  <h4 className="text-sm font-black uppercase tracking-wider text-amber-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
                    Simulador de Levantamiento Técnico
                  </h4>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-1 rounded font-bold">Respuesta Express</span>
                </div>

                <div className="space-y-5">
                  {/* Facility Type */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Tipo de Inmueble / Instalación
                    </label>
                    <select
                      value={facilityType}
                      onChange={(e) => setFacilityType(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 text-white text-xs font-bold rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                    >
                      <option value="Nave Industrial">Nave Industrial / Bodega</option>
                      <option value="Edificio Corporativo">Edificio Corporativo / Oficinas</option>
                      <option value="Plaza Comercial">Plaza Comercial / Retail</option>
                      <option value="Residencial Premium">Residencial Premium / Fraccionamiento</option>
                      <option value="Hospital / Infraestructura">Hospital / Infraestructura Crítica</option>
                    </select>
                  </div>

                  {/* Surface Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Alcance Estimado (m²)
                      </label>
                      <span className="text-amber-400 font-black text-sm">{surfaceM2.toLocaleString()} m²</span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="10000"
                      step="100"
                      value={surfaceM2}
                      onChange={(e) => setSurfaceM2(Number(e.target.value))}
                      className="w-full accent-amber-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-bold">
                      <span>100 m²</span>
                      <span>5,000 m²</span>
                      <span>10,000+ m²</span>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Prioridad de Ejecución
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {['Estándar (Planificado)', 'Urgente / Paro de Planta'].map((urg) => (
                        <button
                          key={urg}
                          type="button"
                          onClick={() => setUrgency(urg)}
                          className={`py-2.5 px-3 rounded-xl text-[11px] font-bold border transition-all ${
                            urgency === urg
                              ? 'bg-amber-500/20 border-amber-500 text-amber-400'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {urg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Estimate Summary Button */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <div className="mb-4 bg-slate-900 p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Asignación de Ingeniero:</span>
                  <span className="text-emerald-400 font-black">Inmediata Sin Costo</span>
                </div>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-6 rounded-xl font-black text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <span>Solicitar Levantamiento en WhatsApp</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default EngineeringInteractiveHub;
