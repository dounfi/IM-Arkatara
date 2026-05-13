import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Tent, Presentation, Briefcase, Camera, ArrowRight, ShieldCheck, Star, Quote } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Sticker from "@/components/decor/Sticker";

const divisiData = {
  pdp: {
    id: "pdp",
    name: "Program dan Pengabdian (PDP)",
    short: "PDP",
    img: "/images/team/Divisi/1. pdp.webp",
    imgPos: "object-[center_20%]",
    color: "text-emerald-600",
    bgColor: "bg-emerald-100",
    gradient: "from-emerald-50 to-emerald-100/20",
    desc: "Divisi yang menjadi ujung tombak pergerakan IPB Mengajar. Berfokus pada penyusunan kurikulum, metode pembelajaran inovatif, serta pelaksanaan pengabdian dan pendampingan langsung di desa binaan maupun masyarakat lingkar kampus.",
    proker: [
      { nama: "IM-TAGS", detail: "Pengabdian 1 hari di Bogor (kelas inspirasi, literasi) sekaligus sarana internalisasi anggota." },
      { nama: "IM Visit", detail: "Kunjungan edukatif ke sekolah dasar untuk mengenalkan dunia pertanian sejak dini secara interaktif." },
      { nama: "IM-INK (Inklusi)", detail: "Pendidikan non-formal bahasa isyarat bagi siswa SMP guna menumbuhkan inklusivitas dan empati sosial." }
    ]
  },
  hubeks: {
    id: "hubeks",
    name: "Hubungan Eksternal (HUBEKS)",
    short: "HUBEKS",
    img: "/images/team/Divisi/2. hubeks.webp",
    imgPos: "object-[center_20%]",
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    gradient: "from-purple-50 to-purple-100/20",
    desc: "Wajah IPB Mengajar yang bertugas menjalin dan menjaga komunikasi serta kerjasama strategis dengan pihak luar, seperti sekolah, donatur, stakeholder pemerintahan, dan komunitas pendidikan lainnya.",
    proker: [
      { nama: "Temu Lentera", detail: "Pertemuan silaturahmi lintas angkatan IPB Mengajar sebagai wadah berbagi pengalaman." },
      { nama: "Kolaborasi Eksternal", detail: "Sinergi kegiatan amal atau pengabdian bersama pihak di luar IPB University." },
      { nama: "Kolaborasi Internal", detail: "Sinergi kegiatan pengabdian atau pelatihan bersama komunitas/organisasi di dalam IPB University." },
      { nama: "Studi Banding", detail: "Kunjungan antar organisasi sejenis untuk saling bertukar informasi dan wawasan." },
      { nama: "Come To Know IM", detail: "Pengenalan dan rekrutmen anggota IPB Mengajar melalui expo Agrisymphony." }
    ]
  },
  psdm: {
    id: "psdm",
    name: "Pengembangan Sumber Daya Mahasiswa (PSDM)",
    short: "PSDM",
    img: "/images/team/Divisi/3. psdm.webp",
    imgPos: "object-center",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    gradient: "from-blue-50 to-blue-100/20",
    desc: "Urat nadi organisasi yang bertugas merawat, menjaga solidaritas, serta memantau performa anggota. PSDM memastikan setiap relawan dan pengurus IPB Mengajar mendapatkan ruang untuk berkembang dan meningkatkan kapasitas diri.",
    proker: [
      { nama: "IM Gathering", detail: "Kegiatan pembuka kepengurusan untuk membangun bonding dan suasana hangat antar anggota." },
      { nama: "IM Makrab", detail: "Malam keakraban 'one roof one family' guna mempererat ikatan emosional dan kekeluargaan." },
      { nama: "SOQ & Monev", detail: "Apresiasi kinerja staf triwulanan (SOQ) dan pemantauan berkala kondisi organisasi (Monev)." },
      { nama: "IM Training", detail: "Pembekalan kesiapan mental dan keterampilan mengajar anggota sebelum turun ke masyarakat." },
      { nama: "IM BUZZ: Connect X Care", detail: "Pendampingan internal PSDM ke setiap divisi sebagai support system kesejahteraan anggota." },
      { nama: "IMCA 7.0", detail: "Acara puncak berupa awarding, farewell, dan pelantikan kepengurusan baru." }
    ]
  },
  enship: {
    id: "enship",
    name: "Entrepreneur & Sponsorship (ENSTHIP)",
    short: "ENSTHIP",
    img: "/images/team/Divisi/4. enship.webp",
    imgPos: "object-[center_20%]",
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    gradient: "from-amber-50 to-amber-100/20",
    desc: "Divisi kreatif pencari dana yang berfokus pada kemandirian finansial organisasi. ENSHIP bertugas memproduksi merchandise eksklusif dan mengadakan berbagai kegiatan wirausaha mandiri.",
    proker: [
      { nama: "IM Talks", detail: "Program peningkatkan softskill dan pengetahuan remaja terkait isu pendidikan." },
      { nama: "IM Store", detail: "Penghimpunan dana organisasi melalui penjualan merchandise resmi IPB Mengajar." },
      { nama: "Sahabat Diraya", detail: "Program donasi rutin berkelanjutan dari pihak umum yang menjadi donatur tetap." },
      { nama: "Sponsorship & Partnership", detail: "Pencarian dana operasional melalui kolaborasi dengan berbagai mitra internal dan eksternal." }
    ]
  },
  mid: {
    id: "mid",
    name: "Media Informasi dan Desain (MID)",
    short: "MID",
    img: "/images/team/Divisi/5. mid.webp",
    imgPos: "object-[center_40%]",
    color: "text-rose-600",
    bgColor: "bg-rose-100",
    gradient: "from-rose-50 to-rose-100/20",
    desc: "Pusat kreativitas visual yang mengemas, mendesain, dan mempublikasikan seluruh kegiatan IPB Mengajar ke ruang publik. MID memastikan kampanye pendidikan IPB Mengajar dapat menjangkau masyarakat luas.",
    proker: [
      { nama: "IM Media", detail: "Publikasi artikel, pengelolaan media sosial, serta dokumentasi visual program kerja." },
      { nama: "IM Quiz", detail: "Kuis interaktif di medsos untuk meramaikan hari-hari besar pendidikan." },
      { nama: "IM Journal", detail: "Laporan kegiatan tengah dan akhir tahun untuk transparansi serta rujukan evaluasi." }
    ]
  }
};

