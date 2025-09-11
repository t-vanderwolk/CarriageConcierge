import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="flex justify-center my-20">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-32 h-[3px] bg-[#C9A24E] rounded-full shadow-sm"
      />
    </div>
  );
}