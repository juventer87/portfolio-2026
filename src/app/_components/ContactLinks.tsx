"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";

const spring: Transition = { type: "spring", stiffness: 380, damping: 30, mass: 0.7 };

const EMAIL = "juventer1987@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/vaseeuddin/";

export function ContactLinks() {
  const reduce = useReducedMotion();

  return (
    <div>
      <EmailRow reduce={!!reduce} />
      <Row label="LinkedIn">
        <Value value="in/vaseeuddin" href={LINKEDIN} external reduce={!!reduce} />
      </Row>
      <Row label="Location" last>
        <span className="font-display text-[clamp(1.9rem,5.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
          UAE <span className="text-faint">/</span> GCC Region
        </span>
      </Row>
    </div>
  );
}

/* -------------------------------------------------------------------------- */

function Row({
  label,
  action,
  last,
  children,
}: {
  label: string;
  action?: React.ReactNode;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`border-t border-line py-9 md:py-12 ${last ? "border-b" : ""}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
          {label}
        </span>
        {action}
      </div>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Value({
  value,
  href,
  external,
  reduce,
}: {
  value: string;
  href: string;
  external?: boolean;
  reduce: boolean;
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      initial="rest"
      animate="rest"
      whileHover={reduce ? undefined : "hover"}
      whileFocus={reduce ? undefined : "hover"}
      className="inline-flex items-baseline outline-offset-8"
    >
      <motion.span
        variants={{ rest: { x: 0 }, hover: { x: reduce ? 0 : 8 } }}
        transition={spring}
        className="relative inline-block"
      >
        <span className="font-display text-[clamp(1.9rem,5.5vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.035em] text-ink">
          {value}
        </span>
        <motion.span
          aria-hidden
          variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
          transition={spring}
          style={{ transformOrigin: "left" }}
          className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
        />
      </motion.span>
      {external && (
        <motion.span
          aria-hidden
          variants={{ rest: { x: 0, y: 0 }, hover: { x: reduce ? 0 : 5, y: reduce ? 0 : -5 } }}
          transition={spring}
          className="ml-3 inline-block text-[clamp(1.1rem,2.5vw,1.6rem)] leading-none text-accent"
        >
          &#8599;
        </motion.span>
      )}
    </motion.a>
  );
}

function EmailRow({ reduce }: { reduce: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(EMAIL);
      ok = true;
    } catch {
      // Fallback for webviews without the async Clipboard API.
      try {
        const ta = document.createElement("textarea");
        ta.value = EMAIL;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        ok = document.execCommand("copy");
        ta.remove();
      } catch {
        /* clipboard unavailable; the mailto link still works */
      }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Row
      label="Email"
      action={
        <motion.button
          type="button"
          onClick={copy}
          whileTap={reduce ? undefined : { scale: 0.92 }}
          transition={spring}
          className={`font-mono text-[11px] uppercase tracking-[0.16em] transition-colors duration-200 ${
            copied ? "text-accent" : "text-faint hover:text-ink"
          }`}
        >
          {copied ? "Copied" : "Copy"}
          <span className="sr-only" aria-live="polite">
            {copied ? "Email address copied to clipboard" : ""}
          </span>
        </motion.button>
      }
    >
      <Value value={EMAIL} href={`mailto:${EMAIL}`} reduce={reduce} />
    </Row>
  );
}
