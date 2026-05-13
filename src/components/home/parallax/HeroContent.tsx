import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Sticker from "@/components/decor/Sticker";
import Polaroid from "@/components/decor/Polaroid";

interface Props {
  opacity: number;
  translateY: number;
  pointerEvents: "auto" | "none";
}

const HeroContent = ({ opacity, translateY, pointerEvents }: Props) => {
  return (
    <div 
      className="fixed inset-0 z-10 transition-all duration-75"
      style={{ 
        opacity, 
        transform: `translateY(${translateY}px)`,
        pointerEvents
      }}
    >
      {/* Decorative Stickers */}
      <div className="absolute top-[10%] left-[5%] opacity-70 pointer-events-none">
        <Sticker type="lightbulb" color="text-accent" size={130} rotate={-18} />
      </div>
      <div className="absolute bottom-[18%] right-[3%] opacity-55 pointer-events-none">
        <Sticker type="lightbulb" color="text-accent" size={100} rotate={25} />
      </div>
      
      <div className="absolute top-[9%] left-[72%] pointer-events-none">
        <Sticker type="star" color="text-yellow-primary" size={30} float="sparkle" />
      </div>
      <div className="absolute top-[6%] left-[48%] opacity-75 pointer-events-none">
        <Sticker type="star" color="text-yellow-primary" size={18} float="sparkle" />
      </div>
      <div className="absolute bottom-[22%] right-[19%] pointer-events-none">
        <Sticker type="circle" color="text-white/20" size={26} />
      </div>

      {/* Main Text Content */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="font-display font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-4">
            Langkah kecil,<br />untuk Negeri.
          </h1>
          <p className="font-jakarta text-xl md:text-2xl font-bold text-yellow-primary mb-4">
            Penuh inovasi dan kolaborasi.
          </p>
          <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-lg mb-10">
            Ketika setiap langkah terasa berarti, setiap proses meninggalkan jejak bermakna bagi generasi penerus bangsa.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/student-info/proker" 
              className="px-8 py-4 rounded-full bg-yellow-primary text-primary font-jakarta font-extrabold text-sm md:text-base hover:bg-yellow-secondary transition-all hover:-translate-y-1 scrapbook-shadow flex items-center gap-2"
            >
              Bergabung Sekarang <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/about/visi-misi" 
              className="px-8 py-4 rounded-full border-2 border-white/50 text-white font-jakarta font-bold text-sm md:text-base hover:bg-white hover:text-primary transition-all"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>

      {/* Polaroid collage - Adapted from existing Hero */}
      <div className="absolute right-[5%] top-[15%] bottom-[15%] w-[45%] hidden lg:flex flex-col justify-center items-center pointer-events-none">
        <div className="relative w-full h-[600px]">
          <div className="absolute top-[10%] right-[32%] rotate-[-7deg] drop-shadow-2xl">
            <Polaroid id="p1" image="/images/IMG_4528.webp" size="md" frameColor="hsl(var(--yellow-primary))" rotate={-7}>
               <p className="text-[10px] text-muted-foreground text-center mt-2 font-display italic">Kelas SD Cigombong</p>
            </Polaroid>
          </div>
          <div className="absolute top-[28%] right-[8%] rotate-[5deg] drop-shadow-2xl">
            <Polaroid id="p2" image="/images/IMG_2177.webp" size="sm" frameColor="hsl(var(--accent))" rotate={5}>
               <p className="text-[10px] text-white text-center mt-2 font-display italic">Kelas Literasi</p>
            </Polaroid>
          </div>
          <div className="absolute bottom-[15%] right-[20%] rotate-[-2deg] drop-shadow-2xl">
            <Polaroid id="p3" image="/images/IMG_2358.webp" size="md" frameColor="white" rotate={-2}>
               <p className="text-[10px] text-muted-foreground text-center mt-2 font-display italic">Pelatihan Tani</p>
            </Polaroid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
