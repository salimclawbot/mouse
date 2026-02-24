import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { site } from "@/lib/content";
import ReadingProgress from "@/components/reading-progress";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Ergonomic Mouse Guides`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="text-slate-900 antialiased">
        <ReadingProgress />
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/85 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-emerald-700">
              {site.name}
            </Link>
            <nav className="flex gap-4 text-sm font-medium text-slate-700">
              <Link href="/guides" className="hover:text-emerald-700">Guides</Link>
              <Link href="/about" className="hover:text-emerald-700">About</Link>
              <Link href="/affiliate-disclosure" className="hover:text-emerald-700">Disclosure</Link>
              <Link href="/privacy-policy" className="hover:text-emerald-700">Privacy</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10 animate-float-up">{children}</main>
        <footer className="mt-12 border-t border-slate-200 bg-white/80">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-4 py-6 text-sm text-slate-500 md:flex-row">
            <p>© 2026 {site.name}. Evidence-led ergonomic buying guides.</p>
            <p>Built for comfort, clarity, and conversion.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
