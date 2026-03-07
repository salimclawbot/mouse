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
  },  {
    slug: "best-vertical-mouse-large-hands",
    title: "Best Vertical Mouse for Large Hands (2026)",
    description: "Large-hand vertical mouse picks with fit-first guidance, click-force tradeoffs, and practical all-day comfort recommendations.",
    intent: "commercial",
    updated: "2026-03-02",
    heroImage: "/images/vmg-visual-assets/generated/best-vertical-mouse-large-hands-comparison-2026.webp",
    body: [
      "Large hands often struggle with compact ergonomic mice that force finger curl and increase click fatigue over long sessions.",
      "The right vertical mouse for large hands should support full palm contact, reduce pinch tension, and keep forearm posture neutral.",
      "In this guide, we prioritize shell size, button effort, and long-session control rather than marketing specs.",
      "If you are between sizes, a slightly larger shell with stable palm support usually outperforms a smaller model with higher DPI.",
    ],
    products: [
      { name: "Logitech MX Vertical", bestFor: "Best overall for large hands", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Evoluent VerticalMouse D", bestFor: "Best true ergonomic contour", price: "$$$", rating: "4.4/5", amazonUrl: a("Evoluent VerticalMouse D") },
      { name: "J-Tech Digital V628", bestFor: "Best palm shelf support", price: "$$", rating: "4.2/5", amazonUrl: a("J-Tech Digital V628") },
      { name: "Delux M618 Plus", bestFor: "Best value for bigger grip", price: "$$", rating: "4.2/5", amazonUrl: a("Delux M618 Plus vertical mouse") },
      { name: "Kensington Pro Fit Ergo Vertical", bestFor: "Best conservative transition shape", price: "$$", rating: "4.2/5", amazonUrl: a("Kensington Pro Fit Ergo vertical") },
      { name: "Anker Wireless Vertical", bestFor: "Best budget starter", price: "$", rating: "4.3/5", amazonUrl: a("Anker wireless vertical mouse") },
      { name: "Lekvey Rechargeable Vertical", bestFor: "Best cheap rechargeable", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey rechargeable vertical mouse") },
      { name: "Perixx PERIMICE-718", bestFor: "Best wired reliability", price: "$", rating: "4.2/5", amazonUrl: a("Perixx PERIMICE-718") },
      { name: "ProtoArc EM11 NL", bestFor: "Best hybrid office option", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc EM11 NL vertical mouse") },
      { name: "Nulea M501", bestFor: "Best tri-mode budget option", price: "$", rating: "4.1/5", amazonUrl: a("Nulea M501 vertical mouse") },
    ],
  },
  {
    slug: "best-ergonomic-mouse-for-wrist-pain-office",
    title: "Best Ergonomic Mouse for Wrist Pain in Office Work (Quick Guide, 2026)",
    description: "Quick-answer version of our office wrist-pain ergonomic mouse rankings. For full depth, use the deep-dive methodology guide.",
    intent: "commercial",
    updated: "2026-03-03",
    heroImage: "/images/guides/small-hands-carpal/wrist-posture-workstation-setup.jpg",
    body: [
      "If your wrist pain spikes during desk work, the most important variable is fit, not feature count. A poorly sized shell forces grip tension and awkward click reach that compounds over a full shift.",
      "The best ergonomic mouse for office wrist pain should keep your forearm closer to neutral, lower click effort, and remain stable during repetitive workflows like spreadsheets, ticket queues, and document review.",
      "This guide compares ten practical models using a buyer-first scoring system: fit and posture support (35%), long-session comfort (25%), control reliability (20%), and value confidence (20%).",
      "Quick answer: start with Logitech Lift if you need the safest all-round pick, Logitech MX Vertical if you have larger hands and want premium build, and Anker Wireless Vertical if you need a low-risk budget trial.",
      "For most professionals, adaptation takes 3-10 days. Early awkwardness is normal; persistent pain increase after week one usually means shape mismatch, not a failure of ergonomic mice as a category.",
      "Noise, weight, and connectivity still matter in office settings, but they should never outrank wrist posture and click force. Comfort durability over six hours is the real quality benchmark.",
      "If two options feel similar, run a five-day split test and track end-of-day soreness, cursor confidence, and fatigue. The better model usually reveals itself by day three.",
      "Bottom line: choose the mouse that keeps your wrist calm during your hardest workload block, then lock in desk setup basics like forearm support and pointer-speed tuning.",
    ],
    products: [
      { name: "Logitech Lift", bestFor: "Best overall office comfort", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift vertical mouse") },
      { name: "Logitech MX Vertical", bestFor: "Best premium for larger hands", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Evoluent VerticalMouse 4", bestFor: "Best clinical ergonomic contour", price: "$$$", rating: "4.4/5", amazonUrl: a("Evoluent VerticalMouse 4") },
      { name: "Anker Wireless Vertical", bestFor: "Best budget starter", price: "$", rating: "4.3/5", amazonUrl: a("Anker wireless vertical mouse") },
      { name: "ProtoArc EM11 NL", bestFor: "Best quiet office value", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc EM11 NL vertical mouse") },
      { name: "Kensington Pro Fit Ergo Vertical", bestFor: "Best transition from standard mice", price: "$$", rating: "4.2/5", amazonUrl: a("Kensington Pro Fit Ergo vertical") },
      { name: "J-Tech Digital V628", bestFor: "Best palm shelf support", price: "$$", rating: "4.2/5", amazonUrl: a("J-Tech Digital V628") },
      { name: "Delux M618 Plus", bestFor: "Best feature-rich value pick", price: "$$", rating: "4.2/5", amazonUrl: a("Delux M618 Plus vertical mouse") },
      { name: "Lekvey Rechargeable Vertical", bestFor: "Best cheap rechargeable option", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey rechargeable vertical mouse") },
      { name: "Perixx PERIMICE-718", bestFor: "Best wired stability for fixed desks", price: "$", rating: "4.2/5", amazonUrl: a("Perixx PERIMICE-718") },
    ],
  },

  {
    slug: "office-ergonomic-mouse-wrist-pain-deep-dive",
    title: "Best Ergonomic Mouse for Office Wrist Pain: Deep-Dive Buyer Guide (2026)",
    description: "A methodology-first office guide for choosing an ergonomic mouse for wrist pain, including fit decisioning, adaptation checkpoints, and team rollout playbooks.",
    intent: "commercial",
    updated: "2026-03-03",
    heroImage: "/images/guides/office-ergonomic-mouse-wrist-pain-deep-dive/2026-03-03-20-42-hero-neutral-posture.png",
    body: [
      "Most office wrist pain decisions fail because buyers compare features before they validate fit. For daily computer work, shell geometry and click force dominate comfort outcomes over DPI claims.",
      "This deep-dive guide ranks ergonomic mice with a practical office weighting model: fit and posture support (35%), six-hour comfort durability (25%), control reliability (20%), and value confidence (20%).",
      "Quick shortlist: Logitech Lift is the safest all-round choice for most teams, MX Vertical wins for larger hands and premium stability, and Anker Wireless Vertical is the lowest-risk budget trial.",
      "Use a 5- to 7-day real-work test, not a 20-minute desk impression. The right mouse usually shows clear comfort stability by day three.",
      "If soreness rises after week one, treat that as shape mismatch rather than user failure. Swap shell size or angle before blaming the ergonomic category.",
      "For procurement, run a two-model pilot (default + alternative fit) across mixed hand sizes before standardizing office-wide.",
      "This article stays non-medical: it is buyer guidance for office ergonomics, not diagnosis or treatment advice.",
    ],
    products: [
      { name: "Logitech Lift", bestFor: "Best overall for most office teams", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift vertical mouse") },
      { name: "Logitech MX Vertical", bestFor: "Best premium for larger hands", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Evoluent VerticalMouse 4", bestFor: "Best posture-first contour", price: "$$$", rating: "4.4/5", amazonUrl: a("Evoluent VerticalMouse 4") },
      { name: "ProtoArc EM11 NL", bestFor: "Best quiet-value office option", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc EM11 NL vertical mouse") },
      { name: "Anker Wireless Vertical", bestFor: "Best low-risk budget trial", price: "$", rating: "4.3/5", amazonUrl: a("Anker wireless vertical mouse") },
      { name: "Kensington Pro Fit Ergo Vertical", bestFor: "Best transition from standard shape", price: "$$", rating: "4.2/5", amazonUrl: a("Kensington Pro Fit Ergo vertical") },
      { name: "J-Tech Digital V628", bestFor: "Best palm shelf support", price: "$$", rating: "4.2/5", amazonUrl: a("J-Tech Digital V628") },
      { name: "Delux M618 Plus", bestFor: "Best feature-rich value", price: "$$", rating: "4.2/5", amazonUrl: a("Delux M618 Plus vertical mouse") },
      { name: "Lekvey Rechargeable Vertical", bestFor: "Best cheap rechargeable pick", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey rechargeable vertical mouse") },
      { name: "Perixx PERIMICE-718", bestFor: "Best wired reliability at fixed desks", price: "$", rating: "4.2/5", amazonUrl: a("Perixx PERIMICE-718") },
    ],
  },
  {
    slug: "best-ergonomic-mouse-for-programmers-wrist-pain",
    title: "Best Ergonomic Mouse for Programmers with Wrist Pain (2026)",
    description: "Keyword-focused programmer guide covering coding workloads, click fatigue, and all-day comfort tradeoffs for wrist-sensitive developers.",
    intent: "commercial",
    updated: "2026-03-03",
    heroImage: "/images/guides/best-ergonomic-mouse-for-programmers-wrist-pain/2026-03-03-23-50-hero-programmer-posture.png",
    body: [
      "If you code for 6 to 10 hours a day, your mouse decision should be based on workload behavior, not raw specs. Developers need stable cursor control, low click fatigue, and posture support across long debugging sessions.",
      "This guide targets high-intent programmer search terms including ergonomic mouse for programmers, best mouse for coding wrist pain, vertical mouse for developers, and RSI-friendly office mouse options.",
      "For coding workflows, the core scoring model is fit and posture support (35%), sustained click comfort (25%), precision and reliability during multi-window work (20%), and ownership value (20%).",
      "Top quick picks: Logitech Lift for safest all-round programming comfort, MX Vertical for larger hands and premium build confidence, and ProtoArc EM11 NL if you need quieter clicks in shared dev offices.",
      "Use a practical seven-day code-workload test: IDE navigation, terminal switching, browser research, and code review loops. Keep the model that holds comfort stability by day five.",
      "If your pain pattern is thumb-base strain, prioritize smaller shells and lower button resistance. If forearm ache dominates, prioritize stronger vertical posture support and lower grip force.",
      "For teams, avoid one-model procurement. A two-model stack (default + alternative fit) reduces mismatch and support tickets while improving adoption.",
      "This is non-medical buyer guidance for productivity ergonomics and does not replace diagnosis or treatment advice.",
    ],
    products: [
      { name: "Logitech Lift", bestFor: "Best overall for most programmers", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift vertical mouse") },
      { name: "Logitech MX Vertical", bestFor: "Best premium for larger coding hands", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Evoluent VerticalMouse 4", bestFor: "Best posture-first contour", price: "$$$", rating: "4.4/5", amazonUrl: a("Evoluent VerticalMouse 4") },
      { name: "ProtoArc EM11 NL", bestFor: "Best quiet coding-office value", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc EM11 NL vertical mouse") },
      { name: "Anker Wireless Vertical", bestFor: "Best budget coding trial", price: "$", rating: "4.3/5", amazonUrl: a("Anker wireless vertical mouse") },
      { name: "Kensington Pro Fit Ergo Vertical", bestFor: "Best transition from standard dev mouse", price: "$$", rating: "4.2/5", amazonUrl: a("Kensington Pro Fit Ergo vertical") },
      { name: "J-Tech Digital V628", bestFor: "Best palm shelf support", price: "$$", rating: "4.2/5", amazonUrl: a("J-Tech Digital V628") },
      { name: "Delux M618 Plus", bestFor: "Best feature-rich value", price: "$$", rating: "4.2/5", amazonUrl: a("Delux M618 Plus vertical mouse") },
      { name: "Lekvey Rechargeable Vertical", bestFor: "Best low-cost rechargeable option", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey rechargeable vertical mouse") },
      { name: "Perixx PERIMICE-718", bestFor: "Best wired reliability for fixed desks", price: "$", rating: "4.2/5", amazonUrl: a("Perixx PERIMICE-718") },
    ],
  },
  {
    slug: "vertical-mouse-vs-trackball",
    title: "Vertical Mouse vs Trackball: Which One Should You Choose?",
    description: "A practical comparison of vertical mice and trackballs across pain pattern, learning curve, control style, and desk setup.",
    intent: "commercial",
    updated: "2026-03-06",
    heroImage: "/images/vmg-visual-assets/generated/vertical-mouse-vs-trackball-comparison-hero.webp",
    body: [
      "Vertical mice and trackballs are both ergonomic alternatives, but they solve different problems. Vertical mice reduce forearm pronation; trackballs reduce arm movement.",
      "If your pain is mainly wrist/forearm strain from pronated posture, vertical mice are usually the first option. If shoulder or upper-arm fatigue from repeated mousing dominates, trackballs often perform better.",
      "Vertical mice usually have a shorter adaptation window (about 2-4 weeks), while trackballs often take longer to build precision muscle memory.",
      "A dual-device setup can work well for heavy users: vertical mouse for general workflow and trackball for low-movement sessions.",
    ],
    products: [
      { name: "Logitech MX Vertical", bestFor: "Vertical posture correction", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Logitech M575 Trackball", bestFor: "Easy thumb-trackball transition", price: "$$", rating: "4.4/5", amazonUrl: a("Logitech M575 trackball") },
      { name: "Kensington Expert Mouse", bestFor: "Finger-operated precision", price: "$$$", rating: "4.3/5", amazonUrl: a("Kensington Expert Mouse trackball") },
      { name: "Logitech MX Ergo", bestFor: "Tilt trackball hybrid comfort", price: "$$$", rating: "4.4/5", amazonUrl: a("Logitech MX Ergo") },
    ],
  },
  {
    slug: "vertical-mouse-vs-regular-mouse",
    title: "Vertical Mouse vs Regular Mouse: Should You Switch?",
    description: "A direct comparison of forearm posture, adaptation curve, and use-case tradeoffs between vertical and regular mice.",
    intent: "commercial",
    updated: "2026-03-06",
    heroImage: "/images/vmg-visual-assets/generated/vertical-mouse-vs-regular-mouse-comparison-hero.webp",
    body: [
      "The core difference is forearm position: regular mice keep most users pronated, while vertical mice move toward a handshake orientation that can reduce strain for many office users.",
      "Most people who switch to vertical mice need a short adaptation phase before speed normalizes. For many, comfort gains appear before performance gains.",
      "Switching makes the most sense for users with high daily mouse time, recurring wrist/forearm discomfort, or a proactive ergonomics goal.",
      "A budget vertical model can provide the core biomechanical benefit; premium models typically add better build, sensors, and multi-device convenience.",
    ],
    products: [
      { name: "Anker Ergonomic Vertical", bestFor: "Budget entry to vertical posture", price: "$", rating: "4.3/5", amazonUrl: a("Anker ergonomic vertical mouse") },
      { name: "Logitech Lift", bestFor: "Best all-round transition pick", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift vertical mouse") },
      { name: "Logitech MX Vertical", bestFor: "Premium large-hand option", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Standard Ergonomic Mouse", bestFor: "Conservative non-vertical option", price: "$$", rating: "4.1/5", amazonUrl: a("ergonomic regular mouse") },
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
