import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pocket Director AI vs Flair AI: Side-by-Side Comparison",
  description:
    "Comparing Pocket Director AI vs Flair AI for product photography? See exactly how they differ on workflow, UGC video, pricing, and turnaround — with an honest take on who each tool is for.",
  alternates: { canonical: "https://pocketdirectorai.com/vs/flair-ai" },
  openGraph: {
    title: "Pocket Director AI vs Flair AI: Side-by-Side Comparison",
    description:
      "Comparing Pocket Director AI vs Flair AI for product photography? See exactly how they differ on workflow, UGC video, pricing, and turnaround.",
    type: "website",
    url: "https://pocketdirectorai.com/vs/flair-ai",
  },
};

const comparisonSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Pocket Director AI vs Flair AI: Side-by-Side Comparison",
  description:
    "A detailed comparison of Pocket Director AI and Flair AI covering workflow, UGC video, pricing, turnaround time, and ideal use cases.",
  url: "https://pocketdirectorai.com/vs/flair-ai",
};

const tableRows = [
  { feature: "Product photos", pocket: "✓", flair: "✓" },
  { feature: "UGC video generation", pocket: "✓", flair: "✗" },
  { feature: "Workflow", pocket: "Upload, select, done", flair: "Prompt-based composition" },
  { feature: "Time to first result", pocket: "Under 4 minutes", flair: "10–30 minutes" },
  { feature: "Images per upload", pocket: "8", flair: "Varies" },
  { feature: "Creative control", pocket: "Curated styles", flair: "Full manual control" },
  { feature: "Learning curve", pocket: "Minimal", flair: "Steep (prompt engineering)" },
  { feature: "Starting price", pocket: "$15.20/month", flair: "$38/month" },
  { feature: "Free trial", pocket: "200 credits, no CC", flair: "Limited" },
  { feature: "Best for", pocket: "E-commerce sellers, marketers", flair: "Designers, art directors" },
];

export default function VsFlairAIPage() {
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
            Pocket Director AI vs Flair AI
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Two different tools with two different philosophies. Flair gives you control. We give you speed.
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
                  <th className="text-center px-6 py-4 font-semibold text-gray-500">Flair AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {tableRows.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td
                      className={`px-6 py-4 text-center bg-indigo-50 font-semibold ${
                        row.pocket === "✓" ? "text-indigo-700" : "text-indigo-700"
                      }`}
                    >
                      {row.pocket}
                    </td>
                    <td
                      className={`px-6 py-4 text-center ${
                        row.flair === "✗" ? "text-red-500 font-bold" : "text-gray-500"
                      }`}
                    >
                      {row.flair}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Where Flair Wins */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Where Flair AI Wins</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Flair is strong at full scene composition. You place your product on a canvas,
              write a prompt describing the background, lighting, and mood, and the AI builds the scene
              around it. That level of granular control is real. For designers and art directors who
              know exactly what they want from a shot, Flair delivers results that are difficult to
              replicate with a preset system.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If your brand has a highly specific visual identity, custom set styling, or a creative
              director who writes detailed briefs, Flair's flexibility fits that workflow better. You
              can dial in brand aesthetics with a degree of precision that curated style pickers do
              not allow. The tradeoff is time and skill. Getting consistent results from Flair
              requires prompt engineering experience that most e-commerce operators simply do not have
              or want to develop.
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
              Pocket Director generates UGC-style video from the same product upload as your photos.
              Flair has no video output at all. For brands running paid social on TikTok or Meta,
              that means Flair users are maintaining a separate tool, a separate workflow, and a
              separate cost. With Pocket Director, photos and video come out of one session.
              Turnaround is also materially different. Under 4 minutes from upload to 8 finished
              images versus 10–30 minutes per generation in Flair, where you iterate on prompts
              until the output looks right.
            </p>
            <p className="text-gray-700 leading-relaxed">
              There is no learning curve here. No prompts to write, no canvas to set up, no prompt
              engineering to get consistent results across your catalog. Upload your product, pick a
              style from 500+ curated options, get 8 professional images. The pricing gap is also
              real: $15.20/month versus Flair's $38/month is $22.80/month cheaper, or $273.60/year,
              and the free trial gives you 200 actual credits with no credit card required. Flair's
              free tier is limited enough that it is difficult to properly evaluate the tool before
              committing.
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
              <div className="text-lg font-bold text-gray-900 mb-4">Choose Flair AI if:</div>
              <p className="text-gray-600 leading-relaxed">
                You are a designer or creative director who wants granular control over scene
                composition. You have experience with prompt engineering or are willing to develop
                it, and your brand requires custom aesthetics that go beyond what a preset system
                can produce.
              </p>
            </div>
            <div className="bg-indigo-600 rounded-2xl p-7 text-white">
              <div className="text-lg font-bold mb-4">Choose Pocket Director AI if:</div>
              <p className="text-indigo-100 leading-relaxed">
                You are an e-commerce seller or marketer who needs professional photos and UGC
                videos fast, without learning prompt engineering. You want consistent, reliable
                results across your catalog at a lower price, and you need a free trial that lets
                you test with real products before you pay anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Try Pocket Director AI Free</h2>
          <p className="text-gray-500 text-lg mb-8">
            200 credits, no credit card. Upload a product and have 8 professional images ready
            in under 4 minutes.
          </p>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Try Pocket Director AI Free — 200 Credits, No Credit Card
          </a>
          <p className="text-sm text-gray-400 mt-4">No credit card · Cancel anytime · Instant access</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© 2026 Pocket Director AI. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/vs/photoroom" className="hover:text-indigo-600">
              vs Photoroom
            </Link>
            <Link href="/alternatives/flair-ai" className="hover:text-indigo-600">
              Flair AI Alternative
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
