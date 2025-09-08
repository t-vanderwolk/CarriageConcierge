// src/components/StepDiagram.jsx
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Confirm Partnership",
    text: "Align on locations, branding, and your preferred gear types.",
  },
  {
    number: "2",
    title: "Customize Messaging",
    text: "We provide pre-approved copy, visuals, and digital assets for your team.",
  },
  {
    number: "3",
    title: "Launch with Ease",
    text: "Guests request gear via your site or check-in. We handle fulfillment.",
  },
  {
    number: "4",
    title: "Earn and Repeat",
    text: "Revenue share and glowing reviews roll in—zero staff lift required.",
  },
];

export default function StepDiagram() {
  return (
    <section className="py-20 px-6 bg-white border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-light mb-12"
        >
          How It Works: <span className="text-primary">Step-by-Step</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-left flex flex-col items-start"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-primary text-white font-semibold rounded-full mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}