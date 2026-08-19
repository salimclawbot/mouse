import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "All Guides",
  description: "Vertical Mouse Guide helps you find practical guides and product recommendations for confident buying decisions.",
  alternates: { canonical: "https://verticalmouseguide.com/guides" },
  openGraph: {
    title: "All Guides",
    description: "Vertical Mouse Guide helps you find practical guides and product recommendations for confident buying decisions.",
    url: "https://verticalmouseguide.com/guides",
    siteName: "Vertical Mouse Guide",
    type: "website",
    images: [
      {
        url: "https://verticalmouseguide.com/editorial-hero.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Guides",
    description: "Vertical Mouse Guide helps you find practical guides and product recommendations for confident buying decisions.",
    images: ["https://verticalmouseguide.com/editorial-hero.png"],
  },
};

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
            href={`/${g.slug}`}
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
