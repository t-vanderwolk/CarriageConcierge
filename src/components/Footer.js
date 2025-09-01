import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="cc-container py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-white">
          © {new Date().getFullYear()} Carriage Concierge
        </span>
        <span className="text-white">
          Hotel Amenity Program · <span className="cc-accent">Powered by BabyQuip</span>
        </span>
      </div>
    </footer>
  );
}