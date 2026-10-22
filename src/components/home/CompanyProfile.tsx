import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import WaveDivider from "@/components/decor/WaveDivider";
import Sticker from "@/components/decor/Sticker";


const CompanyProfile = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yVid = useTransform(scrollYProgress, [0, 1], [60, -80]);

  return (
    <>
      <section ref={ref} className="relative bg-blue-deep text-white py-20 md:py-28 noise-overlay overflow-hidden">
        <Sticker type="lightbulb" color="text-yellow-primary/30" size={120} className="absolute top-10 right-10" rotate={30} />
        <Sticker type="sparkle" color="text-yellow-primary/50" size={32} className="absolute bottom-16 left-12" float="sparkle" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "100px" }}
            onViewportEnter={() => setShouldLoadVideo(true)}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: yVid }}
          >
            <div id="img-company-video" className="relative aspect-video rounded-2xl bg-black overflow-hidden scrapbook-shadow group cursor-pointer border-4 border-white/10">
              <video 
                src={shouldLoadVideo ? "/company_profile.mp4" : undefined}
                preload="none"
                className="w-full h-full object-cover" 
                autoPlay={shouldLoadVideo}
                muted 
                loop 
                playsInline 
                controls
              />
            </div>
          </motion.div>

          <SectionReveal>
            <motion.span variants={itemVariants} className="inline-block px-3 py-1 rounded-full bg-yellow-primary/20 text-yellow-primary text-xs font-jakarta font-bold uppercase tracking-widest border border-yellow-primary/40">
              Company Profile
            </motion.span>
            <motion.h2 variants={itemVariants} className="mt-4 font-jakarta font-extrabold text-4xl md:text-5xl">
              Bertumbuh, <span className="text-yellow-primary">Berdampak</span>, Bersama.
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-5 text-white/80 leading-relaxed">
              Saksikan perjalanan IPB Mengajar dari sebuah ide kecil hingga menjadi gerakan mahasiswa yang menjangkau desa-desa di seluruh Indonesia.
            </motion.p>

          </SectionReveal>
        </div>
      </section>
      <WaveDivider fill="text-blue-deep" flip />
    </>
  );
};

export default CompanyProfile;
