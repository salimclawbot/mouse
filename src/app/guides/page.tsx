import Link from "next/link";
import { guides } from "@/lib/content";

export const metadata = {
  title: "All Guides",
};

export default function GuidesPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">All ergonomic buying guides</h1>
      <div className="space-y-4">
        {guides.map((g) => (
          <article key={g.slug} className="rounded-lg border border-slate-200 p-4">
            <p className="text-xs uppercase text-slate-500">{g.intent}</p>
            <h2 className="text-xl font-semibold">
              <Link href={`/guides/${g.slug}`}>{g.title}</Link>
            </h2>
            <p className="mt-1 text-slate-600">{g.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
