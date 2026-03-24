import type { Metadata } from "next";
import Link from "next/link";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Flair AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flair AI is an AI product photography tool that lets users compose scenes using a drag-and-drop interface with prompt-based controls. It is designed for designers who want granular control over scene composition.",
      },
    },
    {
      "@type": "Question",
      name: "Is Pocket Director AI better than Flair AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your workflow. Flair AI is better for designers who want manual scene composition control. Pocket Director AI is better for e-commerce sellers who need fast results without learning prompt engineering, and for teams that also need UGC video generation.",
      },
    },
    {
      "@type": "Question",
      name: "How much does Flair AI cost compared to Pocket Director AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flair AI starts at $38/month. Pocket Director AI starts at $15.20/month billed annually and includes a free trial of 200 credits with no credit card required.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Flair AI Alternative: Pocket Director AI vs Flair for Product Photography",
  description:
    "Comparing Flair AI vs Pocket Director AI? See why 100+ e-commerce brands choose Pocket Director for easier workflow, UGC video output, and better pricing.",
  alternates: { canonical: "https://pocketdirectorai.com/alternatives/flair-ai" },
  openGraph: {
    title: "Flair AI Alternative: Pocket Director AI vs Flair for Product Photography",
    description:
      "Comparing Flair AI vs Pocket Director AI? See why 100+ e-commerce brands choose Pocket Director for easier workflow, UGC video output, and better pricing.",
    type: "website",
    url: "https://pocketdirectorai.com/alternatives/flair-ai",
  },
};

