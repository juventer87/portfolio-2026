import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BackLink } from "../../_components/BackLink";
import {
  allWork,
  profile,
  workBySlug,
  workIndex,
} from "../../_components/site-data";
import { extractWork } from "./extract";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allWork.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const work = workBySlug(slug);
  if (!work) return { title: "Work not found" };
  const kind = work.track === "creative" ? "Brand identity" : "Market-entry strategy";
  const description = `${work.meta}. ${kind} authored solo by ${profile.name}.`;
  const url = `/work/${work.slug}`;
  // title resolves via the root template -> "<title> · Mohammed Vaseeuddin"
  return {
    title: work.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${work.title} · ${profile.name}`,
      description,
      url,
    },
  };
}

export default async function WorkPage({ params }: Params) {
  const { slug } = await params;
  const work = workBySlug(slug);
  if (!work) notFound();

  const ex = await extractWork(work);
  const creative = work.track === "creative";
  const index = String(workIndex(slug)).padStart(2, "0");
  const total = allWork.length;

  const detail = (re: RegExp) =>
    ex.details.find((d) => re.test(d.label))?.value ?? null;

  // Metadata registry, real values first, our data as fallback. Author is always sole.
  const fields: { label: string; value: string }[] = creative
    ? [
        { label: "Date", value: detail(/date/i) ?? String(work.year) },
        { label: "Discipline", value: detail(/discipline/i) ?? work.meta },
        { label: "Sector", value: work.tag },
        ...(detail(/client/i) ? [{ label: "Client", value: detail(/client/i)! }] : []),
        { label: "Author", value: "Sole" },
      ]
    : [
        { label: "Year", value: String(work.year) },
        { label: "Focus", value: work.meta },
        { label: "Region", value: work.tag },
        ...(detail(/market/i) ? [{ label: "Markets", value: detail(/market/i)! }] : []),
        ...(detail(/period|phase/i) ? [{ label: "Period", value: detail(/period|phase/i)! }] : []),
        { label: "Author", value: "Sole" },
      ];

  return (
    <main id="top" className="mx-auto max-w-[1100px] px-6 sm:px-10">
      {/* Back to the work index */}
      <div className="pt-8">
        <BackLink />
      </div>

      {/* Title block */}
      <section className="pb-12 pt-16 md:pt-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          {creative ? "Creative track" : "Analytic track"} <span className="text-line-strong">·</span>{" "}
          <span className="tnum text-muted">
            File {index} / {total}
          </span>
        </p>

        <h1 className="mt-6 max-w-[20ch] text-balance font-display text-[clamp(2.5rem,6vw,4.75rem)] font-semibold leading-[0.97] tracking-[-0.035em] text-ink">
          {work.title}
        </h1>

        {ex.standfirst && (
          <p className="mt-7 max-w-[60ch] font-serif text-[clamp(1.15rem,2.2vw,1.5rem)] italic leading-[1.4] text-muted">
            {ex.standfirst}
          </p>
        )}
      </section>

      {/* Metadata registry: ruled matrix, monospace key/value. */}
      <section>
        <dl className="grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-5">
          {fields.map((f) => (
            <div key={f.label} className="border-b border-r border-line px-4 py-5">
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
                {f.label}
              </dt>
              <dd
                className={`mt-2 font-mono text-[14px] leading-snug tracking-tight ${
                  f.label === "Author" ? "text-accent" : "text-ink"
                }`}
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Overview, framed as sole authorship */}
      <section className="grid gap-x-16 gap-y-10 py-16 md:grid-cols-[14rem_minmax(0,1fr)] md:py-24">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          The engagement
        </h2>
        <div className="max-w-[60ch]">
          <p className="text-[clamp(1.05rem,1.8vw,1.25rem)] leading-relaxed text-ink">
            {creative
              ? `${work.title} was positioned, named, and designed end to end by ${profile.name}: one strategist accountable for the brief, the language, and the system.`
              : `The ${work.title} engagement was scoped, researched, and modeled end to end by ${profile.name}: one strategist accountable for the analysis, the numbers, and the recommendation.`}
          </p>
          {ex.summary && (
            <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-muted">
              {ex.summary}
            </p>
          )}
        </div>
      </section>

      {/* Contents outline from the real document */}
      {ex.sections.length > 0 && (
        <section className="grid gap-x-16 gap-y-10 border-t border-line py-16 md:grid-cols-[14rem_minmax(0,1fr)] md:py-24">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
            In the dossier
          </h2>
          <ol className="max-w-[60ch]">
            {ex.sections.map((s, i) => (
              <li
                key={s}
                className="flex items-baseline gap-5 border-t border-line py-4 last:border-b"
              >
                <span className="tnum font-mono text-[11px] text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.05rem,1.8vw,1.2rem)] font-medium tracking-tight text-ink">
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Primary action + closing */}
      <section className="flex flex-col gap-8 border-t border-line py-16">
        <Link
          href={`/work/${work.slug}/source`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 self-start"
        >
          <span className="font-display text-[clamp(1.25rem,2.4vw,1.6rem)] font-medium tracking-tight text-ink underline decoration-line decoration-1 underline-offset-[7px] transition-colors duration-200 group-hover:decoration-accent">
            Open the full dossier
          </span>
          <span className="text-[20px] leading-none text-accent transition-transform duration-300 ease-out group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
        <BackLink />
      </section>
    </main>
  );
}
