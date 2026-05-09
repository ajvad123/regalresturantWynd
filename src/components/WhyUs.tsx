import { motion } from "framer-motion";
import { Leaf, Sparkles, Timer, Users, Mountain, ChefHat } from "lucide-react";

const items = [
  { icon: Leaf, title: "Fresh Ingredients", desc: "Sourced daily from Wayanad's farms and spice gardens." },
  { icon: Sparkles, title: "Elegant Ambience", desc: "Warm wood, candlelight & a calming atmosphere." },
  { icon: Timer, title: "Fast Service", desc: "Attentive staff trained in Kerala hospitality." },
  { icon: Users, title: "Family Friendly", desc: "Spacious seating perfect for gatherings." },
  { icon: Mountain, title: "Scenic Location", desc: "Tucked into the misty hills of Vythiri." },
  { icon: ChefHat, title: "Authentic Taste", desc: "Recipes crafted by master chefs." },
];

export function WhyUs() {
  return (
    <section className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(var(--gold) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="text-gold uppercase tracking-[0.35em] text-xs">Why Regal</span>
            <span className="gold-divider" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream">
            Crafted for <span className="italic gradient-text-gold">connoisseurs.</span>
          </h2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-8 hover:border-gold/40 transition-all group"
            >
              <div className="h-14 w-14 rounded-2xl grid place-items-center bg-gradient-to-br from-gold/30 to-crimson/30 text-gold group-hover:shadow-glow transition-shadow">
                <it.icon size={26} />
              </div>
              <h3 className="font-display text-2xl text-cream mt-6">{it.title}</h3>
              <p className="text-cream/60 mt-3 leading-relaxed">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
