import React from "react";

function RequestAccess() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-6 py-16 bg-white">
      <div className="w-full max-w-md">
        <h1 className="text-3xl md:text-4xl font-serif text-rose-900 text-center">Request Private Access</h1>
        <form className="mt-6 space-y-4 bg-rose-50/80 p-6 rounded-2xl border border-rose-100">
          <input
            className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
            placeholder="Full name"
          />
          <input
            className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
            placeholder="Email"
            type="email"
          />
          <input
            className="w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:border-rose-400"
            placeholder="Access code (if provided)"
          />
          <button
            type="submit"
            className="w-full rounded-xl px-5 py-3 bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors"
          >
            Submit Request
          </button>
          <p className="text-xs text-gray-500 text-center">
            Invitations are limited and granted at our discretion.
          </p>
        </form>
      </div>
    </main>
  );
}

export default RequestAccess;