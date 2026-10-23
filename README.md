<div align="center">
  <img src="public/logo-ipb-mengajar.webp" alt="Logo IPB Mengajar" width="110" />
  <h1>Website IPB Mengajar</h1>
  <p>Website resmi IPB Mengajar • <strong><a href="https://ipbmengajar.web.id">ipbmengajar.web.id</a></strong></p>
</div>

---

## 👋 Halo, Pengurus Kabinet Selanjutnya!

Website ini adalah karya sekaligus **warisan dari tim MID (Media, Informasi, dan Dokumentasi) Kabinet Arkatara**. Kami dedikasikan untuk mempermudah publikasi dan kepengurusan IPB Mengajar ke depannya. Tenang aja, kalian nggak perlu pusing mikirin kodingan dari nol atau ngutak-atik struktur yang rumit. 

Sistem di web ini udah dirancang **modular dan berbasis data (JSON)**. Jadi buat kebutuhan rutin sehari-hari kayak:
- Nambahin berita / dokumentasi kegiatan
- Ganti Best Staff Quarter
- Update susunan nama dan foto pengurus kabinet baru
- Nambah agenda & info proker

Kalian cukup **edit file data di folder `src/data/` atau `src/lib/data/`**, terus masukin fotonya ke folder `public/`. Selesai!

Panduan lengkap dan praktisnya ada di bawah, dibaca santai aja yaa.

---

## 💻 Tech Stack yang Dipake

