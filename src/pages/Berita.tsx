import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import newsData from "@/data/news.json";

const filters = ["Semua", "PDP", "PSDM", "Hubeks", "MID", "Enship", "Mega Proker"] as const;
type Filter = typeof filters[number];

interface NewsData {
  id: number;
  kategori: string;
  tanggal: string;
  judul: string;
  deskripsi: string;
  file_gambar: string;
}

const Berita = () => {
  const [active, setActive] = useState<Filter>("Semua");
  const news = newsData as NewsData[];

  const list = useMemo(
    () => (active === "Semua" ? news : news.filter((n) => n.kategori.toUpperCase() === active.toUpperCase())),
    [active, news]
  );

  return (
    <>
      <PageHeader eyebrow="Aktivitas" title="Berita &" accent="Kabar">
        Simak informasi dan kabar terbaru seputar kegiatan IPB Mengajar.
      </PageHeader>

      <section className="bg-soft-yellow py-16 md:py-20">
        <div className="container mx-auto">
          <SectionReveal>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 relative">
              {filters.map((f) => {
                const isActive = f === active;
                return (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`relative px-5 py-2.5 rounded-full text-sm font-jakarta font-bold transition-all ${isActive ? "bg-primary text-yellow-primary scrapbook-shadow" : "bg-white text-primary hover:bg-cream"}`}
                  >
                    {f}
                    {isActive && (
                      <motion.span layoutId="berita-tab" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-yellow-primary" />
                    )}
                  </button>
                );
              })}
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
              >
                {list.map((n, i) => {
                  let imageUrl = n.file_gambar;
                  if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('/assets')) {
                    imageUrl = `/assets/${imageUrl.replace(/^(\/)?(uploads\/)?/, '')}`;
                  }
                  
                  return (
                  <motion.article
                    key={n.id}
                    whileHover={{ y: -8, rotate: 0 }}
                    style={{ rotate: i % 2 === 0 ? -0.5 : 0.5 }}
                    className="bg-white rounded-2xl overflow-hidden scrapbook-shadow"
                  >
                    <div className={`relative aspect-video flex items-center justify-center bg-gray-200`}>
                      {imageUrl ? (
                        <img src={imageUrl} alt={n.judul} className="w-full h-full object-cover object-top" />
                      ) : (
                        <ImageIcon className="w-10 h-10 text-black/20" />
                      )}
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-yellow-primary text-[11px] font-jakarta font-bold uppercase tracking-wider">
                        {n.kategori}
                      </span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-muted-foreground font-jakarta uppercase tracking-wider">{n.tanggal}</p>
                      <h3 className="mt-2 font-jakarta font-bold text-primary text-xl leading-snug">{n.judul}</h3>
                      <p className="mt-3 text-muted-foreground/80 line-clamp-2">{n.deskripsi}</p>
                      <Link to={`/artikel/${n.id}`} className="mt-5 inline-flex items-center gap-1 text-accent font-jakarta font-bold text-sm hover:gap-2 transition-all">
                        Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.article>
                )})}
              </motion.div>
            </AnimatePresence>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Berita;
