import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all major search engines + AI crawlers
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "GPTBot",          // ChatGPT
          "ChatGPT-User",    // ChatGPT browsing
          "PerplexityBot",   // Perplexity
          "ClaudeBot",       // Anthropic / Claude
          "anthropic-ai",    // Anthropic
          "Google-Extended", // Google Gemini + AI Overviews
          "OAI-SearchBot",   // OpenAI search
          "Bytespider",      // ByteDance / TikTok AI crawler
        ],
        allow: "/",
      },
      // Block Common Crawl (training data harvester — not a search/AI citation bot)
      {
        userAgent: "CCBot",
        disallow: "/",
      },
    ],
    sitemap: "https://pocketdirectorai.com/sitemap.xml",
    host: "https://pocketdirectorai.com",
  };
}
