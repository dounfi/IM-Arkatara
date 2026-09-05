import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageHeader from "@/components/layout/PageHeader";
import SectionReveal, { itemVariants } from "@/components/decor/SectionReveal";
import Sticker from "@/components/decor/Sticker";
import BPHCarousel from "@/components/team/BPHCarousel";
import DivisiManajemen from "@/components/team/DivisiManajemen";
import { bph, divisions, managers, staffByDivision, type Division } from "@/lib/data/team";

const managerPhotos = [
  "1. pdp.webp",
  "2. hubeks.webp",
  "3. psdm.webp",
  "4. enship.webp",
  "5. mid.webp",
];

const divisiPhotos = [
  "1. pdp.webp",
  "2. hubeks.webp",
  "3. psdm.webp",
  "4. enship.webp",
  "5. mid.webp",
];

const PersonCard = ({ p, index, rotate = 0 }: { p: any; index: number; rotate?: number }) => (
  <motion.div
    whileHover={{ y: -8 }}
    style={{ rotate }}
    className="group relative cursor-default"
  >
    <img
      src={`/images/team/manager/${managerPhotos[index]}`}
      alt={p.name}
      className="w-full h-auto object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-[1.02]"
      draggable="false"
    />
  </motion.div>
);


const Kepengurusan = () => {
  const [activeTab, setActiveTab] = useState<Division>("PDP");

  return (
    <>
      <PageHeader eyebrow="About Us" title="Kepengurusan" accent="IM">
        Mereka yang mengurus, melayani, dan menggerakkan setiap roda IPB Mengajar.
      </PageHeader>

      {/* BPH */}
      <section className="bg-[#faecb4] py-16 md:py-24 relative overflow-hidden">
        <div className="container mx-auto">
          <SectionReveal>
            <motion.h2 variants={itemVariants} className="text-center font-jakarta font-black text-3xl md:text-4xl tracking-tight mb-8" style={{ color: "#1f3658" }}>
              Badan Pengurus <span className="yellow-underline">Harian</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="mt-8">
              <BPHCarousel />
            </motion.div>
          </SectionReveal>
        </div>
      </section>

      {/* Manager Divisi */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        <Sticker type="star" color="text-yellow-primary" size={28} className="absolute top-10 left-10" float="sparkle" />
        <div className="container mx-auto">
          <SectionReveal>
            <motion.h2 variants={itemVariants} className="text-center font-jakarta font-extrabold text-3xl md:text-4xl text-primary">
              Manager <span className="yellow-underline">Divisi</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-center text-muted-foreground mt-3 max-w-xl mx-auto">
              Lima nahkoda divisi yang memastikan setiap program berjalan baik.
            </motion.p>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
              {managers.map((m, i) => (
                <motion.div key={m.id} variants={itemVariants}>
                  <PersonCard p={m} index={i} rotate={i % 2 === 0 ? -1.5 : 1.5} />
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <DivisiManajemen />
    </>
  );
};

export default Kepengurusan;
