import type { Metadata } from "next";
import { MarginsIndex } from "../_components/MarginsIndex";
import { ESSAYS } from "../_components/margins-data";

export const metadata: Metadata = {
  title: "Margins",
  description:
    "Long-form notes from inside the work: branding, strategy, market intelligence, and the business of building demand. Essays by Mohammed Vaseeuddin.",
  alternates: { canonical: "/margins" },
};

export default function MarginsPage() {
  const total = String(ESSAYS.length).padStart(2, "0");

  return (
    <main id="top" className="mx-auto max-w-3xl px-6 sm:px-8">
      <header className="pb-10 pt-16 md:pt-24">
        <p className="font-mono text-[12px] lowercase tracking-[0.2em] text-faint">
          margins
        </p>
        <h1 className="mt-7 font-display text-[clamp(3rem,9vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-ink">
          Margins<span className="text-accent">.</span>
        </h1>
        <p className="mt-7 max-w-[34ch] font-serif text-[clamp(1.2rem,2.4vw,1.5rem)] italic leading-[1.4] text-muted">
          Long-form notes from inside the work: branding, strategy, market
          intelligence, and the business of building demand.
        </p>
      </header>

      <div className="flex items-center justify-between border-y border-line-strong py-3">
        <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
          Index
        </span>
        <span className="tnum font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
          {total} / {total}
        </span>
      </div>

      <MarginsIndex />
    </main>
  );
}
