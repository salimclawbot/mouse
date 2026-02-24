import Link from "next/link";
import { guides, site } from "@/lib/content";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
          Pain-aware buying guides
        </p>
        <h1 className="text-4xl font-bold tracking-tight">
          {site.name}: Choose the right ergonomic mouse faster
        </h1>
        <p className="max-w-3xl text-slate-600">
          We publish practical, buyer-intent guides for vertical mouse shoppers.
          No fluff, no generic listicles—just fit, comfort, and value comparisons.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold">Featured launch guides</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((g) => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="rounded-xl border border-slate-200 p-5 transition hover:border-emerald-400"
            >
              <p className="mb-1 text-xs uppercase text-slate-500">{g.intent}</p>
              <h3 className="font-semibold">{g.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{g.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
