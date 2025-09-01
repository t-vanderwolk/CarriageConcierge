import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-800">
      <div className="cc-container py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Carriage Concierge</span>
        <span className="text-white/80">
          Luxury Hospitality Partner · <span className="text-white/70">Trusted logistics engine by</span> <span className="cc-accent">BabyQuip</span>
        </span>
      </div>
    </footer>
  );
}