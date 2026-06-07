import { profile } from "./site-data";

// Universal colophon. Renders once via the root layout, identically on every
// route. The monogram is theme-aware (.seal-mark inverts in dark) and is the
// primary visual anchor; the bold name and the muted baseline sit beneath it.
export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-[1400px] flex-col items-center px-6 pb-20 pt-28 sm:px-10 md:pt-40">
      {/* Personal brand mark, scaled up for prominence */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mv-logo.png"
        alt="Mohammed Vaseeuddin monogram"
        className="seal-mark h-20 w-auto object-contain sm:h-24"
      />

      {/* Name in bold */}
      <p className="mt-6 font-display text-[16px] font-bold tracking-[-0.01em] text-ink sm:text-[18px]">
        {profile.name}
      </p>

      {/* Strategic baseline, muted so the mark stays the anchor */}
      <p className="mt-2.5 font-mono text-[11px] font-normal tracking-[0.22em] text-faint sm:text-[12px]">
        Where Reason Meets Resonance.
      </p>

      <p className="rm-note mt-4 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
        Motion reduced. Animations paused.
      </p>
    </footer>
  );
}
