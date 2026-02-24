export type Guide = {
  slug: string;
  title: string;
  description: string;
  intent: "commercial" | "transactional";
  updated: string;
  body: string[];
};

export const guides: Guide[] = [
  {
    slug: "best-vertical-mouse-small-hands-carpal-tunnel",
    title: "Best Vertical Mouse for Small Hands & Carpal Tunnel (2026)",
    description:
      "A buyer-first comparison of ergonomic vertical mice for smaller hands with wrist pain and carpal tunnel symptoms.",
    intent: "commercial",
    updated: "2026-02-24",
    body: [
      "If your hand is small, many vertical mice can feel bulky and force awkward grip tension. We tested shape, click force, and wrist angle comfort to identify genuinely suitable picks.",
      "Focus on narrow grip width, low click resistance, and reliable wireless performance. Avoid oversized shells marketed only by DPI numbers.",
      "Top pick criteria: comfort after 2+ hours, stable tracking, easy thumb access, and return-friendly pricing.",
    ],
  },
  {
    slug: "left-handed-vertical-mouse-wireless-rechargeable",
    title: "Best Left-Handed Vertical Mouse (Wireless + Rechargeable)",
    description:
      "Left-handed vertical mouse options are limited. This guide compares real availability, battery life, and comfort-to-price value.",
    intent: "transactional",
    updated: "2026-02-24",
    body: [
      "Left-handed buyers are often underserved by mainstream guides. We prioritize in-stock models with practical charging and warranty support.",
      "Choose USB-C charging, predictable polling, and ergonomic shell shape over gimmicky RGB extras.",
    ],
  },
  {
    slug: "vertical-mouse-for-wrist-pain-no-pronation",
    title: "How to Choose a Vertical Mouse for Wrist Pain (Low Pronation)",
    description:
      "A practical buying framework for choosing vertical mice that reduce pronation and wrist pressure.",
    intent: "commercial",
    updated: "2026-02-24",
    body: [
      "The goal is neutral wrist posture without over-rotating your forearm. Mid-angle shells (around 57°) often balance comfort and control for most users.",
      "Look for stable sensor performance and side-button placement that does not trigger thumb strain.",
    ],
  },
  {
    slug: "quiet-click-vertical-mouse-office",
    title: "Best Quiet-Click Vertical Mouse for Office Work",
    description:
      "Need ergonomic comfort without noisy clicks? These are the best low-noise vertical mice for shared offices.",
    intent: "transactional",
    updated: "2026-02-24",
    body: [
      "Silent click quality varies heavily across brands. We score by noise profile, click feedback, and long-session fatigue.",
      "Office-friendly picks should reduce both wrist stress and acoustic distraction.",
    ],
  },
  {
    slug: "vertical-mouse-vs-trackball-tendonitis",
    title: "Vertical Mouse vs Trackball for Tendonitis",
    description:
      "A practical comparison for tendonitis users deciding between vertical mice and trackballs.",
    intent: "commercial",
    updated: "2026-02-24",
    body: [
      "Vertical mice usually feel more natural initially, while trackballs can reduce arm movement after adaptation.",
      "Your best choice depends on flare-up pattern, desk setup, and tolerance for learning curve.",
    ],
  },
];

export const site = {
  name: "ErgoMint",
  description:
    "Evidence-led ergonomic buying guides for pain-aware productivity.",
  url: "https://ergomint.vercel.app",
};
