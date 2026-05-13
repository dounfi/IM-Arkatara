import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ImageIcon, ArrowRight } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Sticker from "@/components/decor/Sticker";
import partnersData from "@/data/partners.json";

const grads = [
  "from-yellow-primary to-yellow-amber",
  "from-muted to-primary",
  "from-blue-deep to-blue-light",
  "from-yellow-secondary to-accent",
  "from-accent to-yellow-primary",
  "from-blue-light to-yellow-primary",
  "from-yellow-amber to-primary",
  "from-muted to-blue-light",
  "from-yellow-primary to-accent",
];

interface Partner {
  id: number;
  file_gambar: string;
}



const MediaPartner = () => {
  const partners = partnersData as Partner[];

  return (
  <>
    <PageHeader eyebrow="Aktivitas" title="Media" accent="Partner">
      Kolaborasi strategis IPB Mengajar bersama berbagai pihak untuk memperluas kebermanfaatan.
    </PageHeader>

    <section className="bg-cream py-16 md:py-20 relative overflow-hidden">
      <Sticker type="lightbulb" color="text-muted-foreground/40" size={80} className="absolute top-10 right-6" rotate={20} />
      <Sticker type="sparkle" color="text-yellow-primary/60" size={32} className="absolute bottom-12 left-10" float="sparkle" />

      <div className="container mx-auto">
        <SectionReveal>
          <motion.h2 variants={itemVariants} className="text-center font-jakarta font-extrabold text-3xl md:text-4xl text-primary">
            Galeri <span className="yellow-underline">Poster</span> Media Partner
          </motion.h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
            {partners.length > 0 ? partners.map((p, i) => {
              const grad = grads[i % grads.length];
              let imageUrl = p.file_gambar;
              if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('/assets')) {
                imageUrl = `/assets/${imageUrl.replace(/^(\/)?(uploads\/)?/, '')}`;
              }
              return (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.06, rotate: 0, zIndex: 10 }}
                  style={{ rotate: i % 2 === 0 ? -1 : 1 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden scrapbook-shadow border border-black/5 cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${grad} flex items-center justify-center bg-gray-200`}>
                    {imageUrl ? (
                      <img src={imageUrl} alt="Media Partner" className="w-full h-full object-cover transition-transform duration-500" />
                    ) : (
                      <ImageIcon className="w-10 h-10 text-white/70" />
                    )}
                  </div>
                </motion.div>
              );
            }) : (
              <div className="text-center col-span-2 md:col-span-3 py-10 text-muted-foreground">Memuat data...</div>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>

    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-2xl text-center">
        <SectionReveal>
          <motion.h2 variants={itemVariants} className="font-jakarta font-extrabold text-3xl md:text-4xl text-primary">
            Tertarik menjadi <span className="yellow-underline">Media Partner</span>?
          </motion.h2>
          <motion.p variants={itemVariants} className="mt-4 text-muted-foreground leading-relaxed">
            Mari berkolaborasi bersama IPB Mengajar untuk menyebarkan semangat dan manfaat pendidikan ke seluruh Indonesia. Silakan hubungi tim kami untuk informasi lebih lanjut.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10">
            <Link
              to="/kontak"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-yellow-primary text-primary font-jakarta font-bold hover:bg-yellow-secondary transition-all hover:translate-y-[-2px] scrapbook-shadow"
            >
              Daftar Media Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  </>
  );
};

export default MediaPartner;
