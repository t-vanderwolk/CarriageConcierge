import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";
import { ACCESS_CODE } from "../constants";

export default function Home() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  function handleAccessSubmit(e) {
    e.preventDefault();
    if (!code.trim()) return alert("Please enter your access code.");
    if (code === ACCESS_CODE) {
      navigate("/profile");
    } else {
      alert("Invalid access code.");
    }
  }

  return (
    <main className="min-h-screen bg-rose-50">
      {/* ... your hero ... */}
      <Section title="Private Entry" center>
        <div className="max-w-xl mx-auto rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
          <h3 className="font-serif text-xl text-rose-900 text-center">Have an Access Code?</h3>
          <p className="mt-2 text-slate-700 text-sm text-center">
            Enter your personalized code to begin your private onboarding.
          </p>
          <form onSubmit={handleAccessSubmit} className="mt-4 flex gap-3">
            <input
              className="flex-1 rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
              placeholder="Enter access code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button as="button" type="submit" variant="primary">Enter</Button>
          </form>
          <p className="mt-2 text-xs text-slate-500 text-center">
            Codes are provided by personal invitation.
          </p>
        </div>
      </Section>
    </main>
  );
}