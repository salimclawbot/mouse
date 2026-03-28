"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-teal-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-xl font-bold text-teal-800">Vertical Mouse Guide</Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <Link href="/kensington-pro-fit-ergo-review-2026" className="hover:text-teal-700">Kensington Review</Link>
          <Link href="/can-vertical-mouse-cure-rsi" className="hover:text-teal-700">RSI Guide</Link>
        </nav>
      </div>
    </header>
  );
}
