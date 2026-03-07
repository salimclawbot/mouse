import Link from "next/link";
import { guides } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "All Guides" };

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">All Vertical Mouse Guide Articles</h1>
        <p className="text-slate-600">High-intent buying guides, deeply updated and conversion-focused.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guides/${g.slug}`}
            className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <Card className="h-full overflow-hidden transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
              <div className="h-36 w-full bg-cover bg-center" style={{ backgroundImage: `url(${g.heroImage})` }} />
              <CardHeader>
                <Badge variant="secondary" className="w-fit capitalize">{g.intent}</Badge>
                <CardTitle className="text-xl">{g.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{g.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
