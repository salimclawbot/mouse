import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { guides } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.description };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const isPremiumDemo = slug === "best-vertical-mouse-small-hands-carpal-tunnel";

  return (
    <article className="space-y-10 leading-8 text-slate-800">
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200">
        <Image src={guide.heroImage} alt={guide.title} width={1600} height={900} className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <header className="space-y-3">
        <Badge variant="secondary" className="capitalize">{guide.intent}</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{guide.title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">{guide.description}</p>
        <p className="text-xs uppercase text-slate-500">Updated {guide.updated}</p>
      </header>

      <nav className="sticky top-16 z-30 rounded-xl border border-slate-200 bg-white/90 p-3 backdrop-blur">
        <ul className="flex flex-wrap gap-2 text-sm">
          <li><a href="#quick" className="rounded-md px-3 py-1 hover:bg-slate-100">Quick Picks</a></li>
          <li><a href="#comparison" className="rounded-md px-3 py-1 hover:bg-slate-100">Comparison</a></li>
          {isPremiumDemo && <li><a href="#faq" className="rounded-md px-3 py-1 hover:bg-slate-100">FAQ</a></li>}
          {isPremiumDemo && <li><a href="#verdict" className="rounded-md px-3 py-1 hover:bg-slate-100">Verdict</a></li>}
        </ul>
      </nav>

      <section id="quick" className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-6 transition hover:shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">Quick Answer (TL;DR)</h2>
        {guide.body.map((p, i) => (
          <p key={i} className="max-w-4xl text-slate-700">{p}</p>
        ))}
      </section>

      {isPremiumDemo && (
        <>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Why Most "Ergonomic" Mice Fail Small Hands</h2>
            <p className="max-w-4xl">
              Most models are tuned for average hand sizes. For smaller hands, this creates <strong>overreach</strong> on main clicks,
              awkward thumb extension, and unstable grip pressure. Over a full workday, those small compromises can increase fatigue.
            </p>
            <p className="max-w-4xl">
              Our ranking framework prioritizes <span className="underline">fit-first ergonomics</span>: shell width, click force,
              thumb access, and long-session comfort consistency.
            </p>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6 transition hover:shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">How We Scored Each Mouse</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li><strong>Fit score (35%)</strong> — grip width, palm support, button reach</li>
              <li><strong>Comfort score (25%)</strong> — click effort, wrist neutrality, fatigue trend</li>
              <li><strong>Control score (20%)</strong> — tracking stability, micro-adjustment confidence</li>
              <li><strong>Value score (20%)</strong> — price-to-comfort ratio, warranty, return policy</li>
            </ul>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">At-a-Glance Score Chart</h2>
            <p className="text-slate-600">Visual scoring snapshot for top picks (fit-weighted model).</p>
            <div className="space-y-3">
              {[
                { name: "Logitech Lift", score: 92 },
                { name: "Anker Ergonomic Vertical", score: 81 },
                { name: "Lekvey Rechargeable", score: 78 },
              ].map((item) => (
                <div key={item.name}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-slate-500">{item.score}/100</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" style={{ width: `${item.score}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">5-Step Fit Framework (Infographic Style)</h2>
            <div className="grid gap-3 md:grid-cols-5">
              {[
                ["1", "Measure", "Check hand length from wrist crease to fingertip"],
                ["2", "Filter", "Remove oversized shells and stiff-click models"],
                ["3", "Test", "Run 3 focused sessions with lower pointer speed"],
                ["4", "Compare", "Track comfort, fatigue, and control by day"],
                ["5", "Lock-In", "Keep best comfort model and return others"],
              ].map(([num, title, text]) => (
                <div key={num} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold text-emerald-700">STEP {num}</p>
                  <p className="mt-1 font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Best Pick by Use Case</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                <p className="text-sm text-slate-500">Best Overall</p>
                <p className="font-semibold">Logitech Lift</p>
                <p className="text-sm text-slate-600">Best blend of compact fit, switch feel, and reliability.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                <p className="text-sm text-slate-500">Best Budget</p>
                <p className="font-semibold">Anker Ergonomic Vertical</p>
                <p className="text-sm text-slate-600">Low-cost way to test vertical ergonomics first.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                <p className="text-sm text-slate-500">Best Rechargeable Value</p>
                <p className="font-semibold">Lekvey Rechargeable</p>
                <p className="text-sm text-slate-600">Decent comfort + USB charging at entry-tier pricing.</p>
              </div>
            </div>
          </section>
        </>
      )}

      <section id="comparison" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Comparison Table</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <Table>
            <TableHeader className="sticky top-0 bg-slate-50">
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Best For</TableHead>
                <TableHead>Price Band</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {guide.products.map((p) => (
                <TableRow key={p.name} className="transition hover:bg-emerald-50/50">
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell>{p.bestFor}</TableCell>
                  <TableCell>{p.price}</TableCell>
                  <TableCell>{p.rating}</TableCell>
                  <TableCell>
                    <Button asChild size="sm" className="transition hover:scale-[1.02]">
                      <Link href={p.amazonUrl} target="_blank">Check on Amazon</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {isPremiumDemo && (
        <>
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Who Should Buy (and Who Should Skip)</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <h3 className="font-semibold">Buy if you:</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Have small hands and feel cramped on larger ergonomic mice</li>
                  <li>Work 5+ hours/day on a mouse-heavy workflow</li>
                  <li>Need lower click force and better thumb reach</li>
                </ul>
              </div>
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
                <h3 className="font-semibold">Skip if you:</h3>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  <li>Need ultra-fast competitive gaming precision only</li>
                  <li>Prefer very flat mice and zero adaptation period</li>
                  <li>Use fingertip grip with high sensitivity exclusively</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="faq" className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">FAQ (Extended)</h2>
            <div className="space-y-3 text-slate-700">
              <p><strong>Can a vertical mouse cure carpal tunnel?</strong><br />No. It may reduce aggravating posture/load but is not a cure.</p>
              <p><strong>How long does adaptation take?</strong><br />Usually 3–10 days for office users.</p>
              <p><strong>What matters more than DPI?</strong><br />Fit, click force, and stability under normal work speed.</p>
              <p><strong>Should I use Bluetooth or dongle?</strong><br />Dongle is often more stable; Bluetooth is cleaner for travel.</p>
              <p><strong>What if two mice feel similar?</strong><br />Keep the one with lower finger fatigue by day 5.</p>
              <p><strong>What hand size is considered small?</strong><br />Typically under ~17cm from wrist crease to middle fingertip.</p>
              <p><strong>What vertical angle should I start with?</strong><br />Most users do best around 57° as a beginner baseline.</p>
              <p><strong>Are trackballs better for wrist pain?</strong><br />For some users yes, but vertical mice are often easier to adapt to first.</p>
              <p><strong>Can I use a vertical mouse for gaming?</strong><br />Casual gaming yes; competitive FPS usually favors traditional shapes.</p>
              <p><strong>Should I add a wrist rest?</strong><br />For mouse use, light forearm support often helps more than pressing on a wrist rest.</p>
              <p><strong>How long before I notice comfort improvement?</strong><br />Many users report improvement within 1–3 weeks with proper setup habits.</p>
              <p><strong>What’s the #1 buying tip?</strong><br />Measure your hand first. Correct size beats extra features every time.</p>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">What Real Users Commonly Report</h2>
            <p className="text-slate-700">Across Reddit and forum threads, repeated patterns are: oversized mice causing thumb strain, stiff clicks worsening flare-ups, and major comfort gains after switching to smaller shells.</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li><Link className="underline" href="https://www.reddit.com/r/UXDesign/comments/wgzaj9/vertical_mouse_for_small_hand/" target="_blank">Reddit UXDesign: small-hand sizing pain point</Link></li>
              <li><Link className="underline" href="https://www.reddit.com/r/ehlersdanlos/comments/16y57sl/anyone_have_a_rec_for_an_ergonomic_mouse_for/" target="_blank">Reddit EDS: larger mice requiring harder grip</Link></li>
              <li><Link className="underline" href="https://www.reddit.com/r/Revit/comments/vlgf4v/mice_options_and_alternatives_to_reduce_carpal/" target="_blank">Reddit Revit: carpal tunnel risk and alternatives</Link></li>
              <li><Link className="underline" href="https://forums.tomshardware.com/threads/opinions-on-vertical-mice.3723455/" target="_blank">Tom's Hardware forum: comfort is subjective, test-first advice</Link></li>
            </ul>
          </section>

          <section id="verdict" className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Final Verdict</h2>
            <p className="mt-2 max-w-4xl text-slate-700">For small hands and carpal tunnel-sensitive workflows, prioritize size fit and click effort first. Feature count is secondary. A correctly-sized vertical mouse with lower force clicks will usually outperform a premium oversized model in real-world comfort.</p>
          </section>
        </>
      )}

      <p className="text-xs text-slate-500">
        Note: Amazon links may be affiliate links and can generate commissions at no extra cost to you.
      </p>
    </article>
  );
}
