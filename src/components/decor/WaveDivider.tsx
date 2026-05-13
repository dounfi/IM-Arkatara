import { motion } from "framer-motion";

interface Props {
  fill?: string; // tailwind text color class controls fill via currentColor
  flip?: boolean;
  className?: string;
}

const WaveDivider = ({ fill = "text-cream", flip = false, className = "" }: Props) => (
  <div className={`relative w-full overflow-hidden leading-[0] ${fill} ${className}`} aria-hidden style={{ marginTop: "-2px", marginBottom: "-2px" }}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`relative w-full h-[70px] md:h-[110px] ${flip ? "rotate-180" : ""}`}
    >
      {/* Layer 1: Slowest, deepest background wave */}
      <motion.path
        animate={{
          d: [
            "M0,40 C320,100 420,0 720,40 C1020,80 1220,20 1440,60 L1440,120 L0,120 Z",
            "M0,50 C300,20 500,100 720,50 C940,0 1140,80 1440,40 L1440,120 L0,120 Z",
            "M0,40 C320,100 420,0 720,40 C1020,80 1220,20 1440,60 L1440,120 L0,120 Z"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        fill="currentColor"
        fillOpacity="0.2"
      />
      
      {/* Layer 2: Medium speed middle wave */}
      <motion.path
        animate={{
          d: [
            "M0,70 C360,30 720,110 1080,70 C1260,50 1380,90 1440,80 L1440,120 L0,120 Z",
            "M0,60 C400,100 800,20 1080,60 C1200,80 1350,40 1440,70 L1440,120 L0,120 Z",
            "M0,70 C360,30 720,110 1080,70 C1260,50 1380,90 1440,80 L1440,120 L0,120 Z"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        fill="currentColor"
        fillOpacity="0.4"
      />
      
      {/* Layer 3: Main foreground wave (Fastest relative to others) */}
      <motion.path
        animate={{
          d: [
            "M0,90 C180,120 360,40 540,70 C720,100 900,50 1080,80 C1260,110 1380,60 1440,90 L1440,120 L0,120 Z",
            "M0,80 C200,50 400,120 600,80 C800,40 1000,110 1200,80 C1350,60 1400,100 1440,85 L1440,120 L0,120 Z",
            "M0,90 C180,120 360,40 540,70 C720,100 900,50 1080,80 C1260,110 1380,60 1440,90 L1440,120 L0,120 Z"
          ]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        fill="currentColor"
      />
    </svg>
  </div>
);

export default WaveDivider;


