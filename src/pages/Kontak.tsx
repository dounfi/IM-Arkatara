import { useState, useRef, type FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Phone, Instagram, MapPin, Send, Youtube, Music, MessageCircle } from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
  </svg>
);
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Sticker from "@/components/decor/Sticker";
import ContactMap from "@/components/contact/ContactMap";
import { toast } from "sonner";

const FloatField = ({
  id, name, label, type = "text", textarea = false, value, onChange
}: {
  id: string; name: string; label: string; type?: string; textarea?: boolean;
  value: string; onChange: (v: string) => void;
}) => {
  const [focus, setFocus] = useState(false);
  const float = focus || value.length > 0;
  const common = "peer w-full bg-cream border-2 border-transparent focus:border-accent focus:bg-white outline-none rounded-xl px-4 pt-6 pb-2 font-sans text-primary transition-all";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={name} rows={5} value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={common} />
      ) : (
        <input id={id} name={name} type={type} value={value} onChange={(e) => onChange(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} className={common} />
      )}
      <label htmlFor={id} className={`absolute left-4 pointer-events-none font-jakarta font-semibold transition-all ${float ? "top-1.5 text-[11px] text-accent uppercase tracking-wider" : "top-4 text-base text-muted-foreground/70"}`}>
        {label}
      </label>
    </div>
  );
};

const Kontak = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ nama: "", email: "", subjek: "", pesan: "" });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Pesan berhasil dikirim!");
      setForm({ nama: "", email: "", subjek: "", pesan: "" });
    } catch (error) {
      console.error(error);
      toast.error("Gagal mengirim pesan. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader eyebrow="Kontak" title="Hubungi" accent="Kami">
        Punya pertanyaan, ide kolaborasi, atau ingin bergabung? Kami senang mendengar dari Anda.
      </PageHeader>

      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <Sticker type="lightbulb" color="text-muted-foreground/40" size={80} className="absolute top-10 right-10" rotate={20} />
        <Sticker type="sparkle" color="text-yellow-primary/60" size={32} className="absolute bottom-16 left-10" float="sparkle" />

        <div className="container mx-auto grid lg:grid-cols-2 gap-10">
          <SectionReveal>
            <motion.h3 variants={itemVariants} className="font-jakarta font-extrabold text-2xl text-primary">Mari Terhubung</motion.h3>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  Icon: Mail,
                  label: "Email",
                  value: "ipbmengajararkatara@gmail.com",
                  href: "mailto:ipbmengajararkatara@gmail.com",
                  color: "group-hover:text-blue-500 group-hover:bg-blue-50",
                  borderHover: "hover:border-blue-400 hover:shadow-blue-100",
                  colSpan: 2,
                },
                {
                  Icon: Phone,
                  label: "Telepon (Aidil)",
                  value: "+62 855-9161-5745",
                  href: "tel:+6285591615745",
                  color: "group-hover:text-accent group-hover:bg-muted",
                  borderHover: "hover:border-primary hover:shadow-muted",
                  colSpan: 2,
                },
                {
                  Icon: MapPin,
                  label: "Alamat",
                  value: "Gedung SC IPB Dramaga Lt.2",
                  href: "https://share.google/xaP4k5kN48YXp3u8x",
                  color: "group-hover:text-amber-500 group-hover:bg-amber-50",
                  borderHover: "hover:border-amber-400 hover:shadow-amber-100",
                  colSpan: 2,
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  value: "@ipbmengajar",
                  href: "https://instagram.com/ipbmengajar",
                  color: "group-hover:text-pink-500 group-hover:bg-pink-50",
                  borderHover: "hover:border-pink-400 hover:shadow-pink-100",
                },
                {
                  Icon: XIcon,
                  label: "X (Twitter)",
                  value: "@ipbmengajar",
                  href: "https://x.com/ipbmengajar",
                  color: "group-hover:text-black group-hover:bg-gray-100",
                  borderHover: "hover:border-black hover:shadow-gray-200",
                },
                {
                  Icon: Youtube,
                  label: "Youtube",
                  value: "IPB Mengajar",
                  href: "https://www.youtube.com/@ipbmengajar6108/videos",
                  color: "group-hover:text-red-500 group-hover:bg-red-50",
                  borderHover: "hover:border-red-400 hover:shadow-red-100",
                },
                {
                  Icon: Music,
                  label: "Spotify",
                  value: "IPB Mengajar",
                  href: "https://open.spotify.com/show/12k3RcI6otOdtSKajilLfN?si=9895faf58ce94af5",
                  color: "group-hover:text-primary/80 group-hover:bg-muted",
                  borderHover: "hover:border-primary hover:shadow-muted",
                },
                {
                  Icon: MessageCircle,
                  label: "Line",
                  value: "IM_Arkatara",
                  href: "https://line.me/ti/p/~IM_Arkatara",
                  color: "group-hover:text-emerald-500 group-hover:bg-emerald-50",
                  borderHover: "hover:border-emerald-400 hover:shadow-emerald-100",
                },
              ].map((c) => (
                <motion.a
                  key={c.label}
                  variants={itemVariants}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 bg-white rounded-2xl p-4 border-2 border-transparent transition-all duration-300 cursor-pointer group shadow-sm hover:-translate-y-1 ${
                    c.borderHover
                  } ${
                    (c as any).colSpan ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-cream text-accent flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${c.color}`}>
                    <c.Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 font-jakarta font-extrabold mb-0.5">{c.label}</p>
                    <p className="text-primary font-jakarta font-bold text-sm">{c.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <ContactMap />
            </motion.div>
          </SectionReveal>

          <SectionReveal>
            <motion.form ref={formRef} variants={itemVariants} onSubmit={onSubmit} className="bg-white rounded-3xl p-7 md:p-9 scrapbook-shadow space-y-4 border-2 border-dashed border-yellow-primary">
              <h3 className="font-jakarta font-extrabold text-2xl text-primary">Kirim Pesan</h3>
              <p className="text-sm text-muted-foreground">Isi form di bawah, tim kami akan membalas dalam 1–3 hari kerja.</p>
              <FloatField id="nama"   name="name"    label="Nama"  value={form.nama}   onChange={(v) => handleChange("nama", v)} />
              <FloatField id="email"  name="email"   label="Email" type="email" value={form.email}  onChange={(v) => handleChange("email", v)} />
              <FloatField id="subjek" name="title"   label="Subjek" value={form.subjek} onChange={(v) => handleChange("subjek", v)} />
              <FloatField id="pesan"  name="message" label="Pesan" textarea value={form.pesan}  onChange={(v) => handleChange("pesan", v)} />
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-yellow-primary text-primary font-jakarta font-bold hover:bg-yellow-secondary transition-all hover:translate-y-[-2px] scrapbook-shadow disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>Kirim Pesan <Send className="w-4 h-4" /></>
                )}
              </button>
            </motion.form>
          </SectionReveal>
        </div>
      </section>
    </>
  );
};

export default Kontak;
