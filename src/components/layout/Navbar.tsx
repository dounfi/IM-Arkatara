import { useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isScrolled: boolean;
}

// ─── Sub-components ──────────────────────────────────────────────────────────
const NavItem = ({ to, children, isScrolled }: NavItemProps) => (
  <NavLink
    to={to}
    end
    className={({ isActive }) =>
      `px-5 py-2.5 rounded-full text-sm font-jakarta font-black transition-all duration-200 ${
        isActive
          ? isScrolled
            ? "bg-primary/10 text-primary"
            : "bg-white/15 text-white"
          : isScrolled
          ? "text-primary/60 hover:text-primary hover:bg-primary/5"
          : "text-white/60 hover:text-white hover:bg-white/10"
      }`
    }
  >
    {children}
  </NavLink>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | "activity">(null);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  // ── Scroll detection ──
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isHome = pathname === "/";
  const showTransparent = isHome && !isScrolled;

  const navItems = [
    { label: "Divisi", to: "/divisi" },
    { label: "Media Partner", to: "/student-info/media-partner" },
    { label: "Berita & Kabar", to: "/student-info/berita" },
    { label: "Program Kerja", to: "/student-info/proker" },
  ];

  const goKontak = () => {
    setMobileOpen(false);
    navigate("/kontak");
  };

  // ── Animation Variants (OClean pattern) ──────────────────────────────────
  const navVariants = {
    top: {
      width: "100%",
      maxWidth: "1536px",
      y: 0,
      borderRadius: "0px",
      backgroundColor: isHome ? "rgba(0,0,0,0)" : "rgba(31,54,88,1)",
      paddingTop: isHome ? "22px" : "14px",
      paddingBottom: isHome ? "22px" : "14px",
      paddingLeft: "32px",
      paddingRight: "32px",
      boxShadow: "0 0px 0px rgba(0,0,0,0)",
      borderColor: "rgba(255,255,255,0)",
    },
    scrolled: {
      width: "90%",
      maxWidth: "1150px",
      y: 20,
      borderRadius: "32px",
      backgroundColor: "rgba(255,255,255,0.85)",
      paddingTop: "10px",
      paddingBottom: "10px",
      paddingLeft: "24px",
      paddingRight: "24px",
      boxShadow: "0 10px 30px -10px rgba(31,54,88,0.12)",
      borderColor: "rgba(255,255,255,0.6)",
    },
  };

  const logoTextColor = showTransparent ? "text-white" : isScrolled ? "text-primary" : "text-white";
  const subTextColor  = showTransparent ? "text-yellow-primary" : isScrolled ? "text-primary/50" : "text-yellow-primary";
  const dropdownBtnColor = showTransparent
    ? "text-white/60 hover:text-white hover:bg-white/10"
    : isScrolled
    ? "text-primary/60 hover:text-primary hover:bg-primary/5"
    : "text-white/60 hover:text-white hover:bg-white/10";

  return (
    <>
      {/* ── Fixed Positioner ── */}
      <div className="fixed top-0 inset-x-0 z-[999] flex justify-center pointer-events-none">
        <motion.nav
          initial="top"
          animate={isScrolled ? "scrolled" : "top"}
          variants={navVariants}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-between border border-transparent w-full max-w-screen-2xl pointer-events-auto"
          style={{ backdropFilter: isScrolled ? "blur(16px) saturate(1.8)" : "none" }}
        >
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 overflow-hidden">
              <motion.img 
                src="/logo-ipb-mengajar.webp" 
                alt="Logo IPB Mengajar" 
                className="w-full h-full object-contain p-1 origin-center" 
              />
            </div>
            <div className="hidden sm:block leading-none">
              <p className={`font-jakarta font-black text-[15px] tracking-tight transition-colors duration-300 ${logoTextColor}`}>
                IPB Mengajar
              </p>
              <p className={`text-[8px] uppercase tracking-[0.35em] font-black opacity-70 transition-colors duration-300 ${subTextColor}`}>
                Arkatara
              </p>
            </div>
          </Link>

          {/* CENTER: Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            <NavItem to="/" isScrolled={isScrolled}>Beranda</NavItem>
            <NavItem to="/about" isScrolled={isScrolled}>Tentang Kami</NavItem>

            {/* Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown("activity")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-jakarta font-black transition-all duration-200 ${dropdownBtnColor}`}>
                Aktivitas
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === "activity" ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {openDropdown === "activity" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-56 z-[1000]"
                  >
                    <div className="bg-white/90 backdrop-blur-xl border border-white/60 rounded-2xl shadow-2xl py-2 overflow-hidden">
                      {navItems.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-5 py-3 text-sm font-jakarta font-semibold text-primary/70 hover:text-primary hover:bg-primary/5"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* RIGHT: Actions (Desktop CTA & Mobile Hamburger) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop CTA */}
            <button
              onClick={goKontak}
              className={`hidden lg:inline-flex px-6 py-2.5 rounded-full font-jakarta font-black text-sm transition-all duration-200 active:scale-95 ${
                isScrolled
                  ? "bg-primary text-white hover:bg-primary/80 shadow-md"
                  : "bg-yellow-primary text-primary hover:bg-yellow-secondary shadow-lg shadow-yellow-primary/20"
              }`}
            >
              Kontak Kami
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-full border transition-all ${
                isScrolled
                  ? "bg-primary/5 border-primary/10 text-primary"
                  : "bg-white/10 border-white/15 text-white"
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </motion.nav>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-primary z-[70] flex flex-col p-8 border-l border-white/5 shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md">
                    <img src="/logo-ipb-mengajar.webp" alt="Logo" className="w-full h-full object-contain p-1" />
                  </div>
                  <span className="font-jakarta font-black text-sm text-white">IPB Mengajar</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-6">
                {[
                  { label: "Beranda", to: "/" },
                  { label: "Tentang Kami", to: "/about" },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className="font-jakarta font-black text-2xl text-white hover:text-yellow-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="space-y-3">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-yellow-primary font-black opacity-50">Aktivitas</p>
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className="block font-jakarta font-bold text-lg text-white/50 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-auto">
                <button
                  onClick={goKontak}
                  className="w-full py-4 rounded-2xl bg-yellow-primary text-primary font-black text-base hover:bg-yellow-secondary transition-colors"
                >
                  Kontak Kami
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
