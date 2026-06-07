import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio",
  description:
    "Mohammed Vaseeuddin: sixteen years across the Gulf's industrial trade and consumer brand work, from the stage to the spec to the screen, with a project footprint spanning fifteen territories.",
  alternates: { canonical: "/bio" },
};

/* Copy kept in constants so em dashes, middots, the Facade spelling, and
   apostrophes render safely (no raw-JSX unescaped-entity issues). */

const HERO = "The Gulf isn't a market I entered — it's the one I grew up in.";

const INTRO =
  "I grew up in Riyadh through the 1990s. In the year 1999, I returned to Hyderabad, India to complete my formal education and returned back to Saudi Arabia in 2009 — working across the Eastern, Central and Western Provinces for more than a decade before relocating to Dubai in 2021, where I'm based today.";

const INTRO_TWO =
  "The career added up in two columns. On one: years in the Gulf's industrial trade, representing global names like Rawlplug, Fischer, STI and Bison, then building brands of my own from the blank page, and running marketing across eight MENA markets. On the other: identities, decks and consumer brands made for clients who needed the story and the spreadsheet to arrive together. The two columns never balanced by accident. I keep them in the same hand on purpose.";

const TRAJECTORY_LEAD =
  "Sixteen years, one direction of travel — from the stage, to the spec, to the screen.";

const SPINE =
  "It began in event management in Hyderabad, running activations for Coca-Cola, Microsoft and IBM. In 2009 it moved to Saudi Arabia — first welding and fixing systems, then a decade inside Unitech · IKK Group, rising from executive to Marketing Operations Manager for the entire MENA region. In 2024 it made room for an experiment, a year at Novicom Marketing Group in Dubai, learning digital marketing from the inside: channels, tools and demand generation, hands-on rather than from the manager's chair. In 2025 it turned toward Star Asia Vision and the architecture of light: media façades and outdoor LED across the GCC.";

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

type Job = {
  date: string;
  role: string;
  company: string;
  href?: string;
  detail?: string;
};

const EXPERIENCE: Job[] = [
  {
    date: "May 2025 – Present",
    role: "Sales & Marketing Manager, MENA Region",
    company: "Star Asia Vision Corporation (SAVC), UAE",
    detail: "Media Façade · Outdoor LED Displays · Control Systems",
  },
  {
    date: "Mar 2024 – Apr 2025",
    role: "Digital Marketing Executive",
    company: "Novicom Marketing Group, Dubai, UAE",
    href: "https://www.novicommarketinggroup.com",
  },
  {
    date: "Jan 2012 – Feb 2024",
    role: "Product Specialist → Marketing Operations Manager, KSA & UAE",
    company: "Unitech · IKK Group of Companies",
    detail: "Building & Construction Materials (multiple product lines)",
  },
  {
    date: "Mar 2010 – Dec 2011",
    role: "Product Specialist, Dammam, KSA",
    company: "Arabian Vermiculite Industries (AVI)",
    detail: "Mechanical & Chemical Anchoring Systems (Mungo)",
  },
  {
    date: "Jul 2009 – Feb 2010",
    role: "Sales & Marketing Coordinator, Al Khobar, KSA",
    company: "Pan Gulf Welding Solutions (PGWS)",
    detail: "Power Tools · Welding Systems · Fixing Systems",
  },
  {
    date: "Dec 2006 – Jun 2009",
    role: "Customer Accounts Manager, Hyderabad, India",
    company: "Wizcraft International Entertainment",
    detail: "Event Management",
  },
];

type Cluster = { label: string; items: string[] };

