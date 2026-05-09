import { motion } from "framer-motion";
import interior from "@/assets/interior.jpg";

const stats = [
  { k: "Family", v: "Dining" },
  { k: "Premium", v: "Ambience" },
  { k: "Kerala &", v: "Arabian" },
  { k: "Spacious", v: "Seating" },
];

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-40 bg-cream overflow-visible noise">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="relative w-full"
        >
          <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-luxe">
            <img src={interior} alt="Warm elegant interior of Regal Food Restaurant" className="w-full h-[280px] sm:h-[350px] md:h-[560px] object-cover" loading="lazy" width={1280} height={1280} />
          </div>
          <div className="relative md:absolute md:-bottom-8 md:-right-6 mt-6 md:mt-0 glass-dark rounded-xl md:rounded-2xl p-4 md:p-6 w-full md:w-56 mx-auto md:mx-0">
            <div className="text-gold font-display text-3xl md:text-4xl">15+</div>
            <div className="text-cream/80 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">Years of warm hospitality</div>
          </div>
          <div className="hidden md:block absolute -top-6 -left-6 h-32 w-32 border border-gold/40 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="gold-divider" />
            <span className="text-crimson uppercase tracking-[0.35em] text-xs">Our Story</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] md:leading-[1.05]">
            A taste of Wayanad,<br />
            <span className="italic text-crimson">crafted with regality.</span>
          </h2>
          <p className="mt-6 md:mt-8 text-charcoal/70 leading-relaxed text-sm sm:text-base md:text-lg">
            Regal Food Restaurant Vythiri offers a premium dining experience blending authentic
            flavors, warm hospitality, and a modern family-friendly atmosphere in the beautiful
            hills of Wayanad. Every plate is a celebration of Kerala's spice-rich heritage and
            Arabian culinary mastery.
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-gold pl-5 py-2"
              >
                <div className="font-display text-2xl text-charcoal">{s.k}</div>
                <div className="text-charcoal/60 text-sm uppercase tracking-[0.2em]">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
