import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Product Photography Tool — Studio-Quality Photos in Minutes | Pocket Director AI",
  description:
    "Generate professional product photos and UGC-style videos with AI. No studio, no photographer. Start free with 200 credits — results in under 4 minutes. Used by 100+ e-commerce brands.",
  alternates: { canonical: "https://pocketdirectorai.com" },
  openGraph: {
    title: "AI Product Photography Tool — Studio-Quality Photos in Minutes",
    description:
      "Generate professional product photos and UGC-style videos with AI. No studio, no photographer. 200 free credits.",
    type: "website",
    url: "https://pocketdirectorai.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does the '8 shots from 1 photo' work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Upload one product photo and our AI generates 8 professional variations with different backgrounds, lighting styles, and compositions — optimized for Amazon, Instagram, luxury brands, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How much does AI product photography cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pocket Director AI starts at $15.20/month billed annually. Traditional product photography costs $300–800 per product with 1–3 week turnaround.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AI product photos commercially?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All images come with full commercial rights for use on websites, Amazon, Shopify, Instagram, Facebook, print, and packaging.",
      },
    },
    {
      "@type": "Question",
      name: "Does Pocket Director AI generate UGC videos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Pocket Director AI is currently the only AI product photography tool that also generates authentic UGC-style videos. Upload your product once and get both photos and videos optimized for paid social.",
      },
    },
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pocket Director AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI product photography and UGC video generation platform for e-commerce brands. Generate 8 professional product photos from one upload in under 4 minutes.",
  offers: {
    "@type": "Offer",
    price: "15.20",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
  },
};

const stats = [
  { value: "100+", label: "E-commerce brands" },
  { value: "4 min", label: "Avg. turnaround" },
  { value: "$35K", label: "Avg. annual savings" },
  { value: "200", label: "Free credits to start" },
];

const features = [
  {
    title: "8 Shots From 1 Photo",
    desc: "Upload one product photo. Get 8 professional variations — white background, lifestyle, luxury, studio, seasonal, and more.",
  },
  {
    title: "UGC Video Generation",
    desc: "The only AI photography tool that also generates authentic UGC-style videos. Ready for TikTok, Reels, and paid social.",
  },
  {
    title: "Amazon & Shopify Ready",
    desc: "Platform-optimized outputs. Amazon-compliant white backgrounds, Shopify-ready dimensions, Instagram crops — automatically.",
  },
  {
    title: "Full Commercial Rights",
    desc: "Every image and video generated comes with full commercial rights. Use on your website, Amazon, packaging, ads, anywhere.",
  },
  {
    title: "500+ Scene Styles",
    desc: "From pure white studio to lifestyle, luxury editorial, seasonal, and brand-specific environments. No prompting required.",
  },
  {
    title: "4-Minute Turnaround",
    desc: "No scheduling, no shipping products, no waiting weeks. Upload, pick a style, download. Done in under 4 minutes.",
  },
];

const testimonials = [
  {
    quote:
      "We tested AI-generated lifestyle images against our old white-background studio shots. The AI images won in every A/B test. Conversion rate went up 35% and we stopped spending $2,400/month on photographers.",
    name: "Sarah Chen",
    title: "Shopify Brand Owner",
    result: "+35% conversion rate",
  },
  {
    quote:
      "The bottleneck used to be photography — waiting 2–3 weeks per product. Now I upload the product, pick a style, and I'm done in 4 minutes. I launched 3 products last quarter that would have taken 9 weeks with a photographer.",
    name: "Mike Johnson",
    title: "Amazon FBA Seller",
    result: "3× more product launches",
  },
  {
    quote:
      "We manage 40+ brand clients. Pocket Director cut our content production cost by 70%. We deliver more content, faster, at higher margin — and the clients can't tell the difference.",
    name: "Emma Wilson",
    title: "E-Commerce Agency Director",
    result: "70% cost reduction",
  },
];

