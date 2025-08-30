import React from "react";
import { Section } from "../components/ui/Section";
import { Button } from "../components/ui/Button";

function Contact() {
  return (
    <main className="bg-white">
      <Section title="Contact" center>
        <p className="text-slate-700 max-w-xl mx-auto">
          For private access inquiries, please request an invitation. We typically respond within 48 hours.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/request-access" variant="primary">Request Private Access</Button>
        </div>
      </Section>
    </main>
  );
}

export default Contact;