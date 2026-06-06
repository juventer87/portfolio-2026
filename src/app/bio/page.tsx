import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Mohammed Vaseeuddin: sixteen years across the Gulf's industrial trade and consumer brand work, from the stage to the spec to the screen, with a project footprint spanning fifteen territories.",
  alternates: { canonical: "/bio" },
};

/* Copy is authoritative and verbatim. Kept in constants so em dashes,
   middots, the Facade spelling, and apostrophes render safely. */

const HERO = "I arrived in Saudi Arabia as a nine-month-old.";

const INTRO =
  "Raised in Riyadh through the 1990s, I moved to Hyderabad for my formal education, then returned to the Kingdom in 2009 — spending over a decade across the Eastern, Central and Western Provinces before relocating to Dubai in 2021, where I'm based today.";

const INTRO_TWO =
  "The years added up in two columns. On one: years in the Gulf's industrial trade — representing global names like Rawlplug, Fischer, STI and Bison, then building brands of my own from the blank page, and running marketing across eight MENA markets. On the other: identities, decks and consumer brands made for clients who needed the story and the spreadsheet to arrive together. The two columns never balanced by accident. I keep them in the same hand on purpose.";

const TRAJECTORY_LEAD =
  "Sixteen years, one direction of travel — from the stage, to the spec, to the screen.";

const SPINE =
  "It began in event management in Hyderabad, running activations for Coca-Cola, Microsoft and IBM. In 2009 it moved to Saudi Arabia — first welding and fixing systems, then a decade inside Unitech · IKK Group, rising from executive to Marketing Operations Manager for the entire MENA region. In 2025 it turned toward Star Asia Vision and the architecture of light: media façades and outdoor LED across the GCC.";

const FOOTPRINT = [
  "Kingdom of Saudi Arabia",
  "United Arab Emirates",
  "Bahrain",
  "Qatar",
  "Kuwait",
  "Lebanon",
  "India",
  "Pakistan",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Taiwan",
  "South Korea",
  "China",
];

const SECTORS = [
  "Building Materials",
  "Mechanical & Chemical Anchoring Systems",
  "Passive Fire Protection",
  "Architectural Media Façades",
  "Outdoor LED Systems",
  "Cosmetics",
  "F&B",
  "Hospitality & Specialty Food",
  "Organic Consumer Goods",
  "Sports",
  "Independent Publishing",
];

const PULL_FIRST =
  "Different regulations, different buyers, different rituals, the same discipline underneath.";
const PULL_REST =
  "Build the brand and the business case end to end, and carry the complexity so the client never has to.";

const APPROACH_LEAD =
  "The work answers to two masters and refuses to choose between them.";

const APPROACH = [
  {
    n: "I",
    kicker: "The thesis",
    body: "Nothing ships on taste alone; nothing ships on data alone. A brand has to survive the spreadsheet, and a strategy has to survive first contact with how people actually feel. The point where the two break even is where the work is allowed to leave the studio: reason and resonance, costed and earned in the same decision.",
  },
  {
    n: "II",
    kicker: "The method",
    body: "The brief gets interrogated before it gets answered. Every choice — a colour, a price, a channel — carries a reason it can defend out loud. Feedback is a guardrail, not a verdict, and jargon stays at the door, because a strategy nobody in the room can repeat is a strategy nobody will fund. The method stays elastic enough to break its own rules when the market says something better, and consistent enough to get somewhere worth arriving at.",
  },
  {
    n: "III",
    kicker: "The evidence",
    body: "Two examples, one signature. On the analytic side: a MENA passive-fire-protection read built on TAM / SAM / SOM, and a thirty-six-line expansion model costed from source to shelf. On the creative side: industrial product brands built from name to launch, and consumer identities — cosmetics, F&B, organic goods — shipped with the channel plan already attached. The same person made both. That is the point.",
  },
];

/* Shared styles, reused from the site's primitives */
const sectionLabel =
  "font-mono text-[13px] lowercase tracking-[0.24em] text-faint";
const subLabel =
  "font-mono text-[11px] uppercase tracking-[0.16em] text-faint";
const leadLine =
  "font-serif italic text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.4] text-muted text-pretty";
const bodyText =
  "max-w-[64ch] text-[clamp(1.02rem,1.5vw,1.18rem)] leading-[1.6] text-ink/90";
