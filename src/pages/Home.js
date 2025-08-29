import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen bg-rose-50 flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-serif text-rose-900 leading-tight">
            The Carriage Concierge
          </h1>
          <p className="mt-6 text-base md:text-xl text-gray-700">
            Discreet, luxury baby gear & nursery <span className="whitespace-nowrap">consulting—by</span> appointment only. Expert guidance, white‑glove execution, and absolute privacy for families who value the finest.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/request-access"
              className="rounded-full px-6 py-3 bg-rose-600 text-white text-base md:text-lg shadow hover:bg-rose-700 transition-colors"
            >
              Request Private Access
            </Link>
            <Link
              to="/services"
              className="rounded-full px-6 py-3 bg-white text-rose-900 border border-rose-200 hover:border-rose-400 hover:bg-rose-100 transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} The Carriage Concierge • Luxury Baby Gear & Nursery Services
      </footer>
    </main>
  );
}

export default Home;