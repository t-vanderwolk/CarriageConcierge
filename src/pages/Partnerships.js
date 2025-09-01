// src/pages/Partnerships.js
import React, { useState } from "react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";

export default function Partnerships() {
  const [form, setForm] = useState({
    propertyName: "",
    brandFlag: "",
    contactName: "",
    title: "",
    email: "",
    phone: "",
    rooms: "",
    markets: "",
    notes: "",
  });

  const set = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.propertyName.trim() || !form.contactName.trim() || !form.email.trim()) {
      alert("Please provide Property Name, Contact Name, and Email.");
      return;
    }
    // Demo: replace with backend/CRM handoff (email, webhook, etc.)
    console.log("Partnership inquiry:", form);
    alert("Thank you — our partnerships team will reach out shortly.");
    setForm({
      propertyName: "", brandFlag: "", contactName: "", title: "",
      email: "", phone: "", rooms: "", markets: "", notes: "",
    });
  }

  return (
    <main className="bg-white text-black">
      <Section title="Partnerships" center divider>
        <Card className="max-w-3xl mx-auto">
          <h3 className="font-serif text-xl text-center">Request a Partnership Intro</h3>
          <p className="mt-2 text-sm cc-muted text-center">
            We’ll coordinate a brief discovery call and a tailored amenity plan.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Property Name *" value={form.propertyName} onChange={(e) => set("propertyName", e.target.value)} />
              <Input label="Brand / Flag" value={form.brandFlag} onChange={(e) => set("brandFlag", e.target.value)} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Contact Name *" value={form.contactName} onChange={(e) => set("contactName", e.target.value)} />
              <Input label="Title" value={form.title} onChange={(e) => set("title", e.target.value)} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Email *" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
              <Input label="Phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Room Count (approx.)" value={form.rooms} onChange={(e) => set("rooms", e.target.value)} />
              <Input label="Markets (city/state)" value={form.markets} onChange={(e) => set("markets", e.target.value)} />
            </div>
            <label className="block">
              <span className="cc-label">Notes</span>
              <textarea
                className="cc-input min-h-[120px]"
                placeholder="Desired timing, pilot properties, special requests…"
                value={form.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
            </label>

            <div className="mt-3 flex justify-center">
              <Button as="button" type="submit" variant="primary">Submit</Button>
            </div>
          </form>
        </Card>
      </Section>
    </main>
  );
}