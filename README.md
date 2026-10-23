<div align="center">
  <img src="public/logo-ipb-mengajar.webp" alt="Logo IPB Mengajar" width="110" />
  <h1>Website IPB Mengajar</h1>
  <p>Website resmi IPB Mengajar • <strong><a href="https://ipbmengajar.web.id">ipbmengajar.web.id</a></strong></p>
  <p>⚠️ <em>Catatan Domain: Sewa <strong>ipbmengajar.web.id</strong> habis <strong>8 Juni 2027</strong>. Info cara renew / ganti domain ada di bawah ya!</em></p>
</div>

---

## 👋 Halo, Pengurus Kabinet Selanjutnya!

Website ini adalah karya sekaligus **warisan dari tim MID (Media, Informasi, dan Desain) Kabinet Arkatara**. Kita dedikasikan buat mempermudah publikasi dan estafet kepengurusan IPB Mengajar ke depannya. 

Tenang aja, kalian nggak perlu pusing mikirin kodingan dari nol atau ngutak-atik struktur yang rumit. Soalnya udah kita buat xixixi, tinggal kalian redesign kalo mau! 💅

*(Oiya, maaf ya aku ngetik README ini dibantuin AI soalnya mager wkwk, tapi tenang isinya beneran valid dan udah dicek kok!)*

Semua sistem di web ini udah dirancang **modular dan berbasis data (JSON)**. Jadi buat kebutuhan rutin sehari-hari kayak:
- Nambahin berita / dokumentasi kegiatan
- Ganti Best Staff Quarter
- Update susunan nama, jabatan, dan foto pengurus baru
- Nambah agenda & info proker

Kalian cukup **edit file JSON di folder `src/data/` atau `src/lib/data/`**, terus cemplungin fotonya ke folder `public/`. Beres deh, tanpa perlu pusing ngoding komponen dari nol!

Panduan lengkapnya ada di bawah, dibaca santai yaa!

---

## ⚠️ PENTING: Masa Aktif Domain `ipbmengajar.web.id` & Solusi Renew!

> **Catetan penting soal domain:**  
> Domain custom **`ipbmengajar.web.id`** ini kemarin dibeli di provider **DomaiNesia** buat durasi **1 tahun**, dan masa aktifnya bakal **habis tanggal 8 Juni 2027 (08/06/2027)**. Biaya perpanjangnya murah banget kok, cuma sekitar **Rp 55.000 / tahun**.

Nah, buat kabinet selanjutnya kalau pas udah mau habis, opsinya ada 3:

