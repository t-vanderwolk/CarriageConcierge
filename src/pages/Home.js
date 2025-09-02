// src/pages/Home.js
import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* =========================
         Hero (with elegant hotel bg)
      ========================== */}
      <section className="relative isolate bg-black text-white">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-45"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" aria-hidden="true" />
        <div className="relative z-10 cc-container py-24 md:py-32 text-center">
          <h1 className="font-serif tracking-wide text-white">Family Comfort, Delivered.</h1>
          <p className="mt-6 text-base md:text-xl text-neutral-200 max-w-2xl mx-auto">
            A seamless hotel amenity offering premium baby gear—delivered, set up, and removed with
            <span className="cc-accent"> no burden</span> on your staff.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:flex sm:flex-row gap-3 justify-center">
            <Button to="/partner" variant="primary" className="w-full sm:w-auto">Partner With Us</Button>
          </div>
        </div>
      </section>

      {/* =========================
         Section 2: The Challenge
      ========================== */}
      <Section title="Traveling Families, Elevated Expectations" center divider>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-neutral-700">
            Today’s guests want more than a beautiful room—they want ease, confidence, and comfort for the whole family.
            Traveling with bulky cribs, strollers, and car seats is stressful, and families often choose vacation rentals
            or competitors that feel more “family-ready.”
          </p>
          <p className="mt-4 text-neutral-700">
            Hotels that solve this challenge earn loyalty, repeat bookings, and stronger guest satisfaction scores.
          </p>
        </div>
      </Section>

      {/* =========================
         Section 3: Our Solution
      ========================== */}
      <Section title="Carriage Concierge — Powered by BabyQuip" center divider>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card>
            <h3 className="font-serif text-xl">Turnkey Family Travel Solutions</h3>
            <ul className="mt-3 list-disc list-inside text-neutral-700 space-y-1">
              <li>Premium baby gear (cribs, strollers, car seats, high chairs)</li>
              <li>Delivery, in-room setup, and pickup at checkout</li>
              <li>Professionally cleaned, insured, and safety-certified equipment</li>
              <li>Seamless booking links for guests, tailored to your property</li>
            </ul>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">A Hospitality-First Partnership</h3>
            <p className="mt-2 text-neutral-700">
              All logistics are managed by <span className="cc-accent">BabyQuip</span>, the trusted leader in family travel rentals.
              Carriage Concierge serves as your hotel’s single point of contact, packaging the service as an
              amenity—not a vendor—so it feels like a natural extension of your brand.
            </p>
          </Card>
        </div>
      </Section>

      {/* =========================
         Section 4: Benefits for Hotels
      ========================== */}
      <Section title="Why Hotels Choose Carriage Concierge" center divider>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <h3 className="font-serif text-xl">Guest Experience</h3>
            <p className="mt-2 text-neutral-700">
              Delight families with a service that makes travel stress-free and genuinely welcoming.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Revenue</h3>
            <p className="mt-2 text-neutral-700">
              Earn commission on every booking—no upfront investment or inventory required.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif text-xl">Effortless Operations</h3>
            <p className="mt-2 text-neutral-700">
              Zero staff training or storage. We manage everything behind the scenes.
            </p>
          </Card>
        </div>
      </Section>

      {/* =========================
         Section 5: How It Works
      ========================== */}
      <Section title="Simple. Seamless. Stress-Free." center divider>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 1</p>
            <h3 className="font-serif text-xl mt-1">Guests Reserve</h3>
            <p className="mt-2 text-neutral-700">
              Guests reserve baby gear through a custom booking link shared on your site, in confirmations,
              or by the front desk/concierge.
            </p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 2</p>
            <h3 className="font-serif text-xl mt-1">Delivered & Set Up</h3>
            <p className="mt-2 text-neutral-700">
              Gear arrives professionally cleaned and is set up in-room before arrival—insured and handled offsite.
            </p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 3</p>
            <h3 className="font-serif text-xl mt-1">Pickup & Commission</h3>
            <p className="mt-2 text-neutral-700">
              After checkout, we collect everything seamlessly. Your property receives a commission on every rental.
            </p>
          </Card>
        </div>
      </Section>

      {/* =========================
         Section 6: Final CTA
      ========================== */}
      <Section center>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Bring Effortless Comfort to Your Guests</h2>
          <p className="mt-3 text-neutral-700">
            Carriage Concierge makes family-friendly travel simple—for hotels and the families who choose them.
            Explore how a pilot partnership could enhance your guest experience.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/partner" variant="primary" className="w-full sm:w-auto">
              Schedule a Conversation
            </Button>
          </div>
          <div className="mt-6 h-px bg-[#C9A24E]/40 w-24 mx-auto" />
        </div>
      </Section>
    </main>
  );
}