import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-neutral-200">
      <div className="cc-container h-16 flex items-center justify-between">
<Link to="/" className="font-serif text-xl tracking-wide">
  Carriage Concierge <span className="cc-accent">Powered by BabyQuip</span>
</Link>        <div className="flex gap-6 text-sm">
          <Link to="/for-hotels" className="hover:text-neutral-300">For Hotels</Link>
          <Link to="/partnerships" className="hover:text-neutral-300">Partnerships</Link>
        </div>
      </div>
    </nav>
  );
}