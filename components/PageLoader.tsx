import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

interface PageLoaderProps {
  onComplete?: () => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20 + 10);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-slate-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Logo Ring & Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative mb-6"
            >
              {/* Outer Rotating Pulse Ring */}
              <div className="absolute -inset-4 rounded-full border border-amber-500/30 animate-[spin_8s_linear_infinite]"></div>
              <div className="absolute -inset-2 rounded-full border border-dashed border-amber-400/50 animate-[spin_12s_linear_infinite_reverse]"></div>

              {/* Logo Box */}
              <Logo size="xl" showText={false} />
            </motion.div>

            {/* Brand Title */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white">
                GRUPO<span className="text-gradient"> - AR</span>
              </h1>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-amber-400/90 mt-1">
                Ingeniería & Construcción
              </p>
            </motion.div>

            {/* Progress Bar & Counter */}
            <div className="mt-8 w-56 sm:w-64 flex flex-col items-center">
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800/80 p-0.5">
                <motion.div
                  className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 h-full rounded-full shadow-[0_0_12px_#f59e0b]"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ ease: 'easeOut' }}
                ></motion.div>
              </div>

              <div className="flex items-center justify-between w-full mt-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                  Cargando
                </span>
                <span className="text-amber-400">{Math.min(progress, 100)}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
