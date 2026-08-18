import { normalizeArticleHeadings as normalizeRenderedArticleHeadings } from "@/lib/article-copy";
import { Metadata } from "next";
import AmazonProductShowcase from "@/components/AmazonProductShowcase";
import { getAmazonProductGroup } from "@/lib/amazon-product-registry";
import AffiliateDisclosureNotice from "@/components/AffiliateDisclosureNotice";
import { notFound } from "next/navigation";
import {
  buildKeywords,
  buildFaqSchema,
  getFaqItems,
  normalizeArticleHtml,
  normalizeMetaDescription,
  normalizeMetaTitle,
  type TocItem,
} from "@/lib/article-page-utils";
import { getArticle, getAllSlugs } from "@/lib/articles";
import { getArticleVisual } from "@/lib/article-visuals";
import { guides, site } from "@/lib/content";
import GuidePage from "../guides/[slug]/page";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;
  return (
    <nav className="bg-teal-50 border border-teal-200 rounded-lg p-5 mb-8">
      <p className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Table of Contents</p>
      <ol className="list-decimal list-inside space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="text-sm text-slate-700 hover:text-slate-900 hover:underline">
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function InternalLinks() {
  const links = [
    { label: "Ergonomic Vertical Mouse Setup Guide", slug: "/how-to-set-up-vertical-mouse-ergonomics-guide" },
    { label: "Do Vertical Mice Help Wrist Pain?", slug: "/do-vertical-mice-help-wrist-pain" },
    { label: "Compare Wireless Vertical Mice", slug: "/best-wireless-vertical-mouse" },
    { label: "Vertical Mouse vs Trackball", slug: "/vertical-mouse-vs-trackball-programmers" },
  ];

  return (
    <aside className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-lg font-bold text-slate-900">Related Guides</h2>
      <ul className="mt-4 space-y-2 text-sm text-slate-700">
        {links.map((guide) => (
          <li key={guide.slug}>
            <a href={guide.slug} className="hover:underline">
              {guide.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FaqSection({ items, slug }: { items: { question: string; answer: string }[]; slug: string }) {
  if (!items.length) return null;
  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h2 className="text-2xl font-bold text-slate-900" id="faq">
        Frequently Asked Questions
      </h2>
      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <details key={`${slug}-${item.question}`} className="rounded-lg border border-slate-200 bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.question}</summary>
            <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return Array.from(new Set([...getAllSlugs(), ...guides.map((guide) => guide.slug)])).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    const guide = guides.find((item) => item.slug === slug);
    if (!guide) return { title: "Not Found" };

    const title = normalizeMetaTitle(guide.title);
    const description = normalizeMetaDescription(guide.description);
    const visual = getArticleVisual(guide.slug, guide.title);

    return {
      title,
      description,
      keywords: buildKeywords(guide.title, "vertical mouse"),
      alternates: { canonical: `${site.url}/${guide.slug}` },
      openGraph: {
        title,
        description,
        url: `${site.url}/${guide.slug}`,
        images: [{ url: `${site.url}${visual.src}`, alt: visual.alt }],
        type: "article",
        siteName: "Vertical Mouse Guide",
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [`${site.url}${visual.src}`],
      },
    };
  }

  const title = normalizeMetaTitle(article.title);
  const description = normalizeMetaDescription(article.description);
  const visual = getArticleVisual(article.slug, article.title);

  return {
    title,
    description,
    keywords: buildKeywords(article.title, article.category),
    alternates: { canonical: `https://verticalmouseguide.com/${article.slug}` },
    openGraph: {
      title,
      description,
      url: `https://verticalmouseguide.com/${article.slug}`,
      images: [
        {
          url: `https://verticalmouseguide.com${visual.src}`,
          width: 1200,
          height: 630,
          alt: visual.alt,
        },
      ],
      type: "article",
      siteName: "Vertical Mouse Guide",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://verticalmouseguide.com${visual.src}`],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    const guide = guides.find((item) => item.slug === slug);
    if (!guide) notFound();
    return <GuidePage params={params} />;
  }

  const title = normalizeMetaTitle(article.title);
  const description = normalizeMetaDescription(article.description);
  const visual = getArticleVisual(article.slug, article.title);
  const { html, toc } = normalizeArticleHtml(normalizeRenderedArticleHeadings(article.htmlContent), article.title);
  const amazonProductGroup = getAmazonProductGroup(article.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: `https://verticalmouseguide.com${visual.src}`,
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{article.category}</p>
      <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">{article.title}</h1>
      <p className="mt-3 text-slate-600">By Vertical Mouse Guide Editorial Team · Updated {article.dateModified}</p>
      <figure className="my-7 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm">
        <img src={visual.src} alt={visual.alt} className="aspect-[3/2] w-full object-cover" width="1536" height="1024" fetchPriority="high" />
      </figure>
      <AffiliateDisclosureNotice />

      <TableOfContents items={toc} />
      <AmazonProductShowcase group={amazonProductGroup} slug={article.slug} />
      <div className="prose prose-slate max-w-none mt-8" dangerouslySetInnerHTML={{ __html: html }} />

      <AmazonProductShowcase group={amazonProductGroup} slug={article.slug} />

      <InternalLinks />
      <AmazonProductShowcase group={amazonProductGroup} slug={article.slug} />
    </article>
  );
}
