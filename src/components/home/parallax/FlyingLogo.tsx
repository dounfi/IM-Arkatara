import React from "react";

interface Props {
  left: number;
  top: number;
  scale: number;
  textOpacity: number;
}

const FlyingLogo = ({ left, top, scale, textOpacity }: Props) => {
  return (
    <div 
      className="fixed z-40 flex items-center gap-4 pointer-events-none will-change-[left,top,transform]"
      style={{
        left: `${left}vw`,
        top: `${top}vh`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-2xl overflow-hidden p-3.5 border-4 border-white/10">
        <img src="/logo-ipb-mengajar.webp" alt="Logo" className="w-full h-full object-contain" />
      </div>
      <div 
        className="hidden sm:block transition-opacity duration-75"
        style={{ opacity: textOpacity }}
      >
        <div className="text-xl md:text-2xl font-jakarta font-extrabold text-white leading-none whitespace-nowrap">
          IPB Mengajar
        </div>
        <div className="text-[8px] md:text-[10px] text-yellow-primary font-display italic tracking-[0.2em] uppercase mt-1">
          Langkah Kecil Untuk Negeri
        </div>
      </div>
    </div>
  );
};

export default FlyingLogo;
