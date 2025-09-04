import React from "react";

export default function Section({ kicker, title, image, imageAlt, imagePosition = "left", children }) {
  const isImageLeft = imagePosition === "left";

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {isImageLeft && (
          <img src={image} alt={imageAlt} className="rounded-xl shadow-lg w-full" />
        )}
        <div>
          {kicker && <p className="text-sm uppercase text-primary font-medium tracking-wide mb-2">{kicker}</p>}
          {title && <h2 className="text-3xl font-serif mb-6">{title}</h2>}
          {children}
        </div>
        {!isImageLeft && (
          <img src={image} alt={imageAlt} className="rounded-xl shadow-lg w-full" />
        )}
      </div>
    </section>
  );
}