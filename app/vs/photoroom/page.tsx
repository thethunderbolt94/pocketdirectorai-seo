import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pocket Director AI vs Photoroom: Side-by-Side Comparison",
  description:
    "Photoroom vs Pocket Director AI — how do they compare on features, pricing, and output quality? Honest comparison for e-commerce brands deciding between the two.",
  alternates: { canonical: "https://pocketdirectorai.com/vs/photoroom" },
  openGraph: {
    title: "Pocket Director AI vs Photoroom: Side-by-Side Comparison",
    description:
      "Photoroom vs Pocket Director AI — how do they compare on features, pricing, and output quality?",
    type: "website",
    url: "https://pocketdirectorai.com/vs/photoroom",
  },
};

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pocket Director AI vs Photoroom: Side-by-Side Comparison",
  description:
    "A detailed comparison of Pocket Director AI and Photoroom covering core technology, UGC video, scene quality, pricing, and ideal use cases.",
  url: "https://pocketdirectorai.com/vs/photoroom",
};

const tableRows = [
  {
    feature: "Core technology",
    pocket: "AI scene generation",
    photoroom: "Background removal + replacement",
  },
  { feature: "UGC video", pocket: "✓", photoroom: "✗" },
  { feature: "Images per upload", pocket: "8 variations", photoroom: "1 per edit" },
  {
    feature: "Scene quality",
    pocket: "Full scene with matched lighting",
    photoroom: "Cut-out placed on background",
  },
  { feature: "Batch editing", pocket: "✓", photoroom: "✓" },
  { feature: "Starting price", pocket: "$15.20/month", photoroom: "$29/month" },
  { feature: "Free trial", pocket: "200 credits, no CC", photoroom: "7 days" },
  { feature: "Best for", pocket: "Product content at scale", photoroom: "Quick background swaps" },
];

export default function VsPhotoroomPage() {
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Side-by-Side Comparison
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
            Pocket Director AI vs Photoroom
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Photoroom built its reputation on background removal. Pocket Director generates complete
            scenes from scratch. The right choice depends on what output you actually need.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-indigo-700 bg-indigo-50">
                    Pocket Director AI
                  </th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-500">Photoroom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {tableRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center bg-indigo-50 font-semibold text-indigo-700">
                      {row.pocket}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${
                        row.photoroom === "✗" ? "text-red-500 font-bold" : "text-gray-500"
                      }`}
                    >
                      {row.photoroom}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where Photoroom Wins */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Where Photoroom Wins</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Photoroom is fast at simple background edits. If you have a product photo that just
              needs a clean white background or a quick swap, Photoroom does that well with minimal
              friction. Its mobile app is particularly polished, so sellers who photograph products
              on their phone and need a clean result without going to a desktop find it convenient.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The batch editing tools are solid for high-volume single operations, and the UI is
              clean enough that new users can get a result in minutes. If your workflow is: take a
              photo, remove the background, done, then Photoroom is a reasonable fit at that specific
              task.
            </p>
          </div>
        </div>
      </section>

      {/* Where Pocket Director Wins */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Where Pocket Director AI Wins</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              The core difference is how the image is built. Photoroom removes the background and
              places the cut-out product onto a new background. Pocket Director generates the entire
              scene from scratch, with the product rendered inside a complete environment where the
              lighting, shadows, and reflections are native to that scene rather than composited
              after the fact. For most product categories, that produces noticeably better images.
              It also generates 8 variations per upload rather than one, so a single session gives
              you a full set of assets rather than one edited image.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Photoroom has no video output. For brands running social ads, that means a separate
              tool for UGC video. Pocket Director generates both photos and UGC-style video from
              the same upload. On price, Pocket Director is $13.80/month cheaper than Photoroom,
              and the free trial is more generous: 200 actual credits with no credit card required,
              versus Photoroom's 7-day trial that requires payment details.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Guide */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Which One Should You Choose?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-gray-200">
              <div className="text-lg font-bold text-gray-900 mb-4">Choose Photoroom if:</div>
              <p className="text-gray-600 leading-relaxed">
                Your primary need is fast, one-off background removal on existing product photos.
                You photograph products on a mobile device and want a quick, clean result without
                needing lifestyle imagery or video content.
              </p>
            </div>
            <div className="bg-indigo-600 rounded-2xl p-7 text-white">
              <div className="text-lg font-bold mb-4">Choose Pocket Director AI if:</div>
              <p className="text-indigo-100 leading-relaxed">
                You need full lifestyle scenes, multiple variations per product, UGC video for paid
                social, and better image quality than background-removal compositing can produce.
                Especially if you are managing a growing catalog where 8 images per product per
                session makes a real difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scene Quality Detail */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Background Removal vs. Scene Generation: Why It Matters</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Background removal tools work by detecting the edges of your product and masking
            everything else out. The product cut-out is then placed on top of a separate background
            image. The seam between the two is often visible: shadows do not match the light source,
            reflections are absent, and the product looks placed rather than photographed in that
            environment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pocket Director does not use background removal. It generates the complete scene with
            the product already inside it. The AI models lighting, shadow direction, and surface
            reflections to match the environment from the start. The result looks like the product
            was photographed there, not pasted onto a stock background.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For clean white backgrounds or simple product-on-color shots, the difference is subtle.
            For lifestyle imagery, editorial scenes, or anything with natural lighting, the gap is
            significant.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-20 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Try Pocket Director AI Free</h2>
          <p className="text-indigo-100 text-lg mb-8">
            200 credits, no credit card. Upload a product and see complete AI-generated scenes
            in under 4 minutes.
          </p>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors"
          >
            Try Pocket Director AI Free — 200 Credits, No Credit Card
          </a>
          <p className="text-indigo-200 text-sm mt-4">No credit card · Cancel anytime · Instant access</p>
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
            <Link href="/alternatives/photoroom" className="hover:text-indigo-600">
              Photoroom Alternative
            </Link>
            <Link href="/blog" className="hover:text-indigo-600">
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
