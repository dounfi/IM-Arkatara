import { useMemo } from "react";
import Sticker from "./Sticker";

const r = (min: number, max: number, seed: number) => {
  const x = Math.sin(seed) * 10000;
  const rand = x - Math.floor(x);
  return min + rand * (max - min);
};

const GlobalSparkles = () => {
  const sparkles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: r(2, 98, i * 11),
      y: r(5, 95, i * 17),
      size: r(12, 36, i * 23),
      type: r(0, 1, i * 31) > 0.5 ? "star" : "sparkle",
      opacity: r(0.25, 0.7, i * 43),
      color: r(0, 1, i * 53) > 0.5 ? "text-yellow-primary" : "text-yellow-secondary"
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden mix-blend-screen opacity-75">
      {sparkles.map((s) => (
        <div 
          key={s.id} 
          className="absolute"
          style={{ 
            left: `${s.x}vw`, 
            top: `${s.y}vh`, 
            opacity: s.opacity,
          }}
        >
          <Sticker 
            type={s.type as "star" | "sparkle"} 
            size={s.size} 
            color={s.color} 
            float="sparkle" 
          />
        </div>
      ))}
    </div>
  );
};

export default GlobalSparkles;
