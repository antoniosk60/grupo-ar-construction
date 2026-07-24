import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MessageSquare, ShieldCheck, X, FileText, ChevronUp } from 'lucide-react';

const FloatingSupportDock: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Expanded Quick Contact Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            transition={{ duration: 0.2 }}
            className="mb-3 sm:mb-4 bg-slate-950 text-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-slate-800 w-[calc(100vw-2rem)] max-w-xs sm:w-80 pointer-events-auto relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>

            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 font-display">
                  Soporte de Ingeniería 24/7
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
                aria-label="Cerrar panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 font-medium mb-4 leading-relaxed">
              Atención inmediata para proyectos industriales, licitaciones y emergencias eléctricas/estructurales.
            </p>

            <div className="space-y-2.5">
              <a
                href="https://wa.me/527296853914?text=Hola%20Grupo%20AR,%20deseo%20solicitar%20asesor%C3%ADa%20t%C3%A9cnica%20inmediata."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-all shadow-md active:scale-98"
              >
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Técnico</span>
                </div>
                <span className="text-[10px] bg-emerald-700/80 px-2 py-0.5 rounded-full font-black">Respuesta &lt; 5m</span>
              </a>

              <a
                href="tel:7296853914"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-800 font-bold text-xs transition-all active:scale-98"
              >
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>Llamada de Emergencia</span>
                </div>
                <span className="text-[10px] text-slate-400 font-bold">729 685 3914</span>
              </a>

              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold text-xs transition-all active:scale-98"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4" />
                  <span>Solicitar Levantamiento</span>
                </div>
                <span className="text-[10px] text-amber-400 font-black">Sin Costo</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-2 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              <span>Garantía & Normativa NOM / CFE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-2xl shadow-amber-500/40 transition-all transform hover:scale-110 active:scale-95 flex items-center gap-2.5 border border-amber-400/30"
        aria-label="Atención de Ingeniería"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <span className="text-xs font-black uppercase tracking-wider font-display pr-1 hidden sm:inline">
          {isOpen ? 'Cerrar' : 'Atención 24/7'}
        </span>
        {isOpen ? <ChevronUp className="w-5 h-5 rotate-180 transition-transform" /> : <MessageSquare className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default FloatingSupportDock;
