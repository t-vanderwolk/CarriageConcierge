// src/components/Hero.jsx
import { motion } from "framer-motion";
import logoImg from "../assets/heroLogo.png";

export default function Hero({
  subtitle = "Delight Guests. Drive Revenue. No Extra Work.",
  pageTitle = "",
}) {
  return (
    <section className="relative px-6 py-20 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        {/* 🖼 Logo */}
        <motion.img
          src={logoImg}
          alt="Carriage Concierge logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-4 w-36 md:w-44"
        />

        {/* 🏷 Brand Title (Shown Only if no pageTitle) */}
        {!pageTitle && (
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-light tracking-tight"
          >
            Carriage <span className="font-cursive text-primary">Concierge</span>
          </motion.h1>
        )}

        {/* 🎯 Page-Specific Title in Cursive */}
        {pageTitle && (
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl font-cursive text-primary tracking-tight mb-2"
          >
            {pageTitle}
          </motion.h1>
        )}

        {/* 💬 Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-700"
        >
          {subtitle}
        </motion.h2>

      </div>
    </section>
  );
}