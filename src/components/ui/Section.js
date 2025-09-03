import React from "react";

export default function Section({ title, center=false, divider=false, children }) {
  return (
    <section className={`cc-section ${divider ? "cc-divider" : ""}`}>
      <div className="cc-container">
        {title && (
          <header className={`mb-7 md:mb-9 ${center ? "text-center" : ""}`}>
            <h2 className="font-serif tracking-wide">{title}</h2>
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