const COMPETENCIES: Cluster[] = [
  {
    label: "Strategy & Brand",
    items: [
      "Marketing Strategy & Operations",
      "Brand Identity & Positioning",
      "Go-to-Market (GTM) Strategy",
      "Product Positioning",
      "Digital Marketing Strategy",
      "Campaign Management",
      "Content Development",
      "Demand Generation",
      "Product Launch Leadership",
    ],
  },
  {
    label: "Sales & Channel",
    items: [
      "B2B & B2C Sales",
      "Key Account Management",
      "Channel Sales Management",
      "Distributor Network Management",
      "Territory Development",
      "Sales Forecasting",
      "Sales Team Training",
      "CRM & Sales Reporting",
    ],
  },
  {
    label: "Commercial & Growth",
    items: [
      "Business Development",
      "Market Expansion",
      "Revenue Growth Planning",
      "Pricing Strategy Optimization",
      "Cost & Margin Optimization",
      "Strategic Partnerships",
      "Project Pipeline Development",
      "Tender & Bid Management",
      "Portfolio Management",
    ],
  },
  {
    label: "Analysis & Stakeholders",
    items: [
      "Market & Competitive Analysis",
      "Data-Driven Decision Making",
      "Cross-Functional Collaboration",
      "Stakeholder Engagement",
    ],
  },
];

const TOOLS: Cluster[] = [
  {
    label: "CRM & Sales",
    items: [
      "Zoho CRM",
      "HubSpot CRM",
      "Salesforce (basic)",
      "Microsoft Dynamics 365",
      "Pipedrive",
    ],
  },
  {
    label: "Analytics & Reporting",
    items: [
      "Power BI",
      "Google Analytics",
      "Looker Studio (Google Data Studio)",
      "Tableau (basic)",
      "Zoho Analytics",
      "Excel (advanced)",
    ],
  },
  {
    label: "Marketing & Automation",
    items: [
      "Meta Business Suite",
      "Google Ads Manager",
      "LinkedIn Campaign Manager",
      "Mailchimp",
      "SendinBlue",
      "Zoho Marketing Automation",
      "HubSpot Marketing Hub",
    ],
  },
  {
    label: "Project & Workflow",
    items: ["Asana", "Trello", "ClickUp", "Notion"],
  },
  {
    label: "Design & Creative",
    items: [
      "Adobe Illustrator",
      "Adobe Photoshop (basic/intermediate)",
      "Canva",
      "Figma (basic)",
    ],
  },
  {
    label: "Content & AI",
    items: [
      "Claude (Cowork / Code)",
      "Perplexity",
      "Gemini",
      "NotebookLM",
      "ChatGPT",
      "Google Workspace",
      "Microsoft 365",
      "Netlify",
      "Gamma",
      "Midjourney v7",
    ],
  },
];

/* Shared primitives, reused from the site's existing classes */
const sectionLabel =
  "font-mono text-[13px] lowercase tracking-[0.24em] text-faint";
const subLabel = "font-mono text-[11px] uppercase tracking-[0.16em] text-faint";
const leadLine =
  "font-serif italic text-[clamp(1.3rem,2.4vw,1.9rem)] leading-[1.4] text-muted text-pretty";
const bodyText =
  "max-w-[64ch] text-[clamp(1.02rem,1.5vw,1.18rem)] leading-[1.6] text-ink/90";
const twoCol = "grid gap-x-8 gap-y-5 sm:grid-cols-[150px_minmax(0,1fr)]";
const chip =
  "border border-line px-3 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-muted transition-colors duration-200 hover:border-line-strong hover:text-ink";

