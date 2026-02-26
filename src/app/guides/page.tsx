import Link from "next/link";
import { guides } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = { title: "All Guides" };

export default function GuidesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">All ErgoMint Guides</h1>
        <p className="text-slate-600">3 high-intent buying guides, deeply updated and conversion-focused.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map((g) => (
          <Card key={g.slug} className="overflow-hidden">
            <div className="h-36 w-full bg-cover bg-center" style={{ backgroundImage: `url(${g.heroImage})` }} />
            <CardHeader>
              <Badge variant="secondary" className="w-fit capitalize">{g.intent}</Badge>
              <CardTitle className="text-xl">
                <Link href={`/guides/${g.slug}`}>{g.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{g.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
