import React from "react";
export function Card({ children, className="" }) {
  return <div className={`cc-card ${className}`}>{children}</div>;
}
export default Card;