// pages/RequestAccess.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import useBasicInfo from "../hooks/useBasicInfo";

export default function RequestAccess() {
  const navigate = useNavigate();
  const [info, setInfo] = useBasicInfo();
  const [form, setForm] = useState({ name: "", email: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      alert("Please provide your name and email.");
      return;
    }
    // Persist into the shared basic info store so Profile is prefilled
    setInfo((s) => ({ ...s, name: form.name.trim(), email: form.email.trim() }));
    navigate("/profile");
  }

  return (
    <main className="bg-white">
      <Section title="Request Private Access" center>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto grid gap-6">
          <div className="rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
            <h3 className="font-serif text-xl text-rose-900">Enter Your Details</h3>
            <p className="text-slate-700 mt-2 text-sm">
              Access is by invitation only. Provide your information below to request entry.
            </p>

            <div className="mt-4 space-y-3">
              <input
                className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
                placeholder="Full name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
                placeholder="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="mt-6 flex justify-center">
              <Button as="button" type="submit" variant="primary">
                Submit Request
              </Button>
            </div>
          </div>
        </form>
      </Section>
    </main>
  );
}