import { motion } from "framer-motion";
import { ReactNode } from "react";

const PageHeader = ({ eyebrow, title, accent, children, dark = false }: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  children?: ReactNode;
  dark?: boolean;
}) => (
  <header className={`relative pt-36 md:pt-44 pb-16 md:pb-20 overflow-hidden ${dark ? "bg-primary text-white noise-overlay" : "bg-cream"}`}>
    <div className="container mx-auto text-center relative z-10">
      <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className={`inline-block px-3 py-1 rounded-full text-xs font-jakarta font-bold uppercase tracking-widest ${dark ? "bg-yellow-primary/20 text-yellow-primary border border-yellow-primary/40" : "bg-yellow-primary text-primary"}`}>
        {eyebrow}
      </motion.span>
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
        className={`mt-4 font-jakarta font-extrabold text-5xl md:text-6xl ${dark ? "text-white" : "text-primary"}`}>
        {title} {accent && <span className="yellow-underline">{accent}</span>}
      </motion.h1>
      {children && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
          className={`mt-5 max-w-2xl mx-auto ${dark ? "text-white/80" : "text-muted-foreground"}`}>
          {children}
        </motion.p>
      )}
    </div>
  </header>
);

export default PageHeader;


