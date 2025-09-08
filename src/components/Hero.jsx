// src/components/Hero.jsx
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative px-6 py-16 md:py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-serif tracking-tight"
        >
          Carriage{" "}
          <span className="font-cursive align-baseline inline-block animate-fadeUp">
            Concierge
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="mt-4 md:mt-5 text-base md:text-lg text-neutral-600"
        >
      <h1 className="text-xl md:text-2xl text-gray-700 opacity-90 max-w-xl mx-auto">   
  Delight Guests. Drive Revenue. No Extra Work.
</h1>      </motion.p>
      </div>
    </section>
  );
}