const faqs = [
  {
    q: "How does the '8 shots from 1 photo' work?",
    a: "Upload one product photo and our AI generates 8 professional variations with different backgrounds, lighting styles, and compositions — optimized for Amazon, Instagram, luxury brands, and more.",
  },
  {
    q: "How much does AI product photography cost?",
    a: "Pocket Director AI starts at $15.20/month billed annually. Traditional product photography costs $300–800 per product with 1–3 week turnaround.",
  },
  {
    q: "Can I use AI product photos commercially?",
    a: "Yes. All images come with full commercial rights for use on websites, Amazon, Shopify, Instagram, Facebook, print, and packaging.",
  },
  {
    q: "Does Pocket Director AI generate UGC videos?",
    a: "Yes — Pocket Director AI is currently the only AI product photography tool that also generates authentic UGC-style videos. Upload your product once and get both photos and videos optimized for paid social.",
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Used by 100+ e-commerce brands
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            AI Product Photography &<br />
            <span className="text-indigo-600">UGC Videos</span> — in 4 Minutes
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
            Generate studio-quality product photos and authentic UGC-style videos with AI.
            No studio, no photographer, no waiting. Start free with 200 credits — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.pocketdirectorai.com/signup"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Start Free — 200 Credits
            </a>
            <a
              href="https://app.pocketdirectorai.com"
              className="text-gray-600 px-8 py-4 rounded-xl font-medium border border-gray-200 hover:border-gray-300 transition-colors"
            >
              See Examples →
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">No credit card required · Results in under 4 minutes</p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-100 py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-indigo-600">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works</h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            Three steps. Under 4 minutes. Professional imagery.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Product Photo",
                desc: "Take a simple photo of your product on any background. A phone photo works fine — the AI handles the rest.",
              },
              {
                step: "02",
                title: "Choose Style & Platform",
                desc: "Select your target platform (Amazon, Shopify, Instagram) and pick from 500+ professional scene styles.",
              },
              {
                step: "03",
                title: "Download 8 Pro Images",
                desc: "In under 4 minutes, download 8 professional product images with full commercial rights — ready to publish.",
              },
            ].map((step) => (
              <div key={step.step} className="relative">
                <div className="text-5xl font-black text-indigo-100 mb-4">{step.step}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Photos and UGC Video. One Upload.</h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            The only AI tool that generates both product photos and UGC video from a single upload.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How We Compare</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            The only AI product photography tool with built-in UGC video generation.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-2xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-5 font-semibold">Feature</th>
                  <th className="py-4 px-4 font-semibold text-indigo-600 bg-indigo-50">Pocket Director AI</th>
                  <th className="py-4 px-4 font-semibold text-gray-400">Traditional Studio</th>
                  <th className="py-4 px-4 font-semibold text-gray-400">Photoroom</th>
                  <th className="py-4 px-4 font-semibold text-gray-400">Flair AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Product photos", "✓", "✓", "✓", "✓"],
                  ["UGC video generation", "✓", "✗", "✗", "✗"],
                  ["Turnaround time", "4 minutes", "1–3 weeks", "Hours", "Hours"],
                  ["Starting price", "$15.20/mo", "$300–800/product", "$29/mo", "$38/mo"],
                  ["Free trial", "200 credits", "✗", "7 days", "✗"],
                  ["No credit card needed", "✓", "—", "✗", "✗"],
                  ["Commercial rights", "✓", "✓", "✓", "✓"],
                ].map(([feature, pd, studio, pr, flair]) => (
                  <tr key={feature} className="border-t border-gray-100">
                    <td className="py-3 px-5 font-medium">{feature}</td>
                    <td className="py-3 px-4 text-center bg-indigo-50 text-indigo-700 font-semibold">{pd}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{studio}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{pr}</td>
                    <td className="py-3 px-4 text-center text-gray-400">{flair}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">What Brands Say</h2>
          <p className="text-gray-500 text-center mb-12">Real results from 100+ e-commerce brands.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col">
                <div className="text-indigo-600 font-bold text-sm mb-3">{t.result}</div>
                <p className="text-gray-600 italic text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persona links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Built for Every E-Commerce Seller</h2>
          <p className="text-gray-500 mb-10">See how Pocket Director AI works for your platform.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: "/amazon-sellers", label: "Amazon Sellers" },
              { href: "/shopify-brands", label: "Shopify Brands" },
              { href: "/etsy-sellers", label: "Etsy Sellers" },
              { href: "/ugc-videos", label: "UGC Videos" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-6 py-3 rounded-xl border border-gray-200 text-sm font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {l.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-indigo-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Start Free Today</h2>
          <p className="text-indigo-100 text-lg mb-8">
            200 free credits. No credit card. Studio-quality results in under 4 minutes.
          </p>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors"
          >
            Start Free — 200 Credits
          </a>
          <p className="text-indigo-200 text-sm mt-4">Used by 100+ e-commerce brands · Cancel anytime</p>
        </div>
      </section>
    </>
  );
}
