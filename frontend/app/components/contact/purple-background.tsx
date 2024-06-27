// components/contact/PurpleBackground.tsx
import { motion } from "framer-motion";

export default function PurpleBackground() {
  return (
    <motion.div
      className="fixed inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-slate-950" />
      <div className="absolute inset-0 bg-[url('/noise-texture.png')] opacity-50 mix-blend-overlay" />
    </motion.div>
  );
}
