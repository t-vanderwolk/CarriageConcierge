// src/pages/Home.js
import React from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import heroRoom from "../assets/hero-room.png";
import lifestyleCoffee from "../assets/lifestyle-coffee.png";
import familyArrival from "../assets/family-arrival.png";

export default function Home() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative isolate bg-black text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroRoom})` }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32 text-center">
          <h1 className="font-serif tracking-wide text-white">
            Family Comfort, Delivered.
          </h1>
          <p className="mt-6 text-base md:text-xl text-neutral-200 max-w-2xl mx-auto">
            A seamless hotel amenity offering premium baby gear—delivered, set up,
            and removed with
            <span className="text-[#C9A24E]"> no burden</span> on your staff.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button to="/partner" variant="primary">
              Partner With Us
            </Button>
            <Button to="/how-it-works" variant="outline">
              How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <Section title="Traveling Families, Elevated Expectations" center divider>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-center md:text-left">
            <p className="text-neutral-700">
              Today’s guests want ease, confidence, and comfort for the whole family.
              Traveling with cribs, strollers, and car seats is stressful, and families
              often choose properties that feel “family-ready.”
            </p>
            <p className="text-neutral-700">
              Hotels that solve this challenge earn loyalty, repeat bookings, and
              stronger satisfaction scores.
            </p>
          </div>
          <img
            src={familyArrival}
            alt="Family arrival with gear ready"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </Section>

      {/* Our Solution */}
      <Section title="Carriage Concierge — Powered by BabyQuip" center divider>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <img
            src={lifestyleCoffee}
            alt="Parents enjoying coffee; baby asleep in-room"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
          <div className="space-y-4 text-center md:text-left">
            <h3 className="font-serif text-xl">Turnkey Family Travel Solutions</h3>
            <ul className="list-disc list-inside text-neutral-700 space-y-1 inline-block text-left">
              <li>Premium baby gear (cribs, strollers, car seats, high chairs)</li>
              <li>Delivery, in-room setup, and pickup at checkout</li>
              <li>Professionally cleaned, insured, and safety-certified equipment</li>
              <li>Seamless booking links tailored to your property</li>
            </ul>
            <p className="text-neutral-700">
              Logistics by <span className="text-[#C9A24E]">BabyQuip</span>. Carriage
              Concierge is your single partner, packaging the service as a hotel
              amenity—not a vendor.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section title="Why Hotels Choose Carriage Concierge" center divider>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <h3 className="font-serif text-xl">Guest Experience</h3>
            <p className="mt-2 text-neutral-700">
              Delight families with stress-free, thoughtful comfort.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl">Revenue</h3>
            <p className="mt-2 text-neutral-700">
              Earn commission on every booking—no upfront investment.
            </p>
          </Card>
          <Card className="text-center">
            <h3 className="font-serif text-xl">Effortless Operations</h3>
            <p className="mt-2 text-neutral-700">
              Zero training or storage. We handle everything.
            </p>
          </Card>
        </div>
      </Section>

      {/* Steps */}
      <Section title="Simple. Seamless. Stress-Free." center divider>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="text-center">
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">
              Step 1
            </p>
            <h3 className="font-serif text-xl mt-1">Guests Reserve</h3>
            <p className="mt-2 text-neutral-700">
              Custom booking link on your site, confirmations, or via concierge.
            </p>
          </Card>
          <Card className="text-center">
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">
              Step 2
            </p>
            <h3 className="font-serif text-xl mt-1">Delivered & Set Up</h3>
            <p className="mt-2 text-neutral-700">
              Professionally cleaned gear, installed before arrival.
            </p>
          </Card>
          <Card className="text-center">
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">
              Step 3
            </p>
            <h3 className="font-serif text-xl mt-1">Pickup & Commission</h3>
            <p className="mt-2 text-neutral-700">
              Seamless collection after checkout; hotel earns commission.
            </p>
          </Card>
        </div>
      </Section>

      {/* Final CTA */}
      <Section center>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl">
            Bring Effortless Comfort to Your Guests
          </h2>
          <p className="mt-3 text-neutral-700">
            Explore how a pilot partnership could enhance your guest experience.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/partner" variant="primary">
              Schedule a Conversation
            </Button>
          </div>
          <div className="mt-6 h-px bg-[#C9A24E]/40 w-24 mx-auto" />
        </div>
      </Section>
    </main>
  );
}