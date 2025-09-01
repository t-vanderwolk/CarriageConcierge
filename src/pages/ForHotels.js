// src/pages/ForHotels.js
import React from "react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";

export default function ForHotels() {
  return (
    <main className="bg-white text-black">
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="cc-container py-20 text-center">
          <h1 className="font-serif tracking-wide text-4xl md:text-5xl">A Turn-Key Family Amenity for Luxury Hotels</h1>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            Offer premium strollers, cribs, and car seats as an on-brand amenity —
            <span className="text-[#C9A24E]"> with zero operational burden.</span>
          </p>
          <div className="mt-8">
            <Button to="/partnerships" variant="primary">Request Partnership</Button>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <Section title="Elevate Family Travel — Seamlessly" center divider>
        <div className="grid md:grid-cols-3 gap-6 cc-container max-w-5xl mx-auto">
          <Card>
            <h3 className="font-serif text-xl">No Ops Burden</h3>
            <p className="mt-2 text-neutral-700">
              We handle storage, sanitization, deliveries, installation, and retrieval.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Premium Brands</h3>
            <p className="mt-2 text-neutral-700">
              Curated inventory (Nuna, UPPAbaby, Silver Cross, VEER) matching your property’s standards.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Consistent Guest Experience</h3>
            <p className="mt-2 text-neutral-700">
              Hotel-grade presentation, discreet service, and city-by-city playbooks.
            </p>
          </Card>
        </div>
      </Section>

      {/* How It Works */}
      <Section title="How It Works" center divider>
        <div className="grid md:grid-cols-3 gap-6 cc-container max-w-5xl mx-auto">
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 1</p>
            <h3 className="font-serif text-xl mt-1">Amenity Menu</h3>
            <p className="mt-2 text-neutral-700">
              We configure your amenity tiers and branding; guests or concierge submit requests.
            </p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 2</p>
            <h3 className="font-serif text-xl mt-1">White-Glove Delivery</h3>
            <p className="mt-2 text-neutral-700">
              Sanitized gear delivered and installed in-room on schedule.
            </p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 3</p>
            <h3 className="font-serif text-xl mt-1">Pickup & Reset</h3>
            <p className="mt-2 text-neutral-700">
              We retrieve, sanitize, and reset; your team doesn’t touch inventory.
            </p>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button to="/partnerships" variant="primary">Speak with Partnerships</Button>
        </div>
      </Section>

      {/* Commercials */}
      <Section title="Commercial Models" center divider>
        <div className="grid md:grid-cols-3 gap-6 cc-container max-w-5xl mx-auto">
          <Card>
            <h3 className="font-serif text-xl">Revenue Share</h3>
            <p className="mt-2 text-neutral-700">
              Earn on each booking; seasonal pricing aligned to demand and brand.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Fixed Amenity Fee</h3>
            <p className="mt-2 text-neutral-700">
              Predictable structure for flagship properties and brand programs.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Hybrid</h3>
            <p className="mt-2 text-neutral-700">
              Tailored to market mix, stay length, and family segment.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section center>
        <div className="cc-container text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl">Offer a truly family-ready stay</h2>
          <p className="mt-3 text-neutral-700">Let’s pilot at one property or launch across your brand.</p>
          <div className="mt-6">
            <Button to="/partnerships" variant="primary">Request Partnership Intro</Button>
          </div>
          <div className="mt-6 h-px bg-[#C9A24E]/40 w-24 mx-auto" />
        </div>
      </Section>
    </main>
  );
}