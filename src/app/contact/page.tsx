import type { Metadata } from "next";
import { BackLink } from "../_components/BackLink";
import { ContactLinks } from "../_components/ContactLinks";
import { profile } from "../_components/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Direct line to Mohammed Vaseeuddin, solo brand and GTM strategist for the GCC, MENA, and India. Email, LinkedIn, and location.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    title: "Contact · Mohammed Vaseeuddin",
    description:
      "Direct line to the strategist. No intermediaries. Email, LinkedIn, and location.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main id="top" className="mx-auto max-w-[1100px] px-6 sm:px-10">
      {/* Title block */}
      <section className="pb-10 pt-16 md:pb-16 md:pt-24">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          Contact <span className="text-line-strong">·</span>{" "}
          <span className="text-muted">Available for select mandates</span>
        </p>

        <h1 className="mt-6 max-w-[16ch] text-balance font-display text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink">
          Get in touch.
        </h1>

        <p className="mt-7 max-w-[52ch] text-[clamp(1.05rem,1.8vw,1.25rem)] leading-relaxed text-muted">
          A direct line to the strategist, with no intermediaries. Reach out
          about brand systems, market-entry studies, or a regional go-to-market
          mandate.
        </p>
      </section>

      {/* The contact lines */}
      <section className="pb-8">
        <ContactLinks />
      </section>

      {/* Closing */}
      <section className="flex flex-col gap-8 py-12">
        <p className="max-w-[44ch] font-display text-[clamp(1.35rem,3vw,2rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-ink">
          Every engagement is handled personally by {profile.name}.
        </p>
        <BackLink />
      </section>
    </main>
  );
}
