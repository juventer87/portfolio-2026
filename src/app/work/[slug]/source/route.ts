import { readFile } from "node:fs/promises";
import path from "node:path";
import { allWork, assetRelPath, workBySlug } from "../../../_components/site-data";

// Pre-render one source response per known work at build time.
export const dynamic = "force-static";

export function generateStaticParams() {
  return allWork.map((w) => ({ slug: w.slug }));
}

// Serves the original asset document as-is. The file is only ever READ; the
// path is built from trusted in-repo data, so there is no traversal surface.
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const work = workBySlug(slug);
  if (!work) return new Response("Not found", { status: 404 });

  try {
    const html = await readFile(path.join(process.cwd(), assetRelPath(work)), "utf8");
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Source document unavailable", { status: 404 });
  }
}
