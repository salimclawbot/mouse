export const siteConfig = {
  name: "Vertical Mouse Guide",
  tagline: "Ergonomic Mouse Guides & Reviews",
  description: "Expert vertical mouse reviews and ergonomic buying guides for wrist pain relief. Top-rated ergonomic mice tested and reviewed for 2026. Updated monthly.",
  url: "https://verticalmouseguide.com",
  author: "James R., Ergonomics Specialist",
  primaryColor: "#0d9488",
  niche: "vertical-mouse",
  email: "hello@verticalmouseguide.com",
  ogImage: "/editorial-hero.png",
  updatedLabel: "Updated March 2026",
} as const;

export const featuredGuides = [
  { slug: "kensington-pro-fit-ergo-review-2026", title: "Kensington Pro Fit Ergo Review (2026)", description: "Complete review with ergonomic testing and competitor comparison.", image: "/editorial-hero.png", category: "Product Review" },
  { slug: "can-vertical-mouse-cure-rsi", title: "Can a Vertical Mouse Cure RSI?", description: "What the clinical research says about vertical mice and RSI.", image: "/editorial-hero.png", category: "Research" },
] as const;
