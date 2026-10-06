import { site } from "@/lib/site";

/** Public website address. Used for canonical URLs, Open Graph and the sitemap. */
export const SITE_URL = "https://www.stagfamilycare.co.uk";

/**
 * Google Search Console verification code.
 * Paste only the content value of the verification meta tag here,
 * for example "abc123". Leave empty until you have it.
 */
export const GOOGLE_SITE_VERIFICATION = "";

export const DEFAULT_SHARE_IMAGE = `${SITE_URL}/brand/stag-family-care-logo.png`;

export const abs = (path: string) => `${SITE_URL}${path === "/" ? "/" : path}`;

interface PageHeadInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  extraMeta?: Array<Record<string, string>>;
}

/** Builds a complete, consistent head block for a page. */
export function pageHead({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_SHARE_IMAGE,
  imageAlt = `${site.name} logo`,
  noindex = false,
  extraMeta = [],
}: PageHeadInput) {
  const url = abs(path);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_GB" },
      { property: "og:image", content: image },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      { name: "robots", content: noindex ? "noindex, follow" : "index, follow" },
      ...extraMeta,
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        item: abs(it.path),
      })),
    }),
  };
}

export function jsonLd(data: Record<string, unknown>) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}
