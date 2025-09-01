// components/ui/Section.js
import React from "react";

export function Section({ title, kicker, center = false, children }) {
  return (
    <section className="relative">
      <div className={`mx-auto max-w-6xl px-6 md:px-8 py-12 ${center ? "text-center" : ""}`}>
        {kicker && (
          <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-400">
            {kicker}
          </p>
        )}
        {title && (
          <h2 className={`mt-2 font-serif text-3xl md:text-4xl ${center ? "mx-auto" : ""} text-black`}>
            {title}
          </h2>
        )}
        <div className={`mt-8 ${center ? "mx-auto" : ""}`}>{children}</div>
      </div>
    </section>
  );
}