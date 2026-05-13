import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { bph } from "@/lib/data/team";

const NAVY = "#1f3658";
const DARK_NAVY = "#152a45";
const CREAM = "#faebaf";
const GOLD = "#e6c863";

const bphList = [
  bph.direktur,
  ...bph.row2,
  ...bph.row3,
  ...bph.row4
];

const bphPhotos = [
  "1. direktur.webp",
  "2. wakil.webp",
  "3. sekum.webp",
  "4. bendum.webp",
  "5. sek 2.webp",
  "6. sek 3.webp",
  "7. bendum 2.webp",
];

export default function BPHCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = bphList.length;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goPrev = () => setActiveIdx((i) => (i - 1 + total) % total);
  const goNext = () => setActiveIdx((i) => (i + 1) % total);

  const handleDragEnd = (e: any, { offset }: PanInfo) => {
    const swipe = offset.x;
    if (swipe < -50) goNext();
    else if (swipe > 50) goPrev();
  };

  const getCardProps = (index: number) => {
    let diff = index - activeIdx;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (isMobile) {
      if (diff === 0) {
        return { rotateY: 0, rotateZ: 0, x: "0%", y: 0, scale: 1, opacity: 1, zIndex: 10, pointerEvents: 'auto' as const };
      } else {
        return { rotateY: 0, rotateZ: 0, x: diff < 0 ? "-100%" : "100%", y: 0, scale: 0.8, opacity: 0, zIndex: 1, pointerEvents: 'none' as const };
      }
    } else {
      if (diff === 0) {
        return { rotateY: 0, rotateZ: 0, x: "0%", y: 0, scale: 1.0, opacity: 1, zIndex: 10, pointerEvents: 'auto' as const };
      } else if (diff === -1 || (activeIdx === 0 && index === total - 1)) {
        return { rotateY: 35, rotateZ: -6, x: "-55%", y: 15, scale: 0.82, opacity: 0.6, zIndex: 5, pointerEvents: 'auto' as const };
      } else if (diff === 1 || (activeIdx === total - 1 && index === 0)) {
        return { rotateY: -35, rotateZ: 6, x: "55%", y: 15, scale: 0.82, opacity: 0.6, zIndex: 5, pointerEvents: 'auto' as const };
      } else {
        return { rotateY: diff < 0 ? 60 : -60, rotateZ: 0, x: diff < 0 ? "-100%" : "100%", y: 0, scale: 0.65, opacity: 0, zIndex: 1, pointerEvents: 'none' as const };
      }
    }
  };

  return (
    <div className="w-full relative flex flex-col items-center">
      {/* Indicator Bar */}
      <div className="flex justify-center gap-1.5 mb-8 z-20">
        {bphList.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-8 bg-[#1f3658]' : 'w-2 bg-[#1f3658]/20'}`}
          />
        ))}
      </div>

      {/* Carousel */}
      <div 
        className="relative w-full max-w-[1000px] h-[520px] md:h-[580px] flex justify-center items-center"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}
      >
        {/* Left Arrow */}
        <button 
          onClick={goPrev}
          className="absolute left-2 md:left-8 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md border-2"
          style={{ borderColor: NAVY, color: NAVY }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative w-full max-w-[320px] md:max-w-[360px] h-[480px] md:h-[520px] flex justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
          {bphList.map((person, i) => {
            const props = getCardProps(i);
            const isActive = activeIdx === i;

            return (
              <motion.div
                key={person.id}
                onClick={() => {
                  if (props.opacity > 0 && !isActive) setActiveIdx(i);
                }}
                drag={isMobile && isActive ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
                initial={false}
                animate={{ 
                  rotateY: props.rotateY, 
                  rotateZ: props.rotateZ,
                  y: props.y,
                  scale: props.scale, 
                  x: props.x, 
                  opacity: props.opacity, 
                  zIndex: props.zIndex,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26, mass: 1 }}
                className={`absolute w-full h-full flex flex-col items-center justify-center ${isActive ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
                style={{ 
                  transformStyle: "preserve-3d" 
                }}
              >
                <img
                  src={`/images/team/bph/${bphPhotos[i]}`}
                  alt={person.name}
                  className={`w-full h-auto object-contain transition-all duration-300 pointer-events-none ${isActive ? 'scale-105 drop-shadow-[0_20px_40px_rgba(26,43,76,0.3)]' : 'drop-shadow-xl'}`}
                  draggable="false"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={goNext}
          className="absolute right-2 md:right-8 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md border-2"
          style={{ borderColor: NAVY, color: NAVY }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
