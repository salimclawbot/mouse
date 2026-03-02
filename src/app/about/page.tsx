export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">About Vertical Mouse Guide</h1>
      <p>
        Vertical Mouse Guide is an evidence-led buying guide publication focused on vertical and
        ergonomic mice, wrist comfort, and sustainable desk productivity.
      </p>
      <p>
        We publish for practical decision-making: what to buy, why it fits, what tradeoffs matter,
        and what to avoid.
      </p>

      <h2 className="text-xl font-semibold">Editorial scope</h2>
      <p>
        We cover office and creator workflows where comfort, click quality, reliability, and
        long-session usability matter. We do not provide medical diagnosis or treatment advice.
      </p>

      <h2 className="text-xl font-semibold">How we maintain trust</h2>
      <ul className="list-disc space-y-1 pl-6">
        <li>Clear affiliate disclosures</li>
        <li>Published editorial and corrections policies</li>
        <li>Guide updates when material product changes occur</li>
        <li>Transparent contact channel for feedback and fixes</li>
      </ul>
    </div>
  );
}
