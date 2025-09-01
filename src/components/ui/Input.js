import React from "react";
export function Input({ label, className="", ...props }) {
  return (
    <label className="block">
      {label && <span className="cc-label">{label}</span>}
      <input className={`cc-input ${className}`} {...props} />
    </label>
  );
}
export default Input;