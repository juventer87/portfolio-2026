/*
  Margins: 18 operational essays. Themes from Other Pages/margins_index.html;
  bodies are authored, long-form deep-dives (executive directive), tailored to a
  senior operator across 15 territories and heavy-industry-to-consumer sectors.
  Recurring thesis: different regulations, different buyers, different rituals,
  the same discipline underneath; carry the complexity so the client never has to.
  Em-dash clean. Ordered newest-first; `num` is the ledger index.
*/

export type Section = { label: string; paras: string[] };

export type Essay = {
  num: string;
  slug: string;
  date: string;
  year: string;
  topic: string;
  title: string;
  dek: string;
  tldr: string;
  pull: string;
  readMin: number;
  sections: Section[];
};

const ENTRIES: Omit<Essay, "num">[] = [
  {
    slug: "clients-credit-market",
    date: "May 12, 2026",
    year: "2026",
    topic: "Branding",
    title: "Why Clients Credit Their Market and Not Your Brand Work",
    dek: "The deepest equity a brand builds is the lift nobody attributes to it.",
    tldr: "Good positioning removes friction instead of adding spectacle, so when a launch works the client credits the market, the timing, the sales team. Instrument the work before it ships, or the equity stays invisible in the room where budgets are set.",
    pull: "The brand that gets credited is usually the one that failed loudly enough to be noticed.",
    readMin: 5,
    sections: [
      {
        label: "Why the lift goes unattributed",
        paras: [
          "When a launch works, the client remembers the market. The category was moving, the distributor leaned in, the timing was right. The positioning that made the product legible enough to ride that wave disappears the moment it succeeds. This is not ingratitude. It is how attribution works: people credit the cause they can see, and a well-built brand is the cause they cannot.",
          "Across fifteen markets I have watched the same scene play out. A product that cleared procurement in Riyadh faster than the last one. A facade brand a consultant specified without being pushed. An organic line a Karachi buyer trusted on sight. Each was a positioning win, and each was logged internally as luck, as timing, or as the rep's relationship.",
        ],
      },
      {
        label: "The friction you removed is silent",
        paras: [
          "Strong positioning works by subtraction. A name that is easy to specify, a story procurement can repeat, a price that reads as fair: none of these announce themselves. They show up as a shorter sales cycle and a higher win rate, and the sales team, honestly, takes the credit, because from where they stand that is exactly what happened.",
          "The categories make it worse. In passive fire protection or anchoring systems the buyer is a spec and an algorithm before a person, and the brand's job is to pass a gate quietly. Quiet wins do not generate stories. Loud failures do. The brand most discussed in the post-mortem is always the one that broke.",
        ],
      },
      {
        label: "Instrument it or lose it",
        paras: [
          "The defence is not to claim credit louder. It is to baseline the metric the positioning was meant to move before the work ships: win rate, time to specification, price realisation. Then show the delta. Equity you can measure is equity you can defend when next year's budget is decided by people who were not in the room.",
          "This is the same discipline whether the client makes media facades or cosmetics. Different regulations, different buyers, different rituals, the same engine underneath: prove the lift, or carry on building value the organisation keeps crediting to the weather. Carry the complexity of measurement so the client never has to wonder what the brand was worth.",
        ],
      },
    ],
  },
  {
    slug: "ai-briefs-replacing-mood-boards",
    date: "Mar 15, 2026",
    year: "2026",
    topic: "Craft",
    title: "How AI Briefs Are Replacing Mood Boards in Identity Work",
    dek: "When the deliverable shrinks from a board to a paragraph.",
    tldr: "Generation is cheap now, so the scarce craft is the constraint, not the rendering. The brief becomes the deliverable, and a vague one buys a hundred plausible marks and no argument for any of them.",
    pull: "The tool changed. The question the work has to survive did not.",
    readMin: 5,
    sections: [
      {
        label: "The mood board was always a hedge",
        paras: [
          "Twenty images stood in for a decision the team had not yet made, and the client chose a feeling rather than a direction. A written brief precise enough for a model to generate from forces the decision earlier: the adjectives, the references to avoid, the one thing the identity has to do.",
          "In practice this is a relief. I have run identity work for a football club and for a fintech wallet in the same stretch of years, and the failure mode was identical: a beautiful board that let everyone agree without anyone deciding. The brief removes that escape hatch.",
        ],
      },
      {
        label: "The constraint is the craft now",
        paras: [
          "When rendering takes minutes, value migrates upstream to whoever can write the constraint precisely enough that the options are worth looking at. A vague prompt yields a hundred plausible logos and no reason to choose, which is a more expensive problem than a blank page.",
          "This rewards the strategist who can think across categories. The same brief discipline that keeps an outdoor-LED brand legible to an engineer keeps a cosmetics line legible to a shopper. Different rituals, the same act: name the decision before you ask for the artifact.",
        ],
      },
      {
        label: "Fluency is not resolution",
        paras: [
          "A paragraph that reads well can still encode a strategy nobody validated, and a model will execute a wrong brief beautifully and at scale. The discipline holds: interrogate the brief before you answer it, whoever or whatever answers next.",
          "Carry the complexity here too. The client should never see the forty discarded directions or the prompt iterations behind them. They should see one identity and the argument for it. The machinery stays on your side of the table.",
        ],
      },
    ],
  },
  {
    slug: "strategists-decline-pitches",
    date: "Nov 11, 2025",
    year: "2025",
    topic: "Strategy",
    title: "Why Senior Brand Strategists Decline More Pitches",
    dek: "The quiet discipline that separates positioning from output.",
    tldr: "A junior practice says yes to fill the calendar; a senior one says no to protect the thing it sells, which is judgment. Declining the wrong brief is cheaper than discovering its shape in month two.",
    pull: "The wrong engagement costs more than the empty slot it would have filled.",
    readMin: 5,
    sections: [
      {
        label: "Saying yes trains the wrong belief",
        paras: [
          "Every pitch answered on spec teaches the client that the thinking is free and the deliverable is the product. It is the other way around, and the habit is hard to unlearn once it is taught. Capacity is not the asset. Judgment is.",
          "After sixteen years and fifteen markets, the calendar is no longer the constraint. Attention is, and attention spent on a doomed brief is attention stolen from one that will actually ship.",
        ],
      },
      {
        label: "Declining is diagnostic",
        paras: [
          "A brief that cannot name the decision it needs made, or the metric it will be judged on, will move three times after kickoff. Saying no to it is cheaper than discovering its real shape in month two, on a fixed fee, with the scope already gone.",
          "In heavy infrastructure this is survival. A passive-fire-protection mandate with no clarity on which approval gates the year is not early-stage. It is a year of unbillable chaos waiting to happen, and the no is the analysis.",
        ],
      },
      {
        label: "Reputation compounds on shipped work",
        paras: [
          "The work that compounds is the work that reached the market and performed. A portfolio of half-funded pitches that never launched is invisible, and invisible work brings no next client. Senior strategists decline more because they have learned what the empty slot is actually worth.",
          "Carry the complexity of selection so the client never inherits it. The discipline that picks the right engagement is the same one that, once inside it, carries the regulatory and logistical weight quietly. Different briefs, the same underlying judgment.",
        ],
      },
    ],
  },
  {
    slug: "ai-summaries-flattening-voice",
    date: "Jun 17, 2025",
    year: "2025",
    topic: "Craft",
    title: "How AI Summaries Are Flattening Brand Voice",
    dek: "The copy that goes unread because the machine read first.",
    tldr: "More buyers meet a brand through a summary than through its own page. Whatever lives only in adjectives evaporates in compression; write so the substance survives being paraphrased.",
    pull: "Write for the human who might be charmed, and the model that will paraphrase first.",
    readMin: 5,
    sections: [
      {
        label: "The first reader is now a machine",
        paras: [
          "An assistant compresses the site into three sentences, and the cadence, the specific noun, the dry aside go first. What survives is the claim, stripped of the personality that made it credible. The buyer meets the paraphrase before the page.",
          "This is not abstract in industrial sales, where a procurement portal or a spec filter already read you before a person did. The brand that lives only in tone never reaches the human. It is screened out as noise.",
        ],
      },
      {
        label: "Structure survives, flourish does not",
        paras: [
          "Copy that carries meaning in structure outlives summarisation: a clear value proposition, a concrete proof point, a name that means something. These are information, not decoration, and information is what the compression keeps.",
          "The cross-category lesson is consistent. Whether the differentiator is a fire rating or a clean-ingredient claim, make it a fact, not a feeling. Facts survive the machine. Adjectives do not.",
        ],
      },
      {
        label: "Write for two readers",
        paras: [
          "Front-load the substance, make the differentiator concrete, and let the personality ride on a frame that still holds when the frame is all that gets quoted. The charm is for the human; the structure is for the model that reaches them first.",
          "Carry the complexity of dual-audience writing so the client never has to choose between a brand that sounds like something and one that survives a summary. Different readers, the same discipline underneath.",
        ],
      },
    ],
  },
  {
    slug: "tactics-zero-click-search",
    date: "Feb 04, 2025",
    year: "2025",
    topic: "Marketing",
    title: "Which Marketing Tactics Will Not Survive Zero-Click Search",
    dek: "The plays that age out when discovery stops being a click.",
    tldr: "Tactics built to win the click are at risk; what survives owns demand rather than intercepts it. Move budget from toll-booth pages to a brand buyers ask for by name.",
    pull: "Do not stake the year on a door that is already swinging shut.",
    readMin: 5,
    sections: [
      {
        label: "The toll booth stops collecting",
        paras: [
          "Thin pages engineered for a query, posts that exist to rank, the long funnel that assumed a visit before a verdict: when the answer arrives without the visit, the page that was only ever a toll booth collects nothing.",
          "This is the market-entry lesson in another costume. A channel that is quietly closing is a window closing, and pouring spend through it is the same error as staking a launch on a distributor route that is already drying up.",
        ],
      },
      {
        label: "Own demand, do not rent it",
        paras: [
          "What survives is anything that owns demand: a brand asked for by name, a category position strong enough to be the cited answer, relationships and reputation no summary can disintermediate. Owned audiences and earned authority do not depend on a click that may not come.",
          "Across fifteen markets the durable asset was always the name a buyer already trusted. The Gulf rewards it especially, where relationships and specification habits outlast any algorithm's quarter.",
        ],
      },
      {
        label: "Reallocate before you are forced to",
        paras: [
          "The shift is uncomfortable because it moves budget from measurable intercepts to harder-to-attribute demand creation. But optimising a closing channel is a slow, well-instrumented way to lose.",
          "Carry the complexity of the transition so the client sees a clear reallocation, not a panic. Different channels, different rituals, the same discipline: build the demand you own before the rented kind disappears.",
        ],
      },
    ],
  },
  {
    slug: "brand-procurement-algorithm",
    date: "Oct 22, 2024",
    year: "2024",
    topic: "Strategy",
    title: "How to Build a Brand When the Buyer Is a Procurement Algorithm",
    dek: "The identity that qualifies itself, written for two audiences.",
    tldr: "In industrial categories a filter screens the brand before a person sees it. Design for two passes: qualification first, preference second, and make the rigour feel like part of the brand.",
    pull: "In procurement-led markets, rigour is a brand attribute, not a footnote.",
    readMin: 5,
    sections: [
      {
        label: "The first reader has no taste",
        paras: [
          "A filter, a spec sheet, a compliance checklist, a portal screens the brand before any human sees it. A brand that cannot pass the gate never reaches the room where preference is built. Identity that ignores the gate is decoration on a door that stays shut.",
          "I have lived this in anchoring systems and passive fire protection, where the SABER or Civil Defence line decides whether you exist before anyone judges whether you are good. The gate is the market's first opinion of you.",
        ],
      },
      {
        label: "Two passes, one brand",
        paras: [
          "The first pass is qualification: certifications, codes, unambiguous product data that let the algorithm say yes. The second is preference: the story and the trust that make a qualified option the chosen one once a human finally looks.",
          "The craft is making the qualifying layer feel like the brand, not an apology beneath it. Approvals and test data presented with the care of a hero line signal a company that takes the buyer's risk seriously.",
        ],
      },
      {
        label: "Rigour as identity",
        paras: [
          "This inverts the consumer instinct, where emotion leads. In cosmetics the claim seduces; in fire protection the claim must first be true and provable. Both are brand work. Only the order changes.",
          "Carry the complexity of conformity so the client never treats compliance as the enemy of brand. Different buyers, the same discipline: qualify quietly, then earn the preference.",
        ],
      },
    ],
  },
  {
    slug: "ai-branding-workflow-one-year",
    date: "Jul 09, 2024",
    year: "2024",
    topic: "Craft",
    title: "AI in the Branding Workflow, One Year In",
    dek: "The model in the loop, and the loop that did the changing.",
    tldr: "The model compressed the middle, not the judgment. Treat it as a fast junior with no taste or accountability; value migrates to the brief and the verdict.",
    pull: "When execution is cheap, clients pay for the constraint and the verdict.",
    readMin: 5,
    sections: [
      {
        label: "What got faster",
        paras: [
          "Research that took a week takes a day. First drafts of names, territories, and copy arrive in minutes. The middle of the process compressed. The ends did not.",
          "For a one-person practice carrying work across fifteen markets, this is leverage, not threat. It is the assistant I never had: tireless and instant, with no judgment of its own.",
        ],
      },
      {
        label: "What did not",
        paras: [
          "Deciding which cheap option is correct, and defending it out loud, is exactly as hard as before. The failure mode is letting fluency stand in for judgment, shipping the plausible because it arrived first and read well, then learning in market that plausible and correct were never the same.",
          "The model has no accountability. When the recommendation meets a board or a regulator, a person signs it. That person is the product.",
        ],
      },
      {
        label: "Value moved upstream",
        paras: [
          "Clients who paid for output now pay for the constraint and the verdict. The practices adapting fastest always sold judgment and merely used deliverables to prove they had it.",
          "Carry the complexity of the new workflow so the client sees a sharper, faster practice, not the scaffolding behind it. Different tools, the same discipline underneath.",
        ],
      },
    ],
  },
  {
    slug: "brand-maturity-stakeholder-alignment",
    date: "Mar 19, 2024",
    year: "2024",
    topic: "Strategy",
    title: "Why Brand Maturity Stalls at Stakeholder Alignment",
    dek: "The six stakeholders, and the two decisions that move the work.",
    tldr: "Programmes fail in the room, not on the page. Consensus sands the strategy to the version nobody objects to and nobody will fund. Separate input from authority.",
    pull: "Consensus optimises for the absence of complaint.",
    readMin: 5,
    sections: [
      {
        label: "The room, not the work",
        paras: [
          "Six stakeholders each hold a partial veto and none holds the decision. The strategy gets sanded to the version nobody objects to, which is also the version nobody funds with conviction. Agreement is reached and nothing happens.",
          "In family conglomerates and diversified groups, common across the Gulf, a single decision moves through three generations before it ships. The room is the real terrain, not the deck.",
        ],
      },
      {
        label: "Alignment is not consensus",
        paras: [
          "What the work needs is a decision-maker and a decision: the one person who owns the outcome and the one or two choices that change it, the position and the priority. Everything else is preference dressed as principle.",
          "Gather the six, name the one, and frame the two real decisions in terms of the outcome each is accountable to. Maturity is fewer decisions made by the right person, protected from the rest.",
        ],
      },
      {
        label: "Carry the politics",
        paras: [
          "The strategist's job includes absorbing the stakeholder chaos so the decision-maker sees a clean choice, not a committee. That is carrying the complexity in its most literal form.",
          "Whether the client sells outdoor LED or specialty food, the alignment problem is identical. Different rooms, the same discipline: find the one, frame the two, protect the work.",
        ],
      },
    ],
  },
  {
    slug: "gtm-decks-channel-map",
    date: "Dec 12, 2023",
    year: "2023",
    topic: "Marketing",
    title: "Why Go-to-Market Decks Fail Without a Channel Map",
    dek: "The strategy nobody can execute because nobody walked the channel.",
    tldr: "Decks are strong on positioning and silent on plumbing. The channel map prices every handoff and names every gatekeeper; without it the launch dies a quarter after the applause.",
    pull: "A destination without a route is a postcard, not a plan.",
    readMin: 5,
    sections: [
      {
        label: "The gap past the thesis",
        paras: [
          "A go-to-market deck says who the buyer is and why they should care, then waves at distribution as if the product teleports to the shelf. The gap between thesis and channel is where launches actually die.",
          "I have built these for a thermal-insulation entrant and for a cosmetics brand, and the deck always wants to stop at the border. The work begins exactly there.",
        ],
      },
      {
        label: "What the map contains",
        paras: [
          "Who stocks it, who specifies it, who installs it, what margin each link needs, and what each must believe to push rather than merely carry. In the GCC the distributor, the consultant, and the contractor are three audiences on three clocks.",
          "Each handoff has a price the model usually omits. A distributor margin the case did not leave room for is not a detail. It is the difference between a plan and a wish.",
        ],
      },
      {
        label: "Walk it first",
        paras: [
          "Walk the channel before you present the strategy. Price each handoff, name each gatekeeper, sequence the approvals, so the recommendation arrives with a path and not just a destination.",
          "Carry the complexity of the channel so the client receives one executable route. Different sectors, the same discipline: the strategy is only as good as the last mile it can survive.",
        ],
      },
    ],
  },
  {
    slug: "brand-studio-tool-stack",
    date: "Sep 05, 2023",
    year: "2023",
    topic: "Craft",
    title: "The Modern Brand Studio's Tool Stack, Reconsidered",
    dek: "The shrinking surface area between strategy and design.",
    tldr: "The new stack collapses the relay between research, strategy, and design into one person and a few tools. Freeing and dangerous; the seams that caught errors are gone.",
    pull: "The surface area shrank. The need to defend each choice did not.",
    readMin: 4,
    sections: [
      {
        label: "The relay collapsed",
        paras: [
          "The old stack assumed a relay with a handoff at each baton pass. The new one lets the same person frame the strategy, generate the directions, and test them, because the tools no longer enforce the boundaries the org chart used to.",
          "For a solo operator this is the whole game. It is how one person carries brand and business case end to end across fifteen markets without an agency layer.",
        ],
      },
      {
        label: "Speed without seams",
        paras: [
          "The handoff reviews and the specialist's veto used to catch errors. Remove them and speed ships confident mistakes faster than the old process caught them. Fewer tools demand more deliberate gates.",
          "The judgment has to move into the operator, because nothing downstream will save a bad call. The stack is only ever as good as the discipline running it.",
        ],
      },
      {
        label: "Where judgment lives",
        paras: [
          "The reconsidered stack is less about apps than about where the verdict sits: one gate to validate the brief, one to pressure-test the chosen direction before it scales.",
          "Carry the complexity of the toolchain so the client sees clean output, not the pipeline. Different software, the same discipline underneath.",
        ],
      },
    ],
  },
  {
    slug: "pipelines-graveyards",
    date: "May 23, 2023",
    year: "2023",
    topic: "Bizdev",
    title: "Why Marketing Pipelines Turn Into Graveyards",
    dek: "The pipeline as memorial, the forecast as wishful thinking.",
    tldr: "When adding leads is rewarded and removing them is not, the pipeline fills with the dead. Honest stages are exit criteria; closing-lost should be as routine as closing-won.",
    pull: "A smaller pipeline that forecasts beats a large one that consoles.",
    readMin: 4,
    sections: [
      {
        label: "The graveyard fills",
        paras: [
          "Stages fill with deals that will never close because nobody is paid to mark them dead. The forecast inflates, the team optimises a number everyone privately distrusts, and the real opportunities drown in the count.",
          "In long industrial cycles this is endemic. A facade or fire-protection deal can sit active for a year of wishful status updates while the project quietly went elsewhere.",
        ],
      },
      {
        label: "Definitions, not feelings",
        paras: [
          "If a stage means we talked, everything qualifies. If it means the buyer took a dated action, the pipeline cleans itself. Honest stages are exit criteria. A deal that cannot meet the criterion is gone, and the kindest thing is to say so.",
          "The same rule governs a distributor pipeline in Karachi and a retail one in Dubai. The ritual differs; the hygiene does not.",
        ],
      },
      {
        label: "Hygiene as policy",
        paras: [
          "Time-box stages, force a reason on every advance, make closing-lost routine. You can plan against a small honest pipeline and only pray over a large dishonest one.",
          "Carry the complexity of qualification so the client's forecast means something. Different markets, the same discipline: a pipeline is a plan, not a memorial.",
        ],
      },
    ],
  },
  {
    slug: "founders-communicate-in-logos",
    date: "Feb 14, 2023",
    year: "2023",
    topic: "Bizdev",
    title: "Working With Founders Who Communicate in Logos",
    dek: "The founder who thinks in marks, and the strategy underneath.",
    tldr: "Some founders brief in symbols because the artifact is a proxy for a decision they cannot yet word. The work is translation, not compliance.",
    pull: "The logo was the founder asking, in the only vocabulary at hand, to be understood.",
    readMin: 4,
    sections: [
      {
        label: "Briefing in symbols",
        paras: [
          "A founder sends a logo they admire, a colour they love, a competitor's mark to beat, and expects the strategy read out of the image. The instinct is real; the artifact is a proxy for a decision not yet in words.",
          "I have sat with founder-led consumer brands where the strategist also names the product and sets the palette. The reference is never the brief. It is the symptom.",
        ],
      },
      {
        label: "Translation, not compliance",
        paras: [
          "Behind make it like this is a position the founder feels but cannot state: who they want to be chosen over, what the buyer should assume in three seconds. The job is to pull that into language, agree it, then return to the mark with something to express.",
          "This is the same act whether the founder runs a sports label or an organic-goods line. Different aisles, the same translation.",
        ],
      },
      {
        label: "Trust no deck can buy",
        paras: [
          "The founder who sees their instinct named back accurately stops sending references and starts making decisions. Understanding, not output, is what shifts the relationship.",
          "Carry the complexity of turning instinct into strategy so the founder feels led, not corrected. Different founders, the same discipline underneath.",
        ],
      },
    ],
  },
  {
    slug: "brand-audit-without-ceremony",
    date: "Oct 11, 2022",
    year: "2022",
    topic: "Branding",
    title: "How to Run a Brand Audit Without Ceremony",
    dek: "The quiet review a small team can run in an afternoon.",
    tldr: "The six-week branded audit is often theatre. Three questions and an honest walk through every touchpoint find most of it in an afternoon.",
    pull: "The point of an audit is the change it triggers, not the document it produces.",
    readMin: 4,
    sections: [
      {
        label: "The theatre of the audit",
        paras: [
          "The branded audit with a workshop and a bound deck is often ceremony. Most of what it surfaces a small team finds in an afternoon: where the brand shows up, what it says in each place, and where it contradicts itself without noticing.",
          "I have reviewed brands across fifteen markets the same way: by actually looking, in order, at every touchpoint a real buyer hits on the way to yes.",
        ],
      },
      {
        label: "The value is the contradiction",
        paras: [
          "The site promises premium, the invoice looks like 2009, the sales email opens with a discount. Each gap is trust the brand is spending that it could keep. You do not need a methodology to see them. You need to look.",
          "In industrial sales the contradictions hide in the unglamorous places: the data sheet, the quotation, the delivery note. Those are the brand too.",
        ],
      },
      {
        label: "Act, do not bind",
        paras: [
          "Ceremony justifies the fee, not the finding. A lightweight audit run honestly and acted on quickly beats the bound report that arrives late and sits on a shelf as proof that something was once considered.",
          "Carry the complexity of the review so the client gets a short list of fixes, not a long document. Different brands, the same discipline: the audit is the change, not the deck.",
        ],
      },
    ],
  },
  {
    slug: "pitch-deck-business-development",
    date: "Jun 28, 2022",
    year: "2022",
    topic: "Bizdev",
    title: "Why the Pitch Deck Still Runs Business Development",
    dek: "The deck that refuses to die, and what it signals.",
    tldr: "The deck survives because it forces a story into a sequence a buyer can follow and a champion can forward. It is a script for a meeting you will not attend.",
    pull: "Business development is the work of equipping someone to argue for you when you are absent.",
    readMin: 4,
    sections: [
      {
        label: "It refuses to die",
        paras: [
          "Every few years someone declares the pitch deck dead, and every year it runs more deals than its replacements. It does what a CRM cannot: forces a story into a fixed sequence a buyer can follow and a champion can forward.",
          "Across fifteen markets the deck was the one artifact that travelled reliably into rooms I would never enter. A great conversation does not forward. A tight deck does.",
        ],
      },
      {
        label: "Persuasion at a distance",
        paras: [
          "A purchase moves through people who were never in the meeting, and the deck is what reaches them. In conglomerate buying the decision crosses departments and generations, and the deck carries the argument across that distance.",
          "Built as a brochure it fails. Built as a script for the meeting you will not attend, every slide earns its place by answering the next stakeholder's objection.",
        ],
      },
      {
        label: "An old format for an old problem",
        paras: [
          "The format persists because the problem it solves, persuasion at a distance, is older still and unchanged. The medium is not the point. The relay is.",
          "Carry the complexity of the sale so the champion holds a simple, forwardable case. Different deals, the same discipline underneath.",
        ],
      },
    ],
  },
  {
    slug: "rebrand-makes-things-worse",
    date: "Mar 22, 2022",
    year: "2022",
    topic: "Branding",
    title: "When a Rebrand Makes Things Worse",
    dek: "The rebrand nobody asked for, and what it cost.",
    tldr: "A rebrand makes things worse when it solves a problem the business does not have. The tell is internal motivation; the cost is equity reset to zero.",
    pull: "The people closest to a brand tire of it long before the market notices it.",
    readMin: 4,
    sections: [
      {
        label: "Solving the wrong problem",
        paras: [
          "A rebrand makes things worse when recognition built over years is discarded for novelty, the sales team relearns its own story, and the market reads change as instability. The cost is rarely the fee. It is the equity reset on purpose.",
          "In markets where trust is slow to earn, the Gulf especially, throwing away a known name is expensive in a way the design budget never shows.",
        ],
      },
      {
        label: "The tell is internal",
        paras: [
          "Rebrands driven by a new executive marking territory, or a team bored of its own logo, move the surface while the real problem, a weak position or an unclear offer, sits untouched underneath. New paint on a house whose foundation was never the complaint.",
          "The same trap waits in cosmetics and in construction materials. Different aisles, the same misdiagnosis.",
        ],
      },
      {
        label: "Fatigue is not failure",
        paras: [
          "The people closest to a brand tire of it long before the market even notices it exists. Before changing what a brand looks like, be certain the problem is not what it means.",
          "Carry the complexity of that diagnosis so the client does not pay to fix the wrong thing. Different brands, the same discipline: a rebrand cannot settle a positioning the company never did.",
        ],
      },
    ],
  },
  {
    slug: "market-entry-last-mile",
    date: "Dec 07, 2021",
    year: "2021",
    topic: "Strategy",
    title: "Why Market Entry Fails at the Last Mile",
    dek: "The plan that ends exactly where the distributor begins.",
    tldr: "Entry plans are immaculate to the border and vague past it. The last mile, distributor, regulator, installer, is where assumptions meet reality and launches die.",
    pull: "The question is whether you can reach the shelf before the window closes.",
    readMin: 5,
    sections: [
      {
        label: "Immaculate to the border",
        paras: [
          "The market is sized, the positioning is sharp, the pricing is modelled, and the document stops precisely where execution starts: at the distributor, the regulator, the installer, the people who decide whether the product moves.",
          "This is the failure I have seen most across fifteen markets. The case is perfect on paper and silent on the one mile that matters.",
        ],
      },
      {
        label: "Where assumptions meet reality",
        paras: [
          "The distributor wants a margin the model did not leave. The approval takes two quarters the timeline did not budget. The contractor specifies what he already trusts. None of it is visible from a spreadsheet, and all of it is fatal.",
          "The corridors compound it. What clears in the UAE stalls in Saudi Arabia on a different scheme, and a relationship-led sale in India fails where the Gulf spec sheet screens you first.",
        ],
      },
      {
        label: "Treat the last mile as the plan",
        paras: [
          "Name the gatekeepers, price each handoff, sequence the approvals, pressure-test the channel before committing the year. The question is rarely whether the market is attractive. It is whether you can reach the shelf in time.",
          "Carry the complexity of the last mile so the client commits to a route, not a hope. Different markets, the same discipline underneath.",
        ],
      },
    ],
  },
  {
    slug: "brand-guidelines-fail",
    date: "Sep 14, 2021",
    year: "2021",
    topic: "Branding",
    title: "Why Most Brand Guidelines Fail as Deliverables",
    dek: "The style guide mistaken for a discipline.",
    tldr: "Guidelines fail when they document appearance and omit judgment. Useful guidance reads like a way of deciding, not a list of what is forbidden.",
    pull: "A guideline that cannot help someone choose in a new situation is a museum, not a tool.",
    readMin: 4,
    sections: [
      {
        label: "Appearance without judgment",
        paras: [
          "A guideline specifies the logo's clear space to the pixel and says nothing about what the brand would and would not say. Teams follow the rules they can measure and improvise the rest, which is most of what matters.",
          "I have inherited brands across fifteen markets where a thick guideline governed margins and colours but left every real decision unguided.",
        ],
      },
      {
        label: "Constraints, not enablers",
        paras: [
          "Written as prohibitions, guidelines tell a junior marketer what is forbidden and leave them unequipped for the decision the document never anticipated. A guideline that cannot help someone choose in a new situation is a museum.",
          "Across cultures this bites harder. A rule written for Dubai retail does not tell a Karachi team how to decide. Only a principle can travel.",
        ],
      },
      {
        label: "Encode the way of deciding",
        paras: [
          "Useful guidance reads like a method: the principle behind the colour, the reason for the voice, the question to ask when the rule runs out. Shorter than the PDF, and far harder to write, because it encodes taste rather than locking it.",
          "Carry the complexity of judgment into the document so the client's team can decide without you. Different brands, the same discipline underneath.",
        ],
      },
    ],
  },
  {
    slug: "client-check-ins",
    date: "May 18, 2021",
    year: "2021",
    topic: "Bizdev",
    title: "How to Run Client Check-Ins That Actually Work",
    dek: "The status call that left the room and got quieter.",
    tldr: "The recurring status call is where engagements quietly die. Make status a two-minute document; reserve live time for decisions only the client can make.",
    pull: "A check-in should leave the room with a decision made, not a calendar invite renewed.",
    readMin: 4,
    sections: [
      {
        label: "Where engagements die",
        paras: [
          "The recurring call fills with activity, what was done and what is next, and avoids the only thing that matters: whether the work is moving the number it was hired to move. It feels productive and decides nothing.",
          "Running work solo across fifteen markets, the standing call is also the most expensive habit there is: time that should be execution spent narrating execution.",
        ],
      },
      {
        label: "Status is a document",
        paras: [
          "Status is something the client reads in two minutes. Live time, when needed at all, is spent on decisions, the choices only the client can make, each framed with a recommendation and a deadline. Talk is reserved for what talk is good at.",
          "This scales across time zones and corridors, where a synchronous ritual is a tax the work cannot afford.",
        ],
      },
      {
        label: "Decide, do not renew",
        paras: [
          "The discipline spares the client a meeting that earns its place by habit and forces the strategist to translate motion into outcome on a cadence.",
          "Carry the complexity of progress into a clean decision so the client is never managing you. Different engagements, the same discipline underneath.",
        ],
      },
    ],
  },
];

export const ESSAYS: Essay[] = ENTRIES.map((e, i) => ({
  ...e,
  num: String(i + 1).padStart(2, "0"),
}));

export function essayBySlug(slug: string) {
  return ESSAYS.find((e) => e.slug === slug);
}