Biar kalian ada gambaran web ini dibangun pake apa aja:
- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) (ringan dan super cepet pas di-run)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi & Interaksi**: [Framer Motion](https://www.framer.com/motion/)
- **Maskot 3D Owlia**: [@google/model-viewer](https://modelviewer.dev/) (animasi 3D interaktif burung Owlia)
- **Form Kontak**: [EmailJS](https://www.emailjs.com/) (pesan dari form kontak langsung diteruskan ke email)
- **Hosting / Deploy**: [Vercel](https://vercel.com/) (otomatis build setiap kali ada push ke branch `main`)

---

## 🚀 Cara Menjalankan di Laptop / Komputer

Sebelum mulai, pastiin di laptop kalian udah terinstall:
1. **Node.js** (rekomendasi versi 18 atau 20 ke atas).
2. **Git**.

### Langkah-langkahnya:
1. **Clone repo ini ke laptop:**
   ```bash
   git clone https://github.com/dounfi/IM-Arkatara.git
   cd IM-Arkatara
   ```
2. **Install semua package:**
   ```bash
   npm install
   ```
3. **Setup environment (`.env`):**  
   Copy file `.env.example` lalu rename jadi `.env`. Isi credential EmailJS kalau mau ngetes form kontak di lokal (kalau belum ada atau cuma mau edit konten, dikosongkan dulu juga web tetep bisa jalan normal).
4. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka browser di alamat `http://localhost:8080`.
5. **Cek build:**
   ```bash
   npm run build
   ```
   Perintah ini dipakai untuk memastikan tidak ada error kode sebelum kalian push ke GitHub.

---

## 📁 Peta Folder (Biar Nggak Nyasar)

Ini bagian-bagian penting yang perlu kalian tahu:

```text
IM-Arkatara/
├── public/                 # File statis (gambar, video, 3D) yang langsung diakses via URL
│   ├── assets/             # Foto kegiatan berita, poster best staff, banner
│   ├── images/             # Asset gambar umum, tim divisi, & maskot 3D
│   │   ├── owlia3dfix.glb  # Model 3D maskot burung Owlia
│   │   └── team/           # Foto pengurus per divisi & BPH
│   └── company_profile.mp4 # Video company profile
│
├── src/
│   ├── data/               # 📌 PALING SERING DIEDIT (Pusat data JSON)
│   │   ├── news.json       # Berita & dokumentasi kegiatan
│   │   ├── staff.json      # Best staff tiap quarter
│   │   ├── proker.json     # Info proker tiap divisi
│   │   └── agenda.json     # Kalender / jadwal kegiatan
│   │
│   ├── lib/data/
│   │   └── team.ts         # 📌 Data nama, jabatan, & foto pengurus kabinet
│   │
│   ├── pages/              # Halaman web (Home, Berita, Divisi, Tentang Kami, dll)
│   └── components/         # Komponen UI (Navbar, Footer, Hero, Carousel, dll)
```

---

## 📌 Panduan Praktis Update Konten

### 🚨 Paling Penting: Selalu Kompres Gambar ke WebP!
Tolong banget **jangan upload foto mentah langsung dari kamera HP atau kamera DSLR** (yang ukurannya 3MB - 10MB per foto). Website bakal jadi berat banget pas dibuka dan kasihan pengunjung yang buka pake kuota.

- **Format Wajib**: Convert dulu ke format `.webp`.
- **Ukuran File**: Usahakan di bawah **150 KB** (maksimal 300 KB buat banner lebar).
- **Tools Gratis & Cepet**: Pake [squoosh.app](https://squoosh.app/) atau [tinypng.com](https://tinypng.com/). Cukup upload fotonya, pilih format WebP, atur kualitas sekitar 75–80%, lalu download.
- **Nama File**: Pakai huruf kecil dan tanda minus, jangan pakai spasi (contoh: `kegiatan-agsn-2026.webp`).

---

### 1. Nambah Berita / Dokumentasi Proker
File: `src/data/news.json`

1. Siapkan foto dokumentasi kegiatan (sudah format `.webp` dan dikompres).
2. Simpan fotonya di folder `public/assets/nama-foto.webp`.
3. Buka `src/data/news.json`, lalu tambahkan data berita baru di paling atas array:
   ```json
   {
     "id": 11,
     "kategori": "PDP",
     "tanggal": "24 OKTOBER 2026",
     "judul": "Judul Kegiatan atau Proker",
     "deskripsi": "Ringkasan 1-2 kalimat untuk preview di kartu berita.",
     "file_gambar": "/assets/nama-foto.webp",
     "konten": [
       "Paragraf pertama: cerita latar belakang dan tujuan kegiatan...",
       "Paragraf kedua: keseruan selama acara berlangsung...",
       "Paragraf ketiga: output atau harapan ke depannya..."
     ]
   }
   ```
   *Pilihan kategori yang sudah terintegrasi dengan filter:* `"PDP"`, `"PSDM"`, `"Hubeks"`, `"MID"`, `"Enship"`, atau `"Mega Proker"`.

---

### 2. Update Best Staff Quarter
File: `src/data/staff.json`

1. Siapkan 5 poster Best Staff (rasio portrait 3:4, format `.webp`).
2. Taruh fotonya di `public/assets/`, misalnya `staff terbaik 1.webp` sampai `staff terbaik 5.webp`.
3. Buka `src/data/staff.json`, lalu sesuaikan nama staf, divisi, dan periodenya:
   ```json
   {
     "id": 1,
     "nama": "Nama Lengkap Staf",
     "divisi": "PDP",
     "bulan": "Quarter 1",
     "file_gambar": "/assets/staff terbaik 1.webp"
   }
   ```
   Tampilan carousel 3D di beranda bakal otomatis mengupdate kartu tersebut.

---

### 3. Ganti Struktur & Foto Pengurus Kabinet Baru
File: `src/lib/data/team.ts`

Pas pergantian kabinet:
1. Masukkan foto-foto pengurus baru ke `public/images/team/` (sudah ada subfolder `bph/`, `manager/`, dan `Divisi/`).
2. Buka `src/lib/data/team.ts`.
3. Kalian tinggal update data di array:
   - `bph`: Direktur, Wakil Direktur, Sekretaris, Bendahara.
   - `managers`: Manajer masing-masing divisi.
   - `staffByDivision`: Seluruh anggota staf per divisi.
4. Ganti nama, program studi/angkatan, dan path fotonya.

---

### 4. Maskot 3D Owlia & Video Profil
- **Maskot 3D (`public/images/owlia3dfix.glb`)**: Maskot burung Owlia ini sudah dioptimasi kompresi Draco (ukurannya cuma ~590 KB) dan jalan via Google `<model-viewer>`. Kalau nanti kabinet baru mau ganti 3D, jangan lupa dikompres dulu ya biar gak berat.
- **Video Profile (`public/company_profile.mp4`)**: Komponen video di beranda sudah di-set *lazy load* (hanya di-download saat discroll). Kalau mau ganti video profil, usahakan ukuran file di bawah 15 MB atau bisa juga di-embed dari YouTube.

---

## 🚢 Cara Deploy ke Web (Biar Langsung Online)

Website ini sudah tersambung langsung ke **Vercel**:
1. Setelah kalian selesai edit dan tes di lokal, cukup commit dan push ke branch `main`:
   ```bash
   git add .
   git commit -m "Update pengurus dan berita baru"
   git push origin main
   ```
2. Vercel akan otomatis mendeteksi perubahan, nge-build ulang, dan langsung mempublikasikan hasilnya ke domain resmi:  
   👉 **[ipbmengajar.web.id](https://ipbmengajar.web.id)**
3. Tunggu sekitar 1–2 menit, perubahan sudah langsung live di internet!

---

## 💡 Tips Santai
- **Cek build dulu sebelum push:** Selalu sempatkan jalankan `npm run build` di terminal laptop. Kalau ada salah ketik atau file yang lupa ter-import, bakal ketahuan sebelum terlanjur di-push.
- Kalau ada bagian yang bikin bingung atau butuh bantuan teknis, jangan ragu kontak pengurus periode sebelumnya ya!

Semangat melanjutkan estafet perjuangan IPB Mengajar! Semoga websitenya terus bermanfaat dan makin kece! ✨

---

<div align="center">
  <p>Diwariskan dengan bangga oleh <strong>Divisi MID — Kabinet Arkatara</strong> 🦉💛</p>
  <p><em>"Langkah Kecil Untuk Negeri"</em></p>
</div>