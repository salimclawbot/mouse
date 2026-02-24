import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Ergonomic Mouse Guides`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <header className="border-b border-slate-200">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-lg font-bold">
              {site.name}
            </Link>
            <nav className="flex gap-4 text-sm">
              <Link href="/guides">Guides</Link>
              <Link href="/about">About</Link>
              <Link href="/affiliate-disclosure">Disclosure</Link>
              <Link href="/privacy-policy">Privacy</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
