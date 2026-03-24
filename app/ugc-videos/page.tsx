import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI UGC Video Generator for E-Commerce — Authentic Videos Without Creators",
  description:
    "Generate authentic UGC-style product videos with AI. No creators, no contracts. Upload your product, get scroll-stopping videos for TikTok, Reels, and paid social in 4 minutes.",
  alternates: { canonical: "https://pocketdirectorai.com/ugc-videos" },
  openGraph: {
    title: "AI UGC Video Generator for E-Commerce — Authentic Videos Without Creators",
    description:
      "Generate authentic UGC-style product videos with AI. No creators, no contracts. Upload your product, get scroll-stopping videos for TikTok, Reels, and paid social in 4 minutes.",
    type: "website",
    url: "https://pocketdirectorai.com/ugc-videos",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pocket Director AI — UGC Video Generator",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "VideoGenerationApplication",
  operatingSystem: "Web",
  description:
    "AI UGC video generator for e-commerce brands. Generate authentic-looking UGC-style product videos for TikTok, Instagram Reels, and paid social from a single product upload. No creators required.",
  keywords: [
    "AI UGC video generator",
    "UGC video generator",
    "AI product video",
    "UGC content creator alternative",
    "automated UGC videos",
  ],
  offers: {
    "@type": "Offer",
    price: "15.20",
    priceCurrency: "USD",
    priceValidUntil: "2027-01-01",
    description: "Starting price per month. 200 free credits with no credit card required.",
  },
  featureList: [
    "Authentic UGC-style video generation",
    "TikTok, Reels, and Stories optimized",
    "No creator contracts required",
    "4-minute turnaround",
    "Full commercial usage rights",
  ],
  publisher: {
    "@type": "Organization",
    name: "Pocket Director AI",
    url: "https://pocketdirectorai.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI UGC video generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI UGC video generation uses artificial intelligence to create authentic-looking user-generated content style product videos — without hiring real creators. You upload your product photo, select a UGC style, and the AI generates a realistic-looking video of your product being used or showcased in a natural, handheld setting.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AI UGC videos in paid ads on Meta and TikTok?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All videos generated with Pocket Director AI come with full commercial rights and are formatted for TikTok Ads, Meta Ads (Facebook and Instagram), YouTube Shorts, and Pinterest. They are optimized for the aspect ratios and durations required by each platform.",
      },
    },
    {
      "@type": "Question",
      name: "How is AI UGC different from hiring a real UGC creator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI UGC is dramatically faster and cheaper — 4 minutes vs. 1–2 weeks, and starting at $15.20/month vs. $300–$1,500 per video. AI UGC also avoids creator contracts, revision negotiations, usage rights limitations, and the risk of creators going inactive or raising prices.",
      },
    },
  ],
};

