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

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.description };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) notFound();

  return (
    <article className="space-y-8">
      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <Image src={guide.heroImage} alt={guide.title} width={1600} height={900} className="h-[320px] w-full object-cover" />
      </div>

      <div className="space-y-3">
        <Badge variant="secondary" className="capitalize">{guide.intent}</Badge>
        <h1 className="text-4xl font-extrabold tracking-tight">{guide.title}</h1>
        <p className="text-slate-600">{guide.description}</p>
        <p className="text-xs uppercase text-slate-500">Updated {guide.updated}</p>
      </div>

      <div className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
        <h2 className="text-xl font-bold">Quick Take</h2>
        {guide.body.map((p, i) => (
          <p key={i} className="text-slate-700">{p}</p>
        ))}
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Comparison Table</h2>
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <Table>
            <TableHeader>
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
                <TableRow key={p.name}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell>{p.bestFor}</TableCell>
                  <TableCell>{p.price}</TableCell>
                  <TableCell>{p.rating}</TableCell>
                  <TableCell>
                    <Button asChild size="sm">
                      <Link href={p.amazonUrl} target="_blank">Check on Amazon</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-xs text-slate-500">
          Note: Amazon links may be affiliate links and can generate commissions at no extra cost to you.
        </p>
      </section>
    </article>
  );
}
