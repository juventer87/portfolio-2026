"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";

type Mode = "light" | "dark";
const spring: Transition = { type: "spring", stiffness: 420, damping: 32, mass: 0.6 };

function currentMode(): Mode {
  if (typeof document === "undefined") return "light";
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark" || attr === "light") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMode(currentMode());
    setMounted(true);
    // Track system changes while the visitor has not made an explicit choice.
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!document.documentElement.getAttribute("data-theme")) {
        setMode(mq.matches ? "dark" : "light");
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const set = (m: Mode) => {
    document.documentElement.setAttribute("data-theme", m);
    try {
      localStorage.setItem("theme", m);
    } catch {
      /* storage unavailable; the in-session choice still applies */
    }
    setMode(m);
  };

  const opts: [Mode, string][] = [
    ["light", "Light"],
    ["dark", "Dark"],
  ];

  return (
    <div role="group" aria-label="Color theme" className="flex items-center gap-0.5">
      {opts.map(([m, label]) => {
        const active = mounted && mode === m;
        return (
          <motion.button
            key={m}
            type="button"
            onClick={() => set(m)}
            aria-pressed={active}
            whileTap={reduce ? undefined : { scale: 0.92 }}
            transition={spring}
            className="relative px-1.5 py-1 font-mono text-[11px] tracking-tight"
          >
            <span
              aria-hidden
              className={`transition-colors duration-200 ${active ? "text-faint" : "text-transparent"}`}
            >
              [
            </span>
            <span
              className={`px-0.5 transition-colors duration-200 ${
                active ? "text-accent" : "text-faint hover:text-ink"
              }`}
            >
              {label}
            </span>
            <span
              aria-hidden
              className={`transition-colors duration-200 ${active ? "text-faint" : "text-transparent"}`}
            >
              ]
            </span>
            {active && (
              <motion.span
                layoutId="theme-indicator"
                aria-hidden
                className="absolute inset-x-1.5 -bottom-px h-px bg-accent"
                transition={reduce ? { duration: 0 } : spring}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
