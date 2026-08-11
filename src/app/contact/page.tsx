import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact",
  description: "Vertical Mouse Guide is here to help with buying guidance, content requests, and practical affiliate support updates.",
  alternates: { canonical: "https://verticalmouseguide.com/contact" },

  openGraph: {
    title: "Contact",
    description: "Vertical Mouse Guide is here to help with buying guidance, content requests, and practical affiliate support updates.",
    url: "https://verticalmouseguide.com/contact",
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
    title: "Contact",
    description: "Vertical Mouse Guide is here to help with buying guidance, content requests, and practical affiliate support updates.",
    images: ["https://verticalmouseguide.com/editorial-hero.png"],
  }};

export default function ContactPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>
        We welcome hearing from readers, industry professionals, and anyone interested in ergonomic
        mice and wrist health. Whether you have a quick question or detailed feedback, we read every
        message that comes in.
      </p>

      <h2 className="text-xl font-semibold">What We Can Help With</h2>
      <p>We respond to inquiries in the following categories:</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Editorial feedback</strong> — Comments on our reviews, guides, or scoring
          methodology.
        </li>
        <li>
          <strong>Corrections</strong> — Spotted a factual error, outdated price, incorrect
          specification, or broken link? Let us know and we will investigate promptly.
        </li>
        <li>
          <strong>Product suggestions</strong> — Have a vertical or ergonomic mouse you think we
          should review? We are always looking to expand our coverage.
        </li>
        <li>
          <strong>Partnership inquiries</strong> — Press contacts, brand communications, and
          collaboration proposals.
        </li>
        <li>
          <strong>Privacy requests</strong> — Questions about your data, opt-out requests, or
          anything related to our{" "}
          <a className="text-emerald-700 underline" href="/privacy-policy">
            privacy policy
          </a>
          .
        </li>
      </ul>

      <h2 className="text-xl font-semibold">How to Reach Us</h2>
      <p>
        Email us at{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold">What to Include in Your Message</h2>
      <p>
        To help us respond as quickly and effectively as possible, please include the following
        where relevant:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>The URL of the page your message relates to</li>
        <li>A clear description of the issue, question, or suggestion</li>
        <li>Screenshots or links to supporting information, if applicable</li>
        <li>Your preferred contact method for follow-up</li>
      </ul>

      <h2 className="text-xl font-semibold">Response Time</h2>
      <p>
        We are a small team, so please allow 2 to 5 business days for a response. Corrections and
        factual-error reports are prioritized and may be addressed sooner. We appreciate your
        patience and will do our best to reply thoroughly.
      </p>
    </div>
  );
}
