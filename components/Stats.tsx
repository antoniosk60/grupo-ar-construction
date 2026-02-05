
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';

const data = [
  { name: '2019', proyectos: 12 },
  { name: '2020', proyectos: 18 },
  { name: '2021', proyectos: 25 },
  { name: '2022', proyectos: 32 },
  { name: '2023', proyectos: 45 },
];

const Stats: React.FC = () => {
  return (
    <div className="bg-slate-950 py-32 relative overflow-hidden">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mb-6">Analítica de Éxito</h2>
            <p className="text-5xl md:text-6xl font-black font-display text-white mb-10 leading-tight">
              Escalando <br />
              <span className="text-gradient">Horizontes</span>
            </p>
            
            <div className="grid grid-cols-2 gap-10">
              <div className="group">
                <span className="text-6xl font-black text-white block mb-2 group-hover:text-amber-500 transition-colors">150+</span>
                <div className="w-10 h-1 bg-amber-500 mb-3 rounded-full"></div>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">Hitos Alcanzados</span>
              </div>
              <div className="group">
                <span className="text-6xl font-black text-white block mb-2 group-hover:text-amber-500 transition-colors">20+</span>
                <div className="w-10 h-1 bg-amber-500 mb-3 rounded-full"></div>
                <span className="text-slate-400 font-bold text-sm uppercase tracking-widest">Años de Dominio</span>
              </div>
            </div>
            
            <p className="mt-12 text-slate-400 text-lg max-w-md leading-relaxed">
              Nuestros datos reflejan el compromiso inquebrantable con la excelencia y la optimización de recursos en cada entrega.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative p-1 bg-gradient-to-br from-white/10 to-white/0 rounded-[3rem]">
              <div className="bg-slate-900/50 backdrop-blur-xl p-10 rounded-[2.8rem] border border-white/5 shadow-2xl">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-white font-black text-xl flex items-center gap-3">
                    <span className="w-3 h-3 bg-amber-500 rounded-full shadow-[0_0_15px_#f59e0b]"></span>
                    Progreso Quinquenal
                  </h3>
                  <span className="text-xs font-bold text-slate-500 tracking-tighter uppercase">AR Analytics v2.1</span>
                </div>
                
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#1e293b" />
                      <XAxis 
                        dataKey="name" 
                        stroke="#475569" 
                        fontSize={12} 
                        fontWeight="bold"
                        tickLine={false} 
                        axisLine={false} 
                        dy={10}
                      />
                      <Tooltip 
                        cursor={{fill: 'rgba(255,255,255,0.03)'}}
                        contentStyle={{ 
                          backgroundColor: '#020617', 
                          border: '1px solid rgba(255,255,255,0.1)', 
                          borderRadius: '16px',
                          padding: '12px 16px',
                          boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
                        }}
                      />
                      <Bar dataKey="proyectos" radius={[8, 8, 0, 0]} barSize={40}>
                        {data.map((entry, index) => (
                          <Cell 
                            key={`cell-${index}`} 
                            fill={index === data.length - 1 ? '#f59e0b' : '#334155'} 
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
