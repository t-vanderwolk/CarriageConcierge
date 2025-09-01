import React from "react";

export function Section({ title, kicker, center=false, divider=false, children }) {
  return (
    <section>
      <div className={`cc-section ${divider ? "cc-divider" : ""}`}>
        <div className={`cc-container ${center ? "text-center" : ""}`}>
          {kicker && <p className="cc-kicker">{kicker}</p>}
          {title && <h2 className={`${center ? "mx-auto" : ""}`}>{title}</h2>}
          <div className={`mt-8 ${center ? "mx-auto" : ""}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}
export default Section;