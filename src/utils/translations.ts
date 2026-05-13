export type Language = 'ID' | 'EN';

export const translations: Record<Language, Record<string, string>> = {
  ID: {
    // Nav
    nav_home: "Beranda",
    nav_about: "Tentang Kami",
    nav_activity: "Aktivitas",
    nav_activity_media: "Media Partner",
    nav_activity_news: "Berita & Kabar",
    nav_activity_proker: "Program Kerja",
    nav_contact: "Kontak Kami",

    // General
    loading: "Memuat data...",
    read_more: "Baca Selengkapnya",
    see_all: "Semua",
    see_all_caps: "LIHAT SEMUA",
    back_to_home: "Kembali ke Beranda",
    empty_data: "Belum ada data tersedia.",
    admin_mode_disabled: "Mode Admin Dinonaktifkan",
    login_disabled: "Akses Login Ditutup",

    // Home / Hero
    hero_title: "Langkah kecil, untuk Negeri.",
    hero_subtitle: "Penuh inovasi dan kolaborasi.",
    hero_desc: "Ketika setiap langkah terasa berarti, setiap proses meninggalkan jejak bermakna bagi generasi penerus bangsa.",
    hero_cta_join: "Bergabung Sekarang",
    hero_cta_about: "Tentang Kami",

    // Company Profile
    profile_badge: "Profil Organisasi",
    profile_title: "Bertumbuh, Berdampak, Bersama.",
    profile_desc: "Saksikan perjalanan IPB Mengajar dari sebuah ide kecil hingga menjadi gerakan mahasiswa yang menjangkau desa-desa di seluruh Indonesia.",

    // Events / Agenda
    agenda_badge: "Kalender Kegiatan",
    agenda_title_1: "Agenda",
    agenda_title_2: "Mendatang",
    agenda_desc: "Ikuti setiap langkah perjalanan bersama IPB Mengajar, dari kegiatan pengabdian hingga event internal.",
    agenda_empty: "Belum ada agenda yang tersedia.",
    agenda_loading: "Memuat agenda...",

    // Best Staff
    staff_badge: "Apresiasi",
    staff_title: "Best Staff Quarter",
    staff_desc: "Merayakan dedikasi terbaik anggota IPB Mengajar setiap triwulan.",

    // Media Partner
    media_badge: "Aktivitas",
    media_title_1: "Media",
    media_title_2: "Partner",
    media_desc: "Kolaborasi strategis IPB Mengajar bersama berbagai pihak untuk memperluas kebermanfaatan.",
    media_gallery: "Galeri",
    media_gallery_accent: "Poster",
    media_join_title: "Tertarik menjadi",
    media_join_accent: "Media Partner",
    media_join_desc: "Mari berkolaborasi bersama IPB Mengajar untuk menyebarkan semangat dan manfaat pendidikan ke seluruh Indonesia. Silakan hubungi tim kami untuk informasi lebih lanjut.",
    media_join_btn: "Daftar Media Partner",

    // Berita
    news_eyebrow: "Aktivitas",
    news_title_1: "Berita &",
    news_title_2: "Kabar",
    news_desc: "Ikuti terus perkembangan, kegiatan, dan liputan khusus seputar aksi IPB Mengajar dalam memajukan pendidikan.",
    news_gallery: "Kabar",
    news_gallery_accent: "Terbaru",

    // Kontak
    contact_eyebrow: "Kontak",
    contact_title_1: "Hubungi",
    contact_title_2: "Kami",
    contact_desc: "Punya pertanyaan, ide kolaborasi, atau ingin bergabung? Kami senang mendengar dari Anda.",
    contact_form_title: "Kirim Pesan",
    contact_form_desc: "Isi form di bawah, tim kami akan membalas dalam 1–3 hari kerja.",
    contact_name: "Nama",
    contact_email: "Email",
    contact_subject: "Subjek",
    contact_message: "Pesan",
    contact_send: "Kirim Pesan",
    contact_sending: "Mengirim...",

    // Proker
    proker_eyebrow: "Aktivitas",
    proker_title_1: "Program",
    proker_title_2: "Kerja",
    proker_desc: "Menyelaraskan langkah melalui program inovatif yang berkelanjutan untuk mewujudkan pendidikan yang inklusif dan merata.",
    proker_divisi_badge: "BPH & Manajemen",
    proker_divisi_title: "Program",
    proker_divisi_accent: "Divisi",
    
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
    about_org_badge: "Organogram",
    about_org_heading: "Struktur",
    about_org_heading_accent: "Kepengurusan",
    about_org_bph: "Badan Pengurus Harian",
    about_org_manager_heading: "Manager",
    about_org_manager_accent: "Divisi",
    about_org_manager_desc: "Lima nahkoda divisi yang memastikan setiap program berjalan baik dan penuh makna.",

    // Footer
    footer_tagline: "Langkah kecil untuk negeri.",
    footer_links: "Tautan",
    footer_social: "Media Sosial",
    footer_rights: "Hak cipta dilindungi."
  },

  EN: {
    // Nav
    nav_home: "Home",
    nav_about: "About Us",
    nav_activity: "Activities",
    nav_activity_media: "Media Partners",
    nav_activity_news: "News & Updates",
    nav_activity_proker: "Work Programs",
    nav_contact: "Contact Us",

    // General
    loading: "Loading data...",
    read_more: "Read More",
    see_all: "All",
    see_all_caps: "SEE ALL",
    back_to_home: "Back to Home",
    empty_data: "No data available yet.",
    admin_mode_disabled: "Admin Mode Disabled",
    login_disabled: "Login Access Closed",

    // Home / Hero
    hero_title: "Small steps, for the Nation.",
    hero_subtitle: "Full of innovation and collaboration.",
    hero_desc: "When every step feels meaningful, every process leaves a significant mark for the nation's next generation.",
    hero_cta_join: "Join Now",
    hero_cta_about: "About Us",

    // Company Profile
    profile_badge: "Organization Profile",
    profile_title: "Growing, Impacting, Together.",
    profile_desc: "Witness the journey of IPB Mengajar from a small idea to a student movement that reaches villages across Indonesia.",

    // Events / Agenda
    agenda_badge: "Event Calendar",
    agenda_title_1: "Upcoming",
    agenda_title_2: "Agenda",
    agenda_desc: "Follow every step of the journey with IPB Mengajar, from community service to internal events.",
    agenda_empty: "No upcoming agenda yet.",
    agenda_loading: "Loading agenda...",

    // Best Staff
    staff_badge: "Appreciation",
    staff_title: "Best Staff Quarter",
    staff_desc: "Celebrating the best dedication of IPB Mengajar members every quarter.",

    // Media Partner
    media_badge: "Activities",
    media_title_1: "Media",
    media_title_2: "Partners",
    media_desc: "Strategic collaboration of IPB Mengajar with various parties to expand usefulness.",
    media_gallery: "Media Partner",
    media_gallery_accent: "Posters",
    media_join_title: "Interested in becoming a",
    media_join_accent: "Media Partner",
    media_join_desc: "Let's collaborate with IPB Mengajar to spread the spirit and benefits of education throughout Indonesia. Please contact our team for more information.",
    media_join_btn: "Register as Media Partner",

    // Berita
    news_eyebrow: "Activities",
    news_title_1: "News &",
    news_title_2: "Updates",
    news_desc: "Keep up with the latest developments, activities, and special coverage of IPB Mengajar's actions in advancing education.",
    news_gallery: "Latest",
    news_gallery_accent: "News",

    // Kontak
    contact_eyebrow: "Contact",
    contact_title_1: "Contact",
    contact_title_2: "Us",
    contact_desc: "Have a question, collaboration idea, or want to join? We'd love to hear from you.",
    contact_form_title: "Send Message",
    contact_form_desc: "Fill out the form below, our team will reply within 1-3 business days.",
    contact_name: "Name",
    contact_email: "Email",
    contact_subject: "Subject",
    contact_message: "Message",
    contact_send: "Send Message",
    contact_sending: "Sending...",

    // Proker
    proker_eyebrow: "Activities",
    proker_title_1: "Work",
    proker_title_2: "Programs",
    proker_desc: "Aligning steps through sustainable innovative programs to realize inclusive and equitable education.",
    proker_divisi_badge: "BPH & Management",
    proker_divisi_title: "Division",
    proker_divisi_accent: "Programs",

    // About
    about_eyebrow: "About Us",
    about_header_title: "Discover",
    about_header_accent: "IPB Mengajar",
    about_header_desc: "From our vision to the people who drive it, everything is here.",
    about_visimisi_badge: "Vision & Mission",
    about_visi_label: "Our Vision",
    about_visi_text: "To be an active driver in collaborative education, making a real impact through strong internal development and sustainable, equitable programs.",
    about_misi_heading: "Our",
    about_misi_heading_accent: "Mission",
    about_misi_subtext: "Four concrete steps that guide every IPB Mengajar program.",
    about_misi_1: "To build IPB Mengajar as a bridge for inclusive, equitable education through collaboration and innovation.",
    about_misi_2: "To strengthen sustainability in every activity undertaken.",
    about_misi_3: "To cultivate awareness of education issues through creative media channels.",
    about_misi_4: "To foster a sense of kinship within IPB Mengajar's internal community.",
    about_filosofi_badge: "Logo Philosophy",
    about_filosofi_heading: "Meet",
    about_filosofi_heading_accent: "\"Owlia\"",
    about_owlia_badge: "Owlia, The Wise Owl",
    about_owlia_heading: "Wise in Vision, Warm in Teaching.",
    about_owlia_desc: "The IPB Mengajar emblem carries deep meaning, representing our collective identity, commitment, and synergy.",
    about_org_badge: "Organogram",
    about_org_heading: "Organizational",
    about_org_heading_accent: "Structure",
    about_org_bph: "Executive Board",
    about_org_manager_heading: "Division",
    about_org_manager_accent: "Managers",
    about_org_manager_desc: "Five division leaders ensuring every program runs smoothly and meaningfully.",

    // Footer
    footer_tagline: "Small steps for the nation.",
    footer_links: "Links",
    footer_social: "Social Media",
    footer_rights: "All rights reserved."
  }
};
