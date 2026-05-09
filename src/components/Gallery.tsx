import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import a from "@/assets/hero-exterior.jpg";
import b from "@/assets/interior.jpg";
import c from "@/assets/dish-biriyani.jpg";
import d from "@/assets/dish-arabian.jpg";
import e from "@/assets/dish-grill.jpg";
import f from "@/assets/dish-kerala.jpg";
import g from "@/assets/dish-juice.jpg";
import h from "@/assets/gallery-family.jpg";
import i from "@/assets/gallery-hall.jpg";
import j from "@/assets/gallery-chef.jpg";

const items = [
  { src: a, span: "row-span-2" },
  { src: b, span: "" },
  { src: c, span: "" },
  { src: h, span: "row-span-2" },
  { src: d, span: "" },
  { src: i, span: "" },
  { src: e, span: "" },
  { src: f, span: "row-span-2" },
  { src: g, span: "" },
  { src: j, span: "" },
];

export function Gallery() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="text-gold uppercase tracking-[0.35em] text-xs">Gallery</span>
            <span className="gold-divider" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream">
            Through our <span className="italic gradient-text-gold">lens.</span>
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 auto-rows-[180px] gap-4">
          {items.map((it, k) => (
            <motion.button
              key={k}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.05 }}
              onClick={() => setOpen(it.src)}
              className={`relative overflow-hidden rounded-2xl group ${it.span}`}
            >
              <img src={it.src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-md grid place-items-center p-6"
          >
            <button onClick={() => setOpen(null)} className="absolute top-6 right-6 text-cream"><X /></button>
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={open} alt="" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
