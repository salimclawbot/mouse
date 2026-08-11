import type { Metadata } from "next";

export const metadata: Metadata = { title: "Corrections Policy",
  description: "Vertical Mouse Guide publishes review standards, evidence checks, and ranking rules to keep recommendations transparent and measurable.",
  alternates: { canonical: "https://www.verticalmouseguide.com/corrections-policy" },

  openGraph: {
    title: "Corrections Policy",
    description: "Vertical Mouse Guide publishes review standards, evidence checks, and ranking rules to keep recommendations transparent and measurable.",
    url: "https://www.verticalmouseguide.com/corrections-policy",
    siteName: "Vertical Mouse Guide",
    type: "website",
    images: [
      {
        url: "https://www.verticalmouseguide.com/editorial-hero.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Corrections Policy",
    description: "Vertical Mouse Guide publishes review standards, evidence checks, and ranking rules to keep recommendations transparent and measurable.",
    images: ["https://www.verticalmouseguide.com/editorial-hero.png"],
  }};

export default function CorrectionsPolicyPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Corrections Policy</h1>
      <p>
        Accuracy is core to our publishing standard at Vertical Mouse Guide. We take factual
        correctness seriously, and when errors are identified — whether by our team or by readers —
        we investigate and correct them as quickly as possible. This page explains the types of
        corrections we handle, how to report issues, and how we display corrections on the site.
      </p>

      <h2 className="text-xl font-semibold">Types of Corrections</h2>
      <p>We address the following categories of errors and updates:</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Factual errors</strong> — Incorrect claims about product features, ergonomic
          research, company information, or any other verifiable facts.
        </li>
        <li>
          <strong>Pricing updates</strong> — Product prices change frequently. When we are notified
          that a published price is materially outdated, we verify and update it.
        </li>
        <li>
          <strong>Specification changes</strong> — Manufacturers occasionally revise product specs
          (weight, dimensions, sensor model, connectivity options). We update our reviews to reflect
          the current version of the product.
        </li>
        <li>
          <strong>Broken links</strong> — Links to retailer pages, manufacturer sites, or external
          resources that no longer work. We replace or remove broken links when identified.
        </li>
        <li>
          <strong>Typographical and grammatical errors</strong> — While minor, we correct these to
          maintain the overall quality and clarity of our content.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">How to Report an Issue</h2>
      <p>
        If you spot an error on any page of Vertical Mouse Guide, please email us at{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>{" "}
        with the following information:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Page URL</strong> — The full URL of the page containing the error.
        </li>
        <li>
          <strong>Description of the issue</strong> — What is incorrect and, if possible, what the
          correct information should be.
        </li>
        <li>
          <strong>Supporting evidence</strong> — A link to a source, screenshot, or other reference
          that supports the correction. This is not required but helps us verify the issue faster.
        </li>
      </ul>
      <p>
        You can also use the subject line &quot;Correction Request&quot; to help us prioritize your
        message.
      </p>

      <h2 className="text-xl font-semibold">Investigation Process</h2>
      <p>
        When we receive a correction report, we follow a consistent process:
      </p>
      <ul className="list-decimal space-y-1 pl-6">
        <li>
          <strong>Acknowledgment</strong> — We confirm receipt of the report, typically within one
          business day.
        </li>
        <li>
          <strong>Verification</strong> — We independently verify the reported issue using
          manufacturer sources, retailer listings, published research, or direct product
          inspection.
        </li>
        <li>
          <strong>Correction</strong> — If the error is confirmed, we update the content directly on
          the affected page.
        </li>
        <li>
          <strong>Notification</strong> — For significant corrections, we may follow up with the
          person who reported the issue to confirm the fix.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">How Corrections Are Displayed</h2>
      <p>
        We believe in transparent corrections. When we fix an error, we update the content inline
        on the original page rather than publishing a separate errata document. The article&apos;s
        &quot;last updated&quot; timestamp is revised to reflect the date of the correction. For
        material corrections — such as a changed product recommendation or a significant factual
        revision — we add a visible correction note near the updated content explaining what was
        changed and why.
      </p>

      <h2 className="text-xl font-semibold">Timeline for Corrections</h2>
      <p>
        We aim to address correction requests within the following timeframes:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Broken links</strong> — Fixed within 1 to 2 business days.
        </li>
        <li>
          <strong>Pricing and specification updates</strong> — Verified and corrected within 2 to 3
          business days.
        </li>
        <li>
          <strong>Factual errors</strong> — Investigated and corrected within 3 to 5 business days,
          depending on the complexity of verification.
        </li>
        <li>
          <strong>Typographical errors</strong> — Corrected within 1 to 2 business days.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">Our Commitment to Accuracy</h2>
      <p>
        Getting things right matters to us. Our readers rely on Vertical Mouse Guide to make
        informed purchasing decisions, and that trust depends on the accuracy of what we publish. We
        proactively audit our content during regular update cycles, but we also depend on our
        readers to help us catch issues we may have missed. Every correction makes the site better
        for everyone.
      </p>
      <p>
        Thank you for helping us maintain the highest standard of accuracy. If you have any
        questions about this policy, contact us at{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>
        .
      </p>
    </div>
  );
}
