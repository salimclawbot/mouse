"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-teal-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="text-xl font-bold text-teal-800">Vertical Mouse Guide</Link>
        <nav aria-label="Primary navigation" className="flex w-full gap-5 overflow-x-auto whitespace-nowrap pb-1 text-sm font-medium text-slate-700 sm:w-auto sm:pb-0">
          <Link href="/" className="hover:text-teal-700">Home</Link>
          <Link href="/guides" className="hover:text-teal-700">All Guides</Link>
          <Link href="/kensington-pro-fit-ergo-review-2026" className="hover:text-teal-700">Kensington Review</Link>
          <Link href="/can-vertical-mouse-cure-rsi" className="hover:text-teal-700">RSI Guide</Link>
          <Link href="/about" className="hover:text-teal-700">About</Link>
        </nav>
      </div>
    </header>
  );
}
