import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Sticker from "@/components/decor/Sticker";
import Polaroid from "@/components/decor/Polaroid";
import WaveDivider from "@/components/decor/WaveDivider";

import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { language, t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const heading = t("hero_title").split(" ");
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
  };

  // Multi-layer scroll parallax
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);     // 0.3x
  const yMid1 = useTransform(scrollY, [0, 800], [0, 400]);   // 0.5x
  const yMid2 = useTransform(scrollY, [0, 800], [0, 560]);   // 0.7x
  const yMid3 = useTransform(scrollY, [0, 800], [0, 720]);   // 0.9x
  const yPolaroid = useTransform(scrollY, [0, 800], [0, -120]);

  // Mouse Parallax Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 80 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Normalize coordinates from -1 to 1 based on screen size
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Mouse offsets for different layers
  const leafX = useTransform(smoothMouseX, [-1, 1], [-50, 50]);
  const leafY = useTransform(smoothMouseY, [-1, 1], [-50, 50]);

  const decor2X = useTransform(smoothMouseX, [-1, 1], [35, -35]);
  const decor2Y = useTransform(smoothMouseY, [-1, 1], [35, -35]);

  const decor3X = useTransform(smoothMouseX, [-1, 1], [-20, 20]);
  const decor3Y = useTransform(smoothMouseY, [-1, 1], [-20, 20]);

  const HERO_IMAGES = [
    { src: "/images/IMG_4528.webp", color: "#FFD93D" },
    { src: "/images/IMG_2177.webp", color: "#9bb1fc" },
    { src: "/images/IMG_2358.webp", color: "#FFFFFF" },
    { src: "/images/IMG_1860.webp", color: "#FFE5E5" },
  ];

  const [indices, setIndices] = useState([0, 1, 2]);

  const cycleImages = () => {
    setIndices(prev => {
      const next = [...prev];
      const nextImage = (Math.max(...prev) + 1) % HERO_IMAGES.length;
      next.shift();
      next.push(nextImage);
      return next;
    });
  };

  useEffect(() => {
    const timer = setInterval(cycleImages, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePolaroidDrag = (e: any, info: any) => {
    if (Math.abs(info.offset.x) > 100 || Math.abs(info.offset.y) > 100) {
      cycleImages();
    }
  };

  const polaroidSlots = [
    { className: "absolute top-0 left-4 z-10", rotate: -8 },
    { className: "absolute top-12 right-2 z-20", rotate: 6 },
    { className: "absolute bottom-0 left-1/4 z-30", rotate: -3 },
  ];

  return (
    <section ref={ref} onMouseMove={handleMouseMove} className="relative min-h-screen overflow-hidden noise-overlay">
      {/* Layer 1 — Background Image with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -top-32 -bottom-32 z-0"
      >
        <img 
          src="/images/IMG_4528.webp"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 0, filter: "blur(1.5px) saturate(1.1)" }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0, 0, 0, 0.45)", zIndex: 1 }} />
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(31, 54, 88, 0.55)", zIndex: 1 }} />
      </motion.div>

      {/* Layer 2 — medium parallax decor with mouse interaction */}
      <motion.div style={{ y: yMid1 }} className="absolute inset-0 z-10 pointer-events-none">
        <motion.div style={{ x: leafX, y: leafY }} className="absolute inset-0">
          <Sticker type="lightbulb" color="text-muted-foreground/50" size={140} className="absolute top-[12%] left-[6%]" rotate={-25} float="slow" />
          <Sticker type="lightbulb" color="text-yellow-primary/40" size={110} className="absolute top-[68%] left-[10%]" rotate={20} float="mid" />
          <Sticker type="sparkle" color="text-yellow-primary/90" size={48} className="absolute top-[18%] left-[24%]" float="sparkle" />
          <Sticker type="sparkle" color="text-white/80" size={32} className="absolute top-[45%] left-[8%]" float="sparkle" />
        </motion.div>
      </motion.div>
      <motion.div style={{ y: yMid2 }} className="absolute inset-0 z-10 pointer-events-none">
        <motion.div style={{ x: decor2X, y: decor2Y }} className="absolute inset-0">
          <Sticker type="star" color="text-yellow-primary/80" size={42} className="absolute top-[22%] right-[14%]" float="sparkle" />
          <Sticker type="sparkle" color="text-yellow-secondary/70" size={36} className="absolute top-[55%] left-[42%]" float="sparkle" />
          <Sticker type="circle" color="text-blue-light/40" size={80} className="absolute bottom-[18%] right-[8%]" float="slow" />
          <Sticker type="sparkle" color="text-white/90" size={54} className="absolute top-[35%] right-[28%]" float="sparkle" />
          <Sticker type="sparkle" color="text-yellow-primary/80" size={24} className="absolute bottom-[30%] right-[18%]" float="sparkle" />
        </motion.div>
      </motion.div>
      <motion.div style={{ y: yMid3 }} className="absolute inset-0 z-10 pointer-events-none">
        <motion.div style={{ x: decor3X, y: decor3Y }} className="absolute inset-0">
          <Sticker type="dot" color="text-yellow-primary/70" size={20} className="absolute top-[30%] left-[28%]" float="mid" />
          <Sticker type="dot" color="text-muted-foreground/70" size={14} className="absolute top-[80%] right-[35%]" float="sparkle" />
          <Sticker type="star" color="text-yellow-primary/60" size={28} className="absolute top-[8%] left-[55%]" float="sparkle" />
          <Sticker type="sparkle" color="text-white/70" size={40} className="absolute bottom-[12%] left-[30%]" float="sparkle" />
          <Sticker type="sparkle" color="text-yellow-primary/90" size={38} className="absolute top-[65%] right-[12%]" float="sparkle" />
        </motion.div>
      </motion.div>

      {/* Foreground content */}
      <div className="container mx-auto relative z-20 pt-32 md:pt-40 pb-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <h1 key={language} className="font-jakarta font-extrabold text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">
            {heading.map((w, i) => (
              <motion.span key={i} custom={i} initial="hidden" animate="show" variants={wordVariants} className="inline-block mr-3">
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.h2
            key={`sub-${language}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-4 font-jakarta text-2xl md:text-4xl font-extrabold text-yellow-primary"
          >
            {t("hero_subtitle")}
          </motion.h2>


          <motion.p
            key={`desc-${language}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.7 }}
            className="mt-6 text-white/75 max-w-xl text-base md:text-lg leading-relaxed"
          >
            {t("hero_desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/student-info/proker" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-yellow-primary text-primary font-jakarta font-bold hover:bg-yellow-secondary transition-all hover:translate-y-[-2px] scrapbook-shadow">
              {t("hero_cta_join")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-white text-white font-jakarta font-bold hover:bg-white hover:text-primary transition-all">
              {t("hero_cta_about")}
            </Link>
          </motion.div>
        </div>

        {/* Polaroid collage */}
        <motion.div
          style={{ y: yPolaroid }}
          className="lg:col-span-5 relative h-[400px] sm:h-[420px] md:h-[480px] w-full mt-10 lg:mt-0 flex items-center justify-center"
        >
          <div className="relative w-full max-w-[400px] h-full scale-[0.7] sm:scale-90 md:scale-100 origin-center">
            {indices.map((imgIdx, slotIdx) => {
              const slot = polaroidSlots[slotIdx];
              const data = HERO_IMAGES[imgIdx];
              return (
                <motion.div
                  key={data.src}
                  layout
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.6}
                  onDragEnd={handlePolaroidDrag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    rotate: slot.rotate,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 260, 
                    damping: 25 
                  }}
                  className={`${slot.className} cursor-grab active:cursor-grabbing`}
                >
                  <Polaroid 
                    id={`hero-pol-${imgIdx}`} 
                    rotate={0} 
                    size="md" 
                    image={data.src} 
                    frameColor={data.color} 
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-jakarta">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce-slow" />
      </motion.div>

      {/* Wave transition to the next section */}
      <div className="absolute bottom-[-2px] left-0 right-0 z-30 pointer-events-none">
        <WaveDivider fill="text-cream" />
      </div>
    </section>
  );
};

export default Hero;
