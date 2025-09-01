import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-neutral-200">
      <div className="cc-container h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-wide text-white">
          Carriage Concierge
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 text-sm">
          <Link to="/about" className="hover:text-neutral-300">About</Link>
          <Link to="/how-it-works" className="hover:text-neutral-300">How It Works</Link>
          <Link to="/benefits" className="hover:text-neutral-300">Benefits</Link>
          <Link to="/partner" className="hover:text-neutral-300">Partner With Us</Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-700 hover:bg-neutral-900"
          aria-label="Toggle navigation"
          onClick={() => setOpen(s => !s)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black">
          <div className="cc-container py-3 grid gap-2 text-sm">
            <Link to="/about" className="py-2 text-white/90 hover:text-white" onClick={() => setOpen(false)}>About</Link>
            <Link to="/how-it-works" className="py-2 text-white/90 hover:text-white" onClick={() => setOpen(false)}>How It Works</Link>
            <Link to="/benefits" className="py-2 text-white/90 hover:text-white" onClick={() => setOpen(false)}>Benefits</Link>
            <Link to="/partner" className="py-2 text-white/90 hover:text-white" onClick={() => setOpen(false)}>Partner With Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}