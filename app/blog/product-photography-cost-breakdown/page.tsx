import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Photography Cost Breakdown: How Brands Are Saving $35,000/Year",
  description:
    "A data-driven breakdown of product photography costs in 2026 — traditional studio vs. AI alternatives. See exactly how e-commerce brands are saving $2,970/month.",
  alternates: { canonical: "https://pocketdirectorai.com/blog/product-photography-cost-breakdown" },
  openGraph: { title: "Product Photography Cost Breakdown 2026", type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Product Photography Cost Breakdown: How Brands Are Saving $35,000/Year",
  datePublished: "2026-03-15",
  dateModified: "2026-03-23",
  author: { "@type": "Organization", name: "Pocket Director AI" },
};

export default function ProductPhotographyCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <time dateTime="2026-03-15">March 15, 2026</time>
            <span>·</span>
            <span>7 min read</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Product Photography Cost Breakdown: How Brands Are Saving $35,000/Year
          </h1>
          <p className="text-xl text-gray-500">
            Product photography is one of the most underestimated line items in e-commerce. Most brands
            don&apos;t add it up until they&apos;re staring at a $6,000 monthly bill. Here&apos;s the full cost
            breakdown, and how brands are cutting it by 95%.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h2 className="text-base font-bold text-amber-900 mb-2">The Bottom Line</h2>
            <p className="text-amber-800 text-sm">
              A Shopify brand photographing 20 new products per month pays $6,000–$16,000 with
              traditional photographers. The same output with AI costs $15.20–$50/month. Annual
              savings: <strong>$35,000–$95,000</strong>.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Traditional Product Photography Costs in 2026</h2>
          <p className="text-gray-600 mb-6">
            The cost of traditional product photography varies by market, photographer experience, and
            product complexity. Here&apos;s what brands actually pay in 2026:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Photographer Day Rates</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Photographer Level</th>
                  <th className="py-3 px-4 font-semibold">Hourly Rate</th>
                  <th className="py-3 px-4 font-semibold">Day Rate</th>
                  <th className="py-3 px-4 font-semibold">Products/Day</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Beginner / Freelance", "$50–$75", "$400–$600", "10–15"],
                  ["Mid-level", "$75–$150", "$600–$1,200", "8–12"],
                  ["Professional / Agency", "$150–$300", "$1,200–$2,400", "6–10"],
                ].map(([level, hourly, day, products]) => (
                  <tr key={level} className="border-t border-gray-100">
                    <td className="py-3 px-4 font-medium">{level}</td>
                    <td className="py-3 px-4 text-center">{hourly}</td>
                    <td className="py-3 px-4 text-center">{day}</td>
                    <td className="py-3 px-4 text-center">{products}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mt-6 mb-3">Hidden Costs Most Brands Miss</h3>
          <p className="text-gray-600 mb-4">
            The photographer&apos;s day rate is just the starting point. These are the costs brands consistently
            underestimate:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold">Cost Item</th>
                  <th className="py-3 px-4 font-semibold">Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Studio rental", "$100–$400/day"],
                  ["Props and styling", "$50–$300/shoot"],
                  ["Photo editing / retouching", "$5–$25/image"],
                  ["Shipping products to studio", "$20–$100"],
                  ["Rush fees (common for launches)", "+25–50% premium"],
                  ["Revision requests", "$50–$200 per round"],
                ].map(([item, cost]) => (
                  <tr key={item} className="border-t border-gray-100">
                    <td className="py-3 px-4 font-medium">{item}</td>
                    <td className="py-3 px-4 text-center">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">The Real Cost Per Product</h2>
          <p className="text-gray-600 mb-6">
            Add it all up and the true cost per product for professional photography runs
            <strong> $300 to $800</strong>, averaging around $450 in 2026. That number stings more
            once you see it applied to a full month&apos;s catalog.
          </p>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
            <h3 className="font-bold mb-4">Sample Cost Calculation: 20 Products/Month</h3>
            <div className="space-y-2 text-sm">
              {[
                ["Photographer (2 days)", "$2,400"],
                ["Studio rental (2 days)", "$600"],
                ["Props and styling", "$200"],
                ["Editing (200 images @ $5/ea)", "$1,000"],
                ["Miscellaneous / shipping", "$200"],
              ].map(([item, cost]) => (
                <div key={item} className="flex justify-between">
                  <span className="text-gray-600">{item}</span>
                  <span className="font-medium">{cost}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 flex justify-between font-bold">
                <span>Monthly total (20 products)</span>
                <span className="text-red-600">$4,400–$16,000</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Annual total</span>
                <span className="text-red-600">$52,800–$192,000</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">AI Product Photography Costs</h2>
          <p className="text-gray-600 mb-4">
            AI product photography tools replace the photographer, studio, and most of the editing
            workflow. The cost structure looks completely different:
          </p>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-8">
            <h3 className="font-bold mb-4">AI Photography Cost: 20 Products/Month</h3>
            <div className="space-y-2 text-sm">
              {[
                ["Pocket Director AI subscription", "$15.20–$50/month"],
                ["Your time (upload + download)", "~2 hours/month"],
                ["Additional editing", "$0 (included)"],
                ["Studio / photographer", "$0"],
              ].map(([item, cost]) => (
                <div key={item} className="flex justify-between">
                  <span className="text-gray-600">{item}</span>
                  <span className="font-medium">{cost}</span>
                </div>
              ))}
              <div className="border-t border-green-200 pt-2 flex justify-between font-bold">
                <span>Monthly total (20 products)</span>
                <span className="text-green-700">$15.20–$50</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Annual savings vs. traditional</span>
                <span className="text-green-700">$35,000–$95,000</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">When Is Traditional Photography Worth It?</h2>
          <p className="text-gray-600 mb-4">
            AI photography isn&apos;t right for every situation. Traditional photography still makes sense for:
          </p>
          <ul className="space-y-2 text-gray-600 mb-6 list-disc list-inside">
            <li>Highly reflective products like mirrors and jewelry, where AI can struggle with accurate reflections</li>
            <li>Ultra-luxury brands where a bespoke studio environment is part of the brand positioning</li>
            <li>Complex lifestyle scenes that need models, specific locations, or on-set art direction</li>
            <li>Products with intricate textures that need macro photography to capture detail</li>
          </ul>
          <p className="text-gray-600 mb-6">
            For most e-commerce products — apparel accessories, home goods, beauty,
            supplements, electronics accessories, pet products, kitchen items — AI photography now
            matches or beats traditional photography quality.
          </p>

          <div className="bg-indigo-600 text-white p-8 rounded-2xl text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Calculate Your Photography Savings</h2>
            <p className="text-indigo-100 mb-2">How many products do you photograph per month?</p>
            <p className="text-indigo-200 text-sm mb-6">At $450/product average, 20 products = $9,000/month. With Pocket Director AI: $15.20.</p>
            <a href="https://app.pocketdirectorai.com/signup" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Start Saving — 200 Free Credits
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 text-sm text-gray-400">
            <p><strong>Related:</strong></p>
            <ul className="space-y-1 mt-2">
              <li><Link href="/blog/ai-product-photography-complete-guide" className="text-indigo-600 hover:underline">AI Product Photography: The Complete Guide (2026)</Link></li>
              <li><Link href="/blog/how-to-take-product-photos-without-photographer" className="text-indigo-600 hover:underline">How to Take Product Photos Without a Photographer</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
