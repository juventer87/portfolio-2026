// Universal colophon. Renders once via the root layout, identically on every
// route. The monogram is theme-aware (.seal-mark inverts in dark) and sits on
// the canvas with generous breathing room above it.
export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-[1400px] flex-col items-center gap-5 px-6 pb-20 pt-28 sm:px-10 md:pt-40">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mv-logo.png"
        alt="Mohammed Vaseeuddin monogram"
        className="seal-mark h-12 w-auto object-contain"
      />
      <p className="font-mono text-[11px] lowercase tracking-[0.28em] text-faint">
        where reason meets resonance.
      </p>
      <p className="rm-note items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
        Motion reduced. Animations paused.
      </p>
    </footer>
  );
}
