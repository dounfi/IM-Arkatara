import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Polaroid from "@/components/decor/Polaroid";
import Sticker from "@/components/decor/Sticker";
import WaveDivider from "@/components/decor/WaveDivider";

const AboutBlurb = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <>
      <section ref={ref} className="relative bg-cream dot-pattern py-20 md:py-28 overflow-hidden">
        <Sticker type="lightbulb" color="text-muted-foreground/50" size={80} className="absolute top-10 left-6" rotate={-20} />
        <Sticker type="star" color="text-yellow-primary/70" size={36} className="absolute top-20 right-10" float="sparkle" />
        <Sticker type="lightbulb" color="text-accent/40" size={70} className="absolute bottom-10 right-20" rotate={50} />
        <Sticker type="dot" color="text-yellow-amber/60" size={20} className="absolute bottom-24 left-1/3" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <SectionReveal>
            <motion.span variants={itemVariants} className="inline-block px-3 py-1 rounded-full bg-yellow-primary/30 text-primary text-xs font-jakarta font-bold tracking-widest uppercase">
              Tentang Kami
            </motion.span>
            <motion.h2 variants={itemVariants} className="mt-4 font-jakarta font-extrabold text-4xl md:text-5xl text-primary leading-tight">
              Mewujudkan <span className="yellow-underline">Pendidikan</span> yang Merata dan Berkualitas
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-muted-foreground text-lg leading-relaxed">
              IPB Mengajar merupakan Unit Kegiatan Mahasiswa yang bergerak di bidang pendidikan dan menjadi wadah bagi mahasiswa untuk berkontribusi melalui kegiatan pengajaran, pendampingan, serta pengembangan peserta didik di berbagai daerah.
            </motion.p>
            <motion.p variants={itemVariants} className="mt-4 text-muted-foreground/90 leading-relaxed">
              IPB Mengajar selalu berupaya menghadirkan ruang belajar yang inklusif dan bermakna bagi generasi penerus bangsa. Upaya ini tidak akan terpenuhi tanpa teman-teman yang memiliki tekad kuat seperti kalian.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
              {["Pendidikan", "Pemberdayaan", "Komunitas", "Indonesia"].map((t) => (
                <span key={t} className="px-4 py-2 rounded-full bg-white border-2 border-dashed border-border text-primary text-sm font-jakarta font-semibold">
                  {t}
                </span>
              ))}
            </motion.div>
          </SectionReveal>

          <motion.div style={{ y: yImg }} className="relative h-[480px] flex items-center justify-center">
            <Polaroid id="img-about-blurb" size="lg" rotate={-4} image="/images/IMG_1860.webp" />
            <div className="absolute -bottom-6 -right-2">
              <Polaroid id="img-about-blurb-2" size="sm" rotate={9} image="/images/IMG_2177.webp" />
            </div>
          </motion.div>
        </div>
      </section>
      <WaveDivider fill="text-primary" className="bg-cream" />
    </>
  );
};

export default AboutBlurb;
