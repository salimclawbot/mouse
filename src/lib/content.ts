export type Product = {
  name: string;
  bestFor: string;
  price: string;
  rating: string;
  amazonUrl: string;
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  intent: "commercial" | "transactional";
  updated: string;
  heroImage: string;
  body: string[];
  products: Product[];
};

const AMZ = "https://www.amazon.com/s?k=";
const a = (q: string) => `${AMZ}${encodeURIComponent(q)}`;

export const guides: Guide[] = [
  {
    slug: "best-vertical-mouse-small-hands-carpal-tunnel",
    title: "Best Vertical Mouse for Small Hands & Carpal Tunnel (2026)",
    description: "Narrow-grip ergonomic picks that reduce wrist tension for smaller hands.",
    intent: "commercial",
    updated: "2026-02-24",
    heroImage: "/images/guides/small-hands-carpal/vertical-mouse-small-hands-hero.jpg",
    body: [
      "If you have small hands and wrist discomfort, fit is everything. Many so-called ergonomic mice are designed around medium-to-large hand geometry, which forces smaller hands to overreach for clicks and side buttons.",
      "A better approach is to prioritize shell width, click force, and neutral wrist posture over marketing specs like extreme DPI. In daily office work, comfort and control matter more than headline numbers.",
      "For this guide, the practical target is a compact vertical design that keeps your wrist in a handshake-like angle while still feeling stable on slow and fast movements.",
      "Bottom line: for small hands, compact vertical mice can significantly improve comfort and reduce strain triggers when paired with proper workstation setup.",
    ],
    products: [
      { name: "Logitech Lift", bestFor: "Best overall for small hands", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift vertical mouse") },
      { name: "Anker Ergonomic Vertical", bestFor: "Best budget starter", price: "$", rating: "4.4/5", amazonUrl: a("Anker ergonomic vertical mouse") },
      { name: "Lekvey Rechargeable Vertical", bestFor: "Best cheap rechargeable", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey vertical mouse rechargeable") },
      { name: "Logitech MX Vertical", bestFor: "Premium larger grip", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Evoluent VerticalMouse 4", bestFor: "Clinical-ergonomic shape", price: "$$$", rating: "4.4/5", amazonUrl: a("Evoluent VerticalMouse 4") },
      { name: "Delux M618 Mini", bestFor: "Extra-compact shape", price: "$$", rating: "4.1/5", amazonUrl: a("Delux M618 Mini vertical mouse") },
      { name: "ProtoArc EM11 NL", bestFor: "Quiet office use", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc EM11 NL vertical mouse") },
      { name: "Perixx PERIMICE-713", bestFor: "Small-hand wired reliability", price: "$", rating: "4.2/5", amazonUrl: a("Perixx PERIMICE-713") },
      { name: "J-Tech Digital V628", bestFor: "Palm shelf support", price: "$$", rating: "4.3/5", amazonUrl: a("J-Tech Digital V628") },
      { name: "Kensington Pro Fit Ergo Vertical", bestFor: "Conservative vertical angle", price: "$$", rating: "4.2/5", amazonUrl: a("Kensington Pro Fit Ergo vertical mouse") },
    ],
  },
  {
    slug: "left-handed-vertical-mouse-wireless-rechargeable",
    title: "Best Left-Handed Vertical Mouse (Wireless + Rechargeable, 2026)",
    description: "Ranked left-handed ergonomic picks with wireless reliability, rechargeable vs battery tradeoffs, and practical office comfort insights.",
    intent: "transactional",
    updated: "2026-02-25",
    heroImage: "/images/guides/left-handed-vertical-mouse-wireless-rechargeable/left-hero-workstation-1600x900.jpg",
    body: [
      "Most left-handed buyers get a fake choice: either buy a right-handed model and adapt, or settle for an under-specced lefty mouse with weak battery life.",
      "The key buying rule is simple: prioritize shape and switch feel first, then power system, then connectivity extras.",
      "You will see both built-in rechargeable and battery-powered wireless options here. That is intentional.",
    ],
    products: [
      { name: "Logitech Lift Left", bestFor: "Best overall left-handed value", price: "$$", rating: "4.7/5", amazonUrl: a("Logitech Lift left vertical mouse") },
      { name: "Evoluent VerticalMouse D Left", bestFor: "Best premium ergonomic depth", price: "$$$", rating: "4.5/5", amazonUrl: a("Evoluent VerticalMouse D Left") },
      { name: "Evoluent VerticalMouse 4 Left", bestFor: "Best for clinical-style finger support", price: "$$$", rating: "4.4/5", amazonUrl: a("Evoluent VerticalMouse 4 Left") },
      { name: "Perixx PERIMICE-719L", bestFor: "Best budget wireless left-handed", price: "$", rating: "4.2/5", amazonUrl: a("Perixx PERIMICE-719L left handed") },
      { name: "Adesso iMouse E10 Left", bestFor: "Best straightforward office starter", price: "$", rating: "4.1/5", amazonUrl: a("Adesso iMouse E10 left handed vertical") },
      { name: "Kensington Pro Fit Left Vertical", bestFor: "Best conservative vertical angle", price: "$$", rating: "4.2/5", amazonUrl: a("Kensington Pro Fit left handed vertical mouse") },
      { name: "CHERRY MW 4500 Left", bestFor: "Best compact travel-friendly left model", price: "$$", rating: "4.0/5", amazonUrl: a("CHERRY MW 4500 left ergonomic mouse") },
      { name: "Delux M618LU Left", bestFor: "Best rechargeable-value lefty pick", price: "$$", rating: "4.1/5", amazonUrl: a("Delux M618LU left vertical mouse") },
      { name: "3M Wireless Ergonomic Left", bestFor: "Best for neutral forearm angle", price: "$$$", rating: "4.0/5", amazonUrl: a("3M wireless ergonomic left handed mouse") },
      { name: "Nulea M503 Left", bestFor: "Best low-cost tri-mode left option", price: "$", rating: "4.0/5", amazonUrl: a("Nulea left handed vertical mouse rechargeable") },
    ],
  },
  {
    slug: "quiet-click-vertical-mouse-office",
    title: "Best Quiet-Click Vertical Mouse for Office Work",
    description: "The best silent or low-noise vertical mice for open offices, calls, libraries, and shared home workspaces.",
    intent: "transactional",
    updated: "2026-02-25",
    heroImage: "/images/guides/quiet-click-vertical-mouse-office/quiet-hero-open-office-1600x900.jpg",
    body: [
      "A quiet click is not just about being polite in an open office. It also changes perceived fatigue during long workdays.",
      "Many mice advertised as silent only mute primary buttons while scroll wheels and side switches stay loud.",
      "Our recommendation stack favors balanced office behavior: low acoustic profile, low click force, and reliable connectivity.",
      "For procurement decisions, we also factor deployment friction and practical replacement availability.",
    ],
    products: [
      { name: "Logitech Lift", bestFor: "Best overall quiet office pick", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift vertical silent") },
      { name: "ProtoArc EM11 NL", bestFor: "Best quiet value for hybrid teams", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc EM11 NL silent vertical") },
      { name: "Logitech MX Vertical", bestFor: "Best premium build + low click fatigue", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Anker Wireless Vertical", bestFor: "Best sub-$35 starter", price: "$", rating: "4.3/5", amazonUrl: a("Anker silent vertical mouse") },
      { name: "Delux M618 Plus", bestFor: "Best feature-rich budget quiet option", price: "$$", rating: "4.2/5", amazonUrl: a("Delux M618 Plus vertical silent") },
      { name: "Perixx PERIMICE-718", bestFor: "Best wired quiet consistency", price: "$", rating: "4.2/5", amazonUrl: a("Perixx PERIMICE-718 silent") },
      { name: "Lekvey Rechargeable Vertical", bestFor: "Best cheap rechargeable quiet pick", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey rechargeable silent vertical mouse") },
      { name: "Kensington Pro Fit Ergo Vertical", bestFor: "Best conservative shape for transitions", price: "$$", rating: "4.2/5", amazonUrl: a("Kensington Pro Fit Ergo vertical") },
      { name: "Nulea M501", bestFor: "Best tri-mode quiet workflow", price: "$", rating: "4.1/5", amazonUrl: a("Nulea M501 vertical silent") },
      { name: "J-Tech Digital V628", bestFor: "Best large-palm shelf with moderate noise", price: "$$", rating: "4.2/5", amazonUrl: a("J-Tech V628 vertical") },
    ],
  },
];

const DEFAULT_SITE_URL = "https://www.verticalmouseguide.com";

export const site = {
  name: "Vertical Mouse Guide",
  description: "Evidence-led vertical and ergonomic mouse buying guides for pain-aware productivity.",
  url: process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL,
  ogImage: "/images/brand/og-default.jpg",
};
