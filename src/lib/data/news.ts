export type NewsCategory = "PDP" | "PSDM" | "Hubeks" | "MID" | "Enship" | "Mega Proker";

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  imgId: string;
  grad: string;
}

export const news: NewsItem[] = [
  {
    id: "open-recruitment",
    title: "Open Recruitment IPB Mengajar 2025",
    date: "12 Maret 2025",
    category: "Mega Proker",
    excerpt: "Bergabunglah bersama kami menjadi bagian dari gerakan pendidikan yang berdampak nyata di seluruh Indonesia.",
    imgId: "img-news-1",
    grad: "from-yellow-primary to-yellow-amber",
  },
  {
    id: "welcoming-party",
    title: "Welcoming Party IPB Mengajar 2025",
    date: "5 April 2025",
    category: "PDP",
    excerpt: "Sambutan hangat untuk anggota baru dengan rangkaian kegiatan yang penuh keakraban dan kebersamaan.",
    imgId: "img-news-2",
    grad: "from-muted to-accent",
  },
  {
    id: "im-gathering",
    title: "IM Gathering: Kebersamaan Satu Keluarga",
    date: "28 April 2025",
    category: "PSDM",
    excerpt: "Mengeratkan kembali ikatan keluarga IPB Mengajar lewat games, sharing session, dan refleksi tahun ini.",
    imgId: "img-news-3",
    grad: "from-blue-deep to-blue-light",
  },
  {
    id: "kolaborasi-eksternal",
    title: "Kolaborasi Eksternal Bersama Komunitas Daerah",
    date: "10 Mei 2025",
    category: "Hubeks",
    excerpt: "Membangun jejaring lintas komunitas pendidikan untuk dampak yang lebih luas dan berkelanjutan.",
    imgId: "img-news-4",
    grad: "from-yellow-amber to-primary",
  },
  {
    id: "temu-lentera",
    title: "Temu Lentera 2025: Nyalakan Asa, Sinarkan Negeri",
    date: "22 Juni 2025",
    category: "MID",
    excerpt: "Pertemuan tahunan dengan para penggerak komunitas pendidikan di Bogor dan sekitarnya.",
    imgId: "img-news-5",
    grad: "from-accent to-yellow-primary",
  },
  {
    id: "im-training",
    title: "IM Training: Bekal Mengajar yang Hangat",
    date: "14 Juli 2025",
    category: "Enship",
    excerpt: "Pelatihan internal pengembangan kapasitas relawan: pedagogi, kelas inklusif, hingga manajemen kelas.",
    imgId: "img-news-6",
    grad: "from-blue-light to-muted",
  },
  {
    id: "im-blinks",
    title: "IM-BLINKS: Bimbingan Lingkar Kampus Dimulai",
    date: "2 Agustus 2025",
    category: "Hubeks",
    excerpt: "Program bimbingan belajar gratis untuk anak-anak di sekitar kampus IPB Dramaga, Bogor.",
    imgId: "img-news-7",
    grad: "from-yellow-secondary to-yellow-amber",
  },
];
