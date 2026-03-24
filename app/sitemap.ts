import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://pocketdirectorai.com";
  const now = new Date("2026-03-23");

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/ugc-videos`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/amazon-sellers`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/shopify-brands`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/etsy-sellers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/alternatives/photoroom`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/alternatives/flair-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/alternatives/pebblely`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/agencies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/vs/flair-ai`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/vs/photoroom`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${base}/blog/ai-product-photography-complete-guide`,
      lastModified: new Date("2026-03-23"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/blog/how-to-take-product-photos-without-photographer`,
      lastModified: new Date("2026-03-08"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/blog/product-photography-cost-breakdown`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${base}/blog/best-ai-product-photography-tools`, lastModified: new Date("2026-03-20"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/amazon-product-photography-ai-guide`, lastModified: new Date("2026-03-17"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/blog/ugc-videos-ecommerce-guide`, lastModified: new Date("2026-03-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/ai-vs-traditional-product-photography`, lastModified: new Date("2026-03-18"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/shopify-product-image-optimization`, lastModified: new Date("2026-03-12"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/product-photo-background-ai`, lastModified: new Date("2026-03-05"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/blog/flair-ai-vs-pocket-director`, lastModified: new Date("2026-03-21"), changeFrequency: "monthly", priority: 0.8 },
  ];
}
