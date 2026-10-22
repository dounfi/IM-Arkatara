import { motion } from "framer-motion";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import WaveDivider from "@/components/decor/WaveDivider";
import newsData from "@/data/news.json";

interface NewsData {
  id: number;
  kategori: string;
  tanggal: string;
  judul: string;
  deskripsi: string;
  file_gambar: string;
}

const NewsPreview = () => {
  const newsList = newsData as NewsData[];

  return (
    <>
      <section className="bg-soft-yellow py-20 md:py-28 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <SectionReveal>
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-yellow-primary text-xs font-jakarta font-bold uppercase tracking-widest">
                  Berita & Kabar
                </span>
                <h2 className="mt-3 font-jakarta font-extrabold text-4xl md:text-5xl text-primary">
                  Kabar & Berita <span className="yellow-underline">Terkini</span>
                </h2>
              </div>
              <Link to="/student-info/berita" className="inline-flex items-center gap-2 text-primary font-jakarta font-bold hover:gap-3 transition-all">
                Lihat Semua <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {newsList.slice(0, 3).map((n, i) => {
                let imageUrl = n.file_gambar;
                if (imageUrl && !imageUrl.startsWith('http') && !imageUrl.startsWith('/assets')) {
                  imageUrl = `/assets/${imageUrl.replace(/^(\/)?(uploads\/)?/, '')}`;
                }

                return (
                <motion.article
                  key={n.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
                  style={{ rotate: i === 1 ? 0.5 : -0.5 }}
                  className="bg-white rounded-2xl overflow-hidden scrapbook-shadow transition-shadow"
                >
                  <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
                    {imageUrl ? (
                      <img src={imageUrl} alt={n.judul} className="w-full h-full object-cover object-top" />
                    ) : (
                      <ImageIcon className="w-10 h-10 text-black/20" />
                    )}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-yellow-primary text-[11px] font-jakarta font-bold uppercase tracking-wider">
                      {n.kategori}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground font-jakarta uppercase tracking-wider">{n.tanggal}</p>
                    <h3 className="mt-2 font-jakarta font-bold text-primary text-lg leading-snug">{n.judul}</h3>
                    <p className="mt-2 text-sm text-muted-foreground/80 line-clamp-2">{n.deskripsi}</p>
                    <Link to={`/artikel/${n.id}`} className="mt-4 inline-flex items-center gap-1 text-accent font-jakarta font-bold text-sm hover:gap-2 transition-all">
                      Baca Selengkapnya <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              )})}
            </div>
          </SectionReveal>
        </div>
      </section>
      <WaveDivider fill="text-blue-deep" className="bg-soft-yellow" />
    </>
  );
};

export default NewsPreview;
