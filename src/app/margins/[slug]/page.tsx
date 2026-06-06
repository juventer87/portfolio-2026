import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "../../_components/BackLink";
import { ESSAYS, essayBySlug } from "../../_components/margins-data";
import { profile } from "../../_components/site-data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ESSAYS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const essay = essayBySlug(slug);
  if (!essay) return { title: "Essay not found" };
  return {
    title: essay.title,
    description: essay.dek,
    alternates: { canonical: `/margins/${essay.slug}` },
    openGraph: {
      type: "article",
      title: `${essay.title} · ${profile.name}`,
      description: essay.dek,
      url: `/margins/${essay.slug}`,
    },
  };
}

export default async function EssayPage({ params }: Params) {
  const { slug } = await params;
  const essay = essayBySlug(slug);
  if (!essay) notFound();

  return (
    <main id="top" className="mx-auto max-w-2xl px-6 sm:px-8">
      <div className="pt-8">
        <BackLink href="/margins" label="Back to Margins" />
      </div>

      <article className="pt-12 md:pt-16">
        {/* Meta */}
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          <span className="tnum text-accent">{essay.num}</span>
          <span className="px-1.5 text-line-strong">/</span>
          {essay.topic}
          <span className="px-2 text-line-strong">·</span>
          <span className="text-muted">{essay.date}</span>
          <span className="px-2 text-line-strong">·</span>
          <span className="text-muted">{essay.readMin} min read</span>
        </p>

        {/* Title + standfirst */}
        <h1 className="mt-6 text-balance font-display text-[clamp(2.1rem,5.2vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-ink">
          {essay.title}
        </h1>
        <p className="mt-7 font-serif text-[clamp(1.3rem,2.7vw,1.6rem)] italic leading-[1.4] text-muted">
          {essay.dek}
        </p>

        {/* TL;DR */}
        <div className="mt-10 border-y border-line py-6">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
            The short version
          </p>
          <p className="mt-3 text-[clamp(1rem,1.5vw,1.12rem)] leading-relaxed text-muted">
            {essay.tldr}
          </p>
        </div>

        {/* Pull quote */}
        <blockquote className="my-14">
          <p className="font-display text-[clamp(1.5rem,3.4vw,2.1rem)] font-medium leading-[1.18] tracking-[-0.02em] text-ink">
            &ldquo;{essay.pull}&rdquo;
          </p>
        </blockquote>

        {/* Sections */}
        {essay.sections.map((s, i) => (
          <section key={s.label} className="mt-12 border-t border-line pt-10">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
              <span className="tnum text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="px-2 text-line-strong">/</span>
              {s.label}
            </h2>
            <div className="mt-6">
              {s.paras.map((p, j) => (
                <p
                  key={j}
                  className="mb-6 text-[clamp(1.05rem,1.6vw,1.2rem)] leading-[1.7] text-ink/90 last:mb-0"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </article>

      {/* Return navigation */}
      <div className="mt-16 border-t border-line pt-10">
        <BackLink href="/margins" label="Back to Margins" />
      </div>
    </main>
  );
}
