// src/pages/Benefits.js
import React from "react";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Benefits() {
  return (
    <main className="bg-white text-black">
      <Section title="Why Hotels Choose Carriage Concierge" center divider>
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="cc-lead text-neutral-700">
            Carriage Concierge, powered by BabyQuip, turns family travel into a hotel advantage—boosting
            satisfaction, loyalty, and revenue with <span className="cc-accent">no extra work</span> for your team.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Benefit 1 */}
          <Card className="h-full text-center">
            <h3 className="font-serif text-xl md:text-2xl cc-tight">Elevate the Guest Experience</h3>
            <p className="mt-3 text-neutral-700">
              Families can book with confidence knowing their needs will be met. Offering premium baby gear
              makes your property feel welcoming and thoughtful—creating lasting impressions and stronger reviews.
            </p>
          </Card>

          {/* Benefit 2 */}
          <Card className="h-full text-center">
            <h3 className="font-serif text-xl md:text-2xl cc-tight">Increase Bookings</h3>
            <p className="mt-3 text-neutral-700">
              Being “family-ready” sets your hotel apart from competitors and vacation rentals.
              Convenience becomes a decision driver—and you become the easy choice.
            </p>
          </Card>

          {/* Benefit 3 */}
          <Card className="h-full text-center">
            <h3 className="font-serif text-xl md:text-2xl cc-tight">Earn New Revenue</h3>
            <p className="mt-3 text-neutral-700">
              Earn a commission on every rental booked through your property. With no upfront costs and no inventory
              to manage, it’s a true win-win.
            </p>
          </Card>

          {/* Benefit 4 */}
          <Card className="h-full text-center">
            <h3 className="font-serif text-xl md:text-2xl cc-tight">Zero Operational Burden</h3>
            <p className="mt-3 text-neutral-700">
              No staff training, storage, or logistics required. Delivery, setup, and pickup are managed offsite, with
              Carriage Concierge as your single point of contact.
            </p>
          </Card>

          {/* Benefit 5 */}
          <Card className="h-full text-center">
            <h3 className="font-serif text-xl md:text-2xl cc-tight">Safety & Standards</h3>
            <p className="mt-3 text-neutral-700">
              All equipment is professionally cleaned, insured, and safety-certified—giving families peace of mind
              and hotels complete confidence.
            </p>
          </Card>

          {/* Benefit 6 */}
          <Card className="h-full text-center">
            <h3 className="font-serif text-xl md:text-2xl cc-tight">First-Mover Advantage</h3>
            <p className="mt-3 text-neutral-700">
              Position your property as a leader in family hospitality. Early adopters gain differentiation, loyalty,
              and high-value repeat bookings.
            </p>
          </Card>
        </div>

        {/* Closing line + CTA */}
        <div className="mt-12 pt-8 max-w-3xl mx-auto text-center border-t border-neutral-200">
          <p className="text-neutral-700">
            Carriage Concierge makes your property more welcoming for families, more competitive in the market,
            and more profitable—without changing the way your team works.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/partner" variant="primary" className="w-full sm:w-auto">
              Explore Partnership Opportunities
            </Button>
          </div>
          <div className="mt-6 h-px bg-[color:var(--cc-gold)]/40 w-24 mx-auto" />
        </div>
      </Section>
    </main>
  );
}