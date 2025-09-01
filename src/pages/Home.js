// pages/Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

export default function Home() {
  const [code, setCode] = useState("");
  const [request, setRequest] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const VALID_CODE = "Tay123"; // demo access code

  function handleAccessSubmit(e) {
    e.preventDefault();
    const trimmed = code.trim();
    if (!trimmed) {
      alert("Please enter your access code.");
      return;
    }
    if (trimmed !== VALID_CODE) {
      alert("Invalid access code.");
      return;
    }
    navigate("/profile");
  }

  function handleRequestSubmit(e) {
    e.preventDefault();
    if (!request.name.trim() || !request.email.trim()) {
      alert("Please provide your name and email to request access.");
      return;
    }
    alert(`Request submitted for ${request.name} (${request.email}) (demo)`);
    setRequest({ name: "", email: "" });
  }

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide leading-tight">
            The Carriage Concierge
          </h1>
          <p className="mt-6 text-base md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Discreet, luxury baby gear & nursery consulting — by invitation only.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/services" variant="outline">Explore Services</Button>
            <Button to="/about" variant="subtle">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Private Entry with Access Code */}
      <Section title="Private Entry" center>
        <div className="max-w-xl mx-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-xl text-black text-center">Enter Access Code</h3>
          <p className="mt-2 text-neutral-600 text-sm text-center">
            Access is by invitation only. Enter your private code to proceed.
          </p>
          <form onSubmit={handleAccessSubmit} className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <input
              className="flex-1 rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
              placeholder="Access code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              aria-label="Access code"
            />
            <Button as="button" type="submit" variant="primary">Enter</Button>
          </form>
        </div>
      </Section>

      {/* Request Access */}
      <Section title="Request Access" center>
        <div className="max-w-xl mx-auto rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-xl text-black text-center">Don’t have a code?</h3>
          <p className="mt-2 text-neutral-600 text-sm text-center">
            Provide your details below to request private access.
          </p>
          <form onSubmit={handleRequestSubmit} className="mt-4 grid gap-3">
            <input
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
              placeholder="Full name"
              value={request.name}
              onChange={(e) => setRequest((s) => ({ ...s, name: e.target.value }))}
              aria-label="Full name"
            />
            <input
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
              placeholder="Email"
              type="email"
              value={request.email}
              onChange={(e) => setRequest((s) => ({ ...s, email: e.target.value }))}
              aria-label="Email"
            />
            <div className="flex justify-center mt-2">
              <Button as="button" type="submit" variant="outline">Submit Request</Button>
            </div>
          </form>
        </div>
      </Section>
    </main>
  );
}