1. **Mau tetep pake domain ini & mau di-renew? (Rekomendasi)**  
   Tinggal DM Instagram aku ke 👉 **[@fiavnz](https://instagram.com/fiavnz)** yaa! Nanti kalian tinggal transfer biayanya (~Rp 55rb), biar langsung aku bantu klik renew dan bayarin lewat akun DomaiNesia-ku.
2. **Mau beli domain baru sendiri?**  
   Bisa banget! Kalian bebas beli domain baru di mana aja (di DomaiNesia, Niagahoster, atau provider lain). Terus tinggal hubungin ke Vercel (buka menu *Project Settings ➔ Domains ➔ Add Domain*, lalu arahkan DNS CNAME-nya).
3. **Kalo nggak mau diperpanjang / nggak beli domain baru?**  
   Webnya tetep aman dan nggak bakal hilang kok! Webnya bakal otomatis tetap bisa dibuka lewat domain gratisan bawaan Vercel (misal: `*.vercel.app`).

---

## 💻 Tech Stack yang Dipake

Biar kalian nggak penasaran jeroan web ini pake apa aja:
- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) (enteng & cepet bgt pas run lokal)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Maskot 3D Owlia**: [@google/model-viewer](https://modelviewer.dev/) (burung hantu 3D yang bisa diputer-puter)
- **Form Kontak**: [EmailJS](https://www.emailjs.com/) (pesan dari web langsung masuk email)
- **Hosting**: [Vercel](https://vercel.com/) (auto deploy pas push ke branch `main`)

---

## 🚀 Cara Jalanin di Laptop

Pastiin di laptop kalian udah kepasang:
1. **Node.js** (versi 18 atau 20 ke atas ya).
2. **Git**.

### Caranya gampang:
1. **Clone repo ini:**
   ```bash
   git clone https://github.com/dounfi/IM-Arkatara.git
   cd IM-Arkatara
   ```
2. **Install semua dependensi:**
   ```bash
   npm install
   ```
3. **Setup file `.env`:**  
   Copy file `.env.example` terus rename jadi `.env`. Isi kunci EmailJS kalo mau ngetes form kontak di lokal (tapi kalau cuma mau update konten/berita, dikosongin dulu juga web tetep aman & jalan normal kok).
4. **Jalanin server lokal:**
   ```bash
   npm run dev
   ```
   Tinggal klik link `http://localhost:8080` yang muncul di terminal.
5. **Cek build:**
   ```bash
   npm run build
   ```
   Ini buat ngecek ada error atau enggak sebelum kalian push ke GitHub.

---

## 📁 Peta Folder (Biar Gak Bingung Nyasar)

Nih contekannya, kalian cuma perlu fokus ke folder-folder ini aja:

```text
IM-Arkatara/
├── public/                 # Tempat naruh file aset (foto, video, 3D)
│   ├── assets/             # Foto berita, poster best staff, banner
│   ├── images/             # Gambar umum, foto tim divisi, & maskot 3D
│   │   ├── owlia3dfix.glb  # File 3D burung Owlia
│   │   └── team/           # Foto-foto pengurus per divisi & BPH
│   └── company_profile.mp4 # Video company profile
│
├── src/
│   ├── data/               # 📌 INI YANG PALING SERING DIEDIT (File JSON)
│   │   ├── news.json       # Berita & dokumentasi kegiatan
│   │   ├── staff.json      # Best staff tiap quarter
│   │   ├── proker.json     # Info proker tiap divisi
│   │   └── agenda.json     # Jadwal kegiatan / kalender
│   │
│   ├── lib/data/
│   │   └── team.ts         # 📌 Data nama, jabatan, & foto pengurus kabinet
│   │
│   ├── pages/              # Halaman-halaman web
│   └── components/         # Komponen UI (Navbar, Footer, Hero, dll)
```

---

## 📌 Cara Update Konten (Sering Banget Bakal Kalian Pake)

### 🚨 PLIS BANGET: Jangan Lupa Kompres Foto ke WebP!
Jangan pernah upload foto mentahan langsung dari kamera HP/DSLR yang ukurannya 3MB - 10MB ya wkwk! Webnya nanti nangis lemot bgt dibuka kasihan yang akses pake kuota.

- **Wajib convert ke `.webp`**.
- **Ukuran file**: Usahain di bawah **150 KB** (buat banner gede maks 300 KB).
- **Website kompres gratis**: Buka [squoosh.app](https://squoosh.app/) atau [tinypng.com](https://tinypng.com/). Upload foto ➔ pilih format WebP ➔ set kualitas ~75% ➔ download.
- **Nama file**: Jangan pake spasi, lebih aman pake strip, contoh: `kegiatan-agsn-2026.webp`.

---

### 1. Nambah Berita Kegiatan Baru
File: `src/data/news.json`

1. Siapin foto kegiatan yang udah di-convert ke `.webp` dan dikompres.
2. Masukin fotonya ke `public/assets/nama-foto-kalian.webp`.
3. Buka `src/data/news.json`, terus tambahin data paling atas:
   ```json
   {
     "id": 11,
     "kategori": "PDP",
     "tanggal": "24 OKTOBER 2026",
     "judul": "Judul Kegiatan atau Proker",
     "deskripsi": "Ringkasan 1-2 kalimat buat preview kartu berita.",
     "file_gambar": "/assets/nama-foto-kalian.webp",
     "konten": [
       "Paragraf 1: cerita latar belakang kegiatannya...",
       "Paragraf 2: keseruan acaranya...",
       "Paragraf 3: penutup dan harapan ke depan..."
     ]
   }
   ```
   *Kategori yang udah ada filternya:* `"PDP"`, `"PSDM"`, `"Hubeks"`, `"MID"`, `"Enship"`, atau `"Mega Proker"`.

---

### 2. Ganti Best Staff Quarter
File: `src/data/staff.json`

1. Siapin 5 poster Best Staff (rasio portrait 3:4, udah format `.webp`).
2. Masukin ke `public/assets/`, misalnya `staff terbaik 1.webp` sampe `staff terbaik 5.webp`.
3. Buka `src/data/staff.json`, tinggal edit nama, divisi, sama periodenya:
   ```json
   {
     "id": 1,
     "nama": "Nama Staf Keren",
     "divisi": "PDP",
     "bulan": "Quarter 1",
     "file_gambar": "/assets/staff terbaik 1.webp"
   }
   ```
   Carousel 3D di beranda bakal otomatis berubah sendiri!

---

### 3. Ganti Struktur & Foto Kabinet Baru
File: `src/lib/data/team.ts`

Kalo udah ganti periode kepengurusan:
1. Masukin foto-foto pengurus baru ke folder `public/images/team/` (udah ada folder `bph/`, `manager/`, dan `Divisi/`).
2. Buka `src/lib/data/team.ts`.
3. Tinggal edit aja array:
   - `bph`: BPH (Direktur, Wadir, Sekre, Benda).
   - `managers`: Manajer per divisi.
   - `staffByDivision`: Nama-nama staf per divisi.
4. Ganti nama, jabatan, sama path fotonya.

---

### 4. Maskot 3D Owlia & Video Profil
- **Maskot 3D (`public/images/owlia3dfix.glb`)**: Maskot burung Owlia ini udah kita kompres pake Draco (cuma ~590 KB). Kalo mau ganti model 3D baru, jangan lupa dikompres dulu ya biar gak berat.
- **Video Profile (`public/company_profile.mp4`)**: Udah dipasang sistem lazy-load (baru dimuat pas discroll). Kalo mau ganti video profil kabinet kalian, usahain file-nya < 15 MB atau bisa juga di-embed dari YouTube biar enteng.

---

## 🚢 Cara Deploy ke Web (Biar Langsung Online)

Website ini udah kita konekin ke **Vercel**:
1. Tiap kalian selesai edit dan tes di lokal, tinggal commit terus push ke branch `main`:
   ```bash
   git add .
   git commit -m "Update konten baru"
   git push origin main
   ```
2. Vercel bakal otomatis nge-build ulang dan langsung nampilin hasilnya di:  
   👉 **[ipbmengajar.web.id](https://ipbmengajar.web.id)**
3. Tunggu 1–2 menit, langsung live di internet! ✨

---

## 💡 Tips Santuy
- **Biasain `npm run build` dulu:** Sebelum push ke GitHub, tes build dulu di laptop kalian. Biar kalo ada salah ketik ketahuan duluan sebelum webnya error pas di-deploy.
- **Catet tanggal expired domain:** 08 Juni 2027 ya, chat ke IG [@fiavnz](https://instagram.com/fiavnz) kalau mau diperpanjang!
- Kalo bingung atau ada kendala kodingan, colek aja kita pengurus sebelumnya, santai aja xixixi!

Semangat melanjutkan perjuangan di IPB Mengajar! Bikin kabinet kalian makin menyala dan berdampak luas! 🚀💛

---

<div align="center">
  <p>Diwariskan dengan bangga oleh <strong>Divisi MID — Kabinet Arkatara</strong> 🦉💛</p>
  <p><em>"Langkah Kecil Untuk Negeri"</em></p>
</div>