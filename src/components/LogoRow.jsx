// src/components/LogoRow.jsx
import React from "react";
import { motion } from "framer-motion";
const logos = [
  { src: "/images/partners/bugaboo.png", alt: "Bugaboo" },
  { src: "/images/partners/nuna.png", alt: "Nuna" },
  { src: "/images/partners/uppababy.png", alt: "UPPAbaby" },
  { src: "/images/partners/silvercross.png", alt: "Silver Cross" },
  { src: "/images/partners/cybex.png", alt: "Cybex" },
  { src: "/images/partners/britax.png", alt: "Britax" },
  { src: "/images/partners/veer.png", alt: "VEER" },
  { src: "/images/partners/bumbleride.png", alt: "Bumbleride" },
  { src: "/images/partners/doona.png", alt: "Doona" },
  { src: "/images/partners/graco.png", alt: "Graco" },
  { src: "/images/partners/maxi-cosi.png", alt: "Maxi-Cosi" },
  { src: "/images/partners/stokke.png", alt: "Stokke" },
  { src: "/images/partners/thule.png", alt: "Thule" },
  { src: "/images/partners/clek.png", alt: "Clek" },
  { src: "/images/partners/chicco.png", alt: "Chicco" },
  { src: "/images/partners/mockingbird.png", alt: "Mockingbird" },
  { src: "/images/partners/ergobaby.png", alt: "Ergobaby" },
  { src: "/images/partners/babybjorn.png", alt: "BabyBjorn" },
  { src: "/images/partners/evenflo.png", alt: "Evenflo" },
  { src: "/images/partners/joie.png", alt: "Joie" },
  { src: "/images/partners/happiestbaby.png", alt: "HappiestBaby" },
  { src: "/images/partners/babyjogger.png", alt: "BabyJogger" },
  { src: "/images/partners/wonderfold.png", alt: "Wonderfold" },
  { src: "/images/partners/orbitbaby.png", alt: "OrbitBaby" },
  { src: "/images/partners/bob.png", alt: "BOB" },
  { src: "/images/partners/keenz.png", alt: "Keenz" },
  { src: "/images/partners/joolz.png", alt: "Joolz" },
  { src: "/images/partners/pegperego.png", alt: "PegPerego" },
  { src: "/images/partners/babyzen.png", alt: "Babyzen" },
];

export default function LogoRow() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white py-10 px-6 border-t border-b border-gray-100"
    >
      <div className="text-center mb-6">
        <h2 className="text-lg font-medium text-gray-600 tracking-wide uppercase">Trusted by Leading Brands</h2>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-8 md:space-x-12 px-4 py-2 snap-x snap-mandatory">
          {logos.map((logo) => (
            <div key={logo.alt} className="snap-center flex-shrink-0">
              <img src={logo.src} alt={logo.alt} loading="lazy" className="h-8 md:h-10 grayscale hover:grayscale-0 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );

}