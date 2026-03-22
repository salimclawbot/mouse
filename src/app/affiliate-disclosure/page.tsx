export const metadata = { title: "Affiliate Disclosure",
  alternates: { canonical: "https://www.verticalmouseguide.com/affiliate-disclosure" }
};

export default function DisclosurePage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Affiliate Disclosure</h1>
      <p>
        Vertical Mouse Guide is a reader-supported publication. This means some links on this site
        are affiliate links, and we may earn a commission when you make a qualifying purchase after
        clicking one of those links. We publish this disclosure to be fully transparent about how the
        site earns revenue and to comply with the Federal Trade Commission (FTC) disclosure
        guidelines.
      </p>

      <h2 className="text-xl font-semibold">Clear FTC Disclosure</h2>
      <p>
        In plain terms: if you click certain product links on verticalmouseguide.com and buy
        something, we may receive compensation from the merchant or affiliate network. This comes at
        no additional cost to you. The price you pay is the same whether you use an affiliate link or
        navigate directly to the retailer.
      </p>
      <p>
        We include this disclosure prominently so readers understand the commercial relationship
        behind referral links before making a purchase decision.
      </p>

      <h2 className="text-xl font-semibold">Affiliate Programs We Participate In</h2>
      <p>
        Vertical Mouse Guide participates in multiple affiliate programs relevant to ergonomic and
        productivity hardware. These may include:
      </p>
      <ul className="list-disc space-y-1 pl-6">
        <li>
          <strong>Amazon Associates</strong> (Amazon Services LLC Associates Program)
        </li>
        <li>
          <strong>Impact</strong> partner programs
        </li>
        <li>
          <strong>CJ Affiliate</strong> (Commission Junction)
        </li>
        <li>
          <strong>ShareASale / Awin</strong> merchant programs
        </li>
        <li>
          <strong>Direct merchant affiliate programs</strong> where available
        </li>
      </ul>
      <p>
        Program participation can change as retailers and networks update availability, terms, or
        commission structures. We update this page periodically to reflect material changes.
      </p>

      <h2 className="text-xl font-semibold">How Affiliate Links Work</h2>
      <p>
        Affiliate links contain tracking information that identifies the referring publisher. If you
        click one of these links and complete a qualifying purchase within the merchant&apos;s allowed
        attribution window, the merchant may attribute that sale to Vertical Mouse Guide and pay us a
        commission.
      </p>
      <p>
        Affiliate commissions help fund product research, editorial operations, site hosting,
        technical maintenance, and ongoing updates to buyer guides. This support allows us to keep
        content free to read without requiring paid subscriptions.
      </p>

      <h2 className="text-xl font-semibold">Editorial Independence and Ranking Integrity</h2>
      <p>
        Affiliate relationships do not buy rankings, ratings, or placement. Our editorial process is
        independent of affiliate partners. We do not accept payment in exchange for positive reviews,
        and we do not guarantee favorable coverage to any brand.
      </p>
      <p>
        Our guides use a consistent scoring framework and practical buyer criteria. Products may rank
        highly, mid-pack, or poorly based on fit, comfort, performance, reliability, and value.
        Items with lower scores remain published when they are relevant to the comparison.
      </p>
      <p>
        For additional details about how we evaluate products, see our{" "}
        <a className="text-emerald-700 underline" href="/editorial-policy">
          Editorial Policy
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold">No Additional Cost to You</h2>
      <p>
        Affiliate commissions are paid by the retailer or affiliate platform, not by the user. Using
        an affiliate link does not increase your purchase price. In many cases, retailer promotions,
        coupons, and discounts still apply normally.
      </p>

      <h2 className="text-xl font-semibold">Questions About a Specific Link</h2>
      <p>
        If you want to confirm whether a specific link is an affiliate link, contact us and include
        the page URL. We are happy to provide clarification.
      </p>
      <p>
        Email: <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">hello@verticalmouseguide.com</a>
      </p>
    </div>
  );
}
