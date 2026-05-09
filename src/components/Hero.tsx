import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-exterior.jpg";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative pb-16 min-h-[60svh] sm:min-h-[80svh] md:min-h-[100svh] w-full overflow-hidden bg-charcoal"
    >
      {/* Background image with parallax + blur */}
      <motion.div style={{ y, scale: imgScale }} className="absolute inset-0 will-change-transform">
        <img
          src={heroImg}
          alt="Regal Food Restaurant facade in Vythiri, Wayanad — premium family dining"
          className="h-full w-full object-cover"
          style={{ filter: "blur(2px) brightness(0.55) saturate(1.05)" }}
          width={1920}
          height={1280}
          fetchPriority="high"
        />
        {/* Layered cinematic overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-60 mix-blend-multiply"
          style={{ background: "radial-gradient(ellipse at center, transparent 0%, oklch(0.1 0.01 30 / 0.85) 85%)" }}
        />
      </motion.div>

      {/* Ambient color glows */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-crimson/25 blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 h-[460px] w-[460px] rounded-full bg-gold/15 blur-[140px]" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 min-h-[70svh] sm:min-h-[75svh] md:min-h-[90svh] flex flex-col items-center justify-center text-center px-4 sm:px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-10 px-4"
        >
          <span className="gold-divider" />
          <span
            className="text-gold uppercase tracking-[0.55em] text-[9px] sm:text-[11px] font-medium whitespace-nowrap"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Vythiri · Wayanad · Kerala
          </span>
          <span className="gold-divider" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-cream max-w-6xl px-4"
          style={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            fontSize: "clamp(2.25rem, 8vw, 8.5rem)",
            lineHeight: 0.95,
            letterSpacing: "-0.025em",
            textShadow: "0 8px 40px oklch(0.1 0.01 30 / 0.6)",
          }}
        >
          Regal Food
          <span
            className="block gradient-text-gold mt-2"
            style={{
              fontFamily: '"Italiana", "Playfair Display", serif',
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 6vw, 6.5rem)",
              letterSpacing: "0.01em",
            }}
          >
            Restaurant
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-10 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-6 sm:mt-8 text-cream/85 max-w-xl px-4 text-sm sm:text-base md:text-lg font-light leading-relaxed"
          style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.01em" }}
        >
          Premium family dining where authentic Kerala hospitality meets modern
          luxury — beneath the misty hills of Wayanad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 w-full max-w-lg mx-auto"
        >
          <a
            href="#menu"
            className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-[18px] bg-gold text-charcoal rounded-full uppercase tracking-[0.25em] text-[10px] sm:text-[11px] font-semibold hover:shadow-glow hover:scale-[1.03] transition-all duration-300 text-center"
          >
            Explore Menu
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 sm:px-9 py-3 sm:py-[18px] border border-cream/40 text-cream rounded-full uppercase tracking-[0.25em] text-[10px] sm:text-[11px] font-semibold hover:bg-cream hover:text-charcoal hover:border-cream transition-all duration-300 backdrop-blur-sm text-center"
          >
            Reserve a Table
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/70 z-10"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
