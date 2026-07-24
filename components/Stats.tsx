
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid, Legend } from 'recharts';

const datasetOptions = {
  proyectos: {
    label: 'Proyectos Entregados',
    key: 'proyectos',
    color: '#f59e0b',
    activeBarColor: '#f59e0b',
    baseBarColor: '#1e293b',
    data: [
      { name: '2019', proyectos: 12 },
      { name: '2020', proyectos: 18 },
      { name: '2021', proyectos: 25 },
      { name: '2022', proyectos: 32 },
      { name: '2023', proyectos: 45 },
    ]
  },
  superficie: {
    label: 'Superficie m² (x1,000)',
    key: 'superficie',
    color: '#38bdf8',
    activeBarColor: '#38bdf8',
    baseBarColor: '#1e293b',
    data: [
      { name: '2019', superficie: 25 },
      { name: '2020', superficie: 48 },
      { name: '2021', superficie: 85 },
      { name: '2022', superficie: 110 },
      { name: '2023', superficie: 150 },
    ]
  },
  eficiencia: {
    label: 'Índice de Eficiencia (%)',
    key: 'eficiencia',
    color: '#34d399',
    activeBarColor: '#34d399',
    baseBarColor: '#1e293b',
    data: [
      { name: '2019', eficiencia: 92 },
      { name: '2020', eficiencia: 94 },
      { name: '2021', eficiencia: 96 },
      { name: '2022', eficiencia: 98 },
      { name: '2023', eficiencia: 99.4 },
    ]
  }
};

const Stats: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<'proyectos' | 'superficie' | 'eficiencia'>('proyectos');
  const currentMetric = datasetOptions[activeMetric];

  return (
    <div className="bg-slate-950 py-20 sm:py-32 relative overflow-hidden">
      {/* Dynamic Grid & Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              Métricas de Desempeño Industrial
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-white mb-10 leading-tight">
              Escalando <br />
              <span className="text-gradient">Horizontes</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="group cursor-default p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-all">
                <span className="text-4xl sm:text-5xl font-black text-amber-400 block mb-2 font-display">150+</span>
                <div className="w-8 sm:w-10 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mb-3 rounded-full"></div>
                <span className="text-slate-300 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Hitos Entregados</span>
              </div>
              <div className="group cursor-default p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all">
                <span className="text-4xl sm:text-5xl font-black text-cyan-400 block mb-2 font-display">20+</span>
                <div className="w-8 sm:w-10 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mb-3 rounded-full"></div>
                <span className="text-slate-300 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Años de Dominio</span>
              </div>
              <div className="group cursor-default p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 transition-all">
                <span className="text-4xl sm:text-5xl font-black text-emerald-400 block mb-2 font-display">98.5%</span>
                <div className="w-8 sm:w-10 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mb-3 rounded-full"></div>
                <span className="text-slate-300 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Satisfacción Total</span>
              </div>
              <div className="group cursor-default p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/40 transition-all">
                <span className="text-4xl sm:text-5xl font-black text-white block mb-2 font-display">0</span>
                <div className="w-8 sm:w-10 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mb-3 rounded-full"></div>
                <span className="text-slate-300 font-bold text-[10px] sm:text-xs uppercase tracking-widest">Incidentes de Seguridad</span>
              </div>
            </div>
            
            <p className="mt-8 sm:mt-10 text-slate-400 text-sm sm:text-base max-w-md leading-relaxed font-medium">
              Nuestros datos auditados reflejan el compromiso inquebrantable con la excelencia operativa y la optimización de recursos en cada entrega.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative p-1 bg-gradient-to-br from-amber-500/20 via-slate-800 to-cyan-500/20 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl">
              <div className="bg-slate-950/90 backdrop-blur-xl p-6 sm:p-10 rounded-[2.3rem] sm:rounded-[2.8rem] border border-slate-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-10">
                  <h3 className="text-white font-black text-lg flex items-center gap-3 font-display">
                    <span className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: currentMetric.color, boxShadow: `0 0 12px ${currentMetric.color}` }}></span>
                    Progreso Quinquenal
                  </h3>

                  {/* Interactive Metric Switcher */}
                  <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-[10px] font-black">
                    <button
                      onClick={() => setActiveMetric('proyectos')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        activeMetric === 'proyectos' ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Proyectos
                    </button>
                    <button
                      onClick={() => setActiveMetric('superficie')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        activeMetric === 'superficie' ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      m²
                    </button>
                    <button
                      onClick={() => setActiveMetric('eficiencia')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${
                        activeMetric === 'eficiencia' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Eficiencia
                    </button>
                  </div>
                </div>
                
                <div className="h-[280px] sm:h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={currentMetric.data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis 
                        dataKey="name" 
                        stroke="#64748b" 
                        fontSize={12} 
                        fontWeight="bold"
                        tickLine={false} 
                        axisLine={false} 
                        dy={10}
                      />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.03)'}}
                        contentStyle={{ 
                          backgroundColor: '#0f172a', 
                          border: '1px solid rgba(255,255,255,0.15)', 
                          borderRadius: '16px',
                          padding: '12px 16px',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                        }}
                        itemStyle={{ color: currentMetric.color, fontWeight: 'bold' }}
                      />
                      <Legend 
                        verticalAlign="top" 
                        align="right" 
                        iconType="circle"
                        wrapperStyle={{ paddingBottom: '20px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}
                      />
                      <Bar name={currentMetric.label} dataKey={currentMetric.key} radius={[8, 8, 0, 0]} barSize={40}>
                        {currentMetric.data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={index === currentMetric.data.length - 1 ? currentMetric.activeBarColor : '#334155'} 
                            className="transition-all duration-700"
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
