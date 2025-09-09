import React, { useState } from "react";
import Section from "../components/ui/Section";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Input from "../components/ui/Input";
// import CTASection from "../components/CTASection";

export default function Partner() {
  const [form, setForm] = useState({ name:"", title:"", hotel:"", email:"", phone:"" });
  const set = (k, v) => setForm(s => ({ ...s, [k]: v }));

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim() || !form.hotel.trim() || !form.email.trim()) {
      alert("Please provide Name, Hotel, and Email.");
      return;
    }
    // TODO: hook to CRM/email; optionally reveal a one-pager download link
    alert("Thank you — our partnerships team will reach out shortly.");
    setForm({ name:"", title:"", hotel:"", email:"", phone:"" });
  }

  return (
    <main className="bg-white text-black">
      <Section title="Partner With Us" center divider>
        <Card className="max-w-3xl mx-auto">
          <h3 className="font-serif text-xl text-center">Explore Partnership Opportunities</h3>
          <p className="mt-2 text-sm text-neutral-600 text-center">Luxury Hotels · DMCs · Residences</p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Name *" value={form.name} onChange={(e)=>set("name", e.target.value)} />
              <Input label="Title" value={form.title} onChange={(e)=>set("title", e.target.value)} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input label="Hotel / Property *" value={form.hotel} onChange={(e)=>set("hotel", e.target.value)} />
              <Input label="Email *" type="email" value={form.email} onChange={(e)=>set("email", e.target.value)} />
            </div>
            <Input label="Phone" value={form.phone} onChange={(e)=>set("phone", e.target.value)} />
            {/* <div className="flex justify-center mt-2">
              <Button as="button" type="submit" variant="primary" className="w-full sm:w-auto">Submit</Button>
            </div> */}
            {/* Phase 2: Show a link to download a PDF one-pager post-submit */}
          </form>
        </Card>
      </Section>
      {/* <CTASection /> */}
    </main>
  );
}