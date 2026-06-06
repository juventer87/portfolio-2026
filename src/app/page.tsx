import { WorkStream } from "./_components/WorkStream";
import { LogoGallery } from "./_components/LogoGallery";
import { brandCount } from "./_components/site-data";

export default function Home() {
  return (
    <main id="top">
      {/* Greeting hero: one massive headline that anchors into the work index. */}
      <section className="mx-auto max-w-[1400px] px-6 pb-20 pt-20 sm:px-10 md:pb-28 md:pt-28">
        <h1 className="max-w-[24ch] text-balance font-display text-[clamp(2.6rem,7vw,6rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink">
          Brand systems and market entry, authored{" "}
          <em className="font-serif font-normal italic leading-[1.1] text-accent">
            end to end
          </em>
          .
        </h1>
        <p className="mt-8 max-w-[48ch] text-[clamp(1.05rem,1.8vw,1.3rem)] leading-relaxed text-muted">
          Sixteen years building brands and entering markets across the GCC,
          MENA, India, Pakistan, and the UK. Every project below is the work of
          one person, start to finish.
        </p>
      </section>

      <WorkStream />

      {/* Featured Projects: the visual companion to the text-based stream. */}
      <section className="mx-auto mt-24 max-w-[1400px] px-6 sm:px-10">
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 border-b border-line-strong pb-5">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold tracking-[-0.03em] text-ink">
            Featured Projects
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            {brandCount} brand systems
          </span>
        </div>

        <div className="mt-12">
          <LogoGallery />
        </div>
      </section>
    </main>
  );
}
