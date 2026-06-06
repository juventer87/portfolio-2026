"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion, type Transition } from "motion/react";
import { allWork, brandCount, studyCount, type Track, type Work } from "./site-data";

type Filter = "all" | Track;

const spring: Transition = { type: "spring", stiffness: 420, damping: 32, mass: 0.6 };
const reorder: Transition = { type: "spring", stiffness: 360, damping: 36, mass: 0.8 };

const FILTERS: { key: Filter; label: string; count: number }[] = [
  { key: "all", label: "All work", count: allWork.length },
  { key: "creative", label: "Creative track", count: brandCount },
  { key: "analytic", label: "Analytic track", count: studyCount },
];

export function WorkStream() {
  const reduce = useReducedMotion();
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>("all");

  // Prefetch a detail route the first time its row is hovered or focused, so
  // the navigation into any case study is instant. Each route is fetched once.
  const prefetched = useRef<Set<string>>(new Set());
  const prefetch = useCallback(
    (slug: string) => {
      if (prefetched.current.has(slug)) return;
      prefetched.current.add(slug);
      router.prefetch(`/work/${slug}`);
    },
    [router],
  );

  const items = useMemo(
    () => (filter === "all" ? allWork : allWork.filter((w) => w.track === filter)),
    [filter],
  );

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 sm:px-10">
      {/* The pivot: a sticky sub-header toggle that filters the stream. */}
      <div className="sticky top-16 z-30 -mx-6 flex items-center justify-between border-y border-line bg-bg/85 px-6 py-3 backdrop-blur-md sm:-mx-10 sm:px-10">
        <span className="tnum hidden font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint sm:inline">
          Index <span className="text-ink">{String(items.length).padStart(2, "0")}</span> / {allWork.length}
        </span>
        <TrackPivot filter={filter} setFilter={setFilter} reduce={!!reduce} />
      </div>

      <ul className="pb-4">
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((w) => (
            <WorkRow
              key={w.slug}
              work={w}
              reduce={!!reduce}
              onPrefetch={() => prefetch(w.slug)}
            />
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

function TrackPivot({
  filter,
  setFilter,
  reduce,
}: {
  filter: Filter;
  setFilter: (f: Filter) => void;
  reduce: boolean;
}) {
  return (
    <div role="group" aria-label="Filter work by track" className="flex items-center gap-1 sm:gap-2">
      {FILTERS.map(({ key, label }) => {
        const active = filter === key;
        return (
          <motion.button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            aria-pressed={active}
            whileTap={reduce ? undefined : { scale: 0.95 }}
            transition={spring}
            className="relative px-2 py-1.5 font-mono text-[11px] tracking-tight sm:text-[12px]"
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
              <span className="sm:hidden">{label.replace(" track", "").replace(" work", "")}</span>
              <span className="hidden sm:inline">{label}</span>
            </span>
            <span
              aria-hidden
              className={`transition-colors duration-200 ${active ? "text-faint" : "text-transparent"}`}
            >
              ]
            </span>
            {active && (
              <motion.span
                layoutId="track-pivot"
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

/* -------------------------------------------------------------------------- */

function WorkRow({
  work,
  reduce,
  onPrefetch,
}: {
  work: Work;
  reduce: boolean;
  onPrefetch: () => void;
}) {
  const creative = work.track === "creative";
  return (
    <motion.li
      layout={reduce ? false : true}
      initial={reduce ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10, filter: "blur(4px)" }}
      transition={reduce ? { duration: 0.12 } : reorder}
      className="border-t border-line last:border-b"
    >
      <Link
        href={`/work/${work.slug}`}
        prefetch={false}
        onMouseEnter={onPrefetch}
        onFocus={onPrefetch}
        className="group block"
      >
        <motion.div
          whileHover={reduce ? undefined : { x: 8 }}
          transition={spring}
          className="grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-1 py-5 sm:grid-cols-[4.5rem_minmax(0,1fr)_auto] sm:gap-x-8"
        >
          <span className="tnum font-mono text-[12px] tracking-tight text-faint transition-colors duration-200 group-hover:text-accent">
            {work.year}
          </span>

          <span className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="font-display text-[clamp(1.25rem,2.4vw,1.6rem)] font-medium leading-tight tracking-[-0.02em] text-ink">
              {work.title}
            </span>
            <span className="font-mono text-[11px] leading-snug tracking-tight text-muted">
              {work.meta}
            </span>
          </span>

          <span className="col-start-2 flex items-center gap-4 sm:col-start-3 sm:justify-end">
            <span className="font-mono text-[10.5px] tracking-tight text-faint transition-colors duration-200 group-hover:text-accent">
              &rarr; {work.tag}
            </span>
            <span className="hidden w-[4.5rem] font-mono text-[10.5px] uppercase tracking-[0.12em] text-faint sm:inline">
              {creative ? "Creative" : "Analytic"}
            </span>
            <span
              aria-hidden
              className="hidden -translate-x-2 font-mono text-[14px] text-accent opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 sm:inline"
            >
              &rarr;
            </span>
          </span>
        </motion.div>
      </Link>
    </motion.li>
  );
}
