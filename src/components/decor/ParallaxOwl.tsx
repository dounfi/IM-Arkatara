/**
 * ParallaxOwl — Decorative owl mascot with scroll-driven parallax + rotation.
 *
 * Usage:
 *   import ParallaxOwl from "@/components/decor/ParallaxOwl";
 *
 *   // Place anywhere in a section. Position it absolutely within a relative container:
 *   <div className="relative">
 *     <ParallaxOwl className="absolute bottom-10 right-8 w-32 opacity-60" />
 *     ... your content
 *   </div>
 *
 * Props:
 *   className  — Tailwind classes for position/size/opacity (required for placement)
 *   yRange     — [start, end] px movement on Y axis while scrolling (default: [0, -80])
 *   rotRange   — [start, end] deg rotation while scrolling (default: [-5, 12])
 *   src        — image src (defaults to /images/owlia.png)
 *   alt        — image alt text
 */

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxOwlProps {
  className?: string;
  yRange?: [number, number];
  rotRange?: [number, number];
  src?: string;
  alt?: string;
}

const ParallaxOwl = ({
  className = "",
  yRange = [0, -80],
  rotRange = [-5, 12],
  src = "/images/owlia.webp",
  alt = "Owlia, Maskot IPB Mengajar",
}: ParallaxOwlProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll relative to the owls's section (not the whole page)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Raw transforms driven by scroll progress (0 → 1)
  const rawY = useTransform(scrollYProgress, [0, 1], yRange);
  const rawRot = useTransform(scrollYProgress, [0, 1], rotRange);

  // Smooth with spring so motion feels organic, not mechanical
  const y = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.8 });
  const rotate = useSpring(rawRot, { stiffness: 50, damping: 20, mass: 1 });

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={`pointer-events-none select-none ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-contain drop-shadow-2xl"
        draggable={false}
      />
    </motion.div>
  );
};

export default ParallaxOwl;
