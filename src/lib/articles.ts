import { safeMatter } from "@/lib/safe-matter";
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import { normalizeArticleHeadings, resolveArticleDescription, resolveArticleTitle } from "@/lib/article-copy";

export interface Article {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  htmlContent: string;
  date: string;
  dateModified: string;
  category: string;
  author: string;
  image: string;
  faqSchema?: Record<string, unknown> | null;
  articleSchema?: Record<string, unknown> | null;
}

const CONTENT_DIR = path.join(process.cwd(), "content");

function toSlug(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
}

function parseJsonField(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "string") return null;
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function processContent(raw: string): string {
  let processed = raw;
  processed = processed.trimStart().replace(/^#\s+.*\n+/, "");
  processed = processed.replace(/\[INTERNAL:\s*([\w-]+)\]\((.*?)\)/g, "[$2](/$1)");
  processed = processed.replace(/\[INTERNAL:\s*([\w-]+)\]/g, "[$1](/$1)");
  return processed;
}

export async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const parsed = safeMatter(raw);
  const data = parsed.data as Record<string, unknown>;

  const content = processContent(parsed.content);
  const result = await remark().use(remarkGfm).use(html, { sanitize: false }).process(content);

  const title = resolveArticleTitle(data.title, slug);
  const description = resolveArticleDescription(data.meta_description || data.description, parsed.content, title);
  const author = "Vertical Mouse Guide Editorial Team";
  const rawDate = data.date instanceof Date ? data.date.toISOString().split("T")[0] : (data.date as string);
  const rawDateMod = data.dateModified instanceof Date ? data.dateModified.toISOString().split("T")[0] : (data.dateModified as string);
  const date = rawDate || (data.datePublished as string) || "2026-03-29";
  const dateModified = rawDateMod || date;
  const category = (data.category as string) || "Guide";
  const image = (data.image as string) || "/editorial-hero.png";

  let htmlContent = normalizeArticleHeadings(result.toString());

  htmlContent = htmlContent.replace(/<(h[2-6])>(.*?)<\/\1>/g, (match: string, tag: string, text: string) => {
    const customIdMatch = text.match(/\{#([^}]+)\}/);
    let id: string;
    let displayText = text;
    if (customIdMatch) {
      id = customIdMatch[1];
      displayText = text.replace(/\s*\{#[^}]+\}/, "");
    } else {
      const cleanText = text.replace(/<[^>]+>/g, "");
      id = toSlug(cleanText);
    }
    return `<${tag} id="${id}">${displayText}</${tag}>`;
  });

  const excerptMatch = parsed.content.match(/\*\*(.*?)\*\*/);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : description;

  return {
    slug,
    title,
    description,
    excerpt,
    content,
    htmlContent,
    date,
    dateModified,
    category,
    author,
    image,
    faqSchema: parseJsonField(data.faq_schema),
    articleSchema: parseJsonField(data.article_schema),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export async function getAllArticles(): Promise<Article[]> {
  const slugs = getAllSlugs();
  const articles = await Promise.all(slugs.map((slug) => getArticle(slug)));
  return articles.filter(Boolean) as Article[];
}
