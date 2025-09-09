// src/components/CTASection.jsx
import React from "react";
import Button from "./ui/Button";

export default function CTASection({ title, subtitle, buttonText, buttonLink }) {
  return (
    <section className="bg-neutral-100 text-center py-16 md:py-20 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-serif font-light text-gray-900 mb-4">
          {title || "Ready to Elevate the Family Experience?"}
        </h2>
        <p className="text-base md:text-lg text-gray-700 mb-6">
          {subtitle || "Partner with Carriage Concierge and deliver more — with less effort."}
        </p>
        <Button text={buttonText || "Request a Pilot"} variant="primary" link={buttonLink || "/partner"} />
      </div>
    </section>
  );
}