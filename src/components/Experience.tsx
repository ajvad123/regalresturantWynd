import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import family from "@/assets/gallery-family.jpg";
import hall from "@/assets/gallery-hall.jpg";
import chef from "@/assets/gallery-chef.jpg";
import interior from "@/assets/interior.jpg";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1600;
    const step = (t: number) => {
      const p = Math.min(t / duration, 1);
      setVal(Math.floor(start + (to - start) * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    let rafStart: number;
    requestAnimationFrame((t) => { rafStart = t; requestAnimationFrame(function loop(now) { step(now - rafStart); if (now - rafStart < duration) requestAnimationFrame(loop); }); });
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-40 bg-cream overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="text-crimson uppercase tracking-[0.35em] text-xs">The Experience</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal leading-[1.05]">
            More than a meal — <span className="italic text-crimson">a moment in the hills.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-12 gap-5 auto-rows-[minmax(180px,1fr)]">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="md:col-span-7 md:row-span-2 rounded-3xl overflow-hidden group relative min-h-[280px]">
            <img src={hall} alt="Spacious dining hall" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1280} height={896} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-cream font-display text-2xl">Spacious Interiors</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="md:col-span-5 rounded-3xl overflow-hidden group relative min-h-[240px]">
            <img src={family} alt="Family dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-cream font-display text-xl">Family Seating</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="md:col-span-5 rounded-3xl overflow-hidden group relative min-h-[240px]">
            <img src={chef} alt="Hygienic kitchen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" width={1024} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <div className="absolute bottom-6 left-6 text-cream font-display text-xl">Hygienic Kitchen</div>
          </motion.div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-charcoal/10 pt-16">
          {[
            { n: 50000, s: "+", label: "Happy Guests" },
            { n: 60, s: "+", label: "Signature Dishes" },
            { n: 15, s: "+", label: "Years of Service" },
            { n: 4.9, s: "★", label: "Average Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-crimson">
                {s.n === 4.9 ? "4.9" : <Counter to={s.n} />}<span className="text-gold">{s.s}</span>
              </div>
              <div className="mt-2 text-charcoal/60 uppercase tracking-[0.2em] text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