export default function FlairAiAlternativePage() {
  return (
    <>
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
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Flair AI Alternative
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
            Flair AI Alternative:{" "}
            <span className="text-indigo-600">Simpler, Faster, Lower Cost</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Flair AI produces strong results if you know how to write prompts. If you don't, or if
            you need video output, it's not the right fit. Pocket Director uses a preset-based
            workflow that anyone can pick up on day one, and it covers both photos and UGC video ads.
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

      {/* What is Flair AI */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">What Is Flair AI?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Flair AI is a canvas-based AI product photography tool built for creative e-commerce
            teams and designers. Users place products on a canvas and write text prompts describing
            the scene, lighting, and mood they want to generate.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            For teams with designers who are comfortable with prompt-driven workflows, Flair delivers
            genuinely strong results. It's the tool to pick if you want granular creative control
            and have the technical background to get consistent output from text prompts.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The learning curve is real, though. Non-technical users and teams without a dedicated
            designer often struggle to get consistent results because the output depends heavily on
            prompt quality. Flair has no video generation, and its pricing runs higher than most
            alternatives.
          </p>
        </div>
      </section>

      {/* Key Differences */}
      <section className="bg-amber-50 border-y border-amber-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Where Flair AI Falls Short for Most E-Commerce Teams
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Requires Prompt Engineering",
                detail:
                  "Getting consistent results in Flair means writing detailed text prompts. Most e-commerce operators and Shopify brand owners don't have that skill and would rather not spend time developing it.",
              },
              {
                label: "No Video Generation",
                detail:
                  "Flair is photos only. TikTok and Meta campaigns increasingly depend on video, so brands using Flair have to maintain a second tool for video creative.",
              },
              {
                label: "Higher Cost",
                detail:
                  "Flair's pricing starts around $38/month vs. Pocket Director's $15.20/month. For teams scaling across a full catalog, that difference adds up.",
              },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-xl p-5 border border-amber-200">
                <div className="font-bold text-gray-900 mb-2">{item.label}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Flair AI vs. Pocket Director AI</h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Feature</th>
                  <th className="text-center px-6 py-4 font-semibold text-gray-500">Flair AI</th>
                  <th className="text-center px-6 py-4 font-semibold text-indigo-700 bg-indigo-50">
                    Pocket Director AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  {
                    feature: "Product photo generation",
                    flair: "✓",
                    pocket: "✓",
                    highlight: false,
                  },
                  {
                    feature: "UGC video generation",
                    flair: "✗",
                    pocket: "✓",
                    highlight: true,
                  },
                  {
                    feature: "Requires prompt engineering",
                    flair: "Yes",
                    pocket: "No — preset-based",
                    highlight: true,
                  },
                  {
                    feature: "Workflow complexity",
                    flair: "Canvas + prompts",
                    pocket: "Upload → Select → Download",
                    highlight: true,
                  },
                  {
                    feature: "Amazon-compliant presets",
                    flair: "Manual setup",
                    pocket: "Built-in presets",
                    highlight: false,
                  },
                  {
                    feature: "Number of scene styles",
                    flair: "Prompt-based (unlimited)",
                    pocket: "500+ curated presets",
                    highlight: false,
                  },
                  {
                    feature: "Images per upload",
                    flair: "Manual per generation",
                    pocket: "8 automatic variations",
                    highlight: true,
                  },
                  {
                    feature: "Free trial",
                    flair: "Limited free tier",
                    pocket: "200 credits (no CC)",
                    highlight: false,
                  },
                  {
                    feature: "Starting price",
                    flair: "~$38/month",
                    pocket: "$15.20/month",
                    highlight: true,
                  },
                ].map((row) => (
                  <tr key={row.feature}>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.feature}</td>
                    <td
                      className={`px-6 py-4 text-center ${
                        row.flair === "✗" ? "text-red-500 font-bold" : "text-gray-500"
                      }`}
                    >
                      {row.flair}
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
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            What Changes When You Move from Flair to Pocket Director
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "⚡",
                title: "Upload, Pick a Style, Download. No Prompts.",
                description:
                  "Pocket Director's preset-based workflow means anyone on your team can generate professional product images from day one. No prompt engineering, no canvas setup, no learning curve. Upload your product, pick a style, download 8 images.",
              },
              {
                icon: "🎬",
                title: "Video That Flair Doesn't Have",
                description:
                  "Pocket Director generates UGC-style video ads from the same product upload as your photos. Flair has no video output, which means a separate tool, a separate workflow, and a separate cost if video is part of your ad strategy.",
              },
              {
                icon: "💵",
                title: "About 60% Lower Starting Price",
                description:
                  "Pocket Director starts at $15.20/month vs. Flair's ~$38/month. That's over $270/year in savings on the subscription alone, before counting the time saved by not having to write and iterate on prompts.",
              },
              {
                icon: "📦",
                title: "More Consistent Catalog Results",
                description:
                  "Because Pocket Director uses curated presets rather than freeform prompts, output is consistent across your product catalog. You get the same professional treatment for every product, not results that vary based on how well a prompt was written.",
              },
            ].map((reason) => (
              <div
                key={reason.title}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-indigo-200 transition-colors"
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
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-indigo-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
              "I tried Flair AI for two weeks and spent most of that time tweaking prompts to get
              consistent results. Pocket Director took 10 minutes to figure out and the first batch
              of images was ready for our PDPs. The UGC video feature pushed us fully away from
              Flair — we were going to need another tool for video anyway."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                R
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">Rachel M.</div>
                <div className="text-sm text-gray-500">E-commerce manager — home goods brand</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">Common Questions</h2>
          <div className="space-y-5">
            {[
              {
                q: "Can Pocket Director match Flair's creative flexibility?",
                a: "Flair gives you more creative control through freeform prompts. Pocket Director trades that flexibility for consistency, speed, and ease of use. For most e-commerce use cases, PDPs, lifestyle shots, A+ content, the preset approach produces reliable results without the iteration time. If you want pixel-level creative control, Flair is probably still the better tool.",
              },
              {
                q: "Is Pocket Director suitable for teams without designers?",
                a: "Yes, that's the main difference in workflow. Pocket Director is built for e-commerce operators, brand managers, and sellers who don't have design backgrounds. No design skills, no prompt writing, no photo editing experience needed.",
              },
              {
                q: "Does Pocket Director integrate with Shopify or Amazon Seller Central?",
                a: "Generated images can be downloaded and uploaded directly to any platform, including Shopify, Amazon Seller Central, Etsy, or any other marketplace. Direct platform integrations are in development.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Try It Before You Commit
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            200 free credits, no credit card, no learning curve. Upload a product and have
            images ready in about 4 minutes.
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
            <Link href="/alternatives/photoroom" className="hover:text-indigo-600">Photoroom Alternative</Link>
            <Link href="/alternatives/pebblely" className="hover:text-indigo-600">Pebblely Alternative</Link>
            <Link href="/ugc-videos" className="hover:text-indigo-600">UGC Videos</Link>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
