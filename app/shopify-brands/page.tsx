import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Product Photography for Shopify Brands — Increase Conversion Rate",
  description:
    "A/B test product image styles without re-shooting. Generate lifestyle, studio, and editorial product photos with AI. Used by 100+ Shopify brands. Start free.",
  alternates: { canonical: "https://pocketdirectorai.com/shopify-brands" },
  openGraph: {
    title: "AI Product Photography for Shopify Brands — Increase Conversion Rate",
    description:
      "A/B test product image styles without re-shooting. Generate lifestyle, studio, and editorial product photos with AI. Used by 100+ Shopify brands. Start free.",
    type: "website",
    url: "https://pocketdirectorai.com/shopify-brands",
  },
};

export default function ShopifyBrandsPage() {
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
            Built for Shopify brands of all sizes
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight mb-6 text-gray-900">
            Shopify Product Photos{" "}
            <span className="text-indigo-600">That Convert</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            A/B test multiple image styles without re-shooting. AI-generated lifestyle, studio, and
            editorial photos optimized for Shopify conversion rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.pocketdirectorai.com/signup"
              className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
            >
              Start Free — 200 Credits
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-indigo-300 hover:text-indigo-600 transition-colors"
            >
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">No credit card required. 200 free credits on signup.</p>
        </div>
      </section>

      {/* Social Proof Testimonial (above fold) */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-8">
            <div className="flex items-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-indigo-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-gray-700 leading-relaxed mb-6 italic">
              "We tested AI-generated lifestyle images against our old white-background studio shots.
              The AI images won in every A/B test. Conversion rate went up 35% and we stopped
              spending $2,400/month on photographers."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
              <div>
                <div className="font-bold text-gray-900">Sarah Chen</div>
                <div className="text-sm text-gray-500">Founder — Luminara Beauty, Shopify brand</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-indigo-600 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 text-center text-white">
          <div>
            <div className="text-3xl font-extrabold">35%</div>
            <div className="text-indigo-200 text-sm mt-1">Average conversion rate increase</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold">8 images</div>
            <div className="text-indigo-200 text-sm mt-1">Per product upload</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold col-span-2 md:col-span-1">$15.20/mo</div>
            <div className="text-indigo-200 text-sm mt-1">vs. $2,400/month studio photography</div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold mb-4">Images Built for Shopify Performance</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Generate more image variations, run more tests, find what converts. Without booking a single shoot.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🧪",
                title: "A/B Test Image Styles",
                description:
                  "Generate 8 variations per product and split-test which backgrounds, angles, and compositions drive the highest add-to-cart rates. Stop guessing — start testing with real data.",
              },
              {
                icon: "🌿",
                title: "Lifestyle Images That Tell a Story",
                description:
                  "Go beyond white backgrounds. Put your products in kitchens, bedrooms, outdoor settings, and hundreds of other scenes — without a stylist or a shoot day.",
              },
              {
                icon: "📱",
                title: "Optimized for Mobile Commerce",
                description:
                  "70% of Shopify traffic is mobile. AI generates mobile-optimized crops automatically — square, portrait, landscape — so your product looks perfect on every screen size.",
              },
              {
                icon: "📦",
                title: "Scale Across Your Entire Catalog",
                description:
                  "Not just one product. Upload your full catalog and get consistent, professional imagery across every SKU. Launch new products weekly without a single photography booking.",
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

      {/* How It Works */}
      <section className="bg-gray-50 py-20 px-4" id="how-it-works">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-500 text-lg mb-14">
            Upload once. Get 8 conversion-optimized images. Done in 4 minutes.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload Your Product",
                description:
                  "Upload a photo of your product on any background. Our AI removes the background and isolates your product cleanly.",
              },
              {
                step: "02",
                title: "Choose Your Style",
                description:
                  "Pick from lifestyle, editorial, studio clean, or seasonal presets. Each is optimized for Shopify conversion rates.",
              },
              {
                step: "03",
                title: "Download and Test",
                description:
                  "Download your 8 images and upload directly to Shopify. Run A/B tests to find your highest-converting variant.",
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

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Questions from Shopify Brand Owners
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I generate images for all products in my Shopify store?",
                a: "Yes. There's no per-product limit. You can upload as many products as you need within your plan's credit allowance. Each product upload generates 8 images, so 100 products = 800 professional photos.",
              },
              {
                q: "What image sizes does Pocket Director generate for Shopify?",
                a: "We generate images optimized for Shopify's recommended dimensions: 2048×2048px for product images, 1200×628px for collections, and mobile-cropped variants for all major aspect ratios.",
              },
              {
                q: "How do I A/B test product images on Shopify?",
                a: "We generate 8 style variations per product. You can use Shopify's native product image slots or A/B testing apps like Intelligems or Shoplift to run split tests across your variants and track which drives higher add-to-cart rates.",
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
            Start Testing Images That Convert
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            200 free credits. No credit card. Join 100+ Shopify brands already running AI-generated images.
          </p>
          <a
            href="https://app.pocketdirectorai.com/signup"
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition-colors"
          >
            Start Free — 200 Credits
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
            <Link href="/amazon-sellers" className="hover:text-indigo-600">Amazon Sellers</Link>
            <Link href="/alternatives/photoroom" className="hover:text-indigo-600">Photoroom Alternative</Link>
            <Link href="/ugc-videos" className="hover:text-indigo-600">UGC Videos</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
