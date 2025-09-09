// src/components/Hero.jsx
import { motion } from "framer-motion";
import logoImg from "../assets/heroLogo2.png";

export default function Hero() {
  return (
    <section className="relative px-6 py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* 🖼️ Logo */}
        <motion.img
          src={logoImg}
          alt="Carriage Concierge logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-4 w-32 md:w-40" // Smaller size + less bottom margin
        />

        {/* 🏷 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-3xl md:text-5xl font-serif font-light tracking-tight"
        >
          Carriage{" "}
          <span className="font-cursive text-primary">Concierge</span>
        </motion.h1>

        {/* 🧠 Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700 mt-3"
        >
          Delight Guests. Drive Revenue. No Extra Work.
        </motion.h2>
      </div>
    </section>
  );
}