const twoCol =
  "grid gap-x-8 gap-y-5 sm:grid-cols-[150px_minmax(0,1fr)]";

export default function BioPage() {
  return (
    <main id="top" className="mx-auto max-w-[1100px] px-6 sm:px-10">
      {/* ====================== Section 1 — bio ====================== */}
      <section className="pb-16 pt-16 md:pt-24" aria-labelledby="bio-heading">
        <p className="reveal" style={{ animationDelay: "40ms" }}>
          <span className={sectionLabel}>bio</span>
        </p>

        <h1
          id="bio-heading"
          className="reveal mt-8 max-w-[20ch] text-balance font-display text-[clamp(2.6rem,6vw,5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink"
          style={{ animationDelay: "100ms" }}
        >
          {HERO}
        </h1>

        <p
          className={`reveal mt-9 ${bodyText}`}
          style={{ animationDelay: "180ms" }}
        >
          {INTRO}
        </p>
        <p
          className={`reveal mt-6 ${bodyText}`}
          style={{ animationDelay: "240ms" }}
        >
          {INTRO_TWO}
        </p>
      </section>

      {/* ====================== Section 2 — trajectory ====================== */}
      <section
        className="border-t border-line-strong py-16 md:py-24"
        aria-labelledby="trajectory-heading"
      >
        <h2
          id="trajectory-heading"
          className={`reveal ${sectionLabel}`}
          style={{ animationDelay: "40ms" }}
        >
          trajectory
        </h2>

        <p
          className={`reveal mt-7 max-w-[40ch] ${leadLine}`}
          style={{ animationDelay: "100ms" }}
        >
          {TRAJECTORY_LEAD}
        </p>

        <p
          className={`reveal mt-8 ${bodyText}`}
          style={{ animationDelay: "160ms" }}
        >
          {SPINE}
        </p>

        {/* Global project footprint */}
        <div
          className={`reveal mt-16 ${twoCol}`}
          style={{ animationDelay: "220ms" }}
        >
          <h3 className={subLabel}>Global Project Footprint</h3>
          <ul className="grid max-w-[62ch] grid-cols-1 border-line sm:grid-cols-2 lg:grid-cols-3">
            {FOOTPRINT.map((country) => (
              <li
                key={country}
                className="border-t border-line py-2.5 font-mono text-[12.5px] leading-snug tracking-tight text-ink"
              >
                {country}
              </li>
            ))}
          </ul>
        </div>

        {/* Sectors managed */}
        <div
          className={`reveal mt-14 ${twoCol}`}
          style={{ animationDelay: "280ms" }}
        >
          <h3 className={subLabel}>Sectors Managed</h3>
          <ul className="flex max-w-[64ch] flex-wrap gap-x-2.5 gap-y-3">
            {SECTORS.map((sector) => (
              <li
                key={sector}
                className="border border-line px-3 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink"
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>

        {/* Pull quote */}
        <blockquote
          className="reveal mt-16 max-w-[52ch] border-l-2 pl-5 sm:pl-7"
          style={{ animationDelay: "340ms", borderLeftColor: "var(--accent)" }}
        >
          <p className="font-serif text-[clamp(1.45rem,3vw,2.1rem)] italic leading-[1.35]">
            <span className="text-ink">{PULL_FIRST}</span>{" "}
            <span className="text-muted">{PULL_REST}</span>
          </p>
        </blockquote>
      </section>

      {/* ====================== Section 3 — strategic approach ====================== */}
      <section
        className="border-y border-line-strong py-16 md:py-24"
        aria-labelledby="approach-heading"
      >
        <h2
          id="approach-heading"
          className={`reveal ${sectionLabel}`}
          style={{ animationDelay: "40ms" }}
        >
          strategic approach
        </h2>

        <p
          className={`reveal mt-7 max-w-[44ch] ${leadLine}`}
          style={{ animationDelay: "100ms" }}
        >
          {APPROACH_LEAD}
        </p>

        <div className="mt-12">
          {APPROACH.map((move, i) => (
            <div
              key={move.n}
              className={`reveal border-t border-line py-8 last:border-b ${twoCol}`}
              style={{ animationDelay: `${160 + i * 70}ms` }}
            >
              <h3 className="flex items-baseline gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-faint">
                <span className="tnum text-[13px] text-accent">{move.n}</span>
                {move.kicker}
              </h3>
              <p className={bodyText}>{move.body}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
