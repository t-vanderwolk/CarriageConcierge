// src/pages/About.js
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function About() {
  return (
    <main className="bg-white text-black">
      {/* Headline + Sub-headline */}
      <Section title="Where Hospitality Meets Family Comfort" center divider>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-neutral-700">
            Carriage Concierge was created to make family travel effortless for hotels and their guests.
          </p>
        </div>
      </Section>

      {/* Section 1: Our Purpose */}
      <Section title="Our Purpose" divider>
        <Card className="max-w-4xl mx-auto">
          <p className="text-neutral-700">
            Traveling with young children is one of the greatest joys—and one of the greatest challenges—for
            today’s families. Hotels that rise to meet those needs not only create memorable stays, but also
            earn loyalty and repeat bookings.
          </p>
          <p className="mt-4 text-neutral-700">
            Carriage Concierge exists to make that easy. We partner with hotels to provide seamless access
            to premium baby gear—cribs, strollers, car seats, and more—delivered, set up, and removed without
            adding work for staff.
          </p>
        </Card>
      </Section>

      {/* Section 2: Powered by Proven Logistics */}
      <Section title="Powered by Proven Logistics" divider>
        <Card className="max-w-4xl mx-auto">
          <p className="text-neutral-700">
            Behind the elegance of Carriage Concierge is the trusted infrastructure of the nation’s leading
            baby gear rental provider. Together, we bring:
          </p>
          <ul className="mt-4 list-disc list-inside text-neutral-700 space-y-1">
            <li>Professionally cleaned, safety-certified equipment</li>
            <li>Insurance and liability coverage</li>
            <li>Nationwide logistics and reliable fulfillment</li>
          </ul>
          <p className="mt-4 text-neutral-700">
            This allows hotels to embrace a proven solution with complete confidence.
          </p>
        </Card>
      </Section>

      {/* Section 3: Our Role */}
      <Section title="Our Role" divider>
        <Card className="max-w-4xl mx-auto">
          <p className="text-neutral-700">
            Carriage Concierge serves as your hotel’s exclusive relationship manager and brand partner.
            We package the service as a hotel amenity—not a third-party rental. With co-branded booking
            links, guest-facing collateral, and white-glove presentation, the offering feels like a natural
            extension of your hospitality.
          </p>
        </Card>
      </Section>

      {/* Section 4: Our Promise */}
      <Section title="Our Promise" divider>
        <Card className="max-w-4xl mx-auto">
          <p className="text-neutral-700">
            We believe family travel should feel as comfortable as home. By partnering with Carriage Concierge,
            hotels can:
          </p>
          <ul className="mt-4 list-disc list-inside text-neutral-700 space-y-1">
            <li>Differentiate themselves in a competitive market</li>
            <li>Increase bookings from families</li>
            <li>Enhance guest satisfaction—without additional workload</li>
          </ul>
        </Card>
      </Section>

      {/* Closing CTA */}
      <Section center>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-neutral-700">
            Carriage Concierge ensures your guests feel cared for from check-in to checkout.
            Because true hospitality welcomes every member of the family.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/partner" variant="primary" className="w-full sm:w-auto">
              Partner With Us
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}