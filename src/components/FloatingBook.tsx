import { motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";

export function FloatingBook() {
  return (
    <motion.a
      href="#contact"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3 bg-crimson text-cream rounded-full shadow-luxe hover:shadow-glow uppercase tracking-[0.18em] text-xs"
    >
      <CalendarHeart size={16} /> Book a Table
    </motion.a>
  );
}
