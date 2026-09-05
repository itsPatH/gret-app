import type { MetadataRoute } from "next";

// See src/app/robots.ts — same domain rationale for NEXT_PUBLIC_SITE_URL.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gretpediatra.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
