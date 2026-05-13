import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { managers } from "@/lib/data/team";

const NAVY = "#1f3658";

const managerPhotos = [
  "1. pdp.webp",
  "2. hubeks.webp",
  "3. psdm.webp",
  "4. enship.webp",
  "5. mid.webp",
];

export default function ManagerCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = managers.length;
  const navigate = useNavigate();

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

  const handleManagerClick = (index: number) => {
    if (activeIdx === index) {
      // If clicking the active one, navigate to the division page
      const divName = managers[index].name.toLowerCase().replace(/[^a-z0-9]/g, '');
      // E.g., Manager PDP -> pdp
      // We know managers are: PDP, Hubungan Eksternal (HUBEKS), PSDM, Entrepreneurship (ENSHIP), Media Informasi dan Desain (MID).
      // Let's hardcode the path based on index
      const paths = ["pdp", "hubeks", "psdm", "enship", "mid"];
      navigate(`/divisi/${paths[index]}`);
    } else {
      setActiveIdx(index);
    }
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
    <div className="w-full relative flex flex-col items-center mt-10">
      {/* Indicator Bar */}
      <div className="flex justify-center gap-1.5 mb-8 z-20">
        {managers.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-8 bg-[#1f3658]' : 'w-2 bg-[#1f3658]/20'}`}
          />
        ))}
      </div>

      {/* Carousel */}
      <div 
        className="relative w-full max-w-[1000px] h-[400px] md:h-[480px] flex justify-center items-center"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}
      >
        {/* Left Arrow */}
        <button 
          onClick={goPrev}
          className="absolute left-2 md:left-8 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md border-2"
          style={{ borderColor: NAVY, color: NAVY }}
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        <div className="relative w-full max-w-[300px] md:max-w-[340px] h-full flex justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
          {managers.map((person, i) => {
            const props = getCardProps(i);
            const isActive = activeIdx === i;

            return (
              <motion.div
                key={person.id}
                onClick={() => handleManagerClick(i)}
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
                className={`absolute w-full h-full flex flex-col items-center justify-end ${isActive ? 'cursor-pointer' : 'cursor-pointer'}`}
                style={{ 
                  transformStyle: "preserve-3d" 
                }}
              >
                <img
                  src={`/images/team/manager/${managerPhotos[i]}`}
                  alt={person.name}
                  className={`w-full max-h-full object-contain transition-all duration-300 pointer-events-none ${isActive ? 'scale-105 drop-shadow-[0_20px_40px_rgba(26,43,76,0.3)]' : 'drop-shadow-xl'}`}
                  draggable="false"
                />
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-primary/10 flex items-center gap-3 transition-transform hover:scale-105"
                  >
                    <div className="w-2 h-2 rounded-full bg-yellow-primary animate-pulse" />
                    <span className="font-jakarta font-extrabold text-primary text-sm uppercase tracking-wider">
                      Divisi {person.name.split(" ")[1]}
                    </span>
                    <span className="text-muted-foreground text-xs font-semibold ml-1 bg-primary/5 px-2 py-1 rounded-md">
                      Lihat Detail &rarr;
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={goNext}
          className="absolute right-2 md:right-8 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md border-2"
          style={{ borderColor: NAVY, color: NAVY }}
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}
