import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Sticker from "@/components/decor/Sticker";
import WaveDivider from "@/components/decor/WaveDivider";

const misi = [
  "Membangun IPB Mengajar sebagai jembatan untuk mewujudkan pendidikan yang inklusif dan merata melalui kolaborasi dan inovasi.",
  "Menguatkan langkah keberlanjutan dalam setiap kegiatan yang dilakukan.",
  "Menumbuhkan rasa kepedulian terhadap isu pendidikan melalui saluran media kreatif.",
  "Menciptakan rasa kekeluargaan dalam lingkungan internal IPB Mengajar"
];

const VisiMisi = () => (
  <>
    <PageHeader eyebrow="About Us" title="Visi &" accent="Misi">
      Cita-cita besar yang menggerakkan langkah kami setiap hari.
    </PageHeader>

    <WaveDivider fill="text-cream" flip className="bg-yellow-primary" />

    {/* VISI */}
    <section className="relative bg-gradient-to-b from-yellow-primary via-soft-yellow to-white py-24 overflow-hidden">
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
        <Quote className="absolute -top-6 -left-4 w-32 h-32 md:w-48 md:h-48 text-primary/15" strokeWidth={1.5} />
        <Quote className="absolute -bottom-10 -right-4 w-32 h-32 md:w-48 md:h-48 text-primary/15 rotate-180" strokeWidth={1.5} />
        <p className="text-xs uppercase tracking-[0.4em] font-jakarta text-primary/60 mb-4">Visi Kami</p>
        <p className="font-jakarta text-2xl md:text-4xl text-primary font-extrabold leading-tight text-balance">
          Menjadi penggerak yang berperan aktif dalam pendidikan mengajar kolaboratif, dan berdampak nyata melalui pengembangan internal yang kuat dengan usaha pemerataan kegiatan berkelanjutan.
        </p>

      </motion.div>
    </section>

    <WaveDivider fill="text-white" flip />

    {/* MISI */}
    <section className="bg-white py-20 md:py-28 relative">
      <div className="container mx-auto">
        <SectionReveal>
          <motion.h2 variants={itemVariants} className="text-center font-jakarta font-extrabold text-4xl md:text-5xl text-primary">
            Misi <span className="yellow-underline">Kami</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-center text-muted-foreground mt-4 max-w-xl mx-auto">
            Empat langkah konkret yang menjadi kompas setiap program IPB Mengajar.
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
                  <div className="w-12 h-12 rounded-full bg-yellow-primary text-primary font-jakarta font-extrabold text-lg flex items-center justify-center scrapbook-shadow group-hover:bg-yellow-primary group-hover:text-primary transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-5 text-primary group-hover:text-white leading-relaxed transition-colors duration-300">
                    {m}
                  </p>
                  <div className="mt-5 h-[3px] w-12 bg-accent group-hover:bg-yellow-primary transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default VisiMisi;
