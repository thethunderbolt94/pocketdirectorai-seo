import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pebblely Alternative: More Styles, UGC Videos, Better Pricing",
  description:
    "Comparing Pebblely alternatives? Pocket Director AI offers 500+ styles, UGC video generation, and starts at $15.20/month — with 200 free credits and no credit card.",
  alternates: { canonical: "https://pocketdirectorai.com/alternatives/pebblely" },
  openGraph: {
    title: "Pebblely Alternative: More Styles, UGC Videos, Better Pricing",
    description:
      "Comparing Pebblely alternatives? Pocket Director AI offers 500+ styles, UGC video generation, and starts at $15.20/month — with 200 free credits and no credit card.",
    type: "website",
    url: "https://pocketdirectorai.com/alternatives/pebblely",
  },
};

export default function PebblelyAlternativePage() {
  return (
    <main className="bg-white text-gray-900">
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Pebblely Alternative
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
            The Best Pebblely Alternative for{" "}
            <span className="text-indigo-600">E-Commerce Photography</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Pebblely is a capable AI background tool. But for brands that need more scene variety,
            UGC video generation, and a more affordable pricing structure — Pocket Director AI is
            the clear next step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.pocketdirectorai.com/signup"
              className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Try Pocket Director AI Free — 200 Credits
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">No credit card. No commitment. 200 credits to start.</p>
        </div>
      </section>

      {/* What is Pebblely */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Is Pebblely?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pebblely is a Singapore-based AI product photography tool that gained popularity for its
            clean interface and ability to generate lifestyle backgrounds behind product cutouts. It
            was an early entrant to the AI product photo space and built a loyal user base among
            small-to-medium e-commerce brands.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pebblely's strengths are its simplicity and ease of use. Users can upload a product
            photo and quickly generate it against themed lifestyle backgrounds. For brands that need
            a straightforward tool to upgrade their product listing images, Pebblely is a reasonable
            starting point.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The limitations become apparent as brands scale. The style library is narrower than
            competitors, there's no video capability at all, and the per-image credit model can make
            catalog-scale operations expensive. For brands that have grown past basic background
            replacement and need video ads alongside their product photos, Pebblely hits a ceiling.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Pebblely vs. Pocket Director AI</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-500">Pebblely</th>
                  <th className="text-center px-6 py-4 font-semibold text-indigo-700 bg-indigo-50">
                    Pocket Director AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  {
                    feature: "Product photo generation",
                    pebblely: "✓",
                    pocket: "✓",
                    highlight: false,
                  },
                  {
                    feature: "UGC video generation",
                    pebblely: "✗",
                    pocket: "✓",
                    highlight: true,
                  },
                  {
                    feature: "Number of scene styles",
                    pebblely: "~40–60 themes",
                    pocket: "500+ presets",
                    highlight: true,
                  },
                  {
                    feature: "Amazon-compliant main images",
                    pebblely: "Partial",
                    pocket: "✓ Built-in preset",
                    highlight: false,
                  },
                  {
                    feature: "A+ Content lifestyle shots",
                    pebblely: "Limited",
                    pocket: "✓",
                    highlight: true,
                  },
                  {
                    feature: "Images per upload",
                    pebblely: "1–4 variations",
                    pocket: "8 automatic variations",
                    highlight: true,
                  },
                  {
                    feature: "Seasonal / holiday presets",
                    pebblely: "Limited",
                    pocket: "✓ Full seasonal library",
                    highlight: false,
                  },
                  {
                    feature: "Free trial",
                    pebblely: "Paid only after trial",
                    pocket: "200 credits (no CC)",
                    highlight: false,
                  },
                  {
                    feature: "Starting price",
                    pebblely: "~$19/month",
                    pocket: "$15.20/month",
                    highlight: true,
                  },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td
                      className={`px-6 py-4 text-center ${
                        row.pebblely === "✗" ? "text-red-500 font-bold" : "text-gray-500"
                      }`}
                    >
                      {row.pebblely}
                    </td>
                    <td
                      className={`px-6 py-4 text-center bg-indigo-50 font-semibold ${
                        row.highlight ? "text-indigo-700" : "text-gray-700"
                      }`}
                    >
                      {row.pocket}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Brands Switch */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What Pocket Director Does That Pebblely Doesn't
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎬",
                title: "UGC Video — The Feature Pebblely Doesn't Have",
                description:
                  "Video ads on TikTok and Meta are no longer optional for competitive e-commerce brands. Pebblely is photos only. Pocket Director generates authentic UGC-style video ads from the same product upload as your photos — no second tool, no second workflow.",
              },
              {
                icon: "🎨",
                title: "10x More Style Variety",
                description:
                  "Pebblely offers ~40–60 themed backgrounds. Pocket Director has 500+ curated scene presets spanning minimalist studio, luxury editorial, seasonal, outdoor, artisan, and platform-specific styles like Amazon A+ and Shopify lifestyle.",
              },
              {
                icon: "⚡",
                title: "8 Variations, Not 1–4",
                description:
                  "Pebblely generates 1–4 variants per upload. Pocket Director generates 8 unique variations automatically — giving you A/B testing material built in from the start, without re-uploading.",
              },
              {
                icon: "💰",
                title: "Slightly Lower Price, More Generous Trial",
                description:
                  "At $15.20/month vs. Pebblely's ~$19/month, Pocket Director costs less and does more. The 200-credit free trial with no credit card is also more generous than Pebblely's trial structure.",
              },
            ].map((reason) => (
              <div
                key={reason.title}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-indigo-200 transition-colors"
              >
                <div className="text-3xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-1 mb-5">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-indigo-500 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
            "Pebblely was fine when we had 20 SKUs and were just doing basic background swaps.
            Once we started scaling — running TikTok ads, listing on Amazon, testing image styles on
            Shopify — we needed more. Pocket Director has everything in one place and the price is
            actually lower. Moving was an easy call."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              D
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">David T.</div>
              <div className="text-sm text-gray-500">Operations lead — multi-channel DTC brand</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Common Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Is the image quality better in Pocket Director than Pebblely?",
                a: "Image quality is comparable for standard lifestyle backgrounds, with Pocket Director producing notably better results for complex scenes and luxury aesthetics due to its larger model training. The real advantage is variety, video capability, and the 8-per-upload workflow.",
              },
              {
                q: "Can I migrate my existing product catalog to Pocket Director?",
                a: "Yes. You can upload any product photo to Pocket Director — there's no proprietary format to convert. Your existing product images work as-is. Most users migrate their full catalog within a single session.",
              },
              {
                q: "Does Pocket Director have a Pebblely-style simple interface?",
                a: "Yes. Like Pebblely, Pocket Director uses a simple upload → select preset → download workflow. There's no canvas interface or prompt engineering required. It's designed to be usable without any design or technical background.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 py-20 px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-4">
            More Styles, More Formats, Lower Price
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            Start with 200 free credits — no credit card, no commitment. Generate your first 8
            images in under 4 minutes.
          </p>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors"
          >
            Try Pocket Director AI Free — 200 Credits
          </a>
          <p className="text-indigo-300 text-sm mt-4">
            No credit card · Cancel anytime · Instant access
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© 2026 Pocket Director AI. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/alternatives/photoroom" className="hover:text-indigo-600">Photoroom Alternative</Link>
            <Link href="/alternatives/flair-ai" className="hover:text-indigo-600">Flair AI Alternative</Link>
            <Link href="/ugc-videos" className="hover:text-indigo-600">UGC Videos</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
