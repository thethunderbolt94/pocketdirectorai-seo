import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Product Photography for Agencies — Scale Content Across All Clients",
  description:
    "Manage product photography for 10, 20, or 50+ brand clients with AI. Pocket Director AI cuts content production costs by 70% and delivers in 4 minutes per product. Start free.",
  alternates: { canonical: "https://pocketdirectorai.com/agencies" },
  openGraph: {
    title: "AI Product Photography for Agencies — Scale Content Across All Clients",
    description:
      "Manage product photography for 10, 20, or 50+ brand clients with AI. 70% cost reduction. 4-minute turnaround. Start free.",
    type: "website",
    url: "https://pocketdirectorai.com/agencies",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I manage multiple brand clients from one account?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. One Pocket Director AI account handles all your clients. You can upload products for any client, save their brand styles separately, and download client-specific image sets, all from a single dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "How do I keep each client's images on-brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can save style presets per client. Once you find the right combination of scene style and settings for a brand, save it as a preset. Every subsequent upload for that client uses the same preset, so output is consistent across their entire catalog without re-selecting settings each time.",
      },
    },
    {
      "@type": "Question",
      name: "Can I white-label the output?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The images and videos you generate are yours to deliver however you want. There is no Pocket Director AI branding on the output files. You can deliver them directly to clients under your own agency branding, via your own client portal, or however your delivery process works.",
      },
    },
  ],
};

const benefits = [
  {
    title: "One tool, every client",
    description:
      "Manage all client product catalogs from a single account. Upload products for any client, organize by brand, and download client-specific image sets without switching tools or logging in and out.",
  },
  {
    title: "Consistent style per brand",
    description:
      "Save style presets per client so every image you generate for that brand follows the same visual treatment. No re-selecting settings on every job. The output is consistent across their entire catalog by default.",
  },
  {
    title: "Same-day turnaround",
    description:
      "Client sends a product Friday afternoon, they have professional photos by end of day. No photographer scheduling, no studio availability, no 1–3 week lead time. Under 4 minutes from upload to download.",
  },
  {
    title: "Profit on volume",
    description:
      "At $15.20/month total, every product you shoot for a client is margin. Charge your existing studio rate, deliver in 4 minutes, and pocket the difference. The more clients you have, the better the math gets.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload client product",
    description:
      "Upload the client's product photo from any source. A phone photo or product sample image works. The AI handles scene generation from whatever you provide.",
  },
  {
    number: "02",
    title: "Select saved brand style",
    description:
      "Pick the preset you saved for that client. Background style, lighting, platform optimization, and any brand-specific settings are applied automatically.",
  },
  {
    number: "03",
    title: "Download and deliver",
    description:
      "In under 4 minutes, download 8 professional product images with full commercial rights. Deliver directly to the client under your agency branding.",
  },
];

const faqs = [
  {
    q: "Can I manage multiple brand clients from one account?",
    a: "Yes. One Pocket Director AI account handles all your clients. You can upload products for any client, save their brand styles separately, and download client-specific image sets, all from a single dashboard.",
  },
  {
    q: "How do I keep each client's images on-brand?",
    a: "You can save style presets per client. Once you find the right combination of scene style and settings for a brand, save it as a preset. Every subsequent upload for that client uses the same preset, so output is consistent across their entire catalog without re-selecting settings each time.",
  },
  {
    q: "Can I white-label the output?",
    a: "The images and videos you generate are yours to deliver however you want. There is no Pocket Director AI branding on the output files. You can deliver them directly to clients under your own agency branding, via your own client portal, or however your delivery process works.",
  },
];

