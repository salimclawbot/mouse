import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import { site } from "@/lib/content";
import ReadingProgress from "@/components/reading-progress";

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
const bingSiteVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.verticalmouseguide.com"),
  title: {
    default: `${site.name} — Ergonomic Mouse Guides`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.name} — Ergonomic Mouse Guides`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} cover image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Ergonomic Mouse Guides`,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: googleSiteVerification,
    other: {
      "msvalidate.01": bingSiteVerification || "",
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@verticalmouseguide.com",
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/guides`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className="text-slate-900 antialiased">
        <ReadingProgress />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HQ8HYJN2FS" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HQ8HYJN2FS');`}
        </Script>
        <Script id="organization-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <Script id="website-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-emerald-700">
              {site.name}
            </Link>
            <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
              <Link href="/guides" className="hover:text-emerald-700">Guides</Link>
              <Link href="/about" className="hover:text-emerald-700">About</Link>
              <Link href="/contact" className="hover:text-emerald-700">Contact</Link>
              <Link href="/editorial-policy" className="hover:text-emerald-700">Editorial</Link>
              <Link href="/affiliate-disclosure" className="hover:text-emerald-700">Disclosure</Link>
              <Link href="/privacy-policy" className="hover:text-emerald-700">Privacy</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10 animate-float-up">{children}</main>
        <footer className="mt-12 border-t border-slate-200 bg-white/80">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500">
            <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2">
              <Link href="/about" className="hover:text-emerald-700">About</Link>
              <Link href="/contact" className="hover:text-emerald-700">Contact</Link>
              <Link href="/editorial-policy" className="hover:text-emerald-700">Editorial Policy</Link>
              <Link href="/corrections-policy" className="hover:text-emerald-700">Corrections Policy</Link>
              <Link href="/affiliate-disclosure" className="hover:text-emerald-700">Affiliate Disclosure</Link>
              <Link href="/privacy-policy" className="hover:text-emerald-700">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-emerald-700">Terms of Service</Link>
              <Link href="/llms.txt" className="hover:text-emerald-700">llms.txt</Link>
            </div>
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <p>© 2026 {site.name}. Evidence-led ergonomic buying guides.</p>
              <p>Built for comfort, clarity, and conversion.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
