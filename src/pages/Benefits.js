// src/pages/Benefits.js
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Benefits() {
  return (
    <main className="bg-white text-black">
      <Section title="Why Hotels Choose Carriage Concierge" center divider>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-neutral-700">
            Carriage Concierge, powered by BabyQuip, turns family travel into a hotel advantage—
            boosting satisfaction, loyalty, and revenue with <span className="cc-accent">no extra work</span> for your team.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Benefit 1 */}
          <Card>
            <h3 className="font-serif text-xl">Elevate the Guest Experience</h3>
            <p className="mt-2 text-neutral-700">
              Families can book with confidence knowing their needs will be met. Offering premium
              baby gear makes your property feel welcoming and thoughtful, creating lasting impressions
              and stronger guest reviews.
            </p>
          </Card>

          {/* Benefit 2 */}
          <Card>
            <h3 className="font-serif text-xl">Increase Bookings</h3>
            <p className="mt-2 text-neutral-700">
              Being “family-ready” sets your hotel apart from competitors and vacation rentals.
              Parents often choose where to stay based on convenience—this amenity becomes a powerful decision driver.
            </p>
          </Card>

          {/* Benefit 3 */}
          <Card>
            <h3 className="font-serif text-xl">Earn New Revenue</h3>
            <p className="mt-2 text-neutral-700">
              Hotels earn a commission on every rental booked through their property. With no upfront
              costs and no inventory to manage, it’s a true win-win.
            </p>
          </Card>

          {/* Benefit 4 */}
          <Card>
            <h3 className="font-serif text-xl">Zero Operational Burden</h3>
            <p className="mt-2 text-neutral-700">
              No staff training, storage, or logistics required. Every delivery, setup, and pickup
              is managed offsite by the provider, with Carriage Concierge serving as your single point of contact.
            </p>
          </Card>

          {/* Benefit 5 */}
          <Card>
            <h3 className="font-serif text-xl">Align with Proven Safety & Standards</h3>
            <p className="mt-2 text-neutral-700">
              All equipment is professionally cleaned, fully insured, and safety-certified—giving families
              peace of mind and hotels confidence in the partnership.
            </p>
          </Card>

          {/* Benefit 6 — NEW */}
          <Card>
            <h3 className="font-serif text-xl">First Mover Advantage</h3>
            <p className="mt-2 text-neutral-700">
              Position your property as a leader in family hospitality. Early adopters of Carriage Concierge
              gain differentiation in their market, attracting press, loyalty, and high-value repeat bookings.
            </p>
          </Card>
        </div>

        {/* Closing line + CTA */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-neutral-700">
            Carriage Concierge makes your property more welcoming for families, more competitive in the market,
            and more profitable—without changing the way your team works.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/partner" variant="primary" className="w-full sm:w-auto">
              Explore Partnership Opportunities
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}