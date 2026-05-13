import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  { title: "Desa Binaan", n: "47 Desa", icon: "🏡", desc: "Program intensif mahasiswa terjun langsung ke desa mitra." },
  { title: "Beasiswa Pelajar", n: "500+ Siswa", icon: "📚", desc: "Mendukung siswa berbakat dari keluarga prasejahtera." },
  { title: "Pelatihan Digital", n: "120 Sesi", icon: "💻", desc: "Workshop teknologi untuk masyarakat pedesaan." },
  { title: "Forum Riset", n: "8 Tahun", icon: "🌾", desc: "Konferensi tahunan inovasi agritech nasional." },
];

const AksiNyata = () => {
  return (
    <section className="relative z-[60] bg-cream py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-jakarta font-bold tracking-wider uppercase">
            Program Unggulan
          </span>
          <h2 className="font-display font-black text-4xl md:text-5xl text-primary mt-6 mb-4">
            Aksi Nyata di Lapangan
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
            Ribuan mahasiswa IPB bergerak bersama untuk menciptakan dampak nyata di seluruh penjuru Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border-t-4 border-yellow-primary shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <div className="font-display font-black text-primary text-2xl mb-1">{f.n}</div>
              <h3 className="font-jakarta font-bold text-primary text-sm uppercase tracking-wide mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary to-accent rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="font-display font-black text-white text-3xl mb-2">Siap bergabung?</h3>
            <p className="text-white/70 font-jakarta">Daftarkan dirimu dan buat jejak yang bermakna.</p>
          </div>
          <button className="bg-yellow-primary text-primary px-10 py-4 rounded-full font-jakarta font-extrabold text-lg hover:bg-yellow-secondary hover:-translate-y-1 transition-all scrapbook-shadow flex items-center gap-3">
            Bergabung Sekarang <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AksiNyata;
