import type { MetadataRoute } from "next";

// Confirmed production domain; override via NEXT_PUBLIC_SITE_URL for
// staging/local if needed (see .env.example).
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://gretpediatra.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
