import { motion, useAnimationFrame, useMotionValue, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Glasses, GraduationCap, Landmark, BookOpen, Users, TrendingUp, Eye, Quote } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Sticker from "@/components/decor/Sticker";
import WaveDivider from "@/components/decor/WaveDivider";
import BPHCarousel from "@/components/team/BPHCarousel";
import DivisiManajemen from "@/components/team/DivisiManajemen";
import { managers } from "@/lib/data/team";
import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";

/* ─── PERSON CARD ─────────────────────────────────────────────────── */
const PersonCard = ({ p, rotate = 0 }: { p: { name: string; role: string; id: string; grad: string }; rotate?: number }) => (
  <motion.div
    whileHover={{ y: -8 }}
    style={{ rotate }}
    className="group relative bg-white rounded-2xl p-5 scrapbook-shadow overflow-hidden"
  >
    <div id={p.id} className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${p.grad} border-4 border-white shadow-lg flex items-center justify-center text-white/80 font-display text-2xl`}>
      {p.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
    </div>
    <h4 className="mt-3 text-center font-jakarta font-bold text-primary">{p.name}</h4>
    <div className="mt-1 flex justify-center">
      <span className="px-3 py-0.5 rounded-full bg-yellow-primary text-primary text-[11px] font-jakarta font-bold">{p.role}</span>
    </div>
    <div className="absolute inset-0 bg-primary/90 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out flex flex-col items-center justify-center text-white p-4 text-center">
      <p className="font-jakarta font-extrabold text-lg">{p.name}</p>
      <p className="text-yellow-primary font-jakarta font-semibold text-sm mt-1">{p.role}</p>
    </div>
  </motion.div>
);

/* ─── MANAGER 3D LOOP ─────────────────────────────────────────────── */
const managerPhotos = [
  "1. pdp.webp",
  "2. hubeks.webp",
  "3. psdm.webp",
  "4. enship.webp",
  "5. mid.webp",
];

const paths = ["pdp", "hubeks", "psdm", "enship", "mid"];

const Manager3DLoop = () => {
  const loopItems = [...managers, ...managers, ...managers, ...managers];
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  useAnimationFrame((t, delta) => {
    if (isDragging) return;
    let currentX = x.get();
    currentX -= 0.5 * (delta / 16);
    if (currentX <= -1640) currentX += 1640;
    x.set(currentX);
  });

  return (
    <div className="relative w-full h-[550px] flex justify-center items-center mt-10 overflow-hidden" style={{ perspective: '1200px' }}>
      <div
        className="w-[200%] h-full flex items-center absolute"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'rotateX(10deg) rotateY(-20deg) rotateZ(5deg) scale(0.95)',
          left: '50%',
          marginLeft: '-100%'
        }}
      >
        <motion.div
          style={{ x, transformStyle: 'preserve-3d' }}
          drag="x"
          dragConstraints={{ left: -3280, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          className={`flex gap-12 w-max ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {loopItems.map((m, idx) => {
            const originalIndex = managers.findIndex(manager => manager.id === m.id);
            return (
              <div
                key={`${m.id}-${idx}`}
                onClick={() => {
                  if (!isDragging) navigate(`/divisi/${paths[originalIndex]}`);
                }}
                className="w-[280px] flex-shrink-0 bg-transparent transition-transform duration-500 hover:scale-105 pointer-events-none cursor-pointer"
              >
                <img
                  src={`/images/team/manager/${managerPhotos[originalIndex]}`}
                  alt={m.name}
                  className="w-full h-auto object-contain drop-shadow-2xl pointer-events-auto"
                  draggable="false"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />
    </div>
  );
};

/* ─── PAGE ────────────────────────────────────────────────────────── */
const About = () => {
  const { t } = useLanguage();

  // Build translated arrays inline so they re-render when language changes
  const misi = [
    t("about_misi_1"),
    t("about_misi_2"),
    t("about_misi_3"),
    t("about_misi_4"),
  ];

  const elements = [
    { icon: Eye,          title: t("about_el_owl_title"),     desc: t("about_el_owl_desc") },
    { icon: Glasses,      title: t("about_el_glasses_title"), desc: t("about_el_glasses_desc") },
    { icon: BookOpen,     title: t("about_el_book_title"),    desc: t("about_el_book_desc") },
    { icon: Landmark,     title: t("about_el_logo_title"),    desc: t("about_el_logo_desc") },
    { icon: GraduationCap,title: t("about_el_toga_title"),    desc: t("about_el_toga_desc") },
    { icon: Users,        title: t("about_el_colors_title"),  desc: t("about_el_colors_desc") },
    { icon: TrendingUp,   title: t("about_el_tagline_title"), desc: t("about_el_tagline_desc") },
  ];

  const filosofiRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: filosofiRef, offset: ["start end", "center center"] });
  const orbitAngle = useTransform(scrollYProgress, [0, 1], [-90, 0]);
  const modelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!customElements.get("model-viewer")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/model-viewer.min.js";
      document.head.appendChild(script);
    }
  }, []);

  useMotionValueEvent(orbitAngle, "change", (latest) => {
    if (modelRef.current) {
      modelRef.current.setAttribute("camera-orbit", `${latest}deg 75deg 130%`);
    }
  });

  return (
    <>
      <PageHeader
        eyebrow={t("about_eyebrow")}
        title={t("about_header_title")}
        accent={t("about_header_accent")}
      >
        {t("about_header_desc")}
      </PageHeader>

      <WaveDivider fill="text-cream" flip className="bg-yellow-primary" />

      {/* ══ SECTION 1 — VISI & MISI ══ */}
      <section id="visi-misi" className="relative bg-gradient-to-b from-yellow-primary via-soft-yellow to-white py-24 overflow-hidden scroll-mt-28">
        <Sticker type="lightbulb" color="text-primary/40" size={120} className="absolute top-10 left-10" rotate={-20} float="slow" />
        <Sticker type="lightbulb" color="text-accent/40" size={100} className="absolute bottom-16 right-12" rotate={45} float="mid" />
        <Sticker type="sparkle" color="text-primary/40" size={36} className="absolute top-1/2 right-1/4" float="sparkle" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="container mx-auto relative max-w-3xl text-center"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary text-yellow-primary text-xs font-jakarta font-bold uppercase tracking-widest mb-6">
            {t("about_visimisi_badge")}
          </span>
          <Quote className="absolute -top-6 -left-4 w-32 h-32 md:w-48 md:h-48 text-primary/15" strokeWidth={1.5} />
          <Quote className="absolute -bottom-10 -right-4 w-32 h-32 md:w-48 md:h-48 text-primary/15 rotate-180" strokeWidth={1.5} />
          <p className="text-xs uppercase tracking-[0.4em] font-jakarta text-primary/60 mb-4">
            {t("about_visi_label")}
          </p>
          <p className="font-jakarta text-2xl md:text-4xl text-primary font-extrabold leading-tight text-balance">
            {t("about_visi_text")}
          </p>
        </motion.div>
      </section>

      <WaveDivider fill="text-white" flip />

      {/* MISI grid */}
      <section className="bg-white py-20 md:py-24 relative">
        <div className="container mx-auto">
          <SectionReveal>
            <motion.h2 variants={itemVariants} className="text-center font-jakarta font-extrabold text-4xl md:text-5xl text-primary">
              {t("about_misi_heading")} <span className="yellow-underline">{t("about_misi_heading_accent")}</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-center text-muted-foreground mt-4 max-w-xl mx-auto">
              {t("about_misi_subtext")}
            </motion.p>
            <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {misi.map((m, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group relative bg-cream rounded-2xl p-7 border-2 border-dashed border-yellow-primary scrapbook-shadow overflow-hidden cursor-default"
                >
                  <motion.div
                    variants={{ hover: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-primary"
                  />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-yellow-primary text-primary font-jakarta font-extrabold text-lg flex items-center justify-center scrapbook-shadow">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="mt-5 text-primary group-hover:text-white leading-relaxed transition-colors duration-300">{m}</p>
                    <div className="mt-5 h-[3px] w-12 bg-accent group-hover:bg-yellow-primary transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <WaveDivider fill="text-cream" className="bg-white" />

      {/* ══ SECTION 2 — FILOSOFI LOGO ══ */}
      <section id="filosofi-logo" ref={filosofiRef} className="bg-cream py-20 md:py-28 relative overflow-hidden scroll-mt-28">
        <Sticker type="lightbulb" color="text-muted-foreground/40" size={120} className="absolute top-12 right-6" rotate={20} />
        <Sticker type="sparkle" color="text-yellow-primary/60" size={36} className="absolute bottom-20 left-10" float="sparkle" />

        <div className="container mx-auto mb-10 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary text-yellow-primary text-xs font-jakarta font-bold uppercase tracking-widest">
            {t("about_filosofi_badge")}
          </span>
          <h2 className="mt-4 font-jakarta font-extrabold text-4xl md:text-5xl text-primary">
            {t("about_filosofi_heading")} <span className="yellow-underline">{t("about_filosofi_heading_accent")}</span>
          </h2>
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-accent/10 to-transparent blur-3xl rounded-full scale-125" />
              <model-viewer
                ref={modelRef}
                src="/images/owlia3dfix.glb"
                alt="Owlia 3D Model"
                camera-controls={false}
                disable-zoom
                auto-rotate={false}
                shadow-intensity="1"
                environment-image="neutral"
                loading="lazy"
                style={{ width: "100%", height: "100%" }}
              />
              <Sticker type="star" color="text-yellow-primary" size={50} className="absolute top-4 right-4" float="sparkle" />
              <Sticker type="lightbulb" color="text-yellow-amber" size={44} className="absolute bottom-10 left-4" float="slow" />
            </div>
          </motion.div>

          <SectionReveal>
            <motion.span variants={itemVariants} className="inline-block px-3 py-1 rounded-full bg-yellow-primary text-primary text-xs font-jakarta font-bold uppercase tracking-widest">
              {t("about_owlia_badge")}
            </motion.span>
            <motion.h3 variants={itemVariants} className="mt-4 font-jakarta font-extrabold text-3xl md:text-4xl text-primary">
              {t("about_owlia_heading")}
            </motion.h3>
            <motion.p variants={itemVariants} className="text-center md:text-left mt-4 text-muted-foreground leading-relaxed">
              {t("about_owlia_desc")}
            </motion.p>
            <div className="mt-8 space-y-3">
              {elements.map((el, i) => (
                <motion.div
                  key={el.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, rotate: 0, zIndex: 10 }}
                  className={`relative flex items-start gap-5 bg-white p-5 rounded-2xl scrapbook-shadow border border-black/5 hover:shadow-xl transition-all duration-300 ${
                    i % 2 === 0 ? 'ml-0 md:mr-8 rotate-[-1.5deg]' : 'md:ml-8 mr-0 rotate-[1.5deg]'
                  }`}
                >
                  {/* Tape decoration */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/60 backdrop-blur-sm shadow-sm border border-black/5 rotate-[3deg] z-10" />
                  <div className="w-14 h-14 rounded-full bg-yellow-primary text-primary flex items-center justify-center flex-shrink-0 mt-1 scrapbook-shadow">
                    <el.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-jakarta font-extrabold text-primary text-lg">{el.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{el.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ══ SECTION 3 — KEPENGURUSAN ══ */}
      <section id="kepengurusan" className="py-20 md:py-32 relative overflow-hidden scroll-mt-28" style={{ backgroundColor: '#faecb4' }}>
        <div className="container mx-auto mb-14 text-center relative z-10">
          <SectionReveal>
            <motion.span variants={itemVariants} className="inline-block px-5 py-1.5 rounded-full text-white text-[11px] font-jakarta font-bold uppercase tracking-[0.2em]" style={{ backgroundColor: '#1f3658' }}>
              {t("about_org_badge")}
            </motion.span>
            <motion.h2 variants={itemVariants} className="mt-5 font-jakarta font-extrabold text-4xl md:text-5xl drop-shadow-sm" style={{ color: '#1f3658' }}>
              {t("about_org_heading")} <span className="yellow-underline">{t("about_org_heading_accent")}</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-5 font-jakarta font-bold text-sm tracking-[0.15em] uppercase" style={{ color: '#1f3658' }}>
              {t("about_org_bph")}
            </motion.p>
          </SectionReveal>
        </div>
        <div className="relative z-10">
          <BPHCarousel />
        </div>
      </section>

      {/* Manager Divisi */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <Sticker type="star" color="text-yellow-primary" size={28} className="absolute top-10 left-10" float="sparkle" />
        <Sticker type="lightbulb" color="text-muted-foreground/40" size={60} className="absolute bottom-10 right-10" rotate={-20} />
        <div className="container mx-auto px-4">
          <SectionReveal>
            <motion.h3 variants={itemVariants} className="text-center font-jakarta font-extrabold text-3xl md:text-4xl text-primary">
              {t("about_org_manager_heading")} <span className="yellow-underline">{t("about_org_manager_accent")}</span>
            </motion.h3>
            <motion.p variants={itemVariants} className="text-center text-muted-foreground mt-4 text-sm md:text-base max-w-xl mx-auto">
              {t("about_org_manager_desc")}
            </motion.p>
            <Manager3DLoop />
          </SectionReveal>
        </div>
      </section>

      {/* Manajemen IPB Mengajar (Carousel Divisi) */}
      <DivisiManajemen />
    </>
  );
};

export default About;
