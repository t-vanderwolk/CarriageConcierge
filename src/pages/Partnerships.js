import React from "react";
import CTASection from "../components/CTASection";
import { motion } from "framer-motion";

export default function Partnerships() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      {/* 🎯 Hero Title Section */}
      <section className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-serif font-light text-gray-900">
          Delight Families. Without Lifting a Finger.
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Let’s explore whether Carriage Concierge is the right fit for your property.
          No pressure — just a thoughtful conversation.
        </p>
      </section>

      {/* 💬 Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto bg-neutral-50 border border-gray-100 p-8 rounded-xl shadow-sm"
      >
        <form
          action="https://formspree.io/f/{your-form-id}" // ⛳️ Update with real endpoint
          method="POST"
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="md:col-span-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="hotel" className="block text-sm font-medium text-gray-700">
              Hotel / Property Name
            </label>
            <input
              type="text"
              name="hotel"
              id="hotel"
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Optional Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="4"
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Request a Pilot Conversation
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          Your info stays private. We’ll reach out within 1–2 business days.
        </p>
      </motion.div>

      {/* 🧾 Optional CTA Section */}
      <CTASection
        title="Not Ready to Connect Yet?"
        subtitle="Download a one-pager or share with your brand leadership team."
        buttonText="Download Overview"
        buttonLink="/overview.pdf"
      />
    </div>
  );
}