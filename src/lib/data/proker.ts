export interface Mega {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  accent: "primary" | "blue" | "yellow" | "teal" | "amber";
  grad: string;
}

export const megaProker: Mega[] = [
  {
    id: "edelweis-x-dispen",
    title: "EDELWEIS x DISPEN",
    subtitle: "Education Weeks in School x Diskusi Pendidikan",
    description: "Edelweis x Dispen merupakan kolaborasi mega proker dari IPB Mengajar. Edelweis menghadirkan pengajar inspiratif di desa binaan selama 21 hari, meliputi tahap Pra, Pelaksanaan, dan Pasca. Kegiatan ini dirangkaikan dengan Dispen, sebuah forum diskusi mendalam mengenai isu-isu pendidikan bersama stakeholder untuk merumuskan solusi efektif demi kemajuan pendidikan Indonesia.",
    accent: "primary",
    grad: "from-muted via-accent to-primary",
  },
  {
    id: "im-blinks",
    title: "IM-BLINKS",
    subtitle: "IM-Bimbingan Lingkar Kampus",
    description: "IM-Bimbingan Lingkar Kampus (IM-BLINKS) merupakan kegiatan bimbingan belajar yang akan berfokus untuk mengajar anak-anak yang putus sekolah di desa binaan yang ada di lingkar kampus dengan melibatkan seluruh manajemen IM, orang tua peserta bimbingan, serta pemerintah setempat. Kegiatan ini akan dilaksanakan secara periodik selama masa kepengurusan",
    accent: "yellow",
    grad: "from-yellow-secondary via-yellow-primary to-yellow-amber",
  },
  {
    id: "im-internship",
    title: "IM Internship",
    subtitle: "Pemberdayaan Pendidikan",
    description: "IM Internship merupakan bentuk serangkaian kegiatan untuk mengembangkan kemampuan dan pengetahuan bagi mahasiswa yang memiliki minat bidang pemberdayaan pendidikan di luar Manajemen IPB Mengajar yang diharapkan juga mampu mempromosikan UKM IPB Mengajar serta menunjang dan mendukung soft skill yang akan diimplementasikan selama ikut melaksanakan program IPB Mengajar dalam waktu 2 bulan. Serangkaian proses IM Internship ini dapat berlanjut dalam penerimaan Manajemen IPB Mengajar kabinet selanjutnya.",
    accent: "teal",
    grad: "from-accent via-muted to-blue-light",
  },
  {
    id: "gota",
    title: "GOTA",
    subtitle: "Gerakan Orangtua Asuh",
    description: "GOTA (Gerakan Orangtua Asuh) merupakan salah satu program BPH IPB Mengajar yang bekerjasama dengan Agrianita IPB untuk memberikan pengajaran intensif dalam persiapan ujian sekolah baik tingkat SD, SMP, dan SMA sesuai kurikulum yang berlaku. Kegiatan ini akan dilaksanakan selama 20 pertemuan dalam 2 kali seminggu. Mata pelajaran yang diberikan untuk jenjang SD yaitu IPA Terpadu dan Matematika, jenjang SMP dan SMA ada IPA (Biologi, Kimia, Fisika) dan Matematika dan materi SNBT (Seleksi Nasional Berbasis Tes).",
    accent: "amber",
    grad: "from-yellow-amber via-yellow-secondary to-muted-foreground",
  },
];

export const prokerByDivision: Record<string, { name: string; description: string; emoji: string }[]> = {
  PDP: [
    { name: "IM-TAGS", description: "Pengabdian 1 hari di Bogor (kelas inspirasi, literasi) sekaligus sarana internalisasi anggota.", emoji: "🎒" },
    { name: "IM Visit", description: "Kunjungan edukatif ke sekolah dasar untuk mengenalkan dunia pertanian sejak dini secara interaktif.", emoji: "🏫" },
    { name: "IM-INK (Inklusi)", description: "Pendidikan non-formal bahasa isyarat bagi siswa SMP guna menumbuhkan inklusivitas dan empati sosial.", emoji: "🤝" },
  ],
  PSDM: [
    { name: "IM Gathering", description: "Kegiatan pembuka kepengurusan untuk membangun bonding dan suasana hangat antar anggota.", emoji: "🎉" },
    { name: "IM Makrab", description: "Malam keakraban 'one roof one family' guna mempererat ikatan emosional dan kekeluargaan.", emoji: "🏕️" },
    { name: "SOQ & Monev", description: "Apresiasi kinerja staf triwulanan (SOQ) dan pemantauan berkala kondisi organisasi (Monev).", emoji: "🏆" },
    { name: "IM Training", description: "Pembekalan kesiapan mental dan keterampilan mengajar anggota sebelum turun ke masyarakat.", emoji: "📚" },
    { name: "IM BUZZ: Connect X Care", description: "Pendampingan internal PSDM ke setiap divisi sebagai support system kesejahteraan anggota.", emoji: "💬" },
    { name: "IMCA 7.0", description: "Acara puncak berupa awarding, farewell, dan pelantikan kepengurusan baru.", emoji: "🌅" },
  ],
  HUBEKS: [
    { name: "Temu Lentera", description: "Pertemuan silaturahmi lintas angkatan IPB Mengajar sebagai wadah berbagi pengalaman.", emoji: "🪔" },
    { name: "Kolaborasi Eksternal", description: "Sinergi kegiatan amal atau pengabdian bersama pihak di luar IPB University.", emoji: "🌐" },
    { name: "Kolaborasi Internal", description: "Sinergi kegiatan pengabdian atau pelatihan bersama komunitas/organisasi di dalam IPB University.", emoji: "🔗" },
    { name: "Studi Banding", description: "Kunjungan antar organisasi sejenis untuk saling bertukar informasi dan wawasan.", emoji: "🚌" },
    { name: "Come To Know IM", description: "Pengenalan dan rekrutmen anggota IPB Mengajar melalui expo Agrisymphony.", emoji: "👋" },
  ],
  ENSHIP: [
    { name: "IM Talks", description: "Program peningkatkan softskill dan pengetahuan remaja terkait isu pendidikan.", emoji: "🎤" },
    { name: "IM Store", description: "Penghimpunan dana organisasi melalui penjualan merchandise resmi IPB Mengajar.", emoji: "🛍️" },
    { name: "Sahabat Diraya", description: "Program donasi rutin berkelanjutan dari pihak umum yang menjadi donatur tetap.", emoji: "💡" },
    { name: "Sponsorship & Partnership", description: "Pencarian dana operasional melalui kolaborasi dengan berbagai mitra internal dan eksternal.", emoji: "🤝" },
  ],
  MID: [
    { name: "IM Media", description: "Publikasi artikel, pengelolaan media sosial, serta dokumentasi visual program kerja.", emoji: "📰" },
    { name: "IM Quiz", description: "Kuis interaktif di medsos untuk meramaikan hari-hari besar pendidikan.", emoji: "🧩" },
    { name: "IM Journal", description: "Laporan kegiatan tengah dan akhir tahun untuk transparansi serta rujukan evaluasi.", emoji: "📔" },
  ],
};
