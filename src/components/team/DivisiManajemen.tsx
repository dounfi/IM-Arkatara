import { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WaveDivider from "@/components/decor/WaveDivider";

const NAVY = "#1f3658";

const DIVISI = [
  { name: 'PDP', fullName: 'Program dan Pengabdian', desc: 'Merancang dan menjalankan program edukasi berdampak di seluruh pelosok Indonesia.', img: '/images/team/Divisi/1. pdp.webp', id: 'pdp', imgPos: 'object-[center_20%]' },
  { name: 'HUBEKS', fullName: 'Hubungan Eksternal', desc: 'Membangun kemitraan strategis dan memperluas jaringan IPB Mengajar.', img: '/images/team/Divisi/2. hubeks.webp', id: 'hubeks', imgPos: 'object-[center_20%]' },
  { name: 'PSDM', fullName: 'Pengembangan Sumber Daya Mahasiswa', desc: 'Mengembangkan potensi dan kapasitas setiap anggota IPB Mengajar.', img: '/images/team/Divisi/3. psdm.webp', id: 'psdm', imgPos: 'object-center' },
  { name: 'ENSTHIP', fullName: 'Entrepreneur & Sponsorship', desc: 'Menggerakkan kewirausahaan sosial dan menjalin kerja sama sponsor.', img: '/images/team/Divisi/4. enship.webp', id: 'enship', imgPos: 'object-[center_20%]' },
  { name: 'MID', fullName: 'Media Informasi & Desain', desc: 'Menyebarkan kisah inspiratif melalui konten kreatif dan desain komunikatif.', img: '/images/team/Divisi/5. mid.webp', id: 'mid', imgPos: 'object-[center_40%]' },
];

export default function DivisiManajemen() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [previewDivisi, setPreviewDivisi] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const total = DIVISI.length;
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goPrev = () => {
    setActiveIdx((i) => (i - 1 + total) % total);
    setPreviewDivisi(null);
  };
  const goNext = () => {
    setActiveIdx((i) => (i + 1) % total);
    setPreviewDivisi(null);
  };

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
    <>
      <section className="relative py-20 md:py-32 overflow-hidden bg-cream noise-overlay">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1f3658 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-jakarta font-extrabold text-3xl md:text-5xl text-primary drop-shadow-sm">
              Manajemen <span className="yellow-underline">IPB Mengajar</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm md:text-lg">
              Lima divisi yang bersinergi menggerakkan misi pendidikan IPB Mengajar ke seluruh penjuru negeri.
            </p>
          </div>

          {/* Indicator Bar */}
          <div className="flex justify-center gap-1.5 mb-10 z-20">
            {DIVISI.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-8 bg-[#1f3658]' : 'w-2 bg-[#1f3658]/20'}`}
              />
            ))}
          </div>

          {/* Carousel */}
          <div 
            className="relative w-full max-w-[1000px] h-[400px] md:h-[500px] flex justify-center items-center"
            style={{ perspective: "1200px", perspectiveOrigin: "50% 40%" }}
          >
            {/* Left Arrow */}
            <button 
              onClick={goPrev}
              className="absolute left-2 md:left-4 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md border-2"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full max-w-[320px] md:max-w-[400px] h-[300px] md:h-[380px] flex justify-center items-center" style={{ transformStyle: "preserve-3d" }}>
              {DIVISI.map((div, i) => {
                const props = getCardProps(i);
                const isActive = activeIdx === i;
                const isPreviewing = previewDivisi === div.id;

                return (
                  <motion.div
                    key={div.name}
                    onClick={() => {
                      if (!isActive) {
                        setActiveIdx(i);
                        setPreviewDivisi(null);
                      }
                    }}
                    drag={isMobile && isActive ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    onMouseEnter={() => isActive && setPreviewDivisi(div.id)}
                    onMouseLeave={() => setPreviewDivisi(null)}
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
                    className={`absolute w-full h-full flex flex-col items-center justify-center ${isActive ? 'cursor-pointer' : 'cursor-pointer'}`}
                    style={{ 
                      transformStyle: "preserve-3d" 
                    }}
                  >
                    <div className={`relative w-full h-full rounded-3xl overflow-hidden transition-all duration-300 group ${isActive ? 'shadow-[0_20px_50px_rgba(31,54,88,0.3)] ring-4 ring-white' : 'shadow-xl'}`}>
                      <img
                        src={div.img}
                        alt={div.name}
                        className={`w-full h-full object-cover ${div.imgPos} pointer-events-none transition-transform duration-700 ${isPreviewing ? 'scale-110' : ''}`}
                        draggable="false"
                      />
                      
                      {/* Gradient Overlay & Text (Only visible when previewing) */}
                      <div 
                        className={`absolute inset-0 bg-gradient-to-t from-[#1f3658]/95 via-[#1f3658]/70 to-transparent flex flex-col justify-end p-6 md:p-8 transition-opacity duration-300 ${isActive && isPreviewing ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                      >
                        <div className={`transform transition-transform duration-500 ease-out ${isPreviewing ? 'translate-y-0' : 'translate-y-4'}`}>
                          <h3 className="font-jakarta font-extrabold text-3xl md:text-4xl text-white tracking-wide uppercase drop-shadow-md">
                            {div.name}
                          </h3>
                          <p className="font-jakarta font-semibold text-yellow-primary text-xs md:text-sm tracking-widest uppercase mt-1 drop-shadow-md">
                            {div.fullName}
                          </p>
                          <div className="w-10 h-1 bg-yellow-primary rounded-full my-4 opacity-80" />
                          <p className="text-white/90 text-sm italic leading-relaxed drop-shadow-sm mb-6">
                            "{div.desc}"
                          </p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/divisi/${div.id}`);
                            }}
                            className="inline-flex items-center gap-2 bg-yellow-primary text-primary px-5 py-2.5 rounded-full font-jakarta font-bold text-sm tracking-wider uppercase hover:bg-white transition-colors duration-300 shadow-md"
                          >
                            Selengkapnya <span className="text-lg leading-none">&rarr;</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Arrow */}
            <button 
              onClick={goNext}
              className="absolute right-2 md:right-4 z-50 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md border-2"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

        </div>
      </section>
      <WaveDivider fill="text-white" className="bg-cream" />
    </>
  );
}
