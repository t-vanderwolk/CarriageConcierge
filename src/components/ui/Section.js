import React from "react";
import { Container } from "./Container";

export function Section({ title, kicker, children, className = "", center = false }) {
  return (
    <section className={`py-14 md:py-20 ${className}`}>
      <Container>
        {kicker && (
          <p className="text-xs tracking-widest uppercase text-rose-600/80 mb-3">
            {kicker}
          </p>
        )}
        {title && (
          <h2 className={`font-serif text-3xl md:text-4xl text-rose-900 ${center ? "text-center" : ""}`}>
            {title}
          </h2>
        )}
        <div className={`${title ? "mt-6" : ""} ${center ? "mx-auto" : ""}`}>{children}</div>
      </Container>
    </section>
  );
}