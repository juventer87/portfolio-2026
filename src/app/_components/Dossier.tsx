import { profile } from "./site-data";

const EXPERTISE = [
  "Construction Materials",
  "Architectural Media Facades",
  "Digital Outdoor LED Solutions",
  "Strategic Brand Positioning",
  "Market Expansion",
  "Business Growth Strategy",
];

const WHERE = ["MENA", "India", "Pakistan", "UK"];

export function Dossier() {
  return (
    <dl className="grid grid-cols-1 gap-y-7 border-t border-line-strong pt-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-[0.9fr_1fr_1.1fr_1.9fr] lg:gap-y-0">
      <Field label="Who" first>
        <span className="block font-display text-[15px] font-medium tracking-tight text-ink">
          {profile.name}
        </span>
        <span className="mt-1 block font-mono text-[11px] leading-snug tracking-tight text-faint">
          Operational Strategist &amp; Brand Visionary
        </span>
      </Field>

      <Field label="When">
        <span className="font-mono text-[13px] leading-snug tracking-tight text-ink">
          16+ Years Executive Experience
        </span>
      </Field>

      <Field label="Where">
        <Separated items={WHERE} />
      </Field>

      <Field label="What">
        <Separated items={EXPERTISE} />
      </Field>
    </dl>
  );
}

function Field({
  label,
  first,
  children,
}: {
  label: string;
  first?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={first ? "" : "lg:border-l lg:border-line lg:pl-8"}>
      <dt className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
        {label}
      </dt>
      <dd>{children}</dd>
    </div>
  );
}

function Separated({ items }: { items: string[] }) {
  return (
    <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[13px] leading-snug tracking-tight text-ink">
      {items.map((item, i) => (
        <span key={item} className="inline-flex items-center gap-2.5">
          {i > 0 && <span className="text-line-strong">&middot;</span>}
          {item}
        </span>
      ))}
    </span>
  );
}
