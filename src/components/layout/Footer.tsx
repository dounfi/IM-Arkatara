import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, Music, MessageCircle, X } from "lucide-react";
import Sticker from "@/components/decor/Sticker";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
  </svg>
);

const Footer = () => (
  <footer className="relative bg-primary text-cream noise-overlay overflow-hidden">
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <Sticker type="lightbulb" color="text-muted-foreground/20" size={120} className="absolute top-6 left-4" rotate={-20} />
      <Sticker type="lightbulb" color="text-yellow-primary/15" size={100} className="absolute bottom-10 right-10" rotate={45} />
      <Sticker type="sparkle" color="text-yellow-primary/30" size={40} className="absolute top-16 right-1/3" />
      <Sticker type="dot" color="text-yellow-primary/30" size={24} className="absolute bottom-20 left-1/4" />
    </div>
    <div className="container mx-auto py-16 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shrink-0 overflow-hidden">
              <img src="/logo-ipb-mengajar.webp" alt="Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="font-jakarta font-extrabold text-xl text-white">IPB Mengajar</div>
          </div>
          <p className="font-jakarta font-extrabold text-yellow-primary text-lg mb-3">Langkah Kecil Untuk Negeri</p>

          <p className="text-cream/70 text-sm leading-relaxed">
            Komunitas mahasiswa IPB University yang peduli pada pendidikan di desa dan sekolah binaan seluruh Indonesia.
          </p>
        </div>

        <FooterCol title="Navigasi" links={[
          { label: "Beranda", to: "/" },
          { label: "About Us", to: "/about" },
          { label: "Aktivitas", to: "/student-info/berita" },
          { label: "Kontak", to: "/kontak" },
        ]} />

        <FooterCol title="Divisi" links={[
          { label: "PDP", to: "/about" },
          { label: "HUBEKS", to: "/about" },
          { label: "PSDM", to: "/about" },
          { label: "ENSHIP", to: "/about" },
          { label: "MID", to: "/about" },
        ]} />

        <div>
          <h4 className="font-jakarta font-bold text-white mb-4 text-base uppercase tracking-wider">Sosial Media</h4>
          <div className="flex flex-col gap-3">
            {[
              { Icon: Instagram, label: "Instagram", href: "https://instagram.com/ipbmengajar", color: "hover:bg-pink-600 hover:border-pink-500", text: "@ipbmengajar" },
              { Icon: XIcon, label: "X", href: "https://x.com/ipbmengajar", color: "hover:bg-black hover:border-gray-800", text: "@ipbmengajar" },
              { Icon: Youtube, label: "Youtube", href: "https://www.youtube.com/@ipbmengajar6108/videos", color: "hover:bg-red-600 hover:border-red-500", text: "IPB Mengajar" },
              { Icon: Music, label: "Spotify", href: "https://open.spotify.com/show/12k3RcI6otOdtSKajilLfN?si=9895faf58ce94af5", color: "hover:bg-primary/80 hover:border-primary", text: "IPB Mengajar" },
              { Icon: MessageCircle, label: "Line", href: "https://line.me/ti/p/~IM_Arkatara", color: "hover:bg-emerald-500 hover:border-emerald-400", text: "IM_Arkatara" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`group flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 transition-all duration-300 ${s.color}`}>
                <s.Icon className="w-5 h-5 text-yellow-primary group-hover:text-white transition-colors" />
                <span className="text-sm font-jakarta font-semibold text-cream/90 group-hover:text-white transition-colors">{s.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 mt-12 pt-6 text-center text-sm text-cream/60">
        © 2025 IPB Mengajar. All rights reserved.
      </div>
    </div>
  </footer>
);

const FooterCol = ({ title, links }: { title: string; links: { label: string; to: string }[] }) => (
  <div>
    <h4 className="font-jakarta font-bold text-white mb-4 text-base uppercase tracking-wider">{title}</h4>
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.label}>
          <Link to={l.to} className="text-cream/80 hover:text-yellow-primary transition-colors text-sm">{l.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
