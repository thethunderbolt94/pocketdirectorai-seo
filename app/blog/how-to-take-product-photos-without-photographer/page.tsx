import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Create Product Photos Without a Photographer (Step-by-Step Guide)",
  description:
    "A step-by-step guide to creating professional product photos without hiring a photographer — using AI tools, natural light, and simple setups. Results in under 4 minutes.",
  alternates: { canonical: "https://pocketdirectorai.com/blog/how-to-take-product-photos-without-photographer" },
  openGraph: { title: "How to Take Product Photos Without a Photographer", type: "article" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create Product Photos Without a Photographer",
  description: "Step-by-step guide to creating professional product photos without a photographer using AI tools.",
  totalTime: "PT30M",
  step: [
    { "@type": "HowToStep", name: "Set up simple lighting", text: "Use natural window light or a cheap ring light for your initial product capture." },
    { "@type": "HowToStep", name: "Take a clean product photo", text: "Photograph your product against any clean background — a white poster board works fine." },
    { "@type": "HowToStep", name: "Upload to Pocket Director AI", text: "Upload your photo and select your target platform (Amazon, Shopify, Instagram, etc.)." },
    { "@type": "HowToStep", name: "Choose a style", text: "Select from 500+ professional scenes and styles optimized for your platform." },
    { "@type": "HowToStep", name: "Download your professional images", text: "Download 8 professional product photos with full commercial rights in under 4 minutes." },
  ],
};

export default function ProductPhotosWithoutPhotographerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
            <time dateTime="2026-03-08">March 8, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            How to Create Product Photos Without a Photographer (Step-by-Step)
          </h1>
          <p className="text-xl text-gray-500">
            You don&apos;t need to hire a photographer to get professional product photos anymore. With AI
            tools, any e-commerce seller can go from a phone snapshot to studio-quality images.
            Here&apos;s exactly how to do it in under 30 minutes.
          </p>
        </div>

        <div className="prose prose-gray max-w-none">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-8">
            <h2 className="text-base font-bold mb-3">What you&apos;ll need</h2>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>✓ A smartphone (any modern phone camera works)</li>
              <li>✓ Natural window light or a $30 ring light</li>
              <li>✓ A piece of white poster board or foam core (~$3)</li>
              <li>✓ Pocket Director AI account (free — 200 credits, no CC required)</li>
              <li>✓ 20–30 minutes of your time</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Why You Don&apos;t Need a Photographer Anymore</h2>
          <p className="text-gray-600 mb-4">
            Traditional product photography adds up fast: a photographer runs $75–$200/hour, studio rental
            is $100–$300/day, and then there&apos;s props, lighting equipment, editing time, and 1–3 weeks of
            waiting around. A single product shoot can cost $300–$800 before you&apos;ve sold a thing.
          </p>
          <p className="text-gray-600 mb-6">
            AI product photography tools cut all of that out. You take a simple photo of your product,
            even just a phone shot against a white wall, and the AI generates professional studio images
            from it. Background removal, lighting, shadows, compositing — all handled automatically.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Step-by-Step: Product Photos Without a Photographer</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Set Up Your Capture Environment</h3>
          <p className="text-gray-600 mb-4">
            Your capture photo doesn&apos;t need to look perfect — the AI replaces the background entirely.
            But starting with a clean shot gives the AI more to work with and your results will be noticeably better.
          </p>
          <ul className="space-y-2 text-gray-600 mb-4 list-disc list-inside">
            <li>Put your product near a window with indirect sunlight. Direct sun creates harsh shadows. Indirect light is even and soft, which is what you want. (The ring light is optional — window light is genuinely better for most products.)</li>
            <li>Use a white poster board or foam core as your background. It costs $3 at any office supply store and helps the AI isolate your product cleanly.</li>
            <li>Stabilize your phone. Prop it against something or use a small tripod. Blur kills photo quality more than almost anything else.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Photograph Your Product</h3>
          <p className="text-gray-600 mb-4">
            Shoot multiple angles: front, 45-degree, and a flat lay if it makes sense for your product.
            You&apos;ll upload each angle separately and get 8 professional variations per upload, so more angles means more usable content.
          </p>
          <ul className="space-y-2 text-gray-600 mb-4 list-disc list-inside">
            <li>Fill the frame. Get close enough that your product takes up most of the shot.</li>
            <li>Soften the light if you need to. A white curtain or piece of tissue paper in front of a window works as a cheap diffuser.</li>
            <li>Shoot in RAW if your phone supports it. You&apos;ll get more detail for the AI to work with.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Upload to Pocket Director AI</h3>
          <p className="text-gray-600 mb-4">
            Sign up for a free account at pocketdirectorai.com. You get 200 credits and no credit
            card is required. Upload your product photo and pick the platform you&apos;re selling on.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 4: Choose Your Style</h3>
          <p className="text-gray-600 mb-4">
            There are 500+ scene presets to choose from. If you&apos;re not sure where to start, try these four:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4 list-disc list-inside">
            <li>Amazon Main Image: pure white background, product centered, built to meet Amazon&apos;s image requirements</li>
            <li>Lifestyle Scene: your product placed in a relevant real-world setting — kitchen, desk, outdoor, etc.</li>
            <li>Luxury: dark, editorial backgrounds with dramatic lighting. Works well for premium products.</li>
            <li>Studio: soft gradient backgrounds with clean, professional lighting. A safe default for most categories.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 5: Download Your 8 Professional Images</h3>
          <p className="text-gray-600 mb-6">
            In under 4 minutes, you&apos;ll have 8 professional product images ready to download, all with
            full commercial rights. High resolution, platform-optimized dimensions. Ready to upload wherever you sell.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">What the Numbers Actually Look Like</h2>
          <p className="text-gray-600 mb-4">
            Here&apos;s how AI product photography stacks up against the traditional approach:
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { metric: "$300–$800 → $0.08", label: "Cost per product" },
              { metric: "2–3 weeks → 4 minutes", label: "Turnaround time" },
              { metric: "5–10 → 8–25", label: "Images generated" },
              { metric: "+35%", label: "Avg. conversion increase" },
            ].map((s) => (
              <div key={s.label} className="bg-indigo-50 p-4 rounded-xl text-center">
                <div className="font-bold text-indigo-700 text-lg">{s.metric}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-4">Tips for Better Results</h2>
          <ul className="space-y-3 text-gray-600 mb-8 list-disc list-inside">
            <li>Even light beats bright light. The AI performs best when your product is lit evenly without hard shadows in the source photo. Overcast days through a window are ideal.</li>
            <li>Use a contrasting background for your capture. If your product is white, shoot it against light gray, not white. The AI will separate the edges much more cleanly.</li>
            <li>Test multiple styles per product. Generate 3–4 different style variations and run them as A/B tests. The best-converting style is often not the one you&apos;d guess.</li>
            <li>Don&apos;t stop at photos. Pocket Director AI also generates UGC-style product videos. Pair those with your static images for paid social and you&apos;ll have everything you need for a full campaign.</li>
          </ul>

          <div className="bg-indigo-600 text-white p-8 rounded-2xl text-center mt-12">
            <h2 className="text-2xl font-bold mb-3">Try It Now — 200 Free Credits</h2>
            <p className="text-indigo-100 mb-6">No credit card. No photographer. Professional results in 4 minutes.</p>
            <a href="https://app.pocketdirectorai.com/signup" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Start Free — 200 Credits
            </a>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 text-sm text-gray-400">
            <p><strong>Related:</strong></p>
            <ul className="space-y-1 mt-2">
              <li><Link href="/blog/ai-product-photography-complete-guide" className="text-indigo-600 hover:underline">AI Product Photography: The Complete Guide (2026)</Link></li>
              <li><Link href="/blog/product-photography-cost-breakdown" className="text-indigo-600 hover:underline">Product Photography Cost Breakdown: How Brands Save $35,000/Year</Link></li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
