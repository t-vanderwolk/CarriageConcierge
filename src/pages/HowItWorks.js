import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function HowItWorks() {
  return (
    <main className="bg-white text-black">
      <Section title="How It Works" center divider>
        <div className="grid md:grid-cols-3 gap-6 cc-container max-w-5xl mx-auto">
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 1</p>
            <h3 className="font-serif text-xl mt-1">Branded Gear Menu</h3>
            <p className="mt-2">Guests or concierge submit requests via your custom link. We configure tiers and pricing to fit your market.</p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 2</p>
            <h3 className="font-serif text-xl mt-1">White-Glove Delivery</h3>
            <p className="mt-2">Sanitized, safety-checked gear is delivered and set up in-room pre-arrival to your standards.</p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 3</p>
            <h3 className="font-serif text-xl mt-1">Pickup & Commission</h3>
            <p className="mt-2">We retrieve and reset post-stay; your property receives a commission—no operational lift.</p>
          </Card>
        </div>

        <p className="mt-6 text-center text-neutral-500 text-sm">
          Logistics are quietly powered by <span className="cc-accent">BabyQuip</span> for consistency across cities and seasons.
        </p>

        <div className="mt-8 text-center">
          <Button to="/partner" variant="primary" className="w-full sm:w-auto">Speak with Partnerships</Button>
        </div>
      </Section>
    </main>
  );
}