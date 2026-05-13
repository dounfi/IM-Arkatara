import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import { prokerByDivision } from "@/lib/data/proker";

import prokerData from "@/data/proker.json";

const accentMap: Record<string, string> = {
  primary: "bg-accent",
  blue:   "bg-blue-deep",
  yellow: "bg-yellow-primary",
  teal:   "bg-muted",
  amber:  "bg-yellow-amber",
};

const divisions = ["PDP", "PSDM", "HUBEKS", "ENSHIP", "MID"] as const;
type Div = typeof divisions[number];

interface MegaProkerItem {
  id: number;
  urutan: number;
  nama_proker: string;
  subtitle: string;
  deskripsi: string;
  accent: string;
  grad: string;
  file_gambar: string;
}

const Proker = () => {
  const [tab, setTab] = useState<Div>("PDP");
  const megaList = prokerData as MegaProkerItem[];
  const loading = false;
  const error = null;

  return (
    <>
      <PageHeader eyebrow="Aktivitas" title="Program" accent="Kerja">
        Lima mega proker dan puluhan program divisi yang menjadi rumah bagi semangat berbagi.
      </PageHeader>

      {/* MEGA PROKER */}
      <section className="bg-cream py-16 md:py-24 relative">
        <div className="container mx-auto">


          <div className="mt-16 space-y-20 max-w-6xl mx-auto px-4 md:px-0">
            {loading ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-muted-foreground/40 animate-pulse py-10">Memuat mega proker...</motion.p>
            ) : error ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-red-500 py-10">{error}</motion.p>
            ) : megaList.length === 0 ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-muted-foreground/60 py-10">Belum ada data Mega Proker.</motion.p>
            ) : megaList.map((m, i) => {
                const reverse = i % 2 === 1;
                const accentClass = accentMap[m.accent] ?? "bg-accent";
                
                let imageUrl = m.file_gambar;
                if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('/assets')) {
                  imageUrl = `/assets/${imageUrl.replace(/^(\/)?(uploads\/)?/, '')}`;
                }

                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className={`grid lg:grid-cols-2 gap-10 items-center group ${reverse ? "lg:[direction:rtl]" : ""}`}
                  >
                    <div className="[direction:ltr]">
                      <motion.div
                        id={`img-mega-${m.id}`}
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ rotate: reverse ? "1.5deg" : "-1.5deg" }}
                        className={`relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br ${m.grad} scrapbook-shadow flex items-center justify-center cursor-pointer`}
                      >
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt={m.nama_proker}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <ImageIcon className="w-14 h-14 text-white/70 group-hover:scale-110 transition-transform" />
                        )}
                        <div className={`absolute top-0 left-0 right-0 h-2 ${accentClass}`} />
                      </motion.div>
                    </div>
                    <div className="[direction:ltr]">
                      <span className={`inline-block w-12 h-1.5 rounded-full ${accentClass} mb-4`} />
                      <h3 className="font-jakarta font-extrabold text-3xl md:text-4xl text-primary group-hover:text-yellow-600 transition-colors cursor-pointer">
                        {m.nama_proker}
                      </h3>
                      <p className="font-display italic text-muted-foreground text-lg mt-2">{m.subtitle}</p>
                      <p className="mt-5 text-muted-foreground/90 leading-relaxed whitespace-pre-wrap">{m.deskripsi}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
        </div>
      </section>

      {/* Removed PROKER PER DIVISI as it is now separated into /divisi */}
    </>
  );
};

export default Proker;
