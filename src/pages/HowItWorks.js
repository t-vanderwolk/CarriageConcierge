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
            <h3 className="font-serif text-xl mt-1">Guest Books via Custom Link</h3>
            <p className="mt-2">We create a branded gear menu and booking link. Guests or your concierge request items in seconds.</p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 2</p>
            <h3 className="font-serif text-xl mt-1">Deliver & Set Up Pre-Arrival</h3>
            <p className="mt-2">White-glove delivery and in-room setup to your standards. Sanitized and safety-checked.</p>
          </Card>
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 3</p>
            <h3 className="font-serif text-xl mt-1">Pickup & Commission</h3>
            <p className="mt-2">After checkout we retrieve and reset. Your property receives a commission — no ops lift.</p>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button to="/partner" variant="primary">Speak with Partnerships</Button>
        </div>
      </Section>
    </main>
  );
}