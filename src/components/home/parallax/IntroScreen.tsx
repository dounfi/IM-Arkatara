import React from "react";
import Sticker from "@/components/decor/Sticker";

interface Props {
  translateY: number;
  opacity: number;
  pointerEvents: "auto" | "none";
}

const IntroScreen = ({ translateY, opacity, pointerEvents }: Props) => {
  return (
    <div 
      className="fixed inset-0 z-20 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary to-[#1f3658]"
      style={{ 
        transform: `translateY(${translateY}%)`,
        pointerEvents
      }}
    >
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }}
      />

      {/* Decorative Leaves */}
      <div className="absolute -top-[6%] -left-[3%] opacity-60 pointer-events-none">
        <Sticker type="lightbulb" color="text-accent" size={220} rotate={-20} />
      </div>
      <div className="absolute bottom-[4%] right-[2%] opacity-50 pointer-events-none">
        <Sticker type="lightbulb" color="text-accent" size={140} rotate={22} />
      </div>

      {/* Stars */}
      <div className="absolute top-[11%] right-[22%] pointer-events-none">
        <Sticker type="star" color="text-yellow-primary" size={34} float="sparkle" />
      </div>
      <div className="absolute top-[7%] right-[40%] opacity-70 pointer-events-none">
        <Sticker type="star" color="text-yellow-primary" size={20} float="sparkle" />
      </div>
      <div className="absolute bottom-[24%] left-[19%] pointer-events-none opacity-20">
        <Sticker type="circle" color="text-white" size={30} />
      </div>

      {/* Center Branding Content */}
      <div 
        className="text-center z-10 transition-opacity duration-75"
        style={{ opacity }}
      >
        <h1 className="font-jakarta font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-tight mb-2">
          IPB Mengajar
        </h1>
        <p className="font-display italic text-yellow-primary text-xs sm:text-sm tracking-[0.4em] uppercase mb-16">
          Langkah Kecil Untuk Negeri
        </p>

        {/* Indicators */}
        <div className="flex gap-2 justify-center mb-12">
          {[0, 1, 2].map((i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === 0 ? "bg-yellow-primary" : "bg-white/20"}`} 
            />
          ))}
        </div>

        <p className="text-white/30 text-[10px] sm:text-xs tracking-[0.3em] uppercase">
          scroll untuk mulai ↓
        </p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-[-1px] left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 55" preserveAspectRatio="none" className="w-full h-[55px] block">
          <path d="M0,28 C360,55 1080,0 1440,28 L1440,55 L0,55 Z" fill="#1f3658" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
};

export default IntroScreen;
