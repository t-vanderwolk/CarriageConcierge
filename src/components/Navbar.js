import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/heroLogo.png"; // Optional if you still want logo

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "About", to: "/about" },
    { label: "How It Works", to: "/how-it-works" },
    { label: "Benefits", to: "/benefits" },
    { label: "For Hotels", to: "/for-hotels" },
    { label: "Partner With Us", to: "/partner" },
  ];

  return (
    <nav className="bg-white sticky top-0 z-30 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">

        {/* 🔰 Branded Name */}
<Link to="/" className="flex flex-col items-center space-y-px -ml-2 md:-ml-4 group">
  <img
    src={logoImg}
    alt="Logo"
    className="h-7 md:h-9 transition-transform duration-300 group-hover:scale-105"
  />
  <span className="text-base md:text-lg font-serif text-gray-900 tracking-tight leading-tight text-center transition-colors duration-300 group-hover:text-primary">
    Carriage <span className="font-cursive">Concierge</span>
  </span>
</Link>

        {/* 🌐 Desktop Nav */}
        <div className="hidden md:flex gap-10 text-base">
          {navItems.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={label}
                to={to}
                className={`relative transition-colors ${
                  isActive ? "text-gray-900 font-semibold" : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {label}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-primary transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* 📱 Mobile Toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center space-y-6 text-lg z-40">
          {navItems.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="text-gray-800 hover:text-gray-900"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}