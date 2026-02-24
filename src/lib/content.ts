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
    heroImage: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1600&q=80",
    body: ["Small hands need narrower shells and lower click force.", "Prioritize grip comfort over max DPI marketing.", "Our shortlist focuses on all-day comfort and return-safe value."],
    products: [
      { name: "Logitech Lift", bestFor: "Small hands", price: "$", rating: "4.6/5", amazonUrl: a("Logitech Lift vertical mouse") },
      { name: "Anker Ergonomic Vertical", bestFor: "Budget", price: "$", rating: "4.4/5", amazonUrl: a("Anker ergonomic vertical mouse") },
      { name: "Lekvey Rechargeable Vertical", bestFor: "Rechargeable value", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey vertical mouse rechargeable") },
    ],
  },
  {
    slug: "left-handed-vertical-mouse-wireless-rechargeable",
    title: "Best Left-Handed Vertical Mouse (Wireless + Rechargeable)",
    description: "Left-handed options with practical battery life and real availability.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1600&q=80",
    body: ["Left-handed vertical picks are limited and often out-of-stock.", "We prioritize USB-C charging, comfort and warranty support."],
    products: [
      { name: "Evoluent VerticalMouse Left", bestFor: "Premium comfort", price: "$$$", rating: "4.5/5", amazonUrl: a("Evoluent left handed vertical mouse") },
      { name: "Delux Left Hand Vertical", bestFor: "Wireless value", price: "$$", rating: "4.2/5", amazonUrl: a("Delux left hand vertical mouse") },
      { name: "Adesso iMouse Left", bestFor: "Office use", price: "$$", rating: "4.1/5", amazonUrl: a("Adesso left handed vertical mouse") },
    ],
  },
  {
    slug: "vertical-mouse-for-wrist-pain-no-pronation",
    title: "How to Choose a Vertical Mouse for Wrist Pain (Low Pronation)",
    description: "A framework to reduce pronation and choose the right shell angle.",
    intent: "commercial",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1600&q=80",
    body: ["Most users do well around 57° shell angle.", "Button placement matters as much as hand angle."],
    products: [
      { name: "Logitech MX Vertical", bestFor: "Balanced ergonomics", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "J-Tech Digital V628", bestFor: "Strong tilt", price: "$$", rating: "4.3/5", amazonUrl: a("J-Tech Digital V628") },
      { name: "Anker Ergonomic", bestFor: "Entry level", price: "$", rating: "4.4/5", amazonUrl: a("Anker vertical ergonomic mouse") },
    ],
  },
  {
    slug: "quiet-click-vertical-mouse-office",
    title: "Best Quiet-Click Vertical Mouse for Office Work",
    description: "Low-noise vertical mice for open-office and hybrid teams.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1600&q=80",
    body: ["Quiet-click quality differs massively across brands.", "Office picks should reduce both noise and wrist strain."],
    products: [
      { name: "Logitech Lift", bestFor: "Best overall quiet", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift vertical") },
      { name: "ProtoArc EM11", bestFor: "Affordable quiet", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc vertical mouse") },
      { name: "Lekvey Vertical", bestFor: "Budget quiet", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey silent vertical mouse") },
    ],
  },
  {
    slug: "vertical-mouse-vs-trackball-tendonitis",
    title: "Vertical Mouse vs Trackball for Tendonitis",
    description: "Which causes fewer flare-ups for tendonitis: vertical mice or trackballs?",
    intent: "commercial",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1616587894289-86480e533129?auto=format&fit=crop&w=1600&q=80",
    body: ["Vertical mice are easier to adopt quickly.", "Trackballs reduce movement but require adaptation time."],
    products: [
      { name: "MX Vertical", bestFor: "Natural transition", price: "$$$", rating: "4.5/5", amazonUrl: a("Logitech MX Vertical") },
      { name: "Logitech MX Ergo", bestFor: "Trackball hybrid", price: "$$$", rating: "4.6/5", amazonUrl: a("Logitech MX Ergo") },
      { name: "Kensington Orbit", bestFor: "Trackball budget", price: "$$", rating: "4.3/5", amazonUrl: a("Kensington Orbit trackball") },
    ],
  },
  {
    slug: "best-vertical-mouse-under-50",
    title: "Best Vertical Mouse Under $50",
    description: "Budget ergonomic picks with strong comfort-per-dollar.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?auto=format&fit=crop&w=1600&q=80",
    body: ["The budget category is crowded but predictable.", "Aim for reliable sensors and low click fatigue."],
    products: [
      { name: "Anker Ergonomic", bestFor: "Best under $30", price: "$", rating: "4.4/5", amazonUrl: a("Anker ergonomic mouse") },
      { name: "Perixx Perimice", bestFor: "Mid-budget comfort", price: "$", rating: "4.2/5", amazonUrl: a("Perixx vertical mouse") },
      { name: "J-Tech V628", bestFor: "Largest grip", price: "$$", rating: "4.3/5", amazonUrl: a("J-Tech V628 vertical") },
    ],
  },
  {
    slug: "best-vertical-mouse-for-macbook",
    title: "Best Vertical Mouse for MacBook Users",
    description: "Bluetooth-first ergonomic picks for Mac workflows.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    body: ["Mac users need stable Bluetooth and smooth tracking.", "Avoid models with inconsistent macOS software support."],
    products: [
      { name: "Logitech Lift", bestFor: "Mac-friendly daily use", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift for Mac") },
      { name: "Logitech MX Vertical", bestFor: "Premium macOS setup", price: "$$$", rating: "4.5/5", amazonUrl: a("MX Vertical") },
      { name: "ProtoArc EM11", bestFor: "Budget Mac option", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc EM11") },
    ],
  },
  {
    slug: "best-vertical-mouse-for-gaming",
    title: "Best Vertical Mouse for Gaming Comfort",
    description: "Low-strain picks for casual and hybrid gaming setups.",
    intent: "commercial",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
    body: ["Pure competitive gaming still favors traditional mice.", "But vertical options can help long sessions and wrist comfort."],
    products: [
      { name: "Razer Pro Click Vertical", bestFor: "Performance comfort", price: "$$$", rating: "4.4/5", amazonUrl: a("Razer Pro Click vertical") },
      { name: "Delux M618", bestFor: "Budget gaming comfort", price: "$$", rating: "4.2/5", amazonUrl: a("Delux M618") },
      { name: "J-Tech V628", bestFor: "Large grip gamers", price: "$$", rating: "4.3/5", amazonUrl: a("J-Tech V628") },
    ],
  },
  {
    slug: "best-vertical-mouse-for-large-hands",
    title: "Best Vertical Mouse for Large Hands",
    description: "Larger-shell vertical mice that prevent cramped finger posture.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1600&q=80",
    body: ["Large hands need wider shells and longer thumb rests.", "Undersized models increase finger curl fatigue."],
    products: [
      { name: "MX Vertical", bestFor: "Premium large hands", price: "$$$", rating: "4.5/5", amazonUrl: a("MX Vertical mouse") },
      { name: "J-Tech V628", bestFor: "Large palm support", price: "$$", rating: "4.3/5", amazonUrl: a("J-Tech V628") },
      { name: "Evoluent VM4R", bestFor: "Medical ergonomic fit", price: "$$$", rating: "4.4/5", amazonUrl: a("Evoluent VM4R") },
    ],
  },
  {
    slug: "best-rechargeable-vertical-mouse",
    title: "Best Rechargeable Vertical Mouse",
    description: "USB-C and long-battery ergonomic picks for cable-free setups.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1600&q=80",
    body: ["Rechargeable models cut battery waste and desk clutter.", "Check charging cycle consistency and sleep/wake speed."],
    products: [
      { name: "Logitech Lift", bestFor: "Reliable daily use", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift") },
      { name: "Lekvey Rechargeable", bestFor: "Value rechargeable", price: "$", rating: "4.3/5", amazonUrl: a("Lekvey rechargeable vertical mouse") },
      { name: "Delux M618 Plus", bestFor: "Feature rich", price: "$$", rating: "4.2/5", amazonUrl: a("Delux M618 Plus") },
    ],
  },
  {
    slug: "best-ergonomic-mouse-for-programmers",
    title: "Best Ergonomic Mouse for Programmers",
    description: "Comfort-focused picks for long coding sessions and repetitive clicking.",
    intent: "commercial",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1600&q=80",
    body: ["Programmers need low fatigue and precision over long sessions.", "Button consistency matters more than flashy specs."],
    products: [
      { name: "MX Vertical", bestFor: "Premium coding ergonomics", price: "$$$", rating: "4.5/5", amazonUrl: a("MX Vertical") },
      { name: "Logitech Lift", bestFor: "Best all-round coding", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift") },
      { name: "Anker Vertical", bestFor: "Budget programming", price: "$", rating: "4.4/5", amazonUrl: a("Anker ergonomic vertical") },
    ],
  },
  {
    slug: "best-ergonomic-setup-for-wrist-pain",
    title: "Best Ergonomic Desk Setup for Wrist Pain",
    description: "Mouse + keyboard + desk accessories that work together.",
    intent: "commercial",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1600&q=80",
    body: ["Your mouse alone won’t fix poor desk mechanics.", "Use neutral wrist posture and proper desk height alignment."],
    products: [
      { name: "Vertical Mouse + Wrist Rest", bestFor: "Core pain relief", price: "$$", rating: "4.5/5", amazonUrl: a("vertical mouse wrist rest bundle") },
      { name: "Split Keyboard", bestFor: "Typing alignment", price: "$$$", rating: "4.4/5", amazonUrl: a("split ergonomic keyboard") },
      { name: "Adjustable Desk", bestFor: "Posture improvements", price: "$$$$", rating: "4.6/5", amazonUrl: a("adjustable standing desk") },
    ],
  },
  {
    slug: "logitech-lift-vs-mx-vertical",
    title: "Logitech Lift vs MX Vertical",
    description: "Direct comparison: comfort, size fit, and value.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&w=1600&q=80",
    body: ["Lift is better for smaller hands and value.", "MX Vertical wins for premium feel and larger hands."],
    products: [
      { name: "Logitech Lift", bestFor: "Small/medium hands", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift") },
      { name: "MX Vertical", bestFor: "Large hands", price: "$$$", rating: "4.5/5", amazonUrl: a("MX Vertical") },
      { name: "MX Ergo", bestFor: "Alternative trackball", price: "$$$", rating: "4.6/5", amazonUrl: a("MX Ergo") },
    ],
  },
  {
    slug: "best-vertical-mouse-for-arthritis",
    title: "Best Vertical Mouse for Arthritis",
    description: "Low-click-force ergonomic picks for arthritis-sensitive hands.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    body: ["Arthritis users need low actuation force and stable grip.", "Avoid heavy-click designs that increase knuckle strain."],
    products: [
      { name: "Logitech Lift", bestFor: "Low click force", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift") },
      { name: "Evoluent VM4", bestFor: "Clinical ergonomics", price: "$$$", rating: "4.4/5", amazonUrl: a("Evoluent VM4") },
      { name: "Anker Vertical", bestFor: "Budget arthritis option", price: "$", rating: "4.4/5", amazonUrl: a("Anker vertical mouse") },
    ],
  },
  {
    slug: "best-wireless-ergonomic-mouse-for-work-from-home",
    title: "Best Wireless Ergonomic Mouse for Work From Home",
    description: "Reliable wireless picks for remote professionals and long desk sessions.",
    intent: "transactional",
    updated: "2026-02-24",
    heroImage: "https://images.unsplash.com/photo-1593642702744-5c0f2e7f6f7f?auto=format&fit=crop&w=1600&q=80",
    body: ["WFH users need comfort plus seamless multi-device switching.", "Battery life and connection stability matter more than RGB."],
    products: [
      { name: "MX Vertical", bestFor: "Premium WFH", price: "$$$", rating: "4.5/5", amazonUrl: a("MX Vertical") },
      { name: "Logitech Lift", bestFor: "Best value WFH", price: "$$", rating: "4.6/5", amazonUrl: a("Logitech Lift") },
      { name: "ProtoArc EM11", bestFor: "Budget WFH", price: "$$", rating: "4.4/5", amazonUrl: a("ProtoArc EM11") },
    ],
  },
];

export const site = {
  name: "ErgoMint",
  description: "Evidence-led ergonomic buying guides for pain-aware productivity.",
  url: "https://mouse-one-rouge.vercel.app",
};
