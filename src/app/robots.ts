import type { MetadataRoute } from "next";

// NEXT_PUBLIC_SITE_URL is intentionally unset until a production domain
// exists (see .env.example). Falling back to localhost keeps this route
// functional in dev/build without inventing a real domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
