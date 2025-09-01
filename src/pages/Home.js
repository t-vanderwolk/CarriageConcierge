// pages/Home.js
import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* HERO — Hotel Amenity Program (solid black, no overlay) */}
      <section className="bg-black text-white">
        <div className="cc-container py-24 md:py-32 text-center">
          <h1 className="font-serif tracking-wide text-white">
  Carriage Concierge <span className="cc-accent">Powered by BabyQuip</span>
</h1>
          <p className="mt-6 text-base md:text-xl text-neutral-300 max-w-2xl mx-auto">
            A seamless amenity for hotels: premium baby gear, delivered, set up, and removed —
            <span className="cc-accent"> with zero operational burden</span> on your staff.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/partner" variant="primary">Explore Partnership Opportunities</Button>
            <Button to="/how-it-works" variant="outline">How It Works</Button>
          </div>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <Section title="A Seamless Amenity—Not Another Workflow" center divider>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card>
            <h3 className="font-serif text-xl">The Challenge</h3>
            <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1">
              <li>Families struggle to travel with bulky, regulated gear</li>
              <li>Hotels avoid gear programs due to storage, sanitization, liability</li>
              <li>Guest experience varies across cities and seasons</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">The Carriage Concierge Solution</h3>
            <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1">
              <li>Curated, premium gear delivered on demand</li>
              <li>Sanitized, safety-checked, and concierge-installed</li>
              <li><span className="cc-accent">Zero operational burden</span> for your property</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title="How It Works" center divider>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 1</p>
            <h3 className="font-serif text-xl mt-1">List the Amenity</h3>
            <p className="mt-2 text-neutral-700">We create your branded amenity menu with gear tiers and pricing aligned to your property.</p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 2</p>
            <h3 className="font-serif text-xl mt-1">Guest Requests Gear</h3>
            <p className="mt-2 text-neutral-700">Front desk or concierge submits a request, or guests book via a discreet link.</p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 3</p>
            <h3 className="font-serif text-xl mt-1">We Deliver & Retrieve</h3>
            <p className="mt-2 text-neutral-700">White-glove delivery, setup, and pickup. Sanitization protocols included.</p>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button to="/partner" variant="primary">Speak with Partnerships</Button>
        </div>
      </Section>

      {/* HOTEL BENEFITS */}
      <Section title="Designed for Hospitality" center divider>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <h3 className="font-serif text-xl">No Ops Burden</h3>
            <p className="mt-2 text-neutral-700">No storage, no cleaning, no maintenance. We handle logistics end-to-end.</p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Premium Guest Experience</h3>
            <p className="mt-2 text-neutral-700">Top-tier brands, hotel-grade presentation, and discreet service.</p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Flexible Commercials</h3>
            <p className="mt-2 text-neutral-700">Custom pricing, revenue share options, and city-by-city activation.</p>
          </Card>
        </div>
      </Section>

      {/* BRANDS */}
      <Section title="Trusted Gear. Discreetly Delivered." center divider>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center opacity-80">
            <div className="py-4 px-6 border border-neutral-200 rounded-xl text-sm">Nuna</div>
            <div className="py-4 px-6 border border-neutral-200 rounded-xl text-sm">UPPAbaby</div>
            <div className="py-4 px-6 border border-neutral-200 rounded-xl text-sm">Silver Cross</div>
            <div className="py-4 px-6 border border-neutral-200 rounded-xl text-sm">VEER</div>
          </div>
          <p className="mt-4 text-center text-neutral-500 text-sm">Additional brands available by market.</p>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section center>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Elevate your family travel experience</h2>
          <p className="mt-3 text-neutral-700">
            Offer premium family gear as a seamless amenity. We handle everything—delivery, setup, sanitization, and pickup.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/partner" variant="primary">Request a Partnership Intro</Button>
          </div>
          <div className="mt-6 h-px bg-[#C9A24E]/40 w-24 mx-auto" />
        </div>
      </Section>
    </main>
  );
}