export const metadata = { title: "Editorial Policy" };

export default function EditorialPolicyPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Editorial Policy</h1>
      <p>
        Vertical Mouse Guide publishes evidence-led product guides focused on fit, comfort,
        reliability, and ownership value.
      </p>
      <h2 className="text-xl font-semibold">How we evaluate products</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Use-case fit and ergonomic alignment</li>
        <li>Workflow performance in real office scenarios</li>
        <li>Reliability, support quality, and return-policy confidence</li>
        <li>Price-to-value tradeoffs across comparable alternatives</li>
      </ul>
      <h2 className="text-xl font-semibold">Independence</h2>
      <p>
        Affiliate relationships never guarantee a recommendation. Ranking decisions are made by
        editorial criteria, not payout rates.
      </p>
      <h2 className="text-xl font-semibold">Updates</h2>
      <p>
        Guides are reviewed regularly and updated when product availability, pricing, or quality
        signals change materially.
      </p>
    </div>
  );
}
