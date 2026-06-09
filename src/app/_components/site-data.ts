/*
  Real content, curated from the asset libraries in this repository.
  Creative track  -> /Brand Briefs   (22 identity briefs)
  Analytic track  -> /Reports + /PDF Files (11 GTM / market-entry studies)

  Brand metadata (year + discipline) is read directly from each brief's own
  <Date> / <Discipline> fields. Display strings are cleaned of em-dashes.
*/

export const profile = {
  name: "Mohammed Vaseeuddin",
  role: "Brand & GTM Strategist",
  years: 16,
  regions: ["GCC", "MENA", "India"],
  positioning: "GCC & MENA industrial and media-facade leader",
};

export type Track = "creative" | "analytic";

/** Asset directories. Read-only: never written, moved, or modified. */
export const ASSET_DIRS = {
  creative: "Brand Briefs",
  analytic: "Reports",
} as const;

export type Work = {
  slug: string;
  title: string;
  /** Discipline (creative) or focus (analytic). Real, from the asset files. */
  meta: string;
  /** Region tag for analytic work; sector word for creative. */
  tag: string;
  track: Track;
  /** Real authored year where known; used for ordering and display. */
  year: number;
  /** Source HTML filename inside the track's asset directory. */
  file: string;
};

// Creative track: all 22 brand systems, with real dates + disciplines.
export const creativeWork: Work[] = [
  { slug: "swagat-group", title: "Swagat Group", meta: "Hospitality & Logistics", tag: "Group", track: "creative", year: 2025, file: "swagat_group.html" },
  { slug: "frites-elixir", title: "Frites & Elixir", meta: "Cafe / Bistro", tag: "F&B", track: "creative", year: 2024, file: "frites_elixir.html" },
  { slug: "sarafy", title: "Sarafy", meta: "Digital Wallet", tag: "Fintech", track: "creative", year: 2023, file: "sarafy.html" },
  { slug: "segarra", title: "Segarra", meta: "Lifestyle Brand", tag: "Lifestyle", track: "creative", year: 2023, file: "segarra.html" },
  { slug: "ryntal", title: "Ryntal", meta: "Rentals / Real Estate", tag: "Proptech", track: "creative", year: 2022, file: "ryntal.html" },
  { slug: "zero-makeup", title: "Zero Makeup", meta: "Cosmetics", tag: "Beauty", track: "creative", year: 2021, file: "zero_makeup.html" },
  { slug: "afifa", title: "AFIFA", meta: "Personal Label", tag: "Fashion", track: "creative", year: 2020, file: "afifa.html" },
  { slug: "lookbook", title: "Lookbook", meta: "Catalog Service", tag: "Fashion", track: "creative", year: 2020, file: "lookbook.html" },
  { slug: "medical-nutricare", title: "Medical Nutricare", meta: "Clinical Nutrition", tag: "Health", track: "creative", year: 2020, file: "medical_nutricare.html" },
  { slug: "foodizm", title: "Foodizm", meta: "Multi-Kitchen QSR", tag: "F&B", track: "creative", year: 2020, file: "Foodizm_Brand_Brief.html" },
  { slug: "asite", title: "ASITE", meta: "Web Development & UI/UX Lab", tag: "Technology", track: "creative", year: 2017, file: "asite.html" },
  { slug: "khadijas-kitchen", title: "Khadija's Kitchen", meta: "Home Kitchen & Catering", tag: "F&B", track: "creative", year: 2017, file: "khadijas_kitchen.html" },
  { slug: "cognizance", title: "Cognizance", meta: "Unitech Newsletter", tag: "Corporate", track: "creative", year: 2015, file: "cognizance.html" },
  { slug: "rayhaan", title: "Rayhaan", meta: "Personal Brand", tag: "Travel", track: "creative", year: 2014, file: "rayhaan.html" },
  { slug: "jv-one", title: "JV One", meta: "Venturing Company", tag: "Corporate", track: "creative", year: 2012, file: "jv_one.html" },
  { slug: "al-fateh", title: "Al Fateh", meta: "Hajj & Umrah Services", tag: "Pilgrimage", track: "creative", year: 2012, file: "Al_Fateh_Brand_Brief.html" },
  { slug: "tedx-deccan", title: "TEDx Deccan", meta: "Event Poster", tag: "Event", track: "creative", year: 2011, file: "TEDx_Deccan_Poster_Case.html" },
  { slug: "beekeepers", title: "Beekeeper's", meta: "Natural Honey", tag: "Food", track: "creative", year: 2010, file: "beekeepers.html" },
  { slug: "raw-earth-organics", title: "Raw Earth Organics", meta: "Organic Dehydrated Fruits", tag: "Food", track: "creative", year: 2010, file: "raw_earth_organics.html" },
  { slug: "spice-herb-co", title: "The Spice & Herb Co.", meta: "Spices & Seasonings", tag: "F&B", track: "creative", year: 2010, file: "spice_herb_co.html" },
  { slug: "seema-interiors", title: "Seema Interior Design", meta: "Design Studio", tag: "Interiors", track: "creative", year: 2008, file: "seema_interiors.html" },
  { slug: "visage-studio", title: "Visage Studios", meta: "Sports, Wedding & Event", tag: "Photography", track: "creative", year: 2008, file: "visage_studio.html" },
  { slug: "barbarians-fc", title: "Barbarians F.C.", meta: "Football Club", tag: "Sports", track: "creative", year: 2007, file: "barbarians_fc.html" },
  { slug: "hydrogen", title: "Hydrogen Magazine", meta: "Editorial Media", tag: "Publishing", track: "creative", year: 2005, file: "hydrogen.html" },
  { slug: "komasi", title: "Komasi", meta: "Cutting & Grinding Discs", tag: "Industrial", track: "creative", year: 2018, file: "komasi.html" },
];

