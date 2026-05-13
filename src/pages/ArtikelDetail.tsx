import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import WaveDivider from "@/components/decor/WaveDivider";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import newsDataRaw from "@/data/news.json";

interface NewsItem {
  id: number;
  kategori: string;
  tanggal: string;
  judul: string;
  deskripsi: string;
  file_gambar: string;
  konten?: string[];
}

const ArtikelDetail = () => {
  const { id } = useParams();
  const newsData = newsDataRaw as NewsItem[];
  const article = newsData.find((n) => n.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream">
        <h1 className="text-4xl font-jakarta font-extrabold text-primary mb-4">Artikel Tidak Ditemukan</h1>
        <Link to="/student-info/berita" className="text-accent hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
        </Link>
      </div>
    );
  }

  // Format image URL
  let imageUrl = article.file_gambar;
  if (imageUrl && !imageUrl.startsWith("http") && !imageUrl.startsWith("/assets")) {
    imageUrl = `/assets/${imageUrl.replace(/^(\/)?(uploads\/)?/, "")}`;
  }

  return (
    <div className="bg-cream min-h-screen pt-32">
      <div className="container mx-auto px-4 max-w-4xl pb-20">
        <SectionReveal>
          {/* Breadcrumb / Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link
              to="/student-info/berita"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors bg-white px-4 py-2 rounded-full scrapbook-shadow"
            >
              <ArrowLeft className="w-4 h-4" /> Kembali ke Berita
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.div variants={itemVariants} className="bg-white rounded-[2rem] p-8 md:p-12 scrapbook-shadow border border-black/5 relative overflow-hidden">
            {/* Header Content */}
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-primary text-primary text-xs font-jakarta font-bold uppercase tracking-wider">
                  <Tag className="w-3.5 h-3.5" />
                  {article.kategori}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground font-medium">
                  <Calendar className="w-4 h-4" />
                  {article.tanggal}
                </span>
              </div>

              <h1 className="font-jakarta font-extrabold text-3xl md:text-5xl text-primary leading-tight mb-8">
                {article.judul}
              </h1>

              {/* Featured Image */}
              {imageUrl && (
                <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-inner mb-10 bg-gray-100">
                  <img src={imageUrl} alt={article.judul} className="w-full h-full object-cover" />
                </div>
              )}

              {/* Article Body */}
              <div className="prose prose-lg prose-p:text-muted-foreground prose-p:leading-relaxed prose-headings:font-jakarta prose-headings:text-primary max-w-none">
                {article.konten ? (
                  article.konten.map((paragraph, idx) => (
                    <p key={idx} className="mb-6 text-[17px] md:text-[19px]">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-[17px] md:text-[19px]">{article.deskripsi}</p>
                )}
              </div>
            </div>

            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-yellow-soft/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          </motion.div>
        </SectionReveal>
      </div>
      <WaveDivider fill="text-primary" className="bg-cream" />
    </div>
  );
};

export default ArtikelDetail;
