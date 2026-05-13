import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { 
  Sparkles, Flame, Megaphone, FileText, 
  MessageCircle, Tent, BookOpen, Star, CalendarDays 
} from "lucide-react";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import CalendarGrid from "./CalendarGrid";

import agendaData from "@/data/agenda.json";

const timelineColors = [
  { border: "border-yellow-primary", text: "text-primary", bg: "bg-yellow-primary", shadow: "shadow-[0_0_20px_rgba(250,204,21,0.4)]" },
  { border: "border-border", text: "text-primary", bg: "bg-muted", shadow: "shadow-[0_0_20px_rgba(155,177,252,0.4)]" },
  { border: "border-primary", text: "text-yellow-primary", bg: "bg-primary", shadow: "shadow-[0_0_20px_rgba(31,54,88,0.3)]" },
  { border: "border-yellow-amber", text: "text-white", bg: "bg-yellow-amber", shadow: "shadow-[0_0_20px_rgba(233,159,19,0.4)]" },
];

const getEventIcon = (title: string) => {
  if (!title) return Star;
  const t = title.toLowerCase();
  if (t.includes('opening')) return Sparkles;
  if (t.includes('temu lentera')) return Flame;
  if (t.includes('oprec')) return Megaphone;
  if (t.includes('tes') || t.includes('psikotes')) return FileText;
  if (t.includes('wawancara')) return MessageCircle;
  if (t.includes('makrab') || t.includes('project')) return Tent;
  if (t.includes('blinks')) return BookOpen;
  return Star;
};

interface AgendaItem {
  id: number;
  monthIndex: number;
  date_text: string;
  title: string;
  description: string;
}

const EventsPreview = () => {
  const currentMonth = new Date().getMonth();
  const events = agendaData.filter(item => item.monthIndex <= currentMonth);

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
    <section ref={containerRef} className="bg-white py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-muted/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionReveal>
          <motion.div variants={itemVariants} className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-yellow-primary text-[10px] font-jakarta font-black uppercase tracking-[0.3em] mb-5 shadow-sm">
              Agenda Mendatang
            </span>
            <h2 className="font-jakarta font-black text-5xl md:text-6xl text-primary tracking-tight leading-none">
              Jejak <span className="yellow-underline">Langkah</span> Arkatara
            </h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto text-lg font-medium opacity-70">
              Setiap momen adalah bagian dari perjalanan kita untuk Indonesia.
            </p>
          </motion.div>

          <div className="relative max-w-6xl mx-auto">
            {/* Vertical Line System */}
            <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 md:-translate-x-1/2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div 
                style={{ scaleY, originY: 0 }}
                className="w-full h-full bg-gradient-to-b from-yellow-primary via-muted to-primary shadow-[0_0_15px_rgba(255,198,0,0.4)]"
              />
            </div>

            {events.length === 0 ? (
              <div className="text-center text-muted-foreground/50 py-20 animate-pulse font-jakarta font-bold">Menyiapkan Agenda...</div>
            ) : events.map((e, index) => {
              const isEven = index % 2 === 0;
              const Icon = getEventIcon(e.title);
              const color = timelineColors[index % timelineColors.length];
              const displayDate = e.date_text;

              return (
                <div
                  key={e.id}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full mb-20 md:mb-32 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[42%]" />

                  {/* Enhanced Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, margin: "-50px" }}
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border-4 ${color.border} ${color.shadow} flex items-center justify-center transition-transform hover:scale-110 cursor-pointer`}
                    >
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${color.text}`} strokeWidth={2.5} />
                    </motion.div>
                    
                    {/* Pulsing indicator */}
                    <motion.div 
                      initial={{ scale: 1, opacity: 0.4 }}
                      whileInView={{ scale: 1.5, opacity: 0 }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className={`absolute inset-0 rounded-full ${color.bg} z-[-1]`}
                    />
                  </div>

                  {/* Premium Event Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full md:w-[42%] pl-24 md:pl-0"
                  >
                    <div className={`group relative p-8 md:p-10 rounded-[2.5rem] bg-cream/30 backdrop-blur-sm border border-yellow-primary/20 transition-all duration-500 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(31,54,88,0.15)] hover:border-yellow-primary/40 ${!isEven && 'md:text-right'}`}>
                      
                      <div className={`flex items-center gap-3 mb-6 ${!isEven ? 'md:justify-end' : ''}`}>
                        <div className={`p-2 rounded-xl ${color.bg} ${color.text} bg-opacity-10`}>
                          <CalendarDays className="w-4 h-4" />
                        </div>
                        <span className="text-[11px] font-jakarta font-black uppercase tracking-[0.2em] text-primary opacity-60">
                          {displayDate}
                        </span>
                      </div>

                      <h3 className="font-jakarta font-black text-2xl md:text-3xl text-primary leading-tight group-hover:text-accent transition-colors">
                        {e.title}
                      </h3>
                      
                      {e.description && (
                        <p className="mt-4 text-muted-foreground/80 text-sm md:text-base leading-relaxed font-medium">
                          {e.description}
                        </p>
                      )}

                      {/* Card decorative line */}
                      <div className={`mt-6 h-1 w-12 bg-yellow-primary/30 rounded-full transition-all duration-500 group-hover:w-20 group-hover:bg-yellow-primary ${!isEven ? 'ml-auto' : ''}`} />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Calendar Grid Section */}
          <div className="mt-32 pt-20 border-t border-gray-100">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <span className="text-accent font-jakarta font-black text-xs uppercase tracking-[0.4em] mb-4 block">
                Overview
              </span>
              <h3 className="font-jakarta font-black text-4xl md:text-5xl text-primary tracking-tight">
                Kalender <span className="yellow-underline">Kegiatan</span>
              </h3>
            </motion.div>
            <motion.div variants={itemVariants} className="w-full flex justify-center">
              <CalendarGrid />
            </motion.div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default EventsPreview;
