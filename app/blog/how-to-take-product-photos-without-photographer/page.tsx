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
            Professional product photography no longer requires a professional photographer. With AI
            tools, any e-commerce seller can create studio-quality images from a simple phone photo.
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
            Traditional product photography requires a photographer ($75–$200/hour), a studio rental
            ($100–$300/day), props, lighting equipment, editing time, and 1–3 weeks of turnaround.
            The total cost for a single product: $300–$800.
          </p>
          <p className="text-gray-600 mb-6">
            AI product photography tools have eliminated all of that. You take a simple capture photo
            of your product — even with a phone against a white wall — and the AI generates
            professional studio images from it. The AI handles background removal, lighting, shadows,
            and compositing automatically.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Step-by-Step: Product Photos Without a Photographer</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Set Up Your Capture Environment</h3>
          <p className="text-gray-600 mb-4">
            You don&apos;t need a professional setup for your capture photo — the AI will replace the
            background entirely. But a clean capture makes the AI&apos;s job easier and your results better.
          </p>
          <ul className="space-y-2 text-gray-600 mb-4 list-disc list-inside">
            <li><strong>Use natural light:</strong> Place your product near a window with indirect sunlight. Direct sunlight creates harsh shadows — indirect light is more even.</li>
            <li><strong>Use a white background:</strong> A piece of white poster board or foam core is enough. It helps the AI isolate your product cleanly.</li>
            <li><strong>Stabilize your phone:</strong> Use a tripod or prop your phone against something stable to avoid blur.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Photograph Your Product</h3>
          <p className="text-gray-600 mb-4">
            Take multiple angles of your product — front, 45-degree angle, and a flat lay if relevant.
            You&apos;ll upload each angle separately and get 8 professional variations per upload.
          </p>
          <ul className="space-y-2 text-gray-600 mb-4 list-disc list-inside">
            <li>Fill the frame with your product</li>
            <li>Avoid harsh shadows by using diffused light (a white curtain in front of a window works well)</li>
            <li>Take the photo in RAW if your phone supports it — better detail for the AI to work with</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Upload to Pocket Director AI</h3>
          <p className="text-gray-600 mb-4">
            Sign up for a free account at pocketdirectorai.com — you get 200 credits with no credit
            card required. Upload your product photo and select your target platform.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 4: Choose Your Style</h3>
          <p className="text-gray-600 mb-4">
            Select from 500+ professional scene presets. For your first run, try these:
          </p>
          <ul className="space-y-2 text-gray-600 mb-4 list-disc list-inside">
            <li><strong>Amazon Main Image:</strong> Pure white background, product centered, compliant with Amazon requirements</li>
            <li><strong>Lifestyle Scene:</strong> Product placed in a relevant lifestyle setting (kitchen, desk, outdoor, etc.)</li>
            <li><strong>Luxury:</strong> Dark, editorial backgrounds with dramatic lighting</li>
            <li><strong>Studio:</strong> Soft gradient backgrounds with professional studio lighting</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">Step 5: Download Your 8 Professional Images</h3>
          <p className="text-gray-600 mb-6">
            In under 4 minutes, you&apos;ll have 8 professional product images ready to download — all with
            full commercial rights. The images are generated at high resolution and in platform-optimized
            dimensions.
          </p>

          <h2 className="text-2xl font-bold mt-10 mb-4">Results: Before and After AI Product Photography</h2>
          <p className="text-gray-600 mb-4">
            Brands consistently report these results when switching from traditional photography to AI:
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

          <h2 className="text-2xl font-bold mt-10 mb-4">Tips for Better AI Product Photo Results</h2>
          <ul className="space-y-3 text-gray-600 mb-8 list-disc list-inside">
            <li><strong>Capture in good light:</strong> The AI works best when your product is evenly lit without harsh shadows in the source image.</li>
            <li><strong>Use a contrasting background:</strong> If your product is white, use a light gray background for the capture. The AI will isolate it more cleanly.</li>
            <li><strong>Test multiple styles:</strong> Generate 3–4 different style variations per product and A/B test them. The highest-converting style is often surprising.</li>
            <li><strong>Generate UGC videos too:</strong> Pocket Director AI also generates UGC-style product videos. Use these for paid social alongside your static images.</li>
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
