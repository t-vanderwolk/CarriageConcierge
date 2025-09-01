import React from "react";
export default function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="cc-container py-8 text-sm cc-muted flex flex-col sm:flex-row items-center justify-between gap-3">
<span>© {new Date().getFullYear()} Carriage Concierge</span>
<span>Powered by BabyQuip</span>        <span>Scottsdale · Hotel Amenity Program</span>
      </div>
    </footer>
  );
}