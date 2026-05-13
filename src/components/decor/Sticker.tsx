import { motion } from "framer-motion";

type StickerType = "lightbulb" | "star" | "dot" | "sparkle" | "circle";

interface Props {
  type?: StickerType;
  className?: string;
  color?: string; // tailwind text-* class controlling fill via currentColor
  size?: number;
  float?: "slow" | "mid" | "sparkle" | "none";
  rotate?: number;
}

const paths: Record<StickerType, JSX.Element> = {
  lightbulb: (
    <g transform="translate(12, 8)">
      <circle cx="20" cy="18" r="13" fill="currentColor" fillOpacity="0.2" />
      <path d="M13 18C13 14 16 11 20 11C24 11 27 14 27 18C27 21 25 24 23 26V29C23 30 22 31 20 31C18 31 17 30 17 29V26C15 24 13 21 13 18Z" fill="currentColor" />
      <rect x="17" y="29" width="6" height="3" rx="1" fill="currentColor" opacity="0.6" />
      <path d="M16 18H24 M18 22H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  ),
  star: (
    <path d="M32 6 L38 26 L58 28 L42 40 L48 60 L32 48 L16 60 L22 40 L6 28 L26 26 Z" fill="currentColor" />
  ),
  sparkle: (
    <path d="M32 4 L34 28 L58 32 L34 36 L32 60 L30 36 L6 32 L30 28 Z" fill="currentColor" />
  ),
  dot: <circle cx="32" cy="32" r="14" fill="currentColor" />,
  circle: <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="3" fill="none" />,
};

const Sticker = ({ type = "lightbulb", className = "", color = "text-yellow-primary", size = 48, float = "slow", rotate = 0 }: Props) => {
  const animClass = float === "none" ? "" : float === "sparkle" ? "animate-sparkle" : float === "mid" ? "animate-float-mid" : "animate-float-slow";
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none ${color} ${animClass} ${className}`}
      style={{ width: size, height: size, transform: `rotate(${rotate}deg)` }}
    >
      <svg viewBox="0 0 64 64" className="w-full h-full">{paths[type]}</svg>
    </motion.div>
  );
};

export default Sticker;
