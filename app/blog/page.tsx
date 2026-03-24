import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Product Photography Blog — Tips, Guides & Industry Insights",
  description:
    "Guides, comparisons, and tips on AI product photography, UGC video creation, and e-commerce content strategy from the Pocket Director AI team.",
  alternates: { canonical: "https://pocketdirectorai.com/blog" },
  openGraph: {
    title: "AI Product Photography Blog — Tips, Guides & Industry Insights",
    description:
      "Guides, comparisons, and tips on AI product photography, UGC video creation, and e-commerce content strategy.",
    type: "website",
    url: "https://pocketdirectorai.com/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Pocket Director AI Blog",
  description:
    "Guides, comparisons, and tips on AI product photography, UGC video creation, and e-commerce content strategy.",
  url: "https://pocketdirectorai.com/blog",
  publisher: {
    "@type": "Organization",
    name: "Pocket Director AI",
    url: "https://pocketdirectorai.com",
  },
};

const posts = [
  {
    title: "AI Product Photography: The Complete Guide for E-Commerce Brands (2026)",
    href: "/blog/ai-product-photography-complete-guide",
    date: "March 23, 2026",
    dateTime: "2026-03-23",
    readTime: "12 min read",
    description:
      "A complete walkthrough of how AI product photography works in 2026, from the underlying technology to tool comparisons and real cost breakdowns. Written for e-commerce brand owners and operators making decisions today.",
  },
  {
    title: "Flair AI vs Pocket Director AI: Which Is Better for Product Photos?",
    href: "/blog/flair-ai-vs-pocket-director",
    date: "March 21, 2026",
    dateTime: "2026-03-21",
    readTime: "6 min read",
    description:
      "A direct comparison of two AI product photography tools with genuinely different philosophies. Covers workflow, output quality, pricing, and which type of user each tool actually fits.",
  },
  {
    title: "Best AI Product Photography Tools in 2026 (Honest Comparison)",
    href: "/blog/best-ai-product-photography-tools",
    date: "March 20, 2026",
    dateTime: "2026-03-20",
    readTime: "10 min read",
    description:
      "An honest look at the top AI product photography tools available right now, including what each one is actually good at and where each one falls short. No sponsored rankings.",
  },
  {
    title: "AI vs Traditional Product Photography: Real Results",
    href: "/blog/ai-vs-traditional-product-photography",
    date: "March 18, 2026",
    dateTime: "2026-03-18",
    readTime: "7 min read",
    description:
      "Side-by-side comparisons of AI-generated product images and traditional studio shots across multiple product categories. Includes conversion rate data from live A/B tests on real storefronts.",
  },
  {
    title: "Amazon Product Photography in 2026: The AI-First Playbook",
    href: "/blog/amazon-product-photography-ai-guide",
    date: "March 17, 2026",
    dateTime: "2026-03-17",
    readTime: "9 min read",
    description:
      "A practical guide to meeting Amazon image requirements using AI, from compliant white-background main images to A+ Content lifestyle shots. Covers what Amazon allows and how to produce it in minutes.",
  },
  {
    title: "UGC Videos for E-Commerce: Why They Convert Better",
    href: "/blog/ugc-videos-ecommerce-guide",
    date: "March 15, 2026",
    dateTime: "2026-03-15",
    readTime: "8 min read",
    description:
      "Why UGC-style videos outperform polished ad creative on TikTok, Meta, and Instagram Reels, and how e-commerce brands are generating them with AI in the same session as their product photos.",
  },
  {
    title: "How to Optimize Your Shopify Product Images for More Sales",
    href: "/blog/shopify-product-image-optimization",
    date: "March 12, 2026",
    dateTime: "2026-03-12",
    readTime: "9 min read",
    description:
      "A practical guide to product image optimization for Shopify stores, covering dimensions, file formats, alt text, page speed, and how image style affects conversion rate based on real store data.",
  },
  {
    title: "How to Create Product Photos Without a Photographer",
    href: "/blog/how-to-take-product-photos-without-photographer",
    date: "March 8, 2026",
    dateTime: "2026-03-08",
    readTime: "8 min read",
    description:
      "A step-by-step guide for e-commerce sellers who need professional product photos but do not have a photographer, a studio, or a large budget. Covers both DIY approaches and AI-generated alternatives.",
  },
  {
    title: "AI Product Photo Backgrounds: Why You Don't Need a Background Remover",
    href: "/blog/product-photo-background-ai",
    date: "March 5, 2026",
    dateTime: "2026-03-05",
    readTime: "7 min read",
    description:
      "The case against background removal tools for product photography and why AI scene generation produces better results. Explains the difference between compositing a cut-out and generating a complete scene.",
  },
  {
    title: "Product Photography Cost Breakdown: How Brands Save $35,000/Year",
    href: "/blog/product-photography-cost-breakdown",
    date: "March 1, 2026",
    dateTime: "2026-03-01",
    readTime: "7 min read",
    description:
      "A line-by-line breakdown of what traditional product photography actually costs, including photographer fees, studio rental, retouching, and turnaround time, compared to what AI-generated photography costs in 2026.",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Nav */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-indigo-600">
            Pocket Director AI
          </Link>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="bg-indigo-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Start Free
          </a>
        </div>
      </header>

      {/* Page header */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-gray-900">
            AI Product Photography Blog
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Guides, comparisons, and tips on AI product photography, UGC video, and e-commerce
            content strategy. No fluff.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <article
                key={post.href}
                className="bg-white border border-gray-200 rounded-2xl p-7 hover:border-indigo-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
                  <time dateTime={post.dateTime}>{post.date}</time>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 text-lg leading-snug mb-3 group-hover:text-indigo-700 transition-colors">
                  <Link href={post.href}>{post.title}</Link>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{post.description}</p>
                <Link
                  href={post.href}
                  className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">See It in Action</h2>
          <p className="text-gray-500 mb-8">
            200 free credits, no credit card. Upload a product and get 8 professional images in under
            4 minutes.
          </p>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
          >
            Try Pocket Director AI Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© 2026 Pocket Director AI. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/vs/flair-ai" className="hover:text-indigo-600">
              vs Flair AI
            </Link>
            <Link href="/vs/photoroom" className="hover:text-indigo-600">
              vs Photoroom
            </Link>
            <Link href="/agencies" className="hover:text-indigo-600">
              For Agencies
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
