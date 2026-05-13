import React, { createContext, useContext, ReactNode } from 'react';

// ─── Teks statis Bahasa Indonesia (hardcoded, bilingual dihapus) ───────────
const strings: Record<string, string> = {
  // Navbar
  nav_home: "Beranda",
  nav_about: "Tentang Kami",
  nav_activity: "Aktivitas",
  nav_activity_media: "Media Partner",
  nav_activity_news: "Berita & Kabar",
  nav_activity_proker: "Program Kerja",
  nav_contact: "Kontak Kami",

  // Hero
  hero_title: "Langkah kecil, untuk Negeri.",
  hero_subtitle: "Penuh inovasi dan kolaborasi.",
  hero_desc: "Ketika setiap langkah terasa berarti, setiap proses meninggalkan jejak bermakna bagi generasi penerus bangsa.",
  hero_cta_join: "Bergabung Sekarang",
  hero_cta_about: "Tentang Kami",

  // About
  about_eyebrow: "Tentang Kami",
  about_header_title: "Mengenal",
  about_header_accent: "IPB Mengajar",
  about_header_desc: "Dari visi kami hingga orang-orang yang menggerakkannya, semua ada di sini.",
  about_visimisi_badge: "Visi & Misi",
  about_visi_label: "Visi Kami",
  about_visi_text: "Menjadi penggerak yang berperan aktif dalam pendidikan mengajar kolaboratif, dan berdampak nyata melalui pengembangan internal yang kuat dengan usaha pemerataan kegiatan berkelanjutan.",
  about_misi_heading: "Misi",
  about_misi_heading_accent: "Kami",
  about_misi_subtext: "Empat langkah konkret yang menjadi kompas setiap program IPB Mengajar.",
  about_misi_1: "Membangun IPB Mengajar sebagai jembatan untuk mewujudkan pendidikan yang inklusif dan merata melalui kolaborasi dan inovasi.",
  about_misi_2: "Menguatkan langkah keberlanjutan dalam setiap kegiatan yang dilakukan.",
  about_misi_3: "Menumbuhkan rasa kepedulian terhadap isu pendidikan melalui saluran media kreatif.",
  about_misi_4: "Menciptakan rasa kekeluargaan dalam lingkungan internal IPB Mengajar.",
  about_filosofi_badge: "Filosofi Logo",
  about_filosofi_heading: "Mengenal",
  about_filosofi_heading_accent: "\"Owlia\"",
  about_owlia_badge: "Owlia, Sang Burung Bijak",
  about_owlia_heading: "Bijak Memandang, Hangat Mengajar.",
  about_owlia_desc: "Lambang IPB Mengajar memiliki makna mendalam yang mewakili identitas, komitmen, dan sinergi kita bersama.",
  about_el_owl_title: "Burung Hantu 'Owlia'",
  about_el_owl_desc: "Melambangkan kebijaksanaan dalam bertindak dan mengambil keputusan.",
  about_el_glasses_title: "Kacamata",
  about_el_glasses_desc: "Melambangkan kerja keras, kerja ikhlas, dan kerja cerdas manajemen IPB Mengajar dalam mengabdi.",
  about_el_book_title: "Buku Terbuka",
  about_el_book_desc: "Buku adalah jendela dunia yang mengantarkan anak-anak untuk melihat luasnya dunia.",
  about_el_logo_title: "Logo IPB",
  about_el_logo_desc: "Menandakan IPB Mengajar adalah lembaga struktural resmi, dan dua logo berarti keseimbangan otak kanan & kiri.",
  about_el_toga_title: "Toga",
  about_el_toga_desc: "Simbol bahwa manajemen IPB Mengajar berasal dari kalangan akademisi yang berintelektual tinggi.",
  about_el_colors_title: "Warna (Merah, Biru, Putih, Abu-abu)",
  about_el_colors_desc: "Melambangkan empat sinergisitas pendidikan: anak, guru, masyarakat, dan pemerintah.",
  about_el_tagline_title: "Tagline Melengkung",
  about_el_tagline_desc: "Menandakan perjuangan untuk mengantarkan anak-anak Indonesia dari bawah mencapai masa depan cerah.",
  about_org_badge: "Organogram",
  about_org_heading: "Struktur",
  about_org_heading_accent: "Kepengurusan",
  about_org_bph: "Badan Pengurus Harian",
  about_org_manager_heading: "Manager",
  about_org_manager_accent: "Divisi",
  about_org_manager_desc: "Lima nahkoda divisi yang memastikan setiap program berjalan baik dan penuh makna.",

  // General
  loading: "Memuat...",
  read_more: "Baca Selengkapnya",
  see_all: "Semua",
};

// ─── Context ──────────────────────────────────────────────────────────────
interface LanguageContextType {
  language: 'ID';
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'ID',
  t: (key) => strings[key] ?? key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => (
  <LanguageContext.Provider value={{ language: 'ID', t: (key) => strings[key] ?? key }}>
    {children}
  </LanguageContext.Provider>
);

export const useLanguage = () => useContext(LanguageContext);
