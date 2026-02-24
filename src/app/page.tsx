import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { guides } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const featured = guides.slice(0, 6);

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-8 shadow-sm">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-200/40 blur-2xl" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">Pain-aware productivity</Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Ergonomic mouse buying guides that actually help you choose faster
          </h1>
          <p className="text-lg text-slate-600">
            ErgoMint delivers practical comparisons, comfort-first picks, and buyer-intent pages built for real decision making.
          </p>
          <div className="flex gap-3">
            <Button asChild className="bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/guides">Browse All Guides <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">About ErgoMint</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-emerald-600" />
          <h2 className="text-2xl font-bold">Featured money pages</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((g) => (
            <Card key={g.slug} className="transition hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader>
                <Badge variant="secondary" className="w-fit capitalize">{g.intent}</Badge>
                <CardTitle className="text-lg leading-snug">
                  <Link href={`/guides/${g.slug}`}>{g.title}</Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{g.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
