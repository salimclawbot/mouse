import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy",
  description: "Vertical Mouse Guide explains how browsing data, analytics, and contact details are collected and protected with clear options for privacy control.",
  alternates: { canonical: "https://verticalmouseguide.com/privacy-policy" },

  openGraph: {
    title: "Privacy Policy",
    description: "Vertical Mouse Guide explains how browsing data, analytics, and contact details are collected and protected with clear options for privacy control.",
    url: "https://verticalmouseguide.com/privacy-policy",
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
    title: "Privacy Policy",
    description: "Vertical Mouse Guide explains how browsing data, analytics, and contact details are collected and protected with clear options for privacy control.",
    images: ["https://verticalmouseguide.com/editorial-hero.png"],
  }};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> March 7, 2026
      </p>
      <p>
        Vertical Mouse Guide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
        website verticalmouseguide.com. This Privacy Policy explains how we collect, use, and
        protect information when you visit our site. By using Vertical Mouse Guide, you agree to the
        practices described in this policy.
      </p>

      <h2 className="text-xl font-semibold">Information We Collect</h2>
      <p>
        We collect limited, non-personally-identifiable information to improve our content and
        understand how visitors use the site. This includes:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Usage data</strong> — Pages visited, time spent on pages, referring URLs, browser
          type, device type, operating system, and screen resolution.
        </li>
        <li>
          <strong>IP address</strong> — Collected by our analytics providers in anonymized or
          truncated form. We do not store full IP addresses ourselves.
        </li>
        <li>
          <strong>Cookies and similar technologies</strong> — Small data files placed on your device
          to support analytics, remember preferences, and enable core site functionality.
        </li>
      </ul>
      <p>
        We do not collect names, email addresses, or other personal information unless you
        voluntarily provide it (for example, by emailing us directly).
      </p>

      <h2 className="text-xl font-semibold">How We Use Your Information</h2>
      <p>The information we collect is used to:</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>Analyze traffic patterns and improve content quality</li>
        <li>Monitor site performance and identify technical issues</li>
        <li>Understand which guides and reviews are most useful to visitors</li>
        <li>Comply with legal obligations where applicable</li>
      </ul>

      <h2 className="text-xl font-semibold">Third-Party Services</h2>
      <p>
        We use the following third-party services, each of which has its own privacy policy
        governing data collection:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Google Analytics</strong> — Provides website traffic analysis. Google may collect
          data through cookies and similar technologies. You can opt out via the{" "}
          <a
            className="text-emerald-700 underline"
            href="https://tools.google.com/dlpage/gaoptout"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Opt-out Browser Add-on
          </a>
          .
        </li>
        <li>
          <strong>Vercel Analytics</strong> — Provides privacy-focused performance and usage
          analytics for our hosting platform.
        </li>
        <li>
          <strong>Amazon Associates Program</strong> — As an Amazon affiliate, when you click
          affiliate links on our site, Amazon may collect information about your visit through their
          own cookies and tracking technologies. This data is governed by Amazon&apos;s Privacy
          Notice.
        </li>
      </ul>
      <p>
        We do not sell, rent, or share your personal information with third parties for their
        marketing purposes.
      </p>

      <h2 className="text-xl font-semibold">Cookies Policy</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. We use cookies
        for analytics purposes and to support essential site functionality. You can control cookie
        behavior through your browser settings. Disabling cookies may affect certain features of the
        site, but core content will remain accessible.
      </p>
      <p>Types of cookies we use:</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Essential cookies</strong> — Required for basic site functionality such as page
          navigation and access to secure areas.
        </li>
        <li>
          <strong>Analytics cookies</strong> — Help us understand how visitors interact with the
          site by collecting anonymous usage data.
        </li>
        <li>
          <strong>Third-party cookies</strong> — Set by services like Google Analytics and Amazon
          when you interact with affiliate links or analytics scripts.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Access</strong> — Request a copy of any personal data we hold about you.
        </li>
        <li>
          <strong>Deletion</strong> — Request that we delete any personal data associated with you.
        </li>
        <li>
          <strong>Opt out</strong> — Disable cookies through your browser settings or use opt-out
          tools provided by our analytics services.
        </li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>{" "}
        with the subject line &quot;Privacy Request.&quot;
      </p>

      <h2 className="text-xl font-semibold">Children&apos;s Privacy</h2>
      <p>
        Vertical Mouse Guide is not directed at children under the age of 13. We do not knowingly
        collect personal information from children. If you believe a child has provided us with
        personal data, please contact us and we will take steps to remove that information promptly.
      </p>

      <h2 className="text-xl font-semibold">Data Retention</h2>
      <p>
        Analytics data is retained according to the default retention periods of our third-party
        analytics providers (typically 14 to 26 months). Any personal data provided voluntarily via
        email is retained only as long as necessary to respond to your inquiry and is deleted
        thereafter unless a longer retention period is required by law.
      </p>

      <h2 className="text-xl font-semibold">International Users</h2>
      <p>
        Vertical Mouse Guide is operated from the United States. If you access the site from outside
        the United States, please be aware that your information may be transferred to, stored, and
        processed in the United States or other jurisdictions where our service providers operate.
        By using the site, you consent to this transfer of information.
      </p>

      <h2 className="text-xl font-semibold">Data Security</h2>
      <p>
        We use commercially reasonable technical and organizational safeguards to protect data
        processed through our website. These safeguards include access controls, routine software
        updates, secure hosting infrastructure, and limited administrative access to analytics and
        operational tools. No website or internet transmission is completely secure, and we cannot
        guarantee absolute security. However, we take privacy and data protection seriously and
        review our security posture regularly as part of ongoing site maintenance.
      </p>
      <p>
        If we become aware of a data-security issue that materially affects visitor information under
        our control, we will investigate promptly and, where required by law, provide notice through
        appropriate channels.
      </p>

      <h2 className="text-xl font-semibold">Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we make changes, we will update
        the &quot;Last updated&quot; date at the top of this page. We encourage you to review this
        policy periodically. Continued use of the site after changes are posted constitutes
        acceptance of the updated policy.
      </p>

      <h2 className="text-xl font-semibold">Contact Us</h2>
      <p>
        If you have questions or concerns about this Privacy Policy, contact us at{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>
        .
      </p>
    </div>
  );
}
