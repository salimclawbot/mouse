import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms of Service",
  description: "Vertical Mouse Guide terms of service and platform usage expectations for tools, content, and reader-focused workflows.",
  alternates: { canonical: "https://verticalmouseguide.com/terms-of-service" },

  openGraph: {
    title: "Terms of Service",
    description: "Vertical Mouse Guide terms of service and platform usage expectations for tools, content, and reader-focused workflows.",
    url: "https://verticalmouseguide.com/terms-of-service",
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
    title: "Terms of Service",
    description: "Vertical Mouse Guide terms of service and platform usage expectations for tools, content, and reader-focused workflows.",
    images: ["https://verticalmouseguide.com/editorial-hero.png"],
  }};

export default function TermsPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Terms of Service</h1>
      <p>
        <strong>Last updated:</strong> March 7, 2026
      </p>
      <p>
        Welcome to Vertical Mouse Guide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
        operated at verticalmouseguide.com. By accessing or using this website, you agree to be
        bound by these Terms of Service. If you do not agree to these terms, please do not use the
        site.
      </p>

      <h2 className="text-xl font-semibold">Acceptance of Terms</h2>
      <p>
        By visiting, browsing, or otherwise using Vertical Mouse Guide, you acknowledge that you
        have read, understood, and agree to be bound by these Terms of Service and our{" "}
        <a className="text-emerald-700 underline" href="/privacy-policy">
          Privacy Policy
        </a>
        . We reserve the right to modify these terms at any time, and your continued use of the site
        following any changes constitutes acceptance of the revised terms.
      </p>

      <h2 className="text-xl font-semibold">Use of Content</h2>
      <p>
        All content on Vertical Mouse Guide is provided for informational and educational purposes
        only. Our product reviews, buying guides, and ergonomic commentary are based on research and
        specification-based comparison, but they do not constitute medical, legal, or financial advice. You should
        consult a qualified professional before making health-related decisions about repetitive
        strain injuries, ergonomic setups, or workplace accommodations.
      </p>
      <p>
        Product prices, availability, specifications, and features referenced on this site may
        change without notice. We make reasonable efforts to keep information current but cannot
        guarantee that every detail is accurate at the time you read it.
      </p>

      <h2 className="text-xl font-semibold">Intellectual Property</h2>
      <p>
        All original content on Vertical Mouse Guide — including text, images, graphics, scoring
        methodology, logos, and site design — is the property of Vertical Mouse Guide and is
        protected by applicable copyright and intellectual property laws. You may not reproduce,
        distribute, modify, or republish our content without prior written permission, except for
        brief quotations with proper attribution and a link back to the original page.
      </p>

      <h2 className="text-xl font-semibold">Affiliate Links and External Sites</h2>
      <p>
        Vertical Mouse Guide participates in affiliate programs, including the Amazon Associates
        Program. When you click an affiliate link and make a purchase, we may earn a commission at
        no additional cost to you. These affiliate relationships are disclosed in our{" "}
        <a className="text-emerald-700 underline" href="/affiliate-disclosure">
          Affiliate Disclosure
        </a>
        .
      </p>
      <p>
        Our site contains links to third-party websites and retailers. We are not responsible for
        the content, accuracy, privacy practices, or availability of external sites. Clicking an
        external link means you are subject to that site&apos;s own terms and policies.
      </p>

      <h2 className="text-xl font-semibold">Disclaimer of Warranties</h2>
      <p>
        Vertical Mouse Guide is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
        We make no warranties, express or implied, regarding the accuracy, completeness,
        reliability, or suitability of any content on this site. We disclaim all warranties,
        including but not limited to implied warranties of merchantability, fitness for a particular
        purpose, and non-infringement. We do not warrant that the site will be uninterrupted,
        error-free, or free of harmful components.
      </p>

      <h2 className="text-xl font-semibold">Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Vertical Mouse Guide and its operators shall not be
        liable for any direct, indirect, incidental, consequential, or punitive damages arising from
        your use of or inability to use this website, reliance on any content or recommendations, or
        any purchases made through affiliate links. This includes, without limitation, damages for
        loss of profits, data, or other intangible losses.
      </p>

      <h2 className="text-xl font-semibold">User Conduct</h2>
      <p>
        When using Vertical Mouse Guide, you agree not to:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Use the site for any unlawful purpose or in violation of any applicable laws</li>
        <li>Attempt to gain unauthorized access to any portion of the site or its systems</li>
        <li>Interfere with or disrupt the site&apos;s infrastructure or other users&apos; access</li>
        <li>Scrape, reproduce, or redistribute site content without permission</li>
        <li>Transmit any malicious code, viruses, or other harmful materials</li>
      </ul>

      <h2 className="text-xl font-semibold">Modifications to Terms</h2>
      <p>
        We reserve the right to update or modify these Terms of Service at any time. When we make
        material changes, we will update the &quot;Last updated&quot; date at the top of this page.
        It is your responsibility to review these terms periodically. Your continued use of the site
        after changes are posted constitutes your acceptance of the modified terms.
      </p>

      <h2 className="text-xl font-semibold">Governing Law</h2>
      <p>
        These Terms of Service shall be governed by and construed in accordance with the laws of the
        United States and the state in which Vertical Mouse Guide operates, without regard to
        conflict of law principles. Any disputes arising from these terms or your use of the site
        shall be resolved in the appropriate courts of that jurisdiction.
      </p>

      <h2 className="text-xl font-semibold">Contact</h2>
      <p>
        If you have questions about these Terms of Service, please contact us at{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>
        .
      </p>
    </div>
  );
}
