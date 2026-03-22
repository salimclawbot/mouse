export const metadata = { title: "Editorial Policy",
  alternates: { canonical: "https://www.verticalmouseguide.com/editorial-policy" }
};

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Editorial Policy</h1>
      <p>
        Vertical Mouse Guide publishes evidence-led product guides focused on fit, comfort,
        reliability, and ownership value. This page explains how we evaluate products, maintain
        independence, and keep our content accurate over time.
      </p>

      <h2 className="text-xl font-semibold">Review Methodology: 100-Point Scoring</h2>
      <p>
        Every vertical mouse we review is scored on a standardized 100-point scale. The total score
        is composed of four weighted criteria, each chosen to reflect what matters most when
        selecting an ergonomic mouse for daily use:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>Fit (35%)</strong> — The most heavily weighted factor. We evaluate how well a
          mouse accommodates different hand sizes (large, medium, and small), grip styles, and wrist
          angles. A mouse that excels on every other metric but does not fit your hand is a poor
          recommendation.
        </li>
        <li>
          <strong>Comfort (25%)</strong> — We assess long-session comfort including wrist and
          forearm posture, button placement and click effort, surface materials, and overall
          ergonomic support during sustained use.
        </li>
        <li>
          <strong>Control (20%)</strong> — Sensor precision, tracking consistency on various
          surfaces, scroll wheel quality, button responsiveness, and performance in real office and
          creative workflows.
        </li>
        <li>
          <strong>Value (20%)</strong> — Price relative to build quality, feature set, warranty
          coverage, software support, and the competitive landscape of comparable alternatives.
        </li>
      </ul>
      <p>
        Scores are determined by the editorial team based on hands-on testing and research. We
        publish the individual category scores alongside the overall score so readers can see
        exactly where a product excels and where it falls short.
      </p>

      <h2 className="text-xl font-semibold">How Products Are Selected for Review</h2>
      <p>
        We select products for review based on market relevance, reader interest, and availability.
        We prioritize mice that are widely available through major retailers and that represent
        meaningful options within their price segment. We also consider reader requests submitted
        through our{" "}
        <a className="text-emerald-700 underline" href="/contact">
          contact page
        </a>
        . We do not accept products in exchange for guaranteed reviews or favorable coverage.
      </p>

      <h2 className="text-xl font-semibold">Independence from Manufacturers</h2>
      <p>
        Vertical Mouse Guide does not accept payment from manufacturers for reviews, placement, or
        rankings. No brand can buy a higher score or a featured position on our site. Our editorial
        decisions are made entirely by our review team. We do not share review content with
        manufacturers before publication, and we do not allow manufacturers to approve or modify our
        scores.
      </p>

      <h2 className="text-xl font-semibold">Affiliate Relationships</h2>
      <p>
        We earn revenue through affiliate links, primarily through the Amazon Associates Program.
        These relationships are disclosed transparently in our{" "}
        <a className="text-emerald-700 underline" href="/affiliate-disclosure">
          Affiliate Disclosure
        </a>
        . Affiliate commissions have no bearing on our scoring or ranking decisions. Products that
        score poorly are published with their low scores, and we regularly recommend products that
        earn us no affiliate revenue when they are the best option for the reader.
      </p>

      <h2 className="text-xl font-semibold">Update Cadence</h2>
      <p>
        We review and update our guides on a regular basis, typically every quarter or when material
        changes occur. Triggers for updates include significant price changes, product
        discontinuations, new product launches in a category, specification revisions by
        manufacturers, and reader-reported issues. Each updated guide reflects the revision date so
        readers know how current the information is.
      </p>

      <h2 className="text-xl font-semibold">Corrections Process</h2>
      <p>
        If we publish something that is inaccurate — whether a factual error, an outdated price, an
        incorrect specification, or a broken link — we want to know about it. Readers can report
        issues through our{" "}
        <a className="text-emerald-700 underline" href="/corrections-policy">
          corrections policy page
        </a>{" "}
        or by emailing{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>
        . We investigate reported issues promptly and publish corrections inline with a visible
        timestamp.
      </p>
    </div>
  );
}
