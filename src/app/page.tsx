import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  HeartPulse,
  MousePointer2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Hand,
} from "lucide-react";
import { guides } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const personas = [
  {
    title: "Desk Athletes",
    blurb: "8+ hour makers and operators who need low-fatigue comfort all week.",
    href: "/guides/best-vertical-mouse-small-hands-carpal-tunnel",
    icon: HeartPulse,
  },
  {
    title: "Precision Creators",
    blurb: "Designers, editors, and builders balancing pixel-level control with joint care.",
    href: "/guides/left-handed-vertical-mouse-wireless-rechargeable",
    icon: MousePointer2,
  },
  {
    title: "Mac Power Users",
    blurb: "MacBook and multi-device users who need native Bluetooth and smooth macOS controls.",
    href: "/guides/best-vertical-mouse-for-mac",
    icon: ShieldCheck,
  },
  {
    title: "Budget Smart Upgraders",
    blurb: "First ergonomic switchers who want tangible relief without overspending.",
    href: "/guides/quiet-click-vertical-mouse-office",
    icon: TrendingUp,
  },
];

const proofPoints = [
  "Practical, buyer-intent comparisons",
  "Comfort-first filtering by hand strain signals",
  "Fast picks sorted by workflow and budget",
];

const comparePillars = [
  {
    title: "Comfort Fit",
    copy: "Grip angle, hand size fit, and wrist posture impact.",
    icon: Hand,
  },
  {
    title: "Workflow Speed",
    copy: "Buttons, scroll behavior, and software quality in daily use.",
    icon: Clock3,
  },
  {
    title: "Reliability",
    copy: "Battery, build quality, warranty confidence, and support.",
    icon: ShieldCheck,
  },
];

export default function Home() {
  const featuredSlugs = [
    "best-wireless-vertical-mouse",
    "best-vertical-mouse-large-hands",
    "best-vertical-mouse-for-graphic-designers",
  ];
  const featured = featuredSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));

  return (
    <div className="space-y-14 pb-4">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-8 shadow-sm md:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-emerald-200/40 blur-2xl" />
        <div className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-cyan-200/40 blur-2xl" />

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">Pain-aware productivity</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Best Vertical Ergonomic Mice (2026): Expert-Tested Picks for Wrist Pain
            </h1>
            <p className="max-w-2xl text-lg text-slate-700">
              Vertical Mouse Guide turns mouse research into a fast, confidence-building flow: understand your pain points, compare meaningful specs, then pick what fits your day.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
                <Link href="/guides">
                  Browse All Guides <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-300 bg-white/80">
                <Link href="/about">How Vertical Mouse Guide compares gear</Link>
              </Button>
            </div>

            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2" aria-label="Vertical Mouse Guide value highlights">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-2xl border border-emerald-200/70 bg-white/90 p-5 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">Quick pick path</p>
            <ol className="mt-3 space-y-3 text-sm text-slate-700">
              <li className="rounded-lg bg-emerald-50 p-3">
                <span className="font-semibold text-slate-900">1. Identify your strain pattern</span>
                <p className="mt-1">Wrist pain, finger fatigue, or shoulder tension?</p>
              </li>
              <li className="rounded-lg bg-cyan-50 p-3">
                <span className="font-semibold text-slate-900">2. Match a guide to your workflow</span>
                <p className="mt-1">Coding, design, office ops, or gaming crossover.</p>
              </li>
              <li className="rounded-lg bg-slate-50 p-3">
                <span className="font-semibold text-slate-900">3. Compare shortlist models</span>
                <p className="mt-1">Use our comfort + value lens and buy with confidence.</p>
              </li>
            </ol>
          </aside>
        </div>
      </section>

      <section aria-labelledby="persona-heading" className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-600" />
          <h2 id="persona-heading" className="text-2xl font-bold text-slate-900">
            Start with your vibe
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {personas.map((persona) => {
            const Icon = persona.icon;
            return (
              <Link
                key={persona.title}
                href={persona.href}
                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <Card className="group h-full border-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
                  <CardHeader className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg text-slate-900">{persona.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-slate-600">{persona.blurb}</p>
                    <span className="inline-flex items-center text-sm font-medium text-emerald-700 underline-offset-4 group-hover:underline">
                      See best matches <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-slate-900 px-6 py-5 text-slate-100 md:px-8" aria-label="Social proof and trust markers">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-2xl font-bold">10-min</p>
            <p className="text-sm text-slate-300">Average time to shortlist your top 3 mice</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Comfort-first</p>
            <p className="text-sm text-slate-300">Scoring model rooted in ergonomics, not hype specs</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Buyer-intent</p>
            <p className="text-sm text-slate-300">Guides optimized for real purchase decisions</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-guides" className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-600" />
          <h2 id="featured-guides" className="text-2xl font-bold text-slate-900">
            Featured buying guides
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <Card className="group h-full overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative h-44 w-full">
                  <Image
                    src={g.heroImage}
                    alt={g.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <Badge variant="secondary" className="w-fit capitalize">
                    {g.intent}
                  </Badge>
                  <CardTitle className="text-lg leading-snug text-slate-900">{g.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{g.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="compare-heading" className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 md:p-8">
        <h2 id="compare-heading" className="text-2xl font-bold text-slate-900">
          How Vertical Mouse Guide compares ergonomic mice
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {comparePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="rounded-xl border border-white/80 bg-white p-4">
                <Icon className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                <h3 className="mt-3 font-semibold text-slate-900">{pillar.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{pillar.copy}</p>
              </article>
            );
          })}
        </div>
        <div>
          <Button asChild className="bg-emerald-700 text-white hover:bg-emerald-800">
            <Link href="/guides">
              Explore comparison-ready guides <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: '{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the best vertical mouse in 2026?","acceptedAnswer":{"@type":"Answer","text":"The Logitech MX Vertical is our top pick for 2026, combining excellent ergonomics, wireless connectivity, and MagSpeed scrolling."}},{"@type":"Question","name":"Are vertical mice better for wrist health?","acceptedAnswer":{"@type":"Answer","text":"Yes — vertical mice reduce forearm muscle activity by up to 10% vs standard mice, significantly lowering risk of RSI and carpal tunnel syndrome with prolonged use."}},{"@type":"Question","name":"What angle is a vertical mouse held at?","acceptedAnswer":{"@type":"Answer","text":"Vertical mice orient your hand at 57-90 degrees (handshake position), keeping the forearm neutral and reducing the pronation that causes wrist strain."}}]}' }} />


    </div>
  );
}
