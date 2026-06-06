"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { ESSAYS } from "./margins-data";

const spring: Transition = { type: "spring", stiffness: 420, damping: 32, mass: 0.6 };

export function MarginsIndex() {
  const reduce = useReducedMotion();
  const router = useRouter();
  const prefetched = useRef<Set<string>>(new Set());

  const prefetch = useCallback(
    (slug: string) => {
      if (prefetched.current.has(slug)) return;
      prefetched.current.add(slug);
      router.prefetch(`/margins/${slug}`);
    },
    [router],
  );

  return (
    <ol className="border-t border-line">
      {ESSAYS.map((e) => (
        <li key={e.slug} className="border-b border-line">
          <Link
            href={`/margins/${e.slug}`}
            prefetch={false}
            onMouseEnter={() => prefetch(e.slug)}
            onFocus={() => prefetch(e.slug)}
            className="group block"
          >
            <motion.div
              whileHover={reduce ? undefined : { x: 8 }}
              transition={spring}
              className="grid grid-cols-[2.25rem_1fr] items-baseline gap-x-4 gap-y-1 py-6 sm:grid-cols-[2.75rem_minmax(0,1fr)_5.5rem_3.5rem] sm:gap-x-6"
            >
              <span className="tnum font-mono text-[12px] tracking-tight text-accent">
                {e.num}
              </span>
              <h2 className="font-display text-[clamp(1.15rem,2.4vw,1.55rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-accent">
                {e.title}
              </h2>
              <span className="hidden font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint sm:inline">
                {e.topic}
              </span>
              <span className="tnum justify-self-end font-mono text-[12px] tracking-tight text-faint">
                {e.year}
              </span>
            </motion.div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
