import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center pointer-events-auto"
    >
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      <div className="relative z-10 w-full max-w-[280px] flex flex-col items-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-10 shadow-2xl overflow-hidden p-3"
        >
          <img src="/logo-ipb-mengajar.webp" alt="Logo" className="w-full h-full object-contain" />
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
          {/* Progress Bar */}
          <motion.div 
            className="absolute inset-y-0 left-0 bg-yellow-primary"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        {/* Subtle Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="mt-6 text-white text-[10px] tracking-[0.4em] uppercase font-jakarta font-bold"
        >
          Menyiapkan Langkah...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;
