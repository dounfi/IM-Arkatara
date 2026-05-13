// GANTI: nama dan jabatan placeholder. Replace with real data.
export const bph = {
  direktur: { name: "Direktur", role: "Direktur", id: "img-bph-direktur", grad: "from-muted to-primary" },
  row2: [
    { name: "Wakil Direktur", role: "Wakil Direktur", id: "img-bph-wadir", grad: "from-yellow-primary to-yellow-amber" },
    { name: "Sekretaris Umum", role: "Sekretaris Umum", id: "img-bph-sekum", grad: "from-blue-deep to-accent" },
  ],
  row3: [
    { name: "Bendahara Umum", role: "Bendahara Umum", id: "img-bph-bendum", grad: "from-yellow-secondary to-muted" },
    { name: "Sekretaris 2", role: "Sekretaris 2", id: "img-bph-sek2", grad: "from-accent to-yellow-primary" },
  ],
  row4: [
    { name: "Sekretaris 3", role: "Sekretaris 3", id: "img-bph-sek3", grad: "from-blue-light to-blue-deep" },
    { name: "Bendahara 2", role: "Bendahara 2", id: "img-bph-bend2", grad: "from-yellow-amber to-primary" },
  ],
};

export const managers = [
  { name: "Manager PDP", role: "Manager PDP", id: "img-mgr-pdp", grad: "from-muted to-yellow-primary" },
  { name: "Manager HUBEKS", role: "Manager HUBEKS", id: "img-mgr-hubeks", grad: "from-blue-deep to-blue-light" },
  { name: "Manager PSDM", role: "Manager PSDM", id: "img-mgr-psdm", grad: "from-yellow-secondary to-yellow-amber" },
  { name: "Manager ENSHIP", role: "Manager ENSHIP", id: "img-mgr-enship", grad: "from-accent to-primary" },
  { name: "Manager MID", role: "Manager MID", id: "img-mgr-mid", grad: "from-yellow-primary to-muted" },
];

const namesPool = [
  "Adi Wijaya", "Bunga Citra", "Citra Dewi", "Dimas Arya", "Elsa Putri",
  "Faisal Akbar", "Gita Anggraini", "Hadi Pranata", "Ika Sari", "Joko Susilo",
  "Kartika Sari", "Lina Marlina", "Made Surya", "Nia Ramadhani", "Oki Setiawan",
  "Putri Ayu", "Qori Hanif", "Rina Wulandari", "Surya Pratama", "Tika Lestari",
];

const grads = [
  "from-muted to-yellow-primary",
  "from-yellow-secondary to-accent",
  "from-blue-deep to-blue-light",
  "from-yellow-amber to-primary",
  "from-accent to-yellow-secondary",
  "from-blue-light to-muted",
  "from-yellow-primary to-yellow-amber",
  "from-primary to-muted",
];

export const divisions = ["PDP", "HUBEKS", "PSDM", "ENSHIP", "MID"] as const;
export type Division = typeof divisions[number];

const roleByDiv: Record<Division, string[]> = {
  PDP: ["Staff Pengajar", "Koord. Lapangan", "Staff Kurikulum", "Staff Evaluasi", "Staff Logistik", "Staff Dokumentasi", "Staff Kreatif", "Staff Penghubung"],
  HUBEKS: ["Staff Eksternal", "Staff Kemitraan", "Staff Komunikasi", "Liaison Officer", "Staff PR", "Staff Networking", "Staff Outreach", "Staff Kolaborasi"],
  PSDM: ["Staff Pengembangan", "Staff Training", "Staff Internal", "Staff Bonding", "Staff Quality", "Staff Mentoring", "Staff Recruitment", "Staff Apresiasi"],
  ENSHIP: ["Staff Wirausaha", "Staff IM Store", "Staff Sahabat Daya", "Staff Sponsorship", "Staff Partnership", "Staff IM Talks", "Staff Produksi", "Staff Marketing"],
  MID: ["Staff Konten", "Staff Desain", "Staff Videografer", "Staff Editor", "Staff Sosmed", "Staff Jurnalistik", "Staff Fotografer", "Staff Copywriter"],
};

export const staffByDivision: Record<Division, { name: string; role: string; id: string; grad: string }[]> = Object.fromEntries(
  divisions.map((div) => [
    div,
    Array.from({ length: 8 }, (_, i) => ({
      name: roleByDiv[div][i],
      role: roleByDiv[div][i],
      id: `img-staff-${div.toLowerCase()}-${i + 1}`,
      grad: grads[(i + div.length) % grads.length],
    })),
  ])
) as Record<Division, { name: string; role: string; id: string; grad: string }[]>;