export default function AgenciesPage() {
  return (
    <main className="bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            For E-Commerce Agencies
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
            Product Photography for 40+ Clients.{" "}
            <span className="text-indigo-600">Without 40 Photographer Relationships.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            AI generates 8 professional product images per upload in 4 minutes. Manage every
            client&apos;s catalog from one dashboard, at a fraction of studio costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.pocketdirectorai.com/signup"
              className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Start Managing Client Photography Free
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">200 free credits · No credit card required</p>
        </div>
      </section>

      {/* The Agency Math Problem */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">The Agency Math Problem</h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            Traditional photography economics break down at agency scale. Here is what the numbers
            actually look like.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
                  Traditional Photography
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                    <span className="text-gray-600">Agency client count</span>
                    <span className="font-semibold text-gray-900">10–40 brands</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                    <span className="text-gray-600">New product photos per client/month</span>
                    <span className="font-semibold text-gray-900">5–20 products</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                    <span className="text-gray-600">Cost per product (studio)</span>
                    <span className="font-semibold text-gray-900">$300–$800</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-gray-200 pb-3">
                    <span className="text-gray-600">Monthly cost per client</span>
                    <span className="font-semibold text-gray-900">$3,000–$16,000</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Agency markup (20–30%)</span>
                    <span className="font-semibold text-red-600">Shrinking fast</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                  Markup sounds good until clients demand more content at lower prices. The margin
                  gets eaten by photographer coordination, revision cycles, and turnaround time.
                </p>
              </div>
              <div>
                <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-4">
                  With Pocket Director AI
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start border-b border-indigo-100 pb-3">
                    <span className="text-gray-600">Monthly tool cost</span>
                    <span className="font-bold text-indigo-700">$15.20 total</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-indigo-100 pb-3">
                    <span className="text-gray-600">Time per product shoot</span>
                    <span className="font-bold text-indigo-700">Under 4 minutes</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-indigo-100 pb-3">
                    <span className="text-gray-600">Images per upload</span>
                    <span className="font-bold text-indigo-700">8 variations</span>
                  </div>
                  <div className="flex justify-between items-start border-b border-indigo-100 pb-3">
                    <span className="text-gray-600">Video output</span>
                    <span className="font-bold text-indigo-700">Yes, included</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600">Margin direction</span>
                    <span className="font-bold text-indigo-700">Goes up, not down</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                  AI flips the math. Same output at $15.20/month total means margin goes up as you
                  take on more clients, not the other way around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-indigo-50 py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-indigo-600 font-bold text-sm mb-4 uppercase tracking-wide">
            70% cost reduction
          </div>
          <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
            &ldquo;We manage 40+ brand clients. Pocket Director cut our content production cost by
            70%. We deliver more content, faster, at higher margin, and the clients cannot tell
            the difference.&rdquo;
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              EW
            </div>
            <div className="text-left">
              <div className="font-bold text-gray-900">Emma Wilson</div>
              <div className="text-sm text-gray-500">Agency Director, E-Commerce</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Built for How Agencies Actually Work</h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            One account. Every client. No switching tools.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:border-indigo-200 transition-colors"
              >
                <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works for Agencies */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">How It Works for Agencies</h2>
          <p className="text-gray-500 text-center mb-14 max-w-xl mx-auto">
            Three steps per client product. Under 4 minutes each.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="text-5xl font-black text-indigo-100 mb-4">{step.number}</div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-gray-100 py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "70%", label: "Cost reduction vs studio" },
            { value: "4 min", label: "Per product turnaround" },
            { value: "8", label: "Images per upload" },
            { value: "$15.20", label: "Per month, total" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-bold text-indigo-600">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Agency Questions</h2>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-gray-50 rounded-2xl border border-gray-100 p-7">
                <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 py-20 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Start Managing Client Photography Free</h2>
          <p className="text-indigo-100 text-lg mb-8">
            200 free credits. No credit card. Upload a client product and see professional results
            in your first session.
          </p>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="inline-block bg-white text-indigo-700 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors"
          >
            Start Free — 200 Credits
          </a>
          <p className="text-indigo-200 text-sm mt-4">
            No credit card · Results in under 4 minutes · Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>© 2026 Pocket Director AI. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/shopify-brands" className="hover:text-indigo-600">
              Shopify Brands
            </Link>
            <Link href="/amazon-sellers" className="hover:text-indigo-600">
              Amazon Sellers
            </Link>
            <Link href="/ugc-videos" className="hover:text-indigo-600">
              UGC Videos
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
