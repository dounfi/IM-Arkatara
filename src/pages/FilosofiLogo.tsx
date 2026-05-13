import { motion } from "framer-motion";
import { Sprout, BookOpen, Heart, Users, Eye } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Sticker from "@/components/decor/Sticker";

const elements = [
  { icon: Eye, title: "Mata Burung Hantu", desc: "Pandangan tajam, peka pada isu pendidikan di sekitar." },
  { icon: BookOpen, title: "Buku & Pena", desc: "Komitmen pada literasi dan pembelajaran sepanjang hayat." },
  { icon: Sprout, title: "Daun & Tunas", desc: "Pertumbuhan, regenerasi, dan keberlanjutan." },
  { icon: Heart, title: "Hati Hangat", desc: "Empati sebagai dasar setiap interaksi kami." },
  { icon: Users, title: "Lingkar Komunitas", desc: "Kolaborasi adalah jantung dari setiap program." },
];

const FilosofiLogo = () => (
  <>
    <PageHeader eyebrow="About Us" title='Filosofi Logo' accent='"Owlia"'>
      Setiap garis dan warna menyimpan makna.
    </PageHeader>

    <section className="bg-cream py-20 md:py-28 relative overflow-hidden">
      <Sticker type="lightbulb" color="text-muted-foreground/40" size={120} className="absolute top-12 right-6" rotate={20} />
      <Sticker type="sparkle" color="text-yellow-primary/60" size={36} className="absolute bottom-20 left-10" float="sparkle" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="relative">
            <div id="img-logo-owlia" className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-muted via-accent to-primary flex items-center justify-center scrapbook-shadow border-[12px] border-white">
              <span className="font-display text-white text-8xl md:text-9xl font-bold drop-shadow-lg">IM</span>
            </div>
            <Sticker type="star" color="text-yellow-primary" size={50} className="absolute -top-2 -right-2" float="sparkle" />
            <Sticker type="lightbulb" color="text-yellow-amber" size={44} className="absolute -bottom-4 -left-2" float="slow" />
          </div>
        </motion.div>

        <SectionReveal>
          <motion.span variants={itemVariants} className="inline-block px-3 py-1 rounded-full bg-yellow-primary text-primary text-xs font-jakarta font-bold uppercase tracking-widest">
            Owlia, Sang Burung Bijak
          </motion.span>
          <motion.h2 variants={itemVariants} className="mt-4 font-jakarta font-extrabold text-3xl md:text-4xl text-primary">
            Bijak Memandang, Hangat Mengajar.
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-muted-foreground leading-relaxed">
            "Owlia" adalah representasi semangat IPB Mengajar, sosok burung hantu yang melambangkan kebijaksanaan, ketelitian, dan ketekunan dalam menyebarkan ilmu. Warna hijau dan kuning mewakili pertumbuhan dan kehangatan, sementara aksen biru mengisyaratkan ketenangan dan visi jangka panjang.
          </motion.p>

          <div className="mt-8 space-y-3">
            {elements.map((el) => (
              <motion.div key={el.title} variants={itemVariants} className="flex items-start gap-4 bg-white rounded-xl p-4 border-l-4 border-yellow-primary scrapbook-shadow">
                <div className="w-11 h-11 rounded-lg bg-primary text-yellow-primary flex items-center justify-center flex-shrink-0">
                  <el.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-jakarta font-bold text-primary">{el.title}</h4>
                  <p className="text-sm text-muted-foreground/90">{el.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  </>
);

export default FilosofiLogo;
