"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";

export function BackLink({
  href = "/",
  label = "Back to Stream",
}: {
  href?: string;
  label?: string;
}) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className="group inline-flex items-center gap-2 font-mono text-[12px] tracking-tight text-muted transition-colors duration-200 hover:text-ink"
    >
      <motion.span
        aria-hidden
        animate={reduce ? undefined : { x: hover ? -4 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
        className="text-[15px] leading-none text-accent"
      >
        &larr;
      </motion.span>
      {label}
    </Link>
  );
}
