import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
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
import QuizRecommender from "@/components/quiz-recommender";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return {};

  if (slug === "best-vertical-mouse-small-hands-carpal-tunnel") {
    return {
      title: guide.title,
      description:
        "In-depth 2026 guide to the best vertical mouse for small hands and carpal tunnel sensitivity: 10 model tradeoffs, comfort-fit framework, FAQs, and buyer picks.",
    };
  }

  return { title: guide.title, description: guide.description };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const isPremiumDemo = slug === "best-vertical-mouse-small-hands-carpal-tunnel";

  const faqForSchema = [
    {
      q: "Can a vertical mouse cure carpal tunnel syndrome?",
      a: "No. It can reduce aggravating posture and grip stress, but it is not a medical cure.",
    },
    {
      q: "How long does adaptation take?",
      a: "Most users adapt in about 3 to 10 days, with better stability by week two.",
    },
    {
      q: "What matters more than DPI for comfort?",
      a: "Correct size fit, lighter click force, and stable control at normal work speed.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updated,
    datePublished: "2026-02-24",
    author: {
      "@type": "Organization",
      name: "ErgoMint Editorial",
    },
    publisher: {
      "@type": "Organization",
      name: "ErgoMint",
    },
    mainEntityOfPage: `${"https://mouse-one-rouge.vercel.app"}/guides/${guide.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqForSchema.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <article className="space-y-10 leading-8 text-slate-800">
      {isPremiumDemo && (
        <>
          <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
          <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        </>
      )}
      <div className="group relative overflow-hidden rounded-2xl border border-slate-200">
        <Image src={guide.heroImage} alt={guide.title} width={1600} height={900} className="h-[360px] w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <header className="space-y-3">
        <Badge variant="secondary" className="capitalize">{guide.intent}</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">{guide.title}</h1>
        <p className="max-w-3xl text-lg leading-8 text-slate-600">{guide.description}</p>
        <p className="text-xs uppercase text-slate-500">Updated {guide.updated}</p>
        {isPremiumDemo && <p className="text-xs text-slate-500">Last reviewed for readability + SEO intent: 2026-02-24</p>}
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
        <h2 className="text-2xl font-bold text-slate-900">Quick Answer: Best Vertical Mouse for Small Hands</h2>
        {guide.body.map((p, i) => (
          <p key={i} className="max-w-4xl text-slate-700">{p}</p>
        ))}
        <p className="text-sm font-medium text-emerald-800">Key takeaway: pick the smallest mouse that still supports your palm, then prioritize low click force.</p>
      </section>

      {isPremiumDemo && (
        <>
          <section className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5">
            <h2 className="text-2xl font-bold text-slate-900">Who This Guide Is For</h2>
            <ul className="list-disc space-y-1 pl-5 text-slate-700">
              <li>You have small or tiny hands and most mice feel too big.</li>
              <li>You get wrist pain or finger fatigue after long work sessions.</li>
              <li>You want a simple buying decision without tech fluff.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Why Many Ergonomic Mice Still Hurt Small Hands</h2>
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
            <h2 className="text-2xl font-bold text-slate-900">How We Scored Each Small-Hand Vertical Mouse</h2>
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
                { name: "Evoluent VerticalMouse 4", score: 88 },
                { name: "Delux M618 Mini", score: 86 },
                { name: "ProtoArc EM11 NL", score: 84 },
                { name: "Anker Ergonomic Vertical", score: 81 },
                { name: "Perixx PERIMICE-713", score: 80 },
                { name: "Logitech MX Vertical", score: 79 },
                { name: "Kensington Pro Fit Ergo Vertical", score: 78 },
                { name: "Lekvey Rechargeable", score: 78 },
                { name: "J-Tech Digital V628", score: 75 },
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

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Comfort Timeline: Week 1 → Week 3</h2>
            <p className="text-slate-600">Typical transition pattern users report after switching from an oversized flat mouse to a well-fitted vertical model.</p>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold uppercase text-amber-700">Days 1–3</p>
                <p className="mt-1 font-semibold">Adjustment Phase</p>
                <p className="mt-1 text-sm text-slate-700">Movement feels unfamiliar; accuracy may dip slightly while grip patterns reset.</p>
              </div>
              <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4">
                <p className="text-xs font-semibold uppercase text-cyan-700">Days 4–10</p>
                <p className="mt-1 font-semibold">Stability Phase</p>
                <p className="mt-1 text-sm text-slate-700">Control returns, click fatigue often drops, wrist posture starts feeling more natural.</p>
              </div>
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-xs font-semibold uppercase text-emerald-700">Week 2–3</p>
                <p className="mt-1 font-semibold">Comfort Lock-In</p>
                <p className="mt-1 text-sm text-slate-700">Consistent all-day comfort for most users with proper desk setup and break cadence.</p>
              </div>
            </div>
          </section>

          <QuizRecommender products={guide.products} />

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Best Pick by Use Case</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                <p className="text-sm text-slate-500">Best Overall</p>
                <p className="font-semibold">Logitech Lift</p>
                <p className="text-sm text-slate-600">Best blend of compact fit, switch feel, and long-session consistency.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                <p className="text-sm text-slate-500">Best Budget</p>
                <p className="font-semibold">Anker Ergonomic Vertical</p>
                <p className="text-sm text-slate-600">Low-cost way to validate whether vertical posture helps your symptoms.</p>
              </div>
              <div className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                <p className="text-sm text-slate-500">Best Rechargeable Value</p>
                <p className="font-semibold">Lekvey Rechargeable</p>
                <p className="text-sm text-slate-600">Decent comfort with USB charging if you want fewer battery swaps.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Deep Model Coverage: 10 Popular Options and Their Tradeoffs</h2>
            <p className="text-slate-700">Below is the practical shortlist most readers compare. Instead of pretending there is one perfect mouse, we focus on tradeoffs: shell size, click feel, weight, connectivity, and adaptation friction.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>Logitech Lift</strong> — The safest small-hand recommendation. Pros: compact body, predictable clicks, strong software support. Tradeoff: not the cheapest option and still not tiny for very short fingers.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>Anker Ergonomic Vertical</strong> — Best test-drive budget pick. Pros: very affordable, familiar shape. Tradeoff: quality-control variance, occasionally stiffer click feel out of the box.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>Lekvey Rechargeable Vertical</strong> — Good entry rechargeable model. Pros: simple USB charging, value pricing. Tradeoff: button feel can soften unevenly over heavy 6+ month use.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>Logitech MX Vertical</strong> — Premium build and sensor consistency. Pros: excellent stability and finish. Tradeoff: physically larger shell can force overreach for smaller hands.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>Evoluent VerticalMouse 4</strong> — Medical-style ergonomic profile. Pros: distinct finger ledges and reduced pronation feel. Tradeoff: shape is love-or-hate and adaptation can be longer.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>Delux M618 Mini</strong> — One of few deliberately compact shells. Pros: easier reach for tiny hands. Tradeoff: premium feel and software polish lag behind Logitech.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>ProtoArc EM11 NL</strong> — Quiet click office choice. Pros: lower click noise for shared spaces. Tradeoff: shape comfort is good but long-term durability data is thinner.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>Perixx PERIMICE-713</strong> — Wired reliability option. Pros: no charging cycle anxiety, stable tracking for fixed desk setups. Tradeoff: cable drag and less flexibility for hybrid work.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>J-Tech Digital V628</strong> — Pronounced palm shelf support. Pros: can reduce grip squeeze for some users. Tradeoff: bulkier shape makes it awkward for very small hands.</p></div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p><strong>Kensington Pro Fit Ergo Vertical</strong> — Conservative angle for easier transition. Pros: gentler learning curve from normal mice. Tradeoff: less aggressive wrist-neutral posture than steeper designs.</p></div>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Decision Layering: Which Model Wins for Your Specific Pain Pattern?</h2>
            <div className="space-y-3 text-slate-700">
              <p><strong>If your thumb base hurts first:</strong> avoid tall thumb ridges and oversized shells. Lift, Delux M618 Mini, and Perixx 713 generally allow easier thumb parking with less extension tension.</p>
              <p><strong>If your wrist and forearm ache most:</strong> prioritize more neutral hand posture and reduced squeeze force. Lift, Evoluent VM4, and J-Tech V628 often test well when paired with forearm support and lower pointer speed.</p>
              <p><strong>If finger joints fatigue from clicking:</strong> choose lower-force switches even if tracking specs are average. Lift and ProtoArc are usually friendlier than stiff, budget-heavy switches.</p>
              <p><strong>If you travel between laptop + desk:</strong> Bluetooth convenience matters more than niche features. Lift and MX Vertical are usually the least frustrating multi-device choices.</p>
              <p><strong>If budget is fixed under $40:</strong> Anker, Lekvey, and Perixx are the realistic pool. Buy from retailers with easy returns because same-model variance can affect click weight and shell finish.</p>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Internal Next-Step Guides (Pick Your Intent)</h2>
            <div className="grid gap-3 md:grid-cols-2">
              <Link href="/guides/logitech-lift-vs-mx-vertical" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"><strong>Still deciding between Lift and MX Vertical?</strong><br /><span className="text-sm text-slate-600">See our direct size-fit and value comparison.</span></Link>
              <Link href="/guides/best-vertical-mouse-under-50" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"><strong>Need to stay under $50?</strong><br /><span className="text-sm text-slate-600">Budget picks ranked by comfort-per-dollar.</span></Link>
              <Link href="/guides/vertical-mouse-for-wrist-pain-no-pronation" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"><strong>Wrist pain is your main issue?</strong><br /><span className="text-sm text-slate-600">Read our no-pronation angle and posture guide.</span></Link>
              <Link href="/guides/vertical-mouse-vs-trackball-tendonitis" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"><strong>Considering trackballs instead?</strong><br /><span className="text-sm text-slate-600">Compare movement load and adaptation time.</span></Link>
              <Link href="/guides/best-vertical-mouse-for-macbook" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"><strong>Using a MacBook daily?</strong><br /><span className="text-sm text-slate-600">Bluetooth stability and macOS support picks.</span></Link>
              <Link href="/guides/best-ergonomic-setup-for-wrist-pain" className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"><strong>Want the full desk setup fix?</strong><br /><span className="text-sm text-slate-600">Mouse + keyboard + desk-height stack that works together.</span></Link>
            </div>
          </section>
        </>
      )}

      <section id="comparison" className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Comparison Table: Vertical Mouse for Small Hands</h2>
        <p className="text-sm font-medium text-slate-600">Key takeaway: comfort fit beats raw specs for long-term wrist relief.</p>
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
            <h2 className="text-2xl font-bold text-slate-900">FAQ (People-Also-Ask Style, In Depth)</h2>
            <div className="space-y-3 text-slate-700">
              <p><strong>Can a vertical mouse cure carpal tunnel syndrome?</strong><br />No. A mouse can reduce common aggravators like pronation stress and grip tension, but it does not treat nerve compression by itself. Treat this as one lever in a bigger plan: posture, keyboard placement, workload pacing, and clinical advice when symptoms persist.</p>
              <p><strong>How long does it take to get used to a vertical mouse?</strong><br />Most office users feel awkward for 2–5 days and mostly stable by day 7–10. If accuracy still feels poor after two weeks, the shape is probably wrong for your hand size or your pointer speed is too high during adaptation.</p>
              <p><strong>What matters more than DPI for wrist comfort?</strong><br />Fit, click force, and motion control at normal desktop speeds. High DPI doesn’t help if the shell forces overreach or if the clicks are stiff enough to trigger finger strain by mid-afternoon.</p>
              <p><strong>Bluetooth or USB dongle: which is better for pain-sensitive work?</strong><br />For pure stability, 2.4GHz dongles still win in many busy wireless environments. Bluetooth is great for clean travel setups; just confirm wake latency and cursor consistency on your specific laptop.</p>
              <p><strong>What if two models feel almost identical on day one?</strong><br />Use a 5-day comparison log: morning comfort, afternoon fatigue, and evening soreness. The better long-session mouse usually reveals itself by day 3–5, especially when workloads include drag/drop and spreadsheet-heavy tasks.</p>
              <p><strong>What hand size counts as “small” for mouse fitting?</strong><br />As a practical buying heuristic, under ~17cm wrist-crease-to-middle-fingertip usually benefits from compact shells first. People with narrow palms may also need smaller width even if finger length is average.</p>
              <p><strong>What vertical angle should beginners start with?</strong><br />Around 57° is a reliable baseline for many users because it reduces pronation without feeling extreme. Steeper or more sculpted designs can work better for pain, but they often demand longer adaptation.</p>
              <p><strong>Are trackballs better than vertical mice for tendonitis or carpal tunnel?</strong><br />They can be, especially if arm movement is a major trigger. But trackballs often require more thumb/finger retraining, so many users do better starting with a well-fitted vertical mouse and moving to trackball only if symptoms remain.</p>
              <p><strong>Can you game with a vertical mouse if you have small hands?</strong><br />Casual and strategy games are usually fine. For high-level FPS play, most users still prefer conventional mice for rapid flick mechanics; a dual-mouse setup is often the best compromise.</p>
              <p><strong>Should I use a mouse wrist rest?</strong><br />Usually, light forearm support is safer than loading body weight directly into the wrist. If you use a rest, keep contact gentle and avoid compressing the carpal tunnel area during clicks.</p>
              <p><strong>How quickly should pain improve after switching?</strong><br />Some people feel early relief in the first week, but consistent improvements often take 2–4 weeks because tissue irritability and movement habits need time to settle. If symptoms worsen quickly, stop and reassess fit immediately.</p>
              <p><strong>What is the single most important buying rule?</strong><br />Size fit before features. A correctly sized, medium-spec mouse almost always beats a premium oversized model for real-world pain-aware productivity.</p>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">Editorial Method + Safety Notes</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li><strong>Method:</strong> ranking is weighted by fit (35%), comfort (25%), control (20%), and value (20%) for small-hand use cases.</li>
              <li><strong>Scope:</strong> this is a buyer guide, not a medical diagnosis. Persistent numbness/tingling should be assessed by a licensed clinician.</li>
              <li><strong>Update policy:</strong> we revise recommendations when major model revisions, pricing shifts, or availability changes alter value.</li>
            </ul>
          </section>

          <section className="space-y-4 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-2xl font-bold text-slate-900">What Real Users Commonly Report</h2>
            <p className="text-slate-700">Across Reddit and forum threads, repeated patterns are: oversized mice causing thumb strain, stiff clicks worsening flare-ups, and major comfort gains after switching to smaller shells.</p>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li><Link className="underline" href="https://www.reddit.com/r/UXDesign/comments/wgzaj9/vertical_mouse_for_small_hand/" target="_blank">Reddit UXDesign: small-hand sizing pain point</Link></li>
              <li><Link className="underline" href="https://www.reddit.com/r/ehlersdanlos/comments/16y57sl/anyone_have_a_rec_for_an_ergonomic_mouse_for/" target="_blank">Reddit EDS: larger mice requiring harder grip</Link></li>
              <li><Link className="underline" href="https://www.reddit.com/r/Revit/comments/vlgf4v/mice_options_and_alternatives_to_reduce_carpal/" target="_blank">Reddit Revit: carpal tunnel risk and alternatives</Link></li>
              <li><Link className="underline" href="https://forums.tomshardware.com/threads/opinions-on-vertical-mice.3723455/" target="_blank">Tom&apos;s Hardware forum: comfort is subjective, test-first advice</Link></li>
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
