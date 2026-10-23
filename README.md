<div align="center">
  <img src="public/logo-ipb-mengajar.webp" alt="Logo IPB Mengajar" width="115" />
  <h1>Website IPB Mengajar</h1>
  <p><strong>Platform Resmi Publikasi & Dokumentasi Kegiatan IPB Mengajar</strong></p>

  <p>
    <a href="https://ipbmengajar.web.id"><img src="https://img.shields.io/badge/Website_Resmi-ipbmengajar.web.id-0070F3?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Website" /></a>
    <a href="https://github.com/dounfi/IM-Arkatara"><img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
    <a href="https://instagram.com/fiavnz"><img src="https://img.shields.io/badge/PIC_MID-@fiavnz-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" /></a>
    <img src="https://img.shields.io/badge/Status-Live_%26_Active-2ea44f?style=for-the-badge&logo=vercel&logoColor=white" alt="Status" />
  </p>

  <p>⚠️ <em>Catatan Domain: Sewa <strong>ipbmengajar.web.id</strong> habis <strong>8 Juni 2027</strong>. Info cara renew / ganti domain ada di bawah ya!</em></p>
</div>

---

## 👋 Halo, Pengurus Kabinet Selanjutnya!

Website ini adalah karya sekaligus **warisan dari tim MID (Media, Informasi, dan Desain) Kabinet Arkatara**. Kita dedikasikan buat mempermudah publikasi dan estafet kepengurusan IPB Mengajar ke depannya. 

Tenang aja, kalian nggak perlu pusing mikirin kodingan dari nol atau ngutak-atik struktur yang rumit. Soalnya udah kita buat xixixi, tinggal kalian redesign kalo mau! 💅

*(Oiya, maaf ya aku ngetik README ini dibantuin AI soalnya mager wkwk, tapi tenang isinya beneran valid dan udah dicek kok!)*

Semua sistem di web ini udah dirancang **modular dan berbasis data (JSON)**. Jadi buat kebutuhan rutin sehari-hari kayak:
- 📰 Nambahin berita / dokumentasi kegiatan
- 🌟 Ganti Best Staff Quarter
- 👥 Update susunan nama, jabatan, dan foto pengurus baru
- 📅 Nambah agenda & info proker

Kalian cukup **edit file JSON di folder `src/data/` atau `src/lib/data/`**, terus cemplungin fotonya ke folder `public/`. Beres deh, tanpa perlu pusing ngoding komponen dari nol!

Panduan lengkapnya ada di bawah, dibaca santai yaa!

---

## ⚠️ PENTING: Masa Aktif Domain `ipbmengajar.web.id` & Solusi Renew!

> **Catetan penting soal domain:**  
> Domain custom **`ipbmengajar.web.id`** ini kemarin dibeli di provider **DomaiNesia** buat durasi **1 tahun**, dan masa aktifnya bakal **habis tanggal 8 Juni 2027 (08/06/2027)**. Biaya perpanjangnya cuma sekitar **Rp 55.000 / tahun**.

Nah, buat kabinet selanjutnya kalau pas udah mau habis, opsinya ada 3:

| Opsi | Pilihan Tindakan | Keterangan & Cara |
| :---: | :--- | :--- |
| **1** | **Mau tetep pake domain ini & mau di-renew? (Rekomendasi)** | Tinggal DM Instagram aku ke 👉 <a href="https://instagram.com/fiavnz"><img src="https://img.shields.io/badge/DM_Instagram-@fiavnz-E4405F?style=flat-square&logo=instagram&logoColor=white" valign="middle" /></a> yaa! Nanti kalian tinggal transfer biayanya (~Rp 55rb), biar langsung aku bantu klik renew dan bayarin lewat akun DomaiNesia-ku. |
| **2** | **Mau beli domain baru sendiri?** | Bisa banget! Kalian bebas beli domain baru di mana aja (di DomaiNesia, Niagahoster, dll), terus tinggal hubungin ke Vercel (buka menu *Project Settings ➔ Domains ➔ Add Domain*, lalu arahkan DNS CNAME-nya). |
| **3** | **Kalo nggak mau diperpanjang / nggak beli domain baru?** | Webnya tetep aman dan nggak bakal hilang kok! Webnya bakal otomatis tetap bisa dibuka lewat domain gratisan bawaan Vercel (misal: `*.vercel.app`). |

