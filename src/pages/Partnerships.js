import React from "react";

export default function Partnerships() {
  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-4xl font-serif mb-4">Let’s Explore a Partnership</h1>
        <p className="text-lg text-gray-700 mb-8">
          We’d love to learn about your property and explore whether Carriage Concierge is the right fit. No pressure, no pushy sales — just a thoughtful conversation.
        </p>

        <form
          action="https://formspree.io/f/{your-form-id}" // ← replace this with your Formspree/Formsubmit endpoint
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" name="name" id="name" required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" name="email" id="email" required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <label htmlFor="hotel" className="block text-sm font-medium text-gray-700">Hotel / Property Name</label>
            <input type="text" name="hotel" id="hotel" required className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Optional Message</label>
            <textarea name="message" id="message" rows="4" className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary" />
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-yellow-600 transition"
            >
              Request a Pilot
            </button>
          </div>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          Your info stays private. We’ll reach out within 1–2 business days.
        </p>

      </div>
    </div>
  );
}