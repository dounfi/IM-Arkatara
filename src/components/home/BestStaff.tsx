import { useState, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { useInView } from "react-intersection-observer";
import WaveDivider from "@/components/decor/WaveDivider";
import staffDataRaw from "@/data/staff.json";

interface Staff {
  id: number;
  bulan: string;
  file_gambar: string;
}

const FourPointStar = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
  </svg>
);

const BestStaff = () => {
  const staffData = staffDataRaw as Staff[];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { ref: headerRef, inView: headerInView } = useInView({ triggerOnce: true, rootMargin: "-50px" });

  const CARD_WIDTH = isMobile ? 220 : 280;
  const GAP = isMobile ? 24 : 48; // gap-6 or gap-12
  const ITEM_SIZE = CARD_WIDTH + GAP;
  const loopCount = staffData.length || 1;
  const loopWidth = loopCount * ITEM_SIZE;

  // Render many copies to allow infinite scroll
  const loopItems = [...staffData, ...staffData, ...staffData, ...staffData, ...staffData, ...staffData];

  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  useAnimationFrame((t, delta) => {
    if (isDragging) return;
    let currentX = x.get();
    currentX -= 0.8 * (delta / 16); // scroll speed
    if (currentX <= -loopWidth) currentX += loopWidth;
    x.set(currentX);
  });

  return (
    <>
      <section className="relative bg-white py-20 md:py-28 overflow-hidden" style={{ fontFamily: "Montserrat, sans-serif" }}>
        {/* 4px vertical stripe */}
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#fad90e]" aria-hidden />

        {/* Scattered background decoration (Static) */}
        <FourPointStar className="absolute top-32 left-[10%] w-[14px] h-[14px] text-[#fad90e] opacity-30" />
        <FourPointStar className="absolute top-1/2 left-[20%] w-[22px] h-[22px] text-[#fad90e] opacity-25" />
        <FourPointStar className="absolute bottom-40 right-[15%] w-[18px] h-[18px] text-[#fad90e] opacity-35" />
        <FourPointStar className="absolute top-40 right-[22%] w-[10px] h-[10px] text-[#fad90e] opacity-30" />
        <FourPointStar className="absolute bottom-24 left-[25%] w-[16px] h-[16px] text-[#fad90e] opacity-25" />

        <div className="container mx-auto relative z-10 px-4 flex flex-col items-center overflow-visible">
          {/* Section Header */}
          <motion.div
            ref={headerRef}
            initial={{ y: 40, opacity: 0 }}
            animate={headerInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-2xl mx-auto flex flex-col items-center relative z-20"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[#fad90e] text-[#3b5e07] text-[11px] font-bold uppercase tracking-[1.5px]">
              Apresiasi
            </span>
            <div className="mt-4 flex items-center justify-center gap-3">
              <h2 className="font-bold text-[32px] md:text-[42px] text-[#1a2e00] leading-tight">
                Best Staff Quarter
              </h2>
              <FourPointStar className="w-[20px] h-[20px] text-[#fad90e]" />
            </div>
            <p className="mt-3 text-[#666655] text-[15px]" style={{ fontFamily: "Poppins, sans-serif" }}>
              Merayakan dedikasi terbaik anggota IPB Mengajar setiap triwulan.
            </p>
          </motion.div>

          {/* 3D Scrolling Area */}
          <div
            className="relative w-full h-[450px] md:h-[550px] flex justify-center items-center mt-12 overflow-hidden"
            style={{ perspective: "1200px" }}
          >
            <div
              className="w-[200%] h-full flex items-center absolute"
              style={{
                transformStyle: "preserve-3d",
                transform: "rotateX(10deg) rotateY(-20deg) rotateZ(5deg) scale(0.95)",
                left: "50%",
                marginLeft: "-100%",
              }}
            >
              <motion.div
                style={{ x, transformStyle: "preserve-3d" }}
                drag="x"
                dragConstraints={{ left: -(loopWidth * 2), right: 0 }}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={() => setIsDragging(false)}
                className={`flex w-max ${isMobile ? "gap-6" : "gap-12"} ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              >
                {staffData.length > 0 ? (
                  loopItems.map((a, idx) => {
                    let imageUrl = a.file_gambar;
                    if (imageUrl && !imageUrl.startsWith("http") && !imageUrl.startsWith("/assets")) {
                      imageUrl = `/assets/${imageUrl.replace(/^(\/)?(uploads\/)?/, "")}`;
                    }

                    return (
                      <div
                        key={`${a.id}-${idx}`}
                        style={{ width: CARD_WIDTH }}
                        className="flex-shrink-0 transition-transform duration-500 hover:scale-105 pointer-events-none"
                      >
                        <div className="w-full aspect-[3/4] rounded-[20px] overflow-hidden pointer-events-auto shadow-2xl bg-gray-100">
                          <img
                            src={imageUrl}
                            alt={`Staff Terbaik ${a.bulan}`}
                            loading={idx < 5 ? "eager" : "lazy"}
                            decoding="async"
                            className="w-full h-full object-cover"
                            draggable="false"
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="text-gray-400 font-medium w-full text-center">Memuat data...</div>
                )}
              </motion.div>
            </div>

            {/* Fade overlays */}
            <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </section>
      <WaveDivider fill="text-soft-yellow" className="bg-white" />
    </>
  );
};

export default BestStaff;