---

## 💻 Tech Stack yang Dipake

Biar kalian nggak penasaran jeroan web ini pake apa aja, nih teknologinya:

<p align="left">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" /></a>
  <a href="https://www.framer.com/motion/"><img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
</p>

| Bagian | Logo & Teknologi | Fungsi & Keterangan |
| :--- | :--- | :--- |
| **Framework** | <img src="https://skillicons.dev/icons?i=react,vite" height="24" alt="React & Vite" valign="middle" /> &nbsp; **React 18 + Vite 5** | Enteng, responsif, dan super cepet pas di-run lokal |
| **Bahasa** | <img src="https://skillicons.dev/icons?i=ts" height="24" alt="TypeScript" valign="middle" /> &nbsp; **TypeScript** | Bikin kodingan rapi dan mencegah salah ketik variabel |
| **Styling** | <img src="https://skillicons.dev/icons?i=tailwind" height="24" alt="Tailwind CSS" valign="middle" /> &nbsp; **Tailwind CSS** | Styling UI modern, serasi, dan gampang dikustom |
| **Animasi** | <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white" valign="middle" /> | Animasi transisi halus pas scroll, klik, dan buka halaman |
| **Maskot 3D** | <img src="https://img.shields.io/badge/%40google%2Fmodel--viewer-4285F4?style=flat-square&logo=google&logoColor=white" valign="middle" /> | Nampilin burung hantu Owlia 3D yang bisa diputer-puter interaktif |
| **Form Kontak** | <img src="https://img.shields.io/badge/EmailJS-FF7A00?style=flat-square&logo=mail.ru&logoColor=white" valign="middle" /> | Pesan dari pengunjung di web langsung diterusin ke email masuk |
| **Deploy & Hosting** | <img src="https://skillicons.dev/icons?i=vercel" height="24" alt="Vercel" valign="middle" /> &nbsp; **Vercel** | Auto deploy gratisan, begitu push ke `main` web langsung ke-update |

---

## 🚀 Cara Jalanin di Laptop

