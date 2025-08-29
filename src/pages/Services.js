import React from "react";

function Services() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-serif text-rose-900">Services</h1>
        <ul className="mt-6 text-gray-700 space-y-2 text-left mx-auto max-w-md list-disc list-inside">
          <li>Personal shopping & registry curation</li>
          <li>Luxury nursery design guidance</li>
          <li>CPST car seat education & coordination</li>
          <li>White-glove delivery & setup coordination</li>
          <li>Private in-home demos & stroller test drives</li>
        </ul>
      </div>
    </main>
  );
}

export default Services;