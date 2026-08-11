export type ArticleVisual = {
  src: string;
  alt: string;
};

export function getArticleVisual(slug: string, title: string): ArticleVisual {
  const subject = title.replace(/\s*\([^)]*\)\s*$/, "").trim();

  return {
    src: `/images/articles/${slug}-hero.webp`,
    alt: `Ergonomic workspace illustrating ${subject.toLowerCase()} with an unbranded vertical mouse`,
  };
}
