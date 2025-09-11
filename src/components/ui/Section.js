import React from "react";
import { motion } from "framer-motion";

export default function Section({
  kicker,
  title,
  children,
  image,
  imageAlt = "",
  imagePosition = "right",
}) {
  const isLeft = imagePosition === "left";
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-6"
    >
      <div className={`max-w-6xl mx-auto flex flex-col-reverse ${isLeft ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-20`}>
        <div className="w-full md:w-1/2">
          {kicker && <p className="text-sm uppercase tracking-widest text-primary font-medium mb-2">{kicker}</p>}
          <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4">{title}</h2>
          <div className="text-lg leading-relaxed text-gray-700">{children}</div>
        </div>
        {image && (
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={image} alt={imageAlt} className="w-full max-w-[450px] object-contain rounded-lg shadow-lg mx-auto" />
          </div>
        )}
      </div>
    </motion.section>
  );
}