function ChipCluster({
  label,
  items,
  delay,
}: {
  label: string;
  items: string[];
  delay: string;
}) {
  return (
    <div className={`reveal ${twoCol}`} style={{ animationDelay: delay }}>
      <h3 className={subLabel}>{label}</h3>
      <ul className="flex max-w-[64ch] flex-wrap gap-x-2.5 gap-y-3">
        {items.map((item) => (
          <li key={item} className={chip}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BioPage() {
  return (
    <main id="top" className="mx-auto max-w-[1100px] px-6 sm:px-10">
      {/* ====================== bio ====================== */}
      <section className="pb-16 pt-16 md:pt-24" aria-labelledby="bio-heading">
        <p className="reveal" style={{ animationDelay: "40ms" }}>
          <span className={sectionLabel}>bio</span>
        </p>

        <h1
          id="bio-heading"
          className="reveal mt-8 max-w-[24ch] text-balance font-display text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-ink"
          style={{ animationDelay: "100ms" }}
        >
          {HERO}
        </h1>

        <p className={`reveal mt-9 ${bodyText}`} style={{ animationDelay: "180ms" }}>
          {INTRO}
        </p>
        <p className={`reveal mt-6 ${bodyText}`} style={{ animationDelay: "240ms" }}>
          {INTRO_TWO}
        </p>
      </section>

      {/* ====================== trajectory ====================== */}
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

        <p className={`reveal mt-8 ${bodyText}`} style={{ animationDelay: "160ms" }}>
          {SPINE}
        </p>

        {/* Global project footprint */}
        <div className={`reveal mt-16 ${twoCol}`} style={{ animationDelay: "220ms" }}>
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
        <div className={`reveal mt-14 ${twoCol}`} style={{ animationDelay: "280ms" }}>
          <h3 className={subLabel}>Sectors Managed</h3>
          <ul className="flex max-w-[64ch] flex-wrap gap-x-2.5 gap-y-3">
            {SECTORS.map((sector) => (
              <li key={sector} className={chip}>
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

      {/* ====================== experience ====================== */}
      <section
        className="border-t border-line-strong py-16 md:py-24"
        aria-labelledby="experience-heading"
      >
        <h2
          id="experience-heading"
          className={`reveal ${sectionLabel}`}
          style={{ animationDelay: "40ms" }}
        >
          experience
        </h2>

        <ol className="mt-10">
          {EXPERIENCE.map((job, i) => (
            <li
              key={job.date}
              className={`reveal border-t border-line py-8 last:border-b ${twoCol}`}
              style={{ animationDelay: `${100 + i * 60}ms` }}
            >
              <p className="tnum font-mono text-[11px] uppercase tracking-[0.12em] text-faint">
                {job.date}
              </p>
              <div>
                <h3 className="font-display text-[clamp(1.1rem,1.9vw,1.3rem)] font-medium leading-snug tracking-tight text-ink">
                  {job.role}
                </h3>
                <p className="mt-1.5 font-mono text-[12.5px] tracking-tight text-muted">
                  {job.href ? (
                    <a
                      href={job.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-line decoration-1 underline-offset-[3px] transition-colors duration-200 hover:decoration-accent hover:text-ink"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}
                </p>
                {job.detail && (
                  <p className="mt-2 font-mono text-[11px] leading-snug tracking-tight text-faint">
                    {job.detail}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ====================== strategic approach ====================== */}
      <section
        className="border-t border-line-strong py-16 md:py-24"
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
          The work answers to two masters and refuses to choose between them.
        </p>

        <div className="mt-12">
          {[
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
          ].map((move, i) => (
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

      {/* ====================== signature competencies ====================== */}
      <section
        className="border-t border-line-strong py-16 md:py-24"
        aria-labelledby="competencies-heading"
      >
        <h2
          id="competencies-heading"
          className={`reveal ${sectionLabel}`}
          style={{ animationDelay: "40ms" }}
        >
          signature competencies
        </h2>

        <div className="mt-12 flex flex-col gap-y-12">
          {COMPETENCIES.map((cluster, i) => (
            <ChipCluster
              key={cluster.label}
              label={cluster.label}
              items={cluster.items}
              delay={`${100 + i * 60}ms`}
            />
          ))}
        </div>
      </section>

      {/* ====================== tools & software ====================== */}
      <section
        className="border-t border-line-strong py-16 md:py-24"
        aria-labelledby="tools-heading"
      >
        <h2
          id="tools-heading"
          className={`reveal ${sectionLabel}`}
          style={{ animationDelay: "40ms" }}
        >
          tools &amp; software
        </h2>

        <div className="mt-12 flex flex-col gap-y-12">
          {TOOLS.map((cluster, i) => (
            <ChipCluster
              key={cluster.label}
              label={cluster.label}
              items={cluster.items}
              delay={`${100 + i * 50}ms`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
