import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Photoroom Alternative: Why E-Commerce Brands Switch to Pocket Director AI",
  description:
    "Looking for a Photoroom alternative? Pocket Director AI generates professional product photos AND UGC videos — at a lower price. Compare features, pricing, and results.",
  alternates: { canonical: "https://pocketdirectorai.com/alternatives/photoroom" },
  openGraph: {
    title: "Photoroom Alternative: Why E-Commerce Brands Switch to Pocket Director AI",
    description:
      "Looking for a Photoroom alternative? Pocket Director AI generates professional product photos AND UGC videos — at a lower price. Compare features, pricing, and results.",
    type: "website",
    url: "https://pocketdirectorai.com/alternatives/photoroom",
  },
};

export default function PhotoroomAlternativePage() {
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
            Photoroom Alternative
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
            A Photoroom Alternative for{" "}
            <span className="text-indigo-600">E-Commerce Brands</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Photoroom is genuinely good at background removal and quick product shots. Where it
            falls short is video, scene variety, and price. If those gaps matter to your workflow,
            Pocket Director AI is worth a look.
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

      {/* What is Photoroom */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Is Photoroom?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Photoroom is a mobile-first AI photo editing app best known for background removal.
            It's widely used by individual sellers and small e-commerce brands who want to quickly
            clean up product photos and swap backgrounds on their phones.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            It has a large user base and a polished mobile experience. For sellers who need fast
            background removal on the go, it works well. The gaps show up for brands running larger
            operations, particularly around UGC video, A+ Content lifestyle imagery, and scene variety.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Brands running paid social campaigns that need video creative often find themselves
            needing a second tool alongside Photoroom. That's usually the point where they start
            looking for something that covers both.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Photoroom vs. Pocket Director AI</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-500">Photoroom</th>
                  <th className="text-center px-6 py-4 font-semibold text-indigo-700 bg-indigo-50">
                    Pocket Director AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  {
                    feature: "Product photo generation",
                    photoroom: "✓",
                    pocket: "✓",
                    highlight: false,
                  },
                  {
                    feature: "UGC video generation",
                    photoroom: "✗",
                    pocket: "✓",
                    highlight: true,
                  },
                  {
                    feature: "Amazon-compliant main images",
                    photoroom: "✓",
                    pocket: "✓",
                    highlight: false,
                  },
                  {
                    feature: "A+ Content lifestyle shots",
                    photoroom: "Limited",
                    pocket: "✓",
                    highlight: true,
                  },
                  {
                    feature: "Number of scene styles",
                    photoroom: "~100",
                    pocket: "500+",
                    highlight: true,
                  },
                  {
                    feature: "Images per upload",
                    photoroom: "1 at a time",
                    pocket: "8 variations",
                    highlight: true,
                  },
                  {
                    feature: "Free trial",
                    photoroom: "7-day trial",
                    pocket: "200 credits (no CC)",
                    highlight: false,
                  },
                  {
                    feature: "Starting price",
                    photoroom: "$29/month",
                    pocket: "$15.20/month",
                    highlight: true,
                  },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td
                      className={`px-6 py-4 text-center ${
                        row.photoroom === "✗"
                          ? "text-red-500 font-bold"
                          : "text-gray-500"
                      }`}
                    >
                      {row.photoroom}
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
          <h2 className="text-3xl font-bold mb-10 text-center">What Changes When You Switch to Pocket Director AI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Photos and Videos from One Tool",
                description:
                  "Photoroom is photos only. Pocket Director generates professional lifestyle product photos and UGC-style video ads from the same product upload, so you're not managing two separate tools for two formats.",
              },
              {
                title: "500+ Scenes vs. ~100",
                description:
                  "Photoroom has around 100 backgrounds. Pocket Director has 500+ curated scene presets, from minimalist studio to seasonal outdoor to luxury editorial. More variety means more chances to find what converts.",
              },
              {
                title: "8 Variations Per Upload",
                description:
                  "Pocket Director generates 8 unique image variations per upload instead of one background swap at a time. You get A/B testing material without re-uploading the same product repeatedly.",
              },
              {
                title: "Lower Price, More Generous Trial",
                description:
                  "Pocket Director starts at $15.20/month vs. Photoroom's $29/month. The free trial gives you 200 actual credits with no credit card required, so you can test with real products before committing.",
              },
            ].map((reason) => (
              <div
                key={reason.title}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-indigo-200 transition-colors"
              >
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
          <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
            "I was using Photoroom for about 6 months before switching to Pocket Director. The image
            quality is similar, but Pocket Director gives me 8 variations per upload instead of one,
            it's half the price, and it generates UGC videos for my TikTok ads. There was no reason
            to stay."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
              J
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">Jordan K.</div>
              <div className="text-sm text-gray-500">DTC brand owner — skincare</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            See How It Compares in Practice
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Start with 200 free credits, no credit card required. Upload a product and see what
            you get in your first session.
          </p>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Try Pocket Director AI Free — 200 Credits
          </a>
          <p className="text-sm text-gray-400 mt-4">
            No credit card · Cancel anytime · Instant access
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© 2026 Pocket Director AI. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/alternatives/flair-ai" className="hover:text-indigo-600">Flair AI Alternative</Link>
            <Link href="/alternatives/pebblely" className="hover:text-indigo-600">Pebblely Alternative</Link>
            <Link href="/ugc-videos" className="hover:text-indigo-600">UGC Videos</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
