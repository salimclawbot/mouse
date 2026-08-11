export type AmazonProductRecord = { id: string; asin: string; label: string };
export type AmazonProductGroup = { heading: string; similarQuery: string; products: AmazonProductRecord[] };

export const allowedAmazonProducts: Record<string, AmazonProductRecord> = {
  "VM-CURRENT-EVOLUENT-SMALL": {
    "id": "VM-CURRENT-EVOLUENT-SMALL",
    "asin": "B07Y8V19TC",
    "label": "Evoluent VerticalMouse Small"
  },
  "VM-CANDIDATE-LOGITECH-LIFT-RIGHT-GRAPHITE": {
    "id": "VM-CANDIDATE-LOGITECH-LIFT-RIGHT-GRAPHITE",
    "asin": "B09J1TB35S",
    "label": "Logitech Lift Right, Graphite"
  }
};

const groups: Record<string, AmazonProductGroup> = {
  "best-vertical-mouse-small-hands-womens": {
    "heading": "Exact mouse variants referenced in this guide",
    "similarQuery": "vertical ergonomic mouse small hands",
    "products": [
      {
        "id": "VM-CURRENT-EVOLUENT-SMALL",
        "asin": "B07Y8V19TC",
        "label": "Evoluent VerticalMouse Small"
      },
      {
        "id": "VM-CANDIDATE-LOGITECH-LIFT-RIGHT-GRAPHITE",
        "asin": "B09J1TB35S",
        "label": "Logitech Lift Right, Graphite"
      }
    ]
  }
};

export function getAmazonProductGroup(slug: string): AmazonProductGroup | null {
  const exact = groups[slug];
  if (exact) return exact;

  const allowed = /(best-|review|buying-guide|clean|set-up|setup|sensitivity|vs-|adjust|wireless|gaming|office|remote-workers|graphic-design|left-handed|small-hands|macbook)/i.test(slug);
  const denied = /(cure-rsi|help-wrist-pain|carpal-tunnel)/i.test(slug);
  if (!allowed || denied) return null;

  return {
    heading: "Ergonomic mouse listings related to this guide",
    similarQuery: "ergonomic vertical mouse",
    products: [],
  };
}
