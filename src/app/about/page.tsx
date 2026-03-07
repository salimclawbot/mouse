export const metadata = { title: "About" };

const aboutAssets = [
  { src: "/images/vmg-visual-assets/generated/matt-sullivan-editor-vertical-mouse-guide.webp", alt: "Matt Sullivan, editor and lead reviewer at Vertical Mouse Guide" },
  { src: "/images/vmg-visual-assets/generated/vertical-mouse-review-methodology-process.webp", alt: "Four-step review methodology process visual" },
  { src: "/images/vmg-visual-assets/generated/independent-vertical-mouse-reviews-trust.webp", alt: "Trust and independence badge visual for unbiased reviews" },
  { src: "/images/vmg-visual-assets/generated/vmg-review-process-infographic.png", alt: "Vertical Mouse Guide review process infographic" },
  { src: "/images/vmg-visual-assets/generated/vertical-mice-testing-collection.webp", alt: "Collection of vertical mice arranged for testing" },
  { src: "/images/vmg-visual-assets/generated/vertical-mouse-review-testing-setup.webp", alt: "Vertical mouse testing setup with measurement tools" },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl space-y-6">
      <h1 className="text-3xl font-bold">About Vertical Mouse Guide</h1>
      <p>
        Vertical Mouse Guide is an evidence-led buying guide publication focused on vertical and
        ergonomic mice, wrist comfort, and sustainable desk productivity.
      </p>
      <p>
        We publish for practical decision-making: what to buy, why it fits, what tradeoffs matter,
        and what to avoid.
      </p>

      <h2 className="text-xl font-semibold">Editorial scope</h2>
      <p>
        We cover office and creator workflows where comfort, click quality, reliability, and
        long-session usability matter. We do not provide medical diagnosis or treatment advice.
      </p>

      <h2 className="text-xl font-semibold">How we maintain trust</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Clear affiliate disclosures</li>
        <li>Published editorial and corrections policies</li>
        <li>Guide updates when material product changes occur</li>
        <li>Transparent contact channel for feedback and fixes</li>
      </ul>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Visual methodology assets</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {aboutAssets.map((img) => (
            <figure key={img.src} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img src={img.src} alt={img.alt} loading="lazy" className="h-auto w-full" />
              <figcaption className="px-3 py-2 text-xs text-slate-600">{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
