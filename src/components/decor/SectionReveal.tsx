import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  stagger?: boolean;
  as?: "section" | "div" | "article";
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1, ease: "linear" } },
};

const SectionReveal = ({ children, className, delay = 0, y = 60, stagger = true, as = "div" }: Props) => {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={
        stagger
          ? container
          : {
              hidden: { opacity: 0, y },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
            }
      }
    >
      {children}
    </MotionTag>
  );
};

export default SectionReveal;
