import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle, getAllSlugs } from "@/lib/articles";

interface PageProps { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) return { title: "Not Found" };
  return {
    title: { absolute: article.title },
    description: article.description,
    alternates: { canonical: `https://www.verticalmouseguide.com/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://www.verticalmouseguide.com/${article.slug}`,
      images: [{ url: `https://www.verticalmouseguide.com${article.image}`, width: 1200, height: 630, alt: article.title }],
      type: "article",
      siteName: "Vertical Mouse Guide",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const articleSchema =
    article.articleSchema ??
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      author: { "@type": "Person", name: article.author || "James R., Ergonomics Specialist" },
      publisher: {
        "@type": "Organization",
        name: "Vertical Mouse Guide",
        logo: { "@type": "ImageObject", url: "https://www.verticalmouseguide.com/icon.svg" },
      },
      datePublished: article.date,
      dateModified: article.dateModified,
      mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.verticalmouseguide.com/${article.slug}` },
    };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {article.faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article.faqSchema) }} />
      )}
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{article.category}</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">{article.title}</h1>
      <p className="mt-3 text-slate-600">By {article.author || "James R., Ergonomics Specialist"} · Updated {article.dateModified}</p>
      <div className="prose prose-slate max-w-none mt-8" dangerouslySetInnerHTML={{ __html: article.htmlContent }} />
    </article>
  );
}
