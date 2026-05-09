import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  { name: "Aarav Menon", city: "Bangalore", text: "An unforgettable family evening. The Mandi was unreal and the staff treated us like royalty.", rating: 5 },
  { name: "Fathima Rashid", city: "Calicut", text: "Authentic Malabar flavors plated with such elegance. Easily the best dining in Wayanad.", rating: 5 },
  { name: "Rohan Pillai", city: "Kochi", text: "Beautiful interiors, attentive service, and the biriyani is a love letter to Kerala.", rating: 5 },
  { name: "Sara Thomas", city: "Trivandrum", text: "Perfect spot during our Vythiri trip. Spacious, hygienic and incredibly warm hospitality.", rating: 5 },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="relative py-28 md:py-36 bg-cream overflow-hidden noise">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="text-crimson uppercase tracking-[0.35em] text-xs">Guest Voices</span>
            <span className="gold-divider" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-charcoal">
            Loved across <span className="italic text-crimson">Kerala.</span>
          </h2>
        </div>

        <div className="mt-16 max-w-4xl mx-auto relative">
          <Quote className="absolute -top-6 -left-2 text-gold/40" size={80} />
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-3xl p-10 md:p-14 shadow-luxe relative"
          >
            <div className="flex gap-1 text-gold mb-6">
              {Array.from({ length: r.rating }).map((_, k) => <Star key={k} size={18} fill="currentColor" />)}
            </div>
            <p className="font-display text-2xl md:text-3xl text-charcoal leading-snug italic">
              "{r.text}"
            </p>
            <div className="mt-8 flex items-center justify-between">
              <div>
                <div className="font-display text-xl text-charcoal">{r.name}</div>
                <div className="text-charcoal/50 text-sm uppercase tracking-[0.2em]">{r.city}</div>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setI((i - 1 + reviews.length) % reviews.length)} className="h-12 w-12 rounded-full border border-charcoal/15 grid place-items-center hover:bg-gold hover:border-gold transition-all">
                  <ChevronLeft size={18} />
                </button>
                <button onClick={() => setI((i + 1) % reviews.length)} className="h-12 w-12 rounded-full border border-charcoal/15 grid place-items-center hover:bg-gold hover:border-gold transition-all">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, k) => (
              <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-crimson" : "w-2 bg-charcoal/20"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
