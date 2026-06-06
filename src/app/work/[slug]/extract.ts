import { readFile } from "node:fs/promises";
import path from "node:path";
import { assetRelPath, type Work } from "../../_components/site-data";

export type Extracted = {
  standfirst: string | null;
  summary: string | null;
  sections: string[];
  details: { label: string; value: string }[];
};

/* Decode the few HTML entities the source files use, then strip any em / en
   dashes so the rendered page stays dash-clean. The originals stay untouched. */
function clean(raw: string): string {
  return raw
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&(?:mdash|ndash);/g, "-")
    .replace(/&(?:rsquo|lsquo);/g, "’")
    .replace(/&(?:ldquo|rdquo);/g, '"')
    .replace(/&(?:quot|#34);/g, '"')
    .replace(/&#0?39;/g, "’")
    .replace(/[—–]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function first(html: string, re: RegExp): string | null {
  const m = re.exec(html);
  return m ? clean(m[1]) || null : null;
}

function many(html: string, re: RegExp, max: number): string[] {
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) && out.length < max) {
    const t = clean(m[1]);
    if (t && !out.includes(t)) out.push(t);
  }
  return out;
}

function pairs(html: string, re: RegExp, max: number) {
  const out: { label: string; value: string }[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) && out.length < max) {
    const label = clean(m[1]);
    const value = clean(m[2]);
    if (label && value) out.push({ label, value });
  }
  return out;
}

export async function extractWork(work: Work): Promise<Extracted> {
  let html = "";
  try {
    html = await readFile(path.join(process.cwd(), assetRelPath(work)), "utf8");
  } catch {
    return { standfirst: null, summary: null, sections: [], details: [] };
  }

  const tagline = first(html, /class="tagline"[^>]*>([^<]+)</i);
  const heroTag = first(html, /class="hero-tag"[^>]*>([\s\S]*?)<\/[a-z]/i);
  const lead = first(html, /class="lead"[^>]*>([\s\S]*?)<\/p>/i);

  // Section outline: brief headings, else report section labels, else report h2.
  let sections = many(html, /<h2[^>]*class="[^"]*\bdisp\b[^"]*"[^>]*>([\s\S]*?)<\/h2>/gi, 12);
  if (sections.length === 0)
    sections = many(html, /class="section-label"[^>]*>([\s\S]*?)<\/div>/gi, 12);
  if (sections.length === 0)
    sections = many(html, /<h2[^>]*>([\s\S]*?)<\/h2>/gi, 8).map((s) =>
      s.length > 72 ? s.slice(0, 69).trimEnd() + "..." : s,
    );

  // Metadata pairs: brief Date/Client/Discipline, else report label/value.
  let details = pairs(html, /<div><span>([^<]+)<\/span><b>([\s\S]*?)<\/b>/gi, 6);
  if (details.length === 0)
    details = pairs(
      html,
      /class="label">([^<]+)<\/div>\s*<div class="value">([\s\S]*?)<\/div>/gi,
      6,
    );

  return {
    standfirst: tagline ?? heroTag,
    summary: lead,
    sections,
    details,
  };
}