// Analytic track: all 11 market-entry / GTM studies. Year shown only where the
// study states its own period; the rest are ordered but display region instead.
export const analyticWork: Work[] = [
  { slug: "celplast", title: "Celplast", meta: "Thermal insulation market entry", tag: "GCC", track: "analytic", year: 2026, file: "Celplast_GCC_Market_Entry_Study.html" },
  { slug: "savc-fractals", title: "SAVC × Fractals", meta: "Alliance activation", tag: "GCC", track: "analytic", year: 2026, file: "Report 02_SAVC_Fractals_Alliance.html" },
  { slug: "zero-makeup-uae", title: "Zero Makeup", meta: "UAE channel expansion roadmap", tag: "UAE", track: "analytic", year: 2026, file: "ZERO_Makeup_UAE_Channel_Expansion_Roadmap.html" },
  { slug: "zero-makeup-arabia", title: "Zero Makeup Arabia", meta: "24-month growth roadmap", tag: "GCC", track: "analytic", year: 2026, file: "ZERO_Makeup_Arabia_Growth_Blueprint.html" },
  { slug: "tti", title: "TTI", meta: "Middle East, Africa & India growth brief", tag: "MENA", track: "analytic", year: 2026, file: "TTI_growth_brief.html" },
  { slug: "dessert39", title: "Dessert39", meta: "GCC entry blueprint", tag: "GCC", track: "analytic", year: 2026, file: "Dessert39_GCC_Entry_Blueprint.html" },
  { slug: "savc-jeddah", title: "SAVC", meta: "Jeddah Tower media facade dossier", tag: "KSA", track: "analytic", year: 2025, file: "Report 01_SAVC_Jeddah_Tower_Entry_Dossier.html" },
  { slug: "sti-mena", title: "STI", meta: "Passive fire protection read", tag: "MENA", track: "analytic", year: 2026, file: "STI_MENA_Strategic_Read.html" },
  { slug: "anchor-allied", title: "Anchor Allied", meta: "Sealants & construction chemicals read", tag: "GCC", track: "analytic", year: 2025, file: "Anchor_Allied_Strategic_Read.html" },
  { slug: "mac-algurg", title: "MAC Al Gurg", meta: "Product expansion & financial model", tag: "GCC", track: "analytic", year: 2025, file: "MAC_AlGurg_Expansion_Report.html" },
  { slug: "dolphin-firestop", title: "Dolphin Fire Stop", meta: "Strategic intelligence note", tag: "MENA", track: "analytic", year: 2025, file: "Dolphin_FireStop_Intelligence Report.html" },
];

export const allWork: Work[] = [...creativeWork, ...analyticWork].sort(
  (a, b) => b.year - a.year || a.title.localeCompare(b.title),
);

export const brandCount = creativeWork.length;
export const studyCount = analyticWork.length;

export function workBySlug(slug: string): Work | undefined {
  return allWork.find((w) => w.slug === slug);
}

/** 1-based position of a work in the full, ordered stream (for the file index). */
export function workIndex(slug: string): number {
  return allWork.findIndex((w) => w.slug === slug) + 1;
}

/**
 * Resolve a work's source file to a relative path under its asset directory.
 * The path is built ONLY from trusted in-repo data, never from raw user input,
 * so there is no traversal surface. Files are read, never written.
 */
export function assetRelPath(work: Work): string {
  return `${ASSET_DIRS[work.track]}/${work.file}`;
}
