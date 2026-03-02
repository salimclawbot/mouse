export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p>
        For editorial feedback, corrections, partnership requests, or privacy inquiries, contact us at:
      </p>
      <p>
        <a className="text-emerald-700 underline" href="mailto:hello@verticalmouseguide.com">
          hello@verticalmouseguide.com
        </a>
      </p>
      <p>Response target: 2-5 business days.</p>
    </div>
  );
}
