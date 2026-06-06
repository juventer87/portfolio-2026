import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // The /work routes read the brand-brief and report HTML from these asset
  // directories. Pages are statically prerendered (so the reads happen at
  // build), but this guarantees the source files are also traced into the
  // deployment bundle in case a route is ever served dynamically.
  outputFileTracingIncludes: {
    "/work/[slug]": ["./Brand Briefs/**/*", "./Reports/**/*"],
    "/work/[slug]/source": ["./Brand Briefs/**/*", "./Reports/**/*"],
  },
};

export default nextConfig;
