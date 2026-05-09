import { motion } from "framer-motion";
import { useState } from "react";
import biriyani from "@/assets/dish-biriyani.jpg";
import arabian from "@/assets/dish-arabian.jpg";
import grill from "@/assets/dish-grill.jpg";
import kerala from "@/assets/dish-kerala.jpg";
import juice from "@/assets/dish-juice.jpg";
import { Star } from "lucide-react";

const dishes = [
  { name: "Royal Mandi", cat: "Arabian Specials", desc: "Slow-cooked spiced rice with smoked chicken.", img: arabian, chef: true, price: "₹ 420" },
  { name: "Malabar Biriyani", cat: "Biriyani", desc: "Fragrant Kaima rice layered with marinated meats.", img: biriyani, chef: true, price: "₹ 320" },
  { name: "Mixed Grill Platter", cat: "Grills", desc: "Charcoal-fired kebabs, tikkas & seekh.", img: grill, chef: false, price: "₹ 580" },
  { name: "Sadya Thali", cat: "Kerala Cuisine", desc: "Traditional banana-leaf feast with 12 sides.", img: kerala, chef: true, price: "₹ 360" },
  { name: "Garden Juices", cat: "Fresh Juices", desc: "Hand-pressed seasonal Wayanad fruits.", img: juice, chef: false, price: "₹ 140" },
];

const cats = ["All", ...Array.from(new Set(dishes.map((d) => d.cat)))];

export function Menu() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? dishes : dishes.filter((d) => d.cat === filter);

  return (
    <section id="menu" className="relative py-28 md:py-40 bg-charcoal overflow-hidden">
      <div className="absolute top-1/3 -left-32 h-[420px] w-[420px] rounded-full bg-crimson/25 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-gold/15 blur-[140px]" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="text-gold uppercase tracking-[0.35em] text-xs">Signature Showcase</span>
            <span className="gold-divider" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream">
            Plates worth <span className="italic gradient-text-gold">remembering.</span>
          </h2>
          <p className="text-cream/60 mt-5">A curated journey through our chef's most-loved creations.</p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.2em] border transition-all ${
                filter === c
                  ? "bg-gold text-charcoal border-gold"
                  : "border-cream/15 text-cream/70 hover:border-gold/60 hover:text-gold"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((d, i) => (
            <motion.article
              key={d.name}
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group glass-dark rounded-3xl overflow-hidden hover:shadow-glow transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={1024}
                  height={1024}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
                {d.chef && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-gold text-charcoal px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium">
                    <Star size={12} fill="currentColor" /> Chef Recommended
                  </div>
                )}
                <div className="absolute top-4 right-4 text-gold font-display text-xl">{d.price}</div>
              </div>
              <div className="p-6">
                <div className="text-gold/80 text-[10px] uppercase tracking-[0.3em]">{d.cat}</div>
                <h3 className="font-display text-2xl text-cream mt-2">{d.name}</h3>
                <p className="text-cream/60 text-sm mt-3 leading-relaxed">{d.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
