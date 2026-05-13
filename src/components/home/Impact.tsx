import { motion } from "framer-motion";
import Counter from "@/components/decor/Counter";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Sticker from "@/components/decor/Sticker";
import WaveDivider from "@/components/decor/WaveDivider";

const stats = [
  { label: "Desa Binaan", value: 20, suffix: "+" },
  { label: "Sekolah Binaan", value: 20, suffix: "+" },
  { label: "Tahun Kontribusi", value: 12, suffix: "" },
  { label: "Relawan Aktif", value: 70, suffix: "+" },
];

const Impact = () => (
  <>
    <section className="relative bg-primary text-white py-20 md:py-28 noise-overlay overflow-hidden">
      <Sticker type="sparkle" color="text-yellow-primary/80" size={36} className="absolute top-12 left-10" float="sparkle" />
      <Sticker type="star" color="text-white/40" size={28} className="absolute top-20 right-1/4" float="sparkle" />
      <Sticker type="sparkle" color="text-yellow-primary/60" size={28} className="absolute bottom-16 left-1/3" float="sparkle" />
      <Sticker type="dot" color="text-yellow-primary/60" size={16} className="absolute bottom-24 right-12" />

      <div className="container mx-auto relative z-10">
        <SectionReveal>
          <motion.h2 variants={itemVariants} className="text-center font-jakarta font-extrabold text-4xl md:text-5xl">
            Dampak <span className="text-yellow-primary">Nyata</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-white/70 mt-4 max-w-xl mx-auto">
            12 tahun bertumbuh bersama, hadir untuk Indonesia.
          </motion.p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7 mt-14">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={itemVariants}
                style={{ rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                className="bg-primary/40 backdrop-blur-sm border-4 border-yellow-primary rounded-2xl p-6 md:p-8 text-center scrapbook-shadow"
              >
                <div className="font-jakarta font-extrabold text-yellow-primary text-4xl md:text-6xl tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-white/85 text-sm md:text-base font-jakarta font-semibold uppercase tracking-wider">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
    <WaveDivider fill="text-white" className="bg-primary" />
  </>
);

export default Impact;

