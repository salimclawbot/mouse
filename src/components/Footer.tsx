import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-teal-100 bg-teal-50/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 text-sm text-slate-700 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">Vertical Mouse Guide</p>
          <p className="mt-2">Expert vertical mouse reviews and ergonomic buying guides for wrist pain relief and RSI prevention.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Guides</p>
          <ul className="mt-2 space-y-1">
            <li><Link href="/kensington-pro-fit-ergo-review-2026" className="hover:text-teal-700">Kensington Pro Fit Ergo Review</Link></li>
            <li><Link href="/can-vertical-mouse-cure-rsi" className="hover:text-teal-700">Can a Vertical Mouse Cure RSI?</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Contact</p>
          <p className="mt-2">hello@verticalmouseguide.com</p>
        </div>
      </div>
      <div className="border-t border-teal-100 py-4 text-center text-xs text-slate-500">&copy; {new Date().getFullYear()} Vertical Mouse Guide</div>
    </footer>
  );
}
