export const metadata = { title: "Affiliate Disclosure" };

export default function DisclosurePage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Affiliate Disclosure</h1>
      <p>
        Vertical Mouse Guide is a reader-supported publication. To keep our content free and
        accessible, we participate in affiliate programs that allow us to earn a small commission
        when you purchase products through links on our site.
      </p>

      <h2 className="text-xl font-semibold">What Are Affiliate Links?</h2>
      <p>
        Affiliate links are specially tracked URLs that connect you to a retailer&apos;s website. When
        you click one of these links and make a purchase, the retailer records that the visit
        originated from our site and pays us a referral commission. This happens behind the scenes
        and has no effect on the price you pay — you will never be charged more for using an
        affiliate link compared to navigating to the product page directly.
      </p>

      <h2 className="text-xl font-semibold">Which Programs We Participate In</h2>
      <p>
        Vertical Mouse Guide is a participant in the Amazon Services LLC Associates Program, an
        affiliate advertising program designed to provide a means for sites to earn advertising fees
        by advertising and linking to amazon.com. We may also participate in other affiliate
        programs with retailers that sell ergonomic products relevant to our coverage.
      </p>

      <h2 className="text-xl font-semibold">How It Works</h2>
      <p>
        When you click an affiliate link on our site and complete a purchase, we may earn a small
        commission. This commission comes from the retailer, not from you. The price you pay is the
        same whether you use our link or go to the retailer directly. Affiliate revenue helps us
        cover the costs of testing products, maintaining the site, and producing new reviews and
        guides.
      </p>

      <h2 className="text-xl font-semibold">Editorial Independence</h2>
      <p>
        Affiliate relationships do not influence our reviews, scores, or rankings. Our 100-point
        scoring methodology — weighted across Fit (35%), Comfort (25%), Control (20%), and Value
        (20%) — is applied consistently to every product regardless of whether we earn a commission
        on it. Products that score poorly are published with their low scores intact. We do not
        accept payment from manufacturers for favorable reviews, and no brand can buy a higher
        placement on our site.
      </p>
      <p>
        Our editorial decisions are made independently by our review team. You can read more about
        how we evaluate products in our{" "}
        <a className="text-emerald-700 underline" href="/editorial-policy">
          Editorial Policy
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold">Our Commitment to Transparency</h2>
      <p>
        We believe readers deserve to know how a publication earns money. That is why we disclose
        affiliate relationships clearly on this page and throughout the site wherever affiliate links
        appear. If you ever have questions about our affiliate practices or want to know whether a
        specific link is an affiliate link, feel free to reach out at{" "}
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>
        .
      </p>
    </div>
  );
}
