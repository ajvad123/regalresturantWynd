import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const Instagram = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
);
const Facebook = (p: { size?: number }) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

export function Contact() {
  return (
    <section id="contact" className="relative bg-charcoal text-cream pt-28 pb-12 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-crimson/20 blur-[140px]" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="gold-divider" />
            <span className="text-gold uppercase tracking-[0.35em] text-xs">Visit Us</span>
            <span className="gold-divider" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl">
            Find your <span className="italic gradient-text-gold">table.</span>
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            {[
              { icon: MapPin, title: "Address", text: "Vythiri, Wayanad, Kerala 673576, India" },
              { icon: Phone, title: "Reservations", text: "+91 98765 43210" },
              { icon: Clock, title: "Open Daily", text: "11:00 AM — 11:00 PM" },
            ].map((c) => (
              <div key={c.title} className="glass rounded-2xl p-6 flex items-start gap-5">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold/30 to-crimson/30 grid place-items-center text-gold">
                  <c.icon size={20} />
                </div>
                <div>
                  <div className="text-gold uppercase tracking-[0.2em] text-xs">{c.title}</div>
                  <div className="font-display text-xl mt-1">{c.text}</div>
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/919876543210?text=I'd%20like%20to%20reserve%20a%20table%20at%20Regal%20Food%20Restaurant"
                target="_blank" rel="noopener"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-gold text-charcoal rounded-full uppercase tracking-[0.18em] text-sm font-medium hover:shadow-glow transition-all"
              >
                <MessageCircle size={18} /> WhatsApp Reservation
              </a>
              <a
                href="tel:+919876543210"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 border border-gold/40 text-cream rounded-full uppercase tracking-[0.18em] text-sm font-medium hover:bg-gold/10 transition-all"
              >
                <Phone size={18} /> Call Us
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden border border-gold/20 min-h-[320px] h-auto shadow-luxe">
            <iframe
              title="Regal Food Restaurant location"
              src="https://www.google.com/maps?q=Vythiri,Wayanad,Kerala&output=embed"
              className="w-full h-full grayscale-[40%] contrast-110"
              loading="lazy"
            />
          </motion.div>
        </div>

        <footer className="mt-24 border-t border-cream/10 pt-10 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-full grid place-items-center border border-gold/40 bg-crimson font-display">R</span>
            <div>
              <div className="font-display text-lg">Regal Food Restaurant</div>
              <div className="text-cream/50 text-xs uppercase tracking-[0.25em]">Vythiri · Wayanad</div>
            </div>
          </div>
          <div className="text-cream/40 text-xs uppercase tracking-[0.25em]">© {new Date().getFullYear()} Regal Food. Crafted with warmth.</div>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="h-10 w-10 rounded-full border border-cream/15 grid place-items-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all"><Instagram size={16} /></a>
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full border border-cream/15 grid place-items-center hover:bg-gold hover:text-charcoal hover:border-gold transition-all"><Facebook size={16} /></a>
          </div>
        </footer>
      </div>
    </section>
  );
}