Pastiin di laptop kalian udah kepasang:
- <img src="https://skillicons.dev/icons?i=nodejs" height="18" valign="middle" /> **Node.js** (versi 18 atau 20 ke atas ya) • [Download Node.js](https://nodejs.org/)
- <img src="https://skillicons.dev/icons?i=git" height="18" valign="middle" /> **Git** • [Download Git](https://git-scm.com/)

### Langkah-langkahnya (Tinggal Ikuti Step):

| Step | Aksi | Perintah Terminal |
| :---: | :--- | :--- |
| ![Step 1](https://img.shields.io/badge/Step_1-Clone-0969da?style=flat-square) | Clone repo ini ke laptop kalian | `git clone https://github.com/dounfi/IM-Arkatara.git` <br> `cd IM-Arkatara` |
| ![Step 2](https://img.shields.io/badge/Step_2-Install-0969da?style=flat-square) | Install semua package & dependensi | `npm install` |
| ![Step 3](https://img.shields.io/badge/Step_3-Setup_.env-0969da?style=flat-square) | Copy file template konfigurasi | Copy `.env.example` lalu rename jadi `.env` |
| ![Step 4](https://img.shields.io/badge/Step_4-Jalanin-2ea44f?style=flat-square) | Nyalakan server development lokal | `npm run dev` <br> *(Buka browser di `http://localhost:8080`)* |
| ![Step 5](https://img.shields.io/badge/Step_5-Cek_Build-8957e5?style=flat-square) | Tes build sebelum di-push ke GitHub | `npm run build` |

---

## 📁 Peta Folder (Biar Gak Bingung Nyasar)

Nih contekannya, kalian cuma perlu fokus ke folder-folder ini aja:

```text
IM-Arkatara/
├── public/                 # 🖼️ Tempat naruh file aset (foto, video, 3D)
│   ├── assets/             # Foto berita, poster best staff, banner
│   ├── images/             # Gambar umum, foto tim divisi, & maskot 3D
│   │   ├── owlia3dfix.glb  # File 3D burung Owlia
│   │   └── team/           # Foto-foto pengurus per divisi & BPH
│   └── company_profile.mp4 # Video company profile
│
├── src/
│   ├── data/               # 🔥 PALING SERING DIEDIT (Pusat data JSON)
│   │   ├── news.json       # Berita & dokumentasi kegiatan
│   │   ├── staff.json      # Best staff tiap quarter
│   │   ├── proker.json     # Info proker tiap divisi
│   │   └── agenda.json     # Jadwal kegiatan / kalender
│   │
│   ├── lib/data/
│   │   └── team.ts         # 👥 Data nama, jabatan, & foto pengurus kabinet
│   │
│   ├── pages/              # 📄 Halaman-halaman web
│   └── components/         # 🧩 Komponen UI (Navbar, Footer, Hero, dll)
```

---

## 📌 Cara Update Konten (Sering Banget Bakal Kalian Pake)

### 🚨 PLIS BANGET: Jangan Lupa Kompres Foto ke WebP!
Jangan pernah upload foto mentahan langsung dari kamera HP/DSLR yang ukurannya 3MB - 10MB ya wkwk! Webnya nanti nangis lemot bgt dibuka kasihan yang akses pake kuota.

- ✅ **Wajib convert ke `.webp`**.
- 📏 **Ukuran file**: Usahain di bawah **150 KB** (buat banner gede maks 300 KB).
- 🏷️ **Nama file**: Jangan pake spasi, lebih aman pake strip, contoh: `kegiatan-agsn-2026.webp`.

**Tools Kompres Gratis & Cepat (Tinggal Klik):**
<p align="left">
  <a href="https://squoosh.app/" target="_blank"><img src="https://img.shields.io/badge/Buka_Squoosh.app-Kompres_ke_WebP-FF4081?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Squoosh" /></a>
  <a href="https://tinypng.com/" target="_blank"><img src="https://img.shields.io/badge/Buka_TinyPNG-Auto_Compress-22AA44?style=for-the-badge&logo=pandora&logoColor=white" alt="TinyPNG" /></a>
</p>

---

### Panduan Interaktif Pengelolaan Data (Klik untuk Buka Contekan):

<details>
<summary><strong>📰 1. Cara Nambah Berita Kegiatan Baru (Klik buat buka)</strong></summary>

<br>

**Lokasi File:** [`src/data/news.json`](src/data/news.json)

1. Siapin foto kegiatan yang udah di-convert ke `.webp` dan dikompres.
2. Masukin fotonya ke folder `public/assets/nama-foto-kalian.webp`.
3. Buka [`src/data/news.json`](src/data/news.json), terus tambahin data berita baru di **paling atas**:

```json
{
  "id": 11,
  "kategori": "PDP",
  "tanggal": "24 OKTOBER 2026",
  "judul": "Judul Kegiatan atau Proker Kalian",
  "deskripsi": "Ringkasan 1-2 kalimat buat preview kartu berita.",
  "file_gambar": "/assets/nama-foto-kalian.webp",
  "konten": [
    "Paragraf 1: cerita latar belakang kegiatannya...",
    "Paragraf 2: keseruan jalannya acara...",
    "Paragraf 3: penutup dan harapan ke depan..."
  ]
}
```

> 💡 **Pilihan Kategori:**  
> Gunakan salah satu dari: `"PDP"`, `"PSDM"`, `"Hubeks"`, `"MID"`, `"Enship"`, atau `"Mega Proker"`. Filter di halaman berita bakal langsung mendeteksi otomatis!

</details>

<details>
<summary><strong>🌟 2. Cara Ganti Best Staff Quarter (Klik buat buka)</strong></summary>

<br>

**Lokasi File:** [`src/data/staff.json`](src/data/staff.json)

1. Siapin 5 poster Best Staff (rasio portrait 3:4, udah format `.webp`).
2. Masukin ke folder `public/assets/`, misalnya `staff terbaik 1.webp` sampe `staff terbaik 5.webp`.
3. Buka [`src/data/staff.json`](src/data/staff.json), tinggal edit nama, divisi, sama periodenya:

```json
{
  "id": 1,
  "nama": "Nama Staf Keren",
  "divisi": "PDP",
  "bulan": "Quarter 1",
  "file_gambar": "/assets/staff terbaik 1.webp"
}
```

Tampilan carousel 3D di beranda bakal otomatis mengupdate poster tersebut! ✨

</details>

<details>
<summary><strong>👥 3. Cara Ganti Struktur & Foto Kabinet Baru (Klik buat buka)</strong></summary>

<br>

**Lokasi File:** [`src/lib/data/team.ts`](src/lib/data/team.ts)

Kalo udah ganti periode kepengurusan:
1. Masukin foto-foto pengurus baru ke folder `public/images/team/` (udah ada folder `bph/`, `manager/`, dan `Divisi/`).
2. Buka [`src/lib/data/team.ts`](src/lib/data/team.ts).
3. Tinggal sesuaikan nama, jabatan, prodi, dan path foto di 3 array ini:
   - `bph`: BPH (Direktur, Wadir, Sekre, Benda).
   - `managers`: Manajer per divisi.
   - `staffByDivision`: Nama-nama staf per divisi.

</details>

<details>
<summary><strong>🦉 4. Maskot 3D Owlia & Video Profil (Klik buat buka)</strong></summary>

<br>

- **Maskot 3D (`public/images/owlia3dfix.glb`)**: Maskot burung Owlia ini udah kita kompres pake Draco (cuma ~590 KB). Kalo mau ganti model 3D baru, jangan lupa dikompres dulu ya biar gak berat.
- **Video Profile (`public/company_profile.mp4`)**: Udah dipasang sistem lazy-load (baru dimuat pas discroll). Kalo mau ganti video profil kabinet kalian, usahain file-nya < 15 MB atau bisa juga di-embed dari YouTube biar enteng.

</details>

---

## 🚢 Cara Deploy ke Web (Biar Langsung Online)

Website ini udah terhubung otomatis dengan **Vercel**:

<p align="left">
  <a href="https://ipbmengajar.web.id"><img src="https://img.shields.io/badge/Website_Live-ipbmengajar.web.id-0070F3?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Web" /></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Continuous_Deployment-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
</p>

1. Tiap kalian selesai edit dan tes di lokal, tinggal jalankan perintah ini di terminal:
   ```bash
   git add .
   git commit -m "Update konten baru"
   git push origin main
   ```
2. Vercel bakal otomatis nge-build ulang dan langsung nampilin hasilnya di:  
   👉 **[ipbmengajar.web.id](https://ipbmengajar.web.id)**
3. Tunggu 1–2 menit, perubahan sudah langsung live di internet! ✨

---

## 💡 Tips Santuy
- 🛠️ **Biasain `npm run build` dulu:** Sebelum push ke GitHub, tes build dulu di laptop kalian. Biar kalo ada salah ketik ketahuan duluan sebelum webnya error pas di-deploy.
- 📅 **Catet tanggal expired domain:** **08 Juni 2027** ya, chat ke IG [@fiavnz](https://instagram.com/fiavnz) kalau mau diperpanjang!
- 🤝 Kalo bingung atau ada kendala kodingan, colek aja kita pengurus sebelumnya, santai aja xixixi!

Semangat melanjutkan perjuangan di IPB Mengajar! Bikin kabinet kalian makin menyala dan berdampak luas! 🚀💛

---

<div align="center">
  <p>Diwariskan dengan bangga oleh <strong>Divisi MID — Kabinet Arkatara</strong> 🦉💛</p>
  <p><em>"Langkah Kecil Untuk Negeri"</em></p>
</div>