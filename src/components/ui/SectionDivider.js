import React from "react";

export default function SectionDivider({ showArrow = false }) {
  return (
    <div className="flex flex-col items-center mt-12 mb-[-1rem]">
      <div className="w-16 h-[2px] bg-primary rounded-full" />
      {showArrow && (
        <svg
          className="mt-3 animate-bounce w-4 h-4 text-primary opacity-70"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      )}
    </div>
  );
}