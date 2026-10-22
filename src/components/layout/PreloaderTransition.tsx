import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Pseudo-random number generator for stable seeds
const r = (min: number, max: number, seed: number) => {
  const x = Math.sin(seed) * 10000;
  const rand = x - Math.floor(x);
  return min + rand * (max - min);
};

const colors = ["#f2eadb", "#ede4d2", "#f5edde", "#efe7d4", "#f3ead9"];

const PaperReveal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [phase, setPhase] = useState<"loading" | "scattering" | "done">("loading");

  useEffect(() => {
    // Wait for a short time to simulate loading (or wait for actual load)
    const t1 = setTimeout(() => {
      setPhase("scattering");
    }, 150);

    const t2 = setTimeout(() => {
      setPhase("done");
    }, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  // Generate paper sheets to cover the screen
  const sheets = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const isCenter = i >= 16;
      // Grid positioning to ensure coverage
      const col = (i % 4);
      const row = Math.floor((i % 16) / 4);
      
      const baseX = isCenter ? 50 : 12.5 + (col * 25);
      const baseY = isCenter ? 50 : 12.5 + (row * 25);
      
      // Target scatter positions (far off screen)
      const angle = r(0, Math.PI * 2, i * 42);
      const dist = r(150, 250, i * 11);
      const targetX = Math.cos(angle) * dist;
      const targetY = Math.sin(angle) * dist;
      
      return {
        id: i,
        x: baseX,
        y: baseY,
        rot: r(-15, 15, i),
        targetX,
        targetY,
        targetRot: r(-180, 180, i * 7),
        color: colors[i % colors.length],
        w: r(60, 100, i * 2),
        h: r(80, 120, i * 3),
        delay: r(0, 0.3, i * 5),
      };
    });
  }, []);

  // Stray papers removed per user request

  return (
    <>
      <motion.div 
        className="relative z-0" 
        style={{ pointerEvents: phase === "done" ? "auto" : "none" }}
        initial={{ y: 80, opacity: 0 }}
        animate={phase === "scattering" || phase === "done" ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {(phase === "loading" || phase === "scattering") && (
          <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden flex items-center justify-center">
            {/* Fallback solid background that fades out during scattering */}
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: phase === "scattering" ? 0 : 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 bg-[#f2eadb]" 
            />

            {/* Logo removed per user request */}

            {sheets.map((sheet) => (
              <motion.div
                key={`sheet-${sheet.id}`}
                initial={{ 
                  x: `calc(${sheet.x}vw - 50%)`, 
                  y: `calc(${sheet.y}vh - 50%)`, 
                  rotate: sheet.rot,
                  width: `${sheet.w}vw`,
                  height: `${sheet.h}vh`
                }}
                animate={phase === "scattering" ? { 
                  x: `calc(${sheet.x + sheet.targetX}vw - 50%)`, 
                  y: `calc(${sheet.y + sheet.targetY}vh - 50%)`,
                  rotate: sheet.targetRot 
                } : {}}
                transition={{ 
                  duration: r(0.4, 0.7, sheet.id), 
                  ease: [0.65, 0, 0.15, 1],
                  delay: phase === "scattering" ? sheet.delay * 0.3 : 0 
                }}
                className="absolute shadow-2xl scrapbook-shadow"
                style={{ 
                  backgroundColor: sheet.color,
                  backgroundImage: `radial-gradient(circle at center, rgba(100,80,50,0.02) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px"
                }}
              />
            ))}

            {/* Stray papers removed */}
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PaperReveal;
