import { notFound } from "next/navigation";
import { guides } from "@/lib/content";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
  };
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = guides.find((g) => g.slug === params.slug);
  if (!guide) notFound();

  return (
    <article className="prose prose-slate max-w-3xl">
      <p className="text-xs uppercase tracking-wide text-slate-500">Updated {guide.updated}</p>
      <h1>{guide.title}</h1>
      <p>{guide.description}</p>
      {guide.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <h2>What to check before buying</h2>
      <ul>
        <li>Hand size and grip fit</li>
        <li>Click force and button placement</li>
        <li>Wireless stability and charging method</li>
        <li>Warranty and easy return policy</li>
      </ul>
    </article>
  );
}
