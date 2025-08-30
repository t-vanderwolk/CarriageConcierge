import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

function Home() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [waitlist, setWaitlist] = useState({ name: "", email: "" });

  function handleAccessSubmit(e) {
    e.preventDefault();
    if (!code.trim()) return alert("Please enter your access code.");
    if (code === "Tay123") {
      alert("Access granted! Redirecting to profile page...");
      navigate("/profile");
    } else {
      alert("Invalid access code.");
    }
  }

  function handleWaitlistSubmit(e) {
    e.preventDefault();
    if (!waitlist.name || !waitlist.email) return alert("Please enter your name and email.");
    alert(`Waitlist submitted for ${waitlist.name} (${waitlist.email})`);
    setWaitlist({ name: "", email: "" });
  }

  return (
    <main className="min-h-screen bg-rose-50">
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-rose-900 leading-tight">
            The Carriage Concierge
          </h1>
          <p className="mt-6 text-base md:text-xl text-slate-700 max-w-2xl mx-auto">
            Discreet, luxury baby gear & nursery consulting—by appointment only. Expert guidance, white‑glove execution, and absolute privacy.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/request-access" variant="primary">Request Private Access</Button>
            <Button to="/services" variant="outline">Explore Services</Button>
            <Button to="/about" variant="subtle">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Access code + Waitlist */}
      <Section title="Private Entry & Waitlist" center>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Access Code Form */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Have an Access Code?</h3>
            <p className="mt-2 text-slate-700 text-sm">Enter your personalized code to proceed.</p>
            <form onSubmit={handleAccessSubmit} className="mt-4 flex gap-3">
              <input
                className="flex-1 rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
                placeholder="Enter access code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                aria-label="Access code"
              />
              <Button as="button" type="submit" variant="primary">Submit</Button>
            </form>
            <p className="mt-2 text-xs text-slate-500">Codes are provided by personal invitation.</p>
          </div>

          {/* Waitlist Form */}
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Join the Waitlist</h3>
            <p className="mt-2 text-slate-700 text-sm">Request an invitation. We review each inquiry individually.</p>
            <form onSubmit={handleWaitlistSubmit} className="mt-4 space-y-3">
              <input
                className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
                placeholder="Full name"
                value={waitlist.name}
                onChange={(e) => setWaitlist((s) => ({ ...s, name: e.target.value }))}
                aria-label="Full name"
              />
              <input
                className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
                placeholder="Email"
                type="email"
                value={waitlist.email}
                onChange={(e) => setWaitlist((s) => ({ ...s, email: e.target.value }))}
                aria-label="Email"
              />
              <Button as="button" type="submit" variant="primary" className="w-full">Join Waitlist</Button>
              <p className="text-xs text-slate-500 text-center">We typically respond within 48 hours.</p>
            </form>
          </div>
        </div>
      </Section>

      {/* Link Section */}
      <Section center>
        <p className="text-slate-700">Looking for more details? Visit our <Link to="/about" className="text-rose-700 underline">About</Link> page.</p>
      </Section>
    </main>
  );
}

export default Home;