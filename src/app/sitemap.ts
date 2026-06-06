import type { MetadataRoute } from "next";
import { allWork } from "./_components/site-data";
import { ESSAYS } from "./_components/margins-data";
import { SITE_URL } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/bio`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/margins`,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  const work: MetadataRoute.Sitemap = allWork.map((w) => ({
    url: `${SITE_URL}/work/${w.slug}`,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const essays: MetadataRoute.Sitemap = ESSAYS.map((e) => ({
    url: `${SITE_URL}/margins/${e.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...home, ...work, ...essays];
}
