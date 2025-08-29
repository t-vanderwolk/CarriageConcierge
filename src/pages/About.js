import React from "react";

function About() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-white">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-serif text-rose-900">About</h1>
        <p className="mt-4 text-gray-700">
          The Carriage Concierge is a discreet, by-appointment service for luxury baby gear and nursery design.
          We provide white-glove, invitation-only consultations for families who value privacy and excellence.
        </p>
      </div>
    </main>
  );
}

export default About;