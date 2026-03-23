import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Product Photography for Amazon Sellers — FBA-Ready Images in 4 Minutes",
  description:
    "Generate Amazon-compliant product photos with AI. Pure white main images, A+ Content lifestyle shots, and split-test angles — all from one product upload. 200 free credits, no CC required.",
  alternates: { canonical: "https://pocketdirectorai.com/amazon-sellers" },
  openGraph: {
    title: "AI Product Photography for Amazon Sellers — FBA-Ready Images in 4 Minutes",
    description:
      "Generate Amazon-compliant product photos with AI. Pure white main images, A+ Content lifestyle shots, and split-test angles — all from one product upload. 200 free credits, no CC required.",
    type: "website",
    url: "https://pocketdirectorai.com/amazon-sellers",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pocket Director AI",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "AI product photography tool for Amazon sellers. Generate compliant main images, A+ Content lifestyle shots, and split-test angles in 4 minutes.",
  offers: {
    "@type": "Offer",
    price: "15.20",
    priceCurrency: "USD",
    priceValidUntil: "2027-01-01",
    description: "Starting price per month. 200 free credits with no credit card required.",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "312",
  },
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
      name: "Are AI-generated product photos allowed on Amazon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Amazon permits AI-generated product images as long as they accurately represent the product and meet Amazon's image guidelines — including pure white backgrounds for main images, correct dimensions, and no watermarks or text.",
      },
    },
    {
      "@type": "Question",
      name: "Will Amazon's AI detect my images are AI-generated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Amazon does not screen for AI-generated images. What matters is compliance: correct background, product fills the frame, no prohibited overlays. Pocket Director generates compliant images automatically.",
      },
    },
    {
      "@type": "Question",
      name: "How many images can I generate per product?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each upload generates 8 professional variations. You can upload multiple angles (front, side, 45°) and generate 8 images per angle — giving you 24+ unique images per product from a single session.",
      },
    },
  ],
};

export default function AmazonSellersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
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
        <section className="bg-gradient-to-b from-indigo-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Built for Amazon FBA &amp; FBM sellers
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
              Amazon Product Photography,{" "}
              <span className="text-indigo-600">Powered by AI</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Generate compliant main images, A+ Content lifestyle shots, and split-test angles from
              a single product upload. Results in 4 minutes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.pocketdirectorai.com/signup"
                className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                Start Free — 200 Credits
              </a>
              <a
                href="#examples"
                className="w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                See Examples
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">No credit card required. 200 free credits on signup.</p>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-indigo-600 py-10 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl font-extrabold">12–28%</div>
              <div className="text-indigo-200 text-sm mt-1">Average CTR improvement</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">4 min</div>
              <div className="text-indigo-200 text-sm mt-1">vs. 2–3 week studio turnaround</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">$300–800</div>
              <div className="text-indigo-200 text-sm mt-1">Saved per product</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold">100+</div>
              <div className="text-indigo-200 text-sm mt-1">Amazon brands using Pocket Director</div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4" id="examples">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold mb-4">Everything Amazon Requires. Nothing Extra.</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Pocket Director is built around Amazon's image standards so every output is
                marketplace-ready from the first download.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: "✓",
                  title: "Amazon-Compliant Main Images",
                  description:
                    "Pure white background (RGB 255,255,255), product fills 85% of frame, compliant with all Amazon image requirements. Download and upload directly — no editing needed.",
                },
                {
                  icon: "🖼",
                  title: "A+ Content Lifestyle Shots",
                  description:
                    "Generate contextual lifestyle images for A+ Content and Brand Story modules in any scene or setting. Show your product in kitchens, outdoors, offices — instantly.",
                },
                {
                  icon: "🔬",
                  title: "Split-Test Without Re-Shooting",
                  description:
                    "Generate 8 variations per product angle to A/B test which images drive higher click-through and conversion. Test backgrounds, compositions, and crops without any reshoots.",
                },
                {
                  icon: "🚀",
                  title: "Launch Products Faster",
                  description:
                    "From product upload to 8 professional images in under 4 minutes — no photographer scheduling, no studio wait, no post-processing. List faster and start selling sooner.",
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-indigo-200 transition-colors"
                >
                  <div className="text-3xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg mb-14">
              Three steps. Four minutes. Amazon-ready images.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload Your Product Photo",
                  description:
                    "Take a photo on any background — white, cluttered, or outdoors. Our AI isolates the product automatically.",
                },
                {
                  step: "02",
                  title: "Select Amazon Style Preset",
                  description:
                    "Choose from main image (pure white), A+ lifestyle, or split-test variations. Presets are pre-configured for Amazon compliance.",
                },
                {
                  step: "03",
                  title: "Download Compliant Images",
                  description:
                    "Get 8 professional, Amazon-compliant images in under 4 minutes. Upload straight to Seller Central.",
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

        {/* Testimonial */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-indigo-500 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                "The bottleneck used to be photography — waiting 2–3 weeks per product. Now I upload
                the product, pick a style, and I'm done in 4 minutes. I launched 3 products last
                quarter that would have taken 9 weeks with a photographer."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <div className="font-bold text-gray-900">Mike Johnson</div>
                  <div className="text-sm text-gray-500">Amazon FBA Seller — 7-figure brand</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "Are AI-generated product photos allowed on Amazon?",
                  a: "Yes. Amazon permits AI-generated product images as long as they accurately represent the product and meet Amazon's image guidelines — including pure white backgrounds for main images, correct dimensions, and no watermarks or text.",
                },
                {
                  q: "Will Amazon's AI detect my images are AI-generated?",
                  a: "Amazon does not screen for AI-generated images. What matters is compliance: correct background, product fills the frame, no prohibited overlays. Pocket Director generates compliant images automatically.",
                },
                {
                  q: "How many images can I generate per product?",
                  a: "Each upload generates 8 professional variations. You can upload multiple angles (front, side, 45°) and generate 8 images per angle — giving you 24+ unique images per product from a single session.",
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
              Start Generating Amazon Images Free
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              200 free credits. No credit card required. Amazon-compliant images in 4 minutes.
            </p>
            <a
              href="https://app.pocketdirectorai.com/signup"
              className="inline-block bg-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Start Free — 200 Credits
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
              <Link href="/alternatives/flair-ai" className="hover:text-indigo-600">Flair AI Alternative</Link>
              <Link href="/ugc-videos" className="hover:text-indigo-600">UGC Videos</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
