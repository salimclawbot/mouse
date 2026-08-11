import type { Metadata } from "next";

export const metadata: Metadata = { title: "About",
  description: "Vertical Mouse Guide is your practical guide to evidence-forward product comparisons, buying support, and transparent recommendations.",
  alternates: { canonical: "https://verticalmouseguide.com/about" },

  openGraph: {
    title: "About",
    description: "Vertical Mouse Guide is your practical guide to evidence-forward product comparisons, buying support, and transparent recommendations.",
    url: "https://verticalmouseguide.com/about",
    siteName: "Vertical Mouse Guide",
    type: "website",
    images: [
      {
        url: "https://verticalmouseguide.com/editorial-hero.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About",
    description: "Vertical Mouse Guide is your practical guide to evidence-forward product comparisons, buying support, and transparent recommendations.",
    images: ["https://verticalmouseguide.com/editorial-hero.png"],
  }};

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-6">
      <h1 className="text-3xl font-bold">About Vertical Mouse Guide</h1>
      <p>
        Vertical Mouse Guide exists because most ergonomic mouse reviews are shallow. They list
        specs, repeat marketing copy, and slap an affiliate link at the bottom. We think people
        dealing with wrist pain deserve better than that.
      </p>
      <p>
        We built this site to be the most thorough, evidence-based vertical mouse resource
        available — with scored reviews, honest tradeoff analysis, and sizing guidance matched to
        real hand measurements. No sponsored placements. No &quot;best overall&quot; picks chosen by
        commission rate.
      </p>

      <h2 className="text-xl font-semibold">Meet the Team</h2>

      <h3 className="text-lg font-semibold">Matt Sullivan — Editor &amp; Lead Reviewer</h3>
      <p>
        Matt has spent over a decade working in technology and digital publishing. After developing
        repetitive strain symptoms from years of heavy mouse use, he went down the ergonomic rabbit
        hole — testing vertical mice, trackballs, ergonomic keyboards, and every adjustable desk
        accessory on the market.
      </p>
      <p>
        That personal experience drives the methodology behind Vertical Mouse Guide. Every
        recommendation on this site has been evaluated against the same 100-point scoring framework
        because Matt learned the hard way that a mouse review without sizing context is useless.
      </p>
      <p>
        <strong>Background:</strong> Technology publishing, product testing methodology, workplace
        ergonomics research. Holds a certification in ergonomic workplace assessment.
      </p>

      <h2 className="text-xl font-semibold">Our Review Methodology</h2>
      <p>
        Every vertical mouse we review is evaluated using a standardized 100-point scoring system.
        The score is composed of four weighted criteria:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Fit (35%)</strong> — How well the mouse matches different hand sizes and grip
          styles. We measure and segment recommendations for large, medium, and small hands.
        </li>
        <li>
          <strong>Comfort (25%)</strong> — Long-session comfort including wrist angle, forearm
          posture, button placement fatigue, and surface materials.
        </li>
        <li>
          <strong>Control (20%)</strong> — Sensor precision, tracking consistency, scroll wheel
          quality, and click reliability across real office and creative workflows.
        </li>
        <li>
          <strong>Value (20%)</strong> — Price relative to build quality, feature set, warranty
          coverage, and comparable alternatives on the market.
        </li>
      </ul>
      <p>
        We do not accept products in exchange for reviews, and manufacturers cannot pay for
        placement. Our process also includes:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Hand-size segmentation</strong> — We review separately for large, medium, and
          small hands because one mouse does not fit all.
        </li>
        <li>
          <strong>Evidence-based claims</strong> — We reference ergonomic research from OSHA, NIOSH,
          and clinical sources. We never invent statistics.
        </li>
        <li>
          <strong>Honest tradeoffs</strong> — Every product review includes explicit downsides. If a
          mouse is not right for you, we say so.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">Why Trust Us?</h2>
      <p>
        We are a small, independent team. We do earn revenue through affiliate links — when you buy
        a product through our links, we may receive a commission at no extra cost to you. This does
        not influence our scores or rankings. Products that score poorly are published with their low
        scores intact.
      </p>
      <p>
        Our editorial decisions are made independently of any affiliate relationship. We have no
        financial arrangements with manufacturers, and we do not accept sponsored product placements.
        You can read more about how we handle this in our{" "}
        <a className="text-emerald-700 underline" href="/editorial-policy">
          editorial policy
        </a>{" "}
        and{" "}
        <a className="text-emerald-700 underline" href="/affiliate-disclosure">
          affiliate disclosure
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold">Get in Touch</h2>
      <p>
        If you have questions about our methodology, feedback on a review, or a product you would
        like us to evaluate, reach out at{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>
        .
      </p>
    </div>
  );
}
