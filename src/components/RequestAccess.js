// pages/RequestAccess.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import useBasicInfo from "../hooks/useBasicInfo";

export default function RequestAccess() {
  const navigate = useNavigate();
  const [, setInfo] = useBasicInfo();
  const [form, setForm] = useState({ name: "", email: "", code: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.code.trim()) {
      alert("Please provide your name, email, and access code.");
      return;
    }
    setInfo((s) => ({ ...s, name: form.name.trim(), email: form.email.trim(), code: form.code.trim() }));
    navigate("/profile");
  }

  return (
    <main className="bg-white text-black">
      <Section title="Request Private Access" center>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto grid gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Enter Your Details</h3>
            <p className="text-neutral-600 mt-2 text-sm">
              Provide your information and private code to request entry.
            </p>

            <div className="mt-4 space-y-3">
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Access code"
                name="code"
                value={form.code}
                onChange={handleChange}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <Button as="button" type="submit" variant="primary">Submit Request</Button>
            </div>
          </div>
        </form>
      </Section>
    </main>
  );
}