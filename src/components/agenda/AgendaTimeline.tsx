import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CalendarDays, Star, Megaphone, BookOpen, Users, Zap, MapPin } from "lucide-react";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import WaveDivider from "@/components/decor/WaveDivider";

import agendaData from "@/data/agenda.json";

const icons = [CalendarDays, Star, Megaphone, BookOpen, Users, Zap, MapPin];

interface AgendaItem {
  id: number;
  monthIndex: number;
  date_text: string;
  title: string;
  description: string;
}

const AgendaTimeline = () => {
  const currentMonth = new Date().getMonth();
  const items = agendaData.filter(item => item.monthIndex <= currentMonth);
  const loading = false;

  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <WaveDivider fill="text-primary" className="bg-cream" />

      <section ref={containerRef} className="bg-primary py-20 md:py-28 relative overflow-hidden">
        {/* Subtle bg texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />

        <div className="container mx-auto relative z-10">
          <SectionReveal>
            <motion.span
              variants={itemVariants}
              className="flex justify-center"
            >
              <span className="px-4 py-1 rounded-full bg-yellow-primary text-primary text-xs font-jakarta font-bold uppercase tracking-widest">
                Kalender Kegiatan
              </span>
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="mt-4 text-center font-jakarta font-extrabold text-4xl md:text-5xl text-white"
            >
              Agenda <span className="text-yellow-primary">Mendatang</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-center text-white/60 mt-4 max-w-xl mx-auto"
            >
              Ikuti setiap langkah perjalanan bersama IPB Mengajar, dari kegiatan pengabdian hingga event internal.
            </motion.p>
          </SectionReveal>

          {loading ? (
            <div className="text-center text-white/50 mt-16 animate-pulse">Memuat agenda...</div>
          ) : items.length === 0 ? (
            <div className="text-center text-white/40 mt-16">Belum ada agenda yang tersedia.</div>
          ) : (
            <div className="mt-20 relative">
              {/* Vertical Line Container */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-white/5 rounded-full overflow-hidden">
                {/* Animated Fill Line */}
                <motion.div 
                  style={{ scaleY, originY: 0 }}
                  className="w-full h-full bg-gradient-to-b from-yellow-primary via-yellow-secondary to-yellow-primary shadow-[0_0_15px_rgba(255,198,0,0.5)]"
                />
              </div>

              <div className="space-y-16 md:space-y-24">
                {items.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  const Icon = icons[i % icons.length];

                  return (
                    <div
                      key={item.id}
                      className={`relative flex items-center md:gap-12 ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      } flex-col`}
                    >
                      {/* Card Section */}
                      <motion.div 
                        initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: false, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="md:w-[calc(50%-3rem)] w-full"
                      >
                        <div
                          className={`group relative bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-all duration-500 hover:border-yellow-primary/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] ${
                            isLeft ? "md:text-right" : "md:text-left"
                          }`}
                        >
                          <span className="inline-block px-4 py-1.5 rounded-full bg-yellow-primary/10 text-yellow-primary text-[10px] font-jakarta font-extrabold uppercase tracking-[0.2em] border border-yellow-primary/20 mb-5">
                            {item.date_text}
                          </span>
                          <h3 className="font-jakarta font-black text-2xl md:text-3xl text-white group-hover:text-yellow-primary transition-colors duration-300 leading-tight">
                            {item.title}
                          </h3>
                          {item.description && (
                            <p className="mt-4 text-white/50 text-sm md:text-base leading-relaxed font-medium">
                              {item.description}
                            </p>
                          )}

                          {/* Decorative floating dot */}
                          <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-primary opacity-0 group-hover:opacity-100 transition-all duration-500 blur-[2px] ${
                            isLeft ? "-right-1.5" : "-left-1.5"
                          }`} />
                        </div>
                      </motion.div>

                      {/* Center Node Section */}
                      <div className="relative z-20 flex-shrink-0 w-16 h-16 md:w-20 md:h-20 mt-8 md:mt-0">
                        {/* Outer pulsing ring */}
                        <motion.div 
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: false }}
                          className="absolute inset-0 rounded-full bg-yellow-primary/20 blur-xl animate-sparkle"
                        />
                        
                        {/* Main circle */}
                        <motion.div 
                          initial={{ scale: 0, rotate: -45 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: false }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="relative w-full h-full rounded-full bg-gradient-to-br from-yellow-primary to-yellow-secondary shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden border-4 border-primary"
                        >
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                          <Icon className="relative z-10 w-7 h-7 md:w-9 md:h-9 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} />
                        </motion.div>
                      </div>

                      {/* Spacer for layout */}
                      <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <WaveDivider fill="text-cream" flip className="bg-primary" />
    </>
  );
};

export default AgendaTimeline;
