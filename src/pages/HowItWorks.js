// src/pages/HowItWorks.js
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function HowItWorks() {
  return (
    <main className="bg-white text-black">
      <Section title="Simple. Seamless. Stress-Free." center divider>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-neutral-700">
            Carriage Concierge makes it effortless for hotels to offer premium family travel
            solutions—without adding work for staff.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Step 1 – Reservation */}
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 1</p>
            <h3 className="font-serif text-xl mt-1">Reservation</h3>
            <p className="mt-2 text-neutral-700">
              Guests reserve baby gear through a dedicated booking link provided to your hotel.
              Add the link to your website, booking confirmations, or share via front desk/concierge.
            </p>
          </Card>

          {/* Step 2 – Delivery & Setup */}
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 2</p>
            <h3 className="font-serif text-xl mt-1">Delivery & Setup</h3>
            <p className="mt-2 text-neutral-700">
              Gear is delivered, professionally cleaned, and set up in the guest’s room before arrival.
              Everything is handled offsite and insured—no hotel staff involvement required.
            </p>
          </Card>

          {/* Step 3 – Pickup & Commission */}
          <Card>
            <p className="uppercase text-[11px] tracking-[0.2em] text-neutral-500">Step 3</p>
            <h3 className="font-serif text-xl mt-1">Pickup & Commission</h3>
            <p className="mt-2 text-neutral-700">
              After checkout, we collect the gear seamlessly. Your property receives a commission on
              every rental—incremental revenue paired with elevated guest satisfaction.
            </p>
          </Card>
        </div>

        {/* Closing CTA */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <h3 className="font-serif text-2xl">Hospitality Made Easy</h3>
          <p className="mt-3 text-neutral-700">
            Carriage Concierge is the bridge between hotels and proven logistics—packaging a guest-friendly
            service as a polished amenity. Your team lifts no extra weight, and your guests feel truly cared for.
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