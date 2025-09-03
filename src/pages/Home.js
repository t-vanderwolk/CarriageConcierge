// src/pages/Home.js
import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import heroRoom from "../assets/hero-room.png"; // HERO background (required)

// Lightweight inline SVG placeholders (rendered if your images aren't added yet)
const PLACEHOLDER_LANDSCAPE =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'>\
<rect width='100%' height='100%' fill='%23eeeeee'/>\
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' \
font-family='Helvetica, Arial, sans-serif' font-size='24' fill='%23999999'>Image Placeholder</text>\
</svg>";

const PLACEHOLDER_LOGO =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='200' height='60'>\
<rect width='100%' height='100%' rx='10' fill='%23e5e5e5'/>\
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' \
font-family='Helvetica, Arial, sans-serif' font-size='14' fill='%23909090'>Logo</text>\
</svg>";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* =========================
         HERO (elegant suite background)
      ========================== */}
      <section className="relative isolate bg-black text-white">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroRoom})` }}
          aria-hidden="true"
        />
        {/* Gradient veil for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" aria-hidden="true" />
        <div className="relative z-10 cc-container py-24 md:py-32 text-center">
          <h1 className="font-serif tracking-wide text-white">Family Comfort, Delivered.</h1>
          <p className="mt-6 text-base md:text-xl text-neutral-200 max-w-2xl mx-auto">
            A seamless hotel amenity offering premium baby gear—delivered, set up, and removed with
            <span className="cc-accent"> no burden</span> on your staff.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:flex sm:flex-row gap-3 justify-center">
            <Button to="/partner" variant="primary" className="w-full sm:w-auto">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* =========================
         Section 2: The Challenge (text + image)
      ========================== */}
      <Section title="Traveling Families, Elevated Expectations" center divider>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Copy */}
          <div className="space-y-4">
            <p className="text-neutral-700">
              Today’s guests want more than a beautiful room—they want ease, confidence, and comfort for the whole family.
              Traveling with bulky cribs, strollers, and car seats is stressful, and families often choose vacation rentals
              or competitors that feel more “family-ready.”
            </p>
            <p className="text-neutral-700">
              Hotels that solve this challenge earn loyalty, repeat bookings, and stronger guest satisfaction scores.
            </p>
          </div>
          {/* Visual: Family arrival */}
          <img
            src={"/images/family-arrival.png"}
            onError={(e) => { e.currentTarget.src = PLACEHOLDER_LANDSCAPE; }}
            alt="Family entering a hotel room with stroller and travel crib ready"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </Section>

      {/* =========================
         Section 3: Our Solution (image + copy)
      ========================== */}
      <Section title="Carriage Concierge — Powered by BabyQuip" center divider>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Visual: Parents enjoying coffee */}
          <img
            src={"/images/lifestyle-coffee.png"}
            onError={(e) => { e.currentTarget.src = PLACEHOLDER_LANDSCAPE; }}
            alt="Parents enjoying coffee while baby sleeps in an in-room crib"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
          {/* Copy */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl">Turnkey Family Travel Solutions</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-1">
              <li>Premium baby gear (cribs, strollers, car seats, high chairs)</li>
              <li>Delivery, in-room setup, and pickup at checkout</li>
              <li>Professionally cleaned, insured, and safety-certified equipment</li>
              <li>Seamless booking links for guests, tailored to your property</li>
            </ul>
            <p className="text-neutral-700">
              All logistics are managed by <span className="cc-accent">BabyQuip</span>, the trusted leader in family travel rentals.
              Carriage Concierge serves as your hotel’s single point of contact, packaging the service as an amenity—not a vendor.
            </p>
          </div>
        </div>
      </Section>

      {/* =========================
         VISUAL DETAIL BANNER — luxury lobby/chandelier/corridor
      ========================== */}
      <section className="relative isolate">
        <div
          className="absolute inset-0 bg-[url('/images/detail-banner.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        {/* Soft veil so it never competes with text elsewhere */}
        <div className="absolute inset-0 bg-white/80" aria-hidden="true" />
        <div className="relative z-10 cc-container h-40 md:h-56 flex items-center justify-center">
          <span className="font-serif text-black/80 text-lg md:text-xl tracking-wide">
            Discreet. Polished. Hospitality-grade.
          </span>
        </div>
      </section>

      {/* =========================
         Section 4: Benefits (3-column on desktop)
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
         TRUSTED PARTNERS / BRANDS (monochrome logos)
      ========================== */}
      <section className="cc-section cc-divider">
        <div className="cc-container">
          <h2 className="font-serif text-2xl md:text-3xl text-center">Trusted Partners</h2>
          <p className="mt-2 text-center text-neutral-600 text-sm">
            Logistics by <span className="cc-accent">BabyQuip</span>. Preferred gear partners include:
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
            <img src="/logos/babyquip.svg" onError={(e)=>{e.currentTarget.src=PLACEHOLDER_LOGO;}} alt="BabyQuip" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
            <img src="/logos/nuna.svg" onError={(e)=>{e.currentTarget.src=PLACEHOLDER_LOGO;}} alt="Nuna" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
            <img src="/logos/uppababy.svg" onError={(e)=>{e.currentTarget.src=PLACEHOLDER_LOGO;}} alt="UPPAbaby" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
            <img src="/logos/silvercross.svg" onError={(e)=>{e.currentTarget.src=PLACEHOLDER_LOGO;}} alt="Silver Cross" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
            <img src="/logos/veer.svg" onError={(e)=>{e.currentTarget.src=PLACEHOLDER_LOGO;}} alt="VEER" className="h-8 sm:h-10 w-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition" />
          </div>

          <p className="mt-3 text-center text-neutral-500 text-xs">
            Additional brands available by market.
          </p>
        </div>
      </section>

      {/* =========================
         Final CTA
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
          <div className="mt-6 h-px bg-[color:var(--cc-accent)]/40 w-24 mx-auto" />
        </div>
      </Section>
    </main>
  );
}