import { BackLink } from "../../_components/BackLink";

export default function WorkNotFound() {
  return (
    <main className="mx-auto flex min-h-[100dvh] max-w-[1100px] flex-col justify-center px-6 sm:px-10">
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
        404 <span className="text-line-strong">·</span> No such file
      </p>
      <h1 className="mt-6 max-w-[18ch] font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[0.97] tracking-[-0.03em] text-ink">
        That work is not in the index.
      </h1>
      <p className="mt-6 max-w-[48ch] text-[15px] leading-relaxed text-muted">
        The link may be out of date. Return to the stream to browse the full
        record of brand systems and market studies.
      </p>
      <div className="mt-10">
        <BackLink />
      </div>
    </main>
  );
}
