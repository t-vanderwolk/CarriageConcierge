import React from "react";

export default function Section({
  id,               // <-- accept id
  title,
  center = false,
  divider = false,
  className = "",
  children,
}) {
  return (
    <section
      id={id}       // <-- forward id to the DOM
      className={`cc-section ${divider ? "cc-divider" : ""} ${className} scroll-mt-24 md:scroll-mt-28`}
      /* scroll-mt offsets anchor targets for the sticky nav */
    >
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