// pages/Profile.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import useBasicInfo from "../hooks/useBasicInfo";

export default function Profile() {
  const navigate = useNavigate();
  const [info, setInfo] = useBasicInfo();

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo((s) => ({ ...s, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!info.name?.trim() || !info.email?.trim()) {
      alert("Please enter your name and email to continue.");
      return;
    }
    navigate("/profile/questionnaire");
  }

  return (
    <main className="bg-white text-black">
      <Section title="Your Profile" center>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-6">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="font-serif text-xl">Basic Information</h3>
            <p className="text-neutral-600 mt-2 text-sm">
              Start with your contact details. You can refine preferences on the next step.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Full name"
                name="name"
                value={info.name || ""}
                onChange={handleChange}
              />
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Email"
                type="email"
                name="email"
                value={info.email || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h4 className="font-serif text-lg">Optional Details</h4>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Phone (optional)"
                name="phone"
                value={info.phone || ""}
                onChange={handleChange}
              />
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Due date (optional)"
                name="dueDate"
                value={info.dueDate || ""}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button as="button" type="submit" variant="primary">Next: Questionnaire</Button>
            <Button to="/" variant="outline">Back to Home</Button>
          </div>
        </form>
      </Section>
    </main>
  );
}