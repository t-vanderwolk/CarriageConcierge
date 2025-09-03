// src/pages/About.js
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function About() {
  return (
    <main className="bg-white text-black">
      {/* Intro */}
      <Section center>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif cc-tight">Where Hospitality Meets Family Comfort</h2>
          <p className="mt-4 cc-lead text-neutral-700">
            Carriage Concierge was created to make family travel effortless for hotels and their guests.
            We bridge luxury hospitality and proven logistics—so your property feels instinctively welcoming
            to every guest, without adding work for your team.
          </p>
        </div>
      </Section>

      {/* Our Purpose */}
      <Section title="Our Purpose" center divider>
        <div className="max-w-3xl mx-auto">
          <p>
            Traveling with young children is both a joy and a challenge. Families value ease, safety, and a sense of home.
            Hotels that rise to meet those needs earn loyalty, repeat bookings, and stronger satisfaction scores.
          </p>
          <p className="mt-4">
            We partner with properties to provide seamless access to premium baby gear—cribs, strollers, car seats, high chairs, and more—
            delivered, set up, and removed with white-glove care. The result is thoughtful comfort families remember—and review.
          </p>
        </div>
      </Section>

      {/* Powered by Proven Logistics */}
      <Section title="Powered by Proven Logistics" center divider>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-serif">Safety & Assurance</h3>
            <p className="mt-2 text-neutral-700">
              Professionally cleaned, safety-certified equipment with insurance and liability coverage.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif">Reliable Fulfillment</h3>
            <p className="mt-2 text-neutral-700">
              Nationwide logistics and consistent standards, aligned to hospitality expectations.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif">Hotel-Grade Presentation</h3>
            <p className="mt-2 text-neutral-700">
              Discreet, polished setup that feels like a natural part of your guest experience.
            </p>
          </Card>
        </div>
        <p className="mt-6 text-center text-neutral-700">
          Logistics are powered by <span className="cc-accent">BabyQuip</span>, the trusted leader in family travel rentals.
        </p>
      </Section>

      {/* Our Role */}
      <Section title="Our Role" center divider>
        <div className="max-w-3xl mx-auto">
          <p>
            Carriage Concierge serves as your hotel’s exclusive relationship manager and brand partner.
            We package a proven service as a true amenity—not a third-party rental—through co-branded booking links,
            guest-facing collateral, and white-glove presentation. Your team lifts no extra weight; your guests feel cared for.
          </p>
        </div>
      </Section>

      {/* Our Promise */}
      <Section title="Our Promise" center divider>
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="font-serif">Differentiate</h3>
            <p className="mt-2 text-neutral-700">
              Stand out in competitive markets with a family-ready experience.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif">Delight</h3>
            <p className="mt-2 text-neutral-700">
              Elevate satisfaction and inspire repeat stays with thoughtful comfort.
            </p>
          </Card>
          <Card>
            <h3 className="font-serif">Do Less</h3>
            <p className="mt-2 text-neutral-700">
              No storage, no sanitization, no training. We manage everything end-to-end.
            </p>
          </Card>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section center>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif cc-tight">Hospitality That Welcomes Every Guest</h2>
          <p className="mt-3 text-neutral-700">
            Partner with Carriage Concierge to bring seamless family comfort to your property—powered by
            BabyQuip and delivered with hotel-grade care.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/partner" variant="primary">Request a Partnership Intro</Button>
          </div>
          <div className="mt-6 h-px bg-[color:var(--cc-gold)]/40 w-24 mx-auto" />
        </div>
      </Section>
    </main>
  );
}