import React from "react";
import { Link, useInRouterContext } from "react-router-dom";

const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm tracking-wide transition-colors focus:outline-none";
const variants = {
  primary: "bg-black text-white hover:bg-neutral-800",
  outline: "bg-white text-black border border-black hover:bg-neutral-50",
  subtle: "text-neutral-600 hover:text-black",
  ghost:  "text-black hover:text-neutral-700",
};

export function Button({ as="link", to, href, type="button", variant="primary", className="", children, ...props }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inRouter = useInRouterContext();

  if (as === "button") return <button type={type} className={cls} {...props}>{children}</button>;
  if (href) return <a href={href} className={cls} {...props}>{children}</a>;
  if (to && !inRouter) return <a href={to} className={cls} {...props}>{children}</a>;
  return <Link to={to || "#"} className={cls} {...props}>{children}</Link>;
}
export default Button;