export default function UgcVideosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
        <section className="bg-gradient-to-b from-indigo-950 to-indigo-800 py-24 px-4 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-700 text-indigo-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              The fastest way to generate UGC video ads
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6">
              UGC-Style Product Videos —{" "}
              <span className="text-indigo-300">Without Hiring Creators</span>
            </h1>
            <p className="text-xl text-indigo-200 max-w-2xl mx-auto mb-10 leading-relaxed">
              UGC converts 4x better than traditional ads. Stop paying $300–$1,500 per creator
              video. Generate authentic-looking UGC videos from your product photo in 4 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.pocketdirectorai.com/signup"
                className="w-full sm:w-auto bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors shadow-xl"
              >
                Start Free — 200 Credits
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto border border-indigo-400 text-indigo-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-indigo-700 transition-colors"
              >
                See How It Works
              </a>
            </div>
            <p className="text-sm text-indigo-400 mt-4">No credit card required. No creator contracts. 4-minute turnaround.</p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-indigo-600 py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-extrabold">4x</div>
              <div className="text-indigo-200 text-sm mt-1">Better conversion than traditional ads (Meta)</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">$0</div>
              <div className="text-indigo-200 text-sm mt-1">vs. $300–$1,500 per creator video</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">4 min</div>
              <div className="text-indigo-200 text-sm mt-1">Turnaround time</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">4 platforms</div>
              <div className="text-indigo-200 text-sm mt-1">TikTok, Reels, Stories, Shorts</div>
            </div>
          </div>
        </section>

        {/* Why UGC Works */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why UGC Video Outperforms Everything Else</h2>
              <p className="text-gray-500 text-lg">
                UGC-style video drives more clicks, more sales, and lower CPMs than polished brand content. The numbers back it up.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  stat: "4x",
                  label: "Higher click-through rate",
                  detail:
                    "Meta's own internal data shows UGC-style video drives 4x higher CTR than traditional branded ads.",
                },
                {
                  stat: "50%",
                  label: "Lower cost per acquisition",
                  detail:
                    "Brands running UGC ads report 50% lower CPAs compared to studio-produced creative — across TikTok and Meta.",
                },
                {
                  stat: "79%",
                  label: "Of shoppers say UGC impacts purchase",
                  detail:
                    "79% of consumers say user-generated content highly impacts their purchase decisions — more than influencer or brand content.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-indigo-50 rounded-2xl p-6 text-center border border-indigo-100">
                  <div className="text-4xl font-extrabold text-indigo-600 mb-2">{item.stat}</div>
                  <div className="font-bold text-gray-900 mb-2">{item.label}</div>
                  <p className="text-gray-500 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-gray-900">The Creator Cost Problem</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The problem isn't that UGC doesn't work — it's that scaling it is expensive and
                slow. A single UGC video from a creator costs <strong>$300–$1,500</strong> and
                takes <strong>1–2 weeks</strong>. To run meaningful A/B tests, you need 5–10
                variations per product. For a 10-product catalog, that's <strong>$15,000–$150,000
                per creative cycle</strong> — before you've even confirmed which videos perform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pocket Director AI breaks the cost barrier. Generate unlimited UGC-style video
                variations for any product, at any scale, in any platform format — for one flat
                monthly fee starting at $15.20.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Run UGC Ads at Scale</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                No creator briefs. No revision rounds. No waiting. Just upload your product and get video ads.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "🎬",
                  title: "Authentic UGC Aesthetic",
                  description:
                    "Handheld feel, natural lighting, real-world settings. Our AI replicates the visual style of organic creator content — the shaky camera, the casual unboxing, the in-use demonstration.",
                },
                {
                  icon: "📱",
                  title: "Platform-Optimized Formats",
                  description:
                    "Output in TikTok (9:16, up to 60s), Instagram Reels (9:16), YouTube Shorts (9:16), Facebook Stories (9:16), and square (1:1) formats — ready to upload directly without re-editing.",
                },
                {
                  icon: "📝",
                  title: "No Contracts. No Revisions. No Delays.",
                  description:
                    "No creator agreements to negotiate, no NDA requirements, no usage rights limitations, no revision requests, no 2-week wait. Upload your product and download your video.",
                },
                {
                  icon: "🖼",
                  title: "Photos and Videos from One Upload",
                  description:
                    "The same product upload generates both professional lifestyle photos AND UGC videos. One workflow, full creative coverage — stills for your PDPs and videos for your ads.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-indigo-200 transition-colors"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4" id="how-it-works">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">How AI UGC Video Works</h2>
            <p className="text-gray-500 text-lg mb-14">
              Three steps from product photo to ready-to-run UGC video ad.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload Your Product Photo",
                  description:
                    "Upload any photo of your product. The AI isolates it, processes lighting, and prepares it for video compositing.",
                },
                {
                  step: "02",
                  title: "Select UGC Video Style",
                  description:
                    "Choose from unboxing, in-use demonstration, testimonial-style, or trending UGC formats. Pick your platform: TikTok, Reels, or Stories.",
                },
                {
                  step: "03",
                  title: "Download and Launch",
                  description:
                    "Your UGC-style video is ready in under 4 minutes. Download and upload directly to TikTok Ads Manager or Meta Ads. No editing needed.",
                },
              ].map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-5">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Traditional UGC Creator vs. Pocket Director AI</h2>
              <p className="text-gray-500 text-lg">
                Cost, speed, and rights — AI wins on all three.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100 border-b border-gray-200">
                    <th className="text-left px-6 py-4 font-semibold text-gray-700">Factor</th>
                    <th className="text-center px-6 py-4 font-semibold text-gray-500">Traditional Creator</th>
                    <th className="text-center px-6 py-4 font-semibold text-indigo-700 bg-indigo-50">
                      Pocket Director AI
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      factor: "Cost per video",
                      creator: "$300–$1,500",
                      pocket: "$15.20/month unlimited",
                      highlight: true,
                    },
                    {
                      factor: "Turnaround time",
                      creator: "1–2 weeks",
                      pocket: "4 minutes",
                      highlight: true,
                    },
                    {
                      factor: "Revisions",
                      creator: "+$50–$200 per revision",
                      pocket: "Included",
                      highlight: false,
                    },
                    {
                      factor: "Usage rights",
                      creator: "Limited / per platform",
                      pocket: "Full commercial rights",
                      highlight: false,
                    },
                    {
                      factor: "Scale",
                      creator: "1 video at a time",
                      pocket: "Unlimited videos",
                      highlight: true,
                    },
                    {
                      factor: "Platform formats",
                      creator: "Usually 1 format",
                      pocket: "All formats included",
                      highlight: false,
                    },
                  ].map((row) => (
                    <tr key={row.factor} className="bg-white">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.factor}</td>
                      <td className="px-6 py-4 text-center text-gray-500">{row.creator}</td>
                      <td
                        className={`px-6 py-4 text-center font-semibold bg-indigo-50 ${
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

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is AI UGC video generation?",
                  a: "AI UGC video generation produces authentic-looking product videos without real creators. Upload a product photo, pick a UGC style, and the AI generates a realistic video — handheld feel, natural lighting, real-world context.",
                },
                {
                  q: "Can I use AI UGC videos in paid ads on Meta and TikTok?",
                  a: "Yes. All videos generated with Pocket Director AI come with full commercial rights and are formatted for TikTok Ads, Meta Ads (Facebook and Instagram), YouTube Shorts, and Pinterest. They are optimized for the aspect ratios and durations required by each platform.",
                },
                {
                  q: "How is AI UGC different from hiring a real UGC creator?",
                  a: "AI UGC is dramatically faster and cheaper — 4 minutes vs. 1–2 weeks, and starting at $15.20/month vs. $300–$1,500 per video. AI UGC also avoids creator contracts, revision negotiations, usage rights limitations, and the risk of creators going inactive or raising prices.",
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
        <section className="bg-indigo-950 py-20 px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-extrabold mb-4">
              Generate Your First UGC Video Free
            </h2>
            <p className="text-indigo-300 text-lg mb-8">
              200 free credits. No credit card. No creator contracts. Your first UGC video in 4
              minutes.
            </p>
            <a
              href="https://app.pocketdirectorai.com/signup"
              className="inline-block bg-indigo-500 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-400 transition-colors"
            >
              Start Free — 200 Credits
            </a>
            <p className="text-indigo-400 text-sm mt-4">
              No credit card · Full commercial rights · Cancel anytime
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-100 py-8 px-4">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <span>© 2026 Pocket Director AI. All rights reserved.</span>
            <div className="flex gap-6">
              <Link href="/amazon-sellers" className="hover:text-indigo-600">Amazon Sellers</Link>
              <Link href="/shopify-brands" className="hover:text-indigo-600">Shopify Brands</Link>
              <Link href="/alternatives/photoroom" className="hover:text-indigo-600">Photoroom Alternative</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