const tabKeys = Object.keys(divisiData) as Array<keyof typeof divisiData>;

export default function Divisi() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Jika URL tidak valid atau kosong, default ke PDP
  const initialTab = id && tabKeys.includes(id as any) ? (id as keyof typeof divisiData) : "pdp";
  const [activeTab, setActiveTab] = useState<keyof typeof divisiData>(initialTab);

  // Sync state with URL params if user clicks Manager Carousel
  useEffect(() => {
    if (id && tabKeys.includes(id as any)) {
      setActiveTab(id as keyof typeof divisiData);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  }, [id]);

  const handleTabChange = (key: keyof typeof divisiData) => {
    setActiveTab(key);
    navigate(`/divisi/${key}`, { replace: true });
  };

  const currentData = divisiData[activeTab];

  return (
    <div className="bg-[#fdfcf8] min-h-screen">
      <PageHeader
        eyebrow="Manajemen Organisasi"
        title="Divisi IPB Mengajar"
        accent="Arkatara"
      >
        Lima divisi yang bersinergi menggerakkan roda pergerakan dan memastikan misi pendidikan IPB Mengajar terus berjalan.
      </PageHeader>

      <section className="pt-10 pb-20 relative bg-[#fdfcf8] noise-overlay">
        <Sticker type="star" color="text-yellow-primary/50" size={40} className="absolute top-20 right-20" float="sparkle" />
        <Sticker type="lightbulb" color="text-primary/10" size={80} className="absolute bottom-20 left-10" rotate={-15} />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
            {tabKeys.map((key) => {
              const div = divisiData[key];
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => handleTabChange(key)}
                  className={`relative px-6 py-2.5 rounded-full font-jakarta font-bold text-sm md:text-base transition-all duration-300 ${
                    isActive 
                      ? 'bg-primary text-yellow-primary shadow-lg scale-105' 
                      : 'bg-transparent border-2 border-dashed border-primary/20 text-primary/60 hover:border-primary/50 hover:text-primary hover:bg-cream'
                  }`}
                >
                  {div.short}
                  {isActive && (
                    <motion.div layoutId="divisiTabIndicator" className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-yellow-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-6xl mx-auto"
            >
              {/* Pengertian Header & Photo */}
              <div className="flex flex-col items-center text-center mb-20">
                <h2 className="font-jakarta font-black text-3xl md:text-5xl text-primary leading-tight mb-8">
                  {currentData.name}
                </h2>
                
                <div className="w-full max-w-4xl aspect-[16/10] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl mb-10 relative group">
                  <img src={currentData.img} alt={currentData.name} className={`w-full h-full object-cover ${currentData.imgPos} transition-transform duration-700 group-hover:scale-105`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent pointer-events-none" />
                </div>

                <div className="relative max-w-3xl">
                  <Quote className="absolute -top-6 -left-8 w-12 h-12 text-primary/10" />
                  <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed px-4 md:px-8">
                    {currentData.desc}
                  </p>
                  <Quote className="absolute -bottom-6 -right-8 w-12 h-12 text-primary/10 rotate-180" />
                </div>
              </div>

              {/* Proker List */}
              <div className="relative z-10">
                <div className="flex justify-center items-center gap-3 mb-10">
                  <ShieldCheck className="w-6 h-6 text-yellow-primary" />
                  <h3 className="font-jakarta font-black text-2xl md:text-3xl text-primary">Program Kerja {currentData.short}</h3>
                  <ShieldCheck className="w-6 h-6 text-yellow-primary" />
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentData.proker.map((pk, idx) => {
                    const abbr = pk.nama.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
                    const rotations = [-2, 1.5, -1.5, 2, -1, 1];
                    return (
                      <motion.div
                        key={pk.nama}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -5, scale: 1.02, rotate: 0, zIndex: 10 }}
                        style={{ rotate: rotations[idx % rotations.length] }}
                        className="relative bg-[#fdfcf8] noise-overlay rounded-none border border-primary/5 p-7 scrapbook-shadow cursor-default group flex flex-col min-h-[160px]"
                      >
                        {/* Selotip */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-6 bg-white/70 backdrop-blur-md border border-white rotate-[-3deg] shadow-sm z-20" />
                        
                        <div className="absolute -right-2 -bottom-4 text-7xl font-jakarta font-black text-primary/[0.03] select-none pointer-events-none group-hover:scale-110 transition-transform origin-bottom-right">
                          {abbr}
                        </div>
                        
                        <h4 className="relative font-jakarta font-extrabold text-primary text-xl leading-tight group-hover:text-yellow-600 transition-colors z-10 mt-2">
                          {pk.nama}
                        </h4>
                        <p className="relative mt-3 text-muted-foreground text-sm leading-relaxed z-10">
                          {pk.detail}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </div>
  );
}
