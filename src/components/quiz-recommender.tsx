"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/content";

type Props = {
  products: Product[];
};

type Answers = {
  hand?: "tiny" | "small";
  pain?: "high" | "medium";
  priority?: "comfort" | "budget" | "rechargeable";
};

const visuals: Record<string, string> = {
  "Logitech Lift": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
  "Anker Ergonomic Vertical": "https://images.unsplash.com/photo-1616587894289-86480e533129?auto=format&fit=crop&w=1200&q=80",
  "Lekvey Rechargeable Vertical": "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=1200&q=80",
};

export default function QuizRecommender({ products }: Props) {
  const [answers, setAnswers] = useState<Answers>({});

  const result = useMemo(() => {
    if (!answers.hand || !answers.pain || !answers.priority) return null;

    let target = "Logitech Lift";
    if (answers.priority === "budget") target = "Anker Ergonomic Vertical";
    else if (answers.priority === "rechargeable") target = "Lekvey Rechargeable Vertical";
    else if (answers.pain === "high") target = "Logitech Lift";

    const product = products.find((p) => p.name === target) ?? products[0];
    if (!product) return null;

    const reason =
      target === "Anker Ergonomic Vertical"
        ? "Best value-first pick if you want to test ergonomics at lower cost."
        : target === "Lekvey Rechargeable Vertical"
        ? "Best if USB charging and cable-free desk setup are your top priority."
        : "Best all-round comfort for small hands with lower adaptation friction.";

    return {
      ...product,
      image: visuals[product.name] || visuals["Logitech Lift"],
      reason,
    };
  }, [answers, products]);

  return (
    <section className="space-y-4 rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6">
      <h2 className="text-2xl font-bold text-slate-900">Interactive Quick Decision Quiz</h2>
      <p className="text-slate-700">Answer 3 questions and get your best starting pick.</p>

      <div className="space-y-4">
        <div>
          <p className="mb-2 text-sm font-semibold">1) Your hand size range</p>
          <div className="flex flex-wrap gap-2">
            {[
              ["tiny", "Tiny (<17cm)"],
              ["small", "Small (17–19cm)"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setAnswers((s) => ({ ...s, hand: value as Answers["hand"] }))}
                className={`rounded-md border px-3 py-2 text-sm ${answers.hand === value ? "border-indigo-600 bg-indigo-100" : "border-slate-300 bg-white"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold">2) Current pain/strain level</p>
          <div className="flex flex-wrap gap-2">
            {[
              ["high", "High (flare-ups frequent)"],
              ["medium", "Medium (end-of-day fatigue)"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setAnswers((s) => ({ ...s, pain: value as Answers["pain"] }))}
                className={`rounded-md border px-3 py-2 text-sm ${answers.pain === value ? "border-indigo-600 bg-indigo-100" : "border-slate-300 bg-white"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-semibold">3) Top priority</p>
          <div className="flex flex-wrap gap-2">
            {[
              ["comfort", "Easiest comfort"],
              ["budget", "Lowest price"],
              ["rechargeable", "Rechargeable"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setAnswers((s) => ({ ...s, priority: value as Answers["priority"] }))}
                className={`rounded-md border px-3 py-2 text-sm ${answers.priority === value ? "border-indigo-600 bg-indigo-100" : "border-slate-300 bg-white"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {result && (
        <div className="mt-4 overflow-hidden rounded-xl border border-indigo-200 bg-white">
          <div className="grid gap-0 md:grid-cols-2">
            <Image src={result.image} alt={`${result.name} recommended result`} width={1200} height={800} className="h-full min-h-[220px] w-full object-cover" />
            <div className="space-y-3 p-5">
              <p className="text-xs font-semibold uppercase text-indigo-700">Your Recommended Pick</p>
              <h3 className="text-xl font-bold text-slate-900">{result.name}</h3>
              <p className="text-sm text-slate-600">Best for: {result.bestFor}</p>
              <p className="text-sm text-slate-700">{result.reason}</p>
              <Button asChild>
                <Link href={result.amazonUrl} target="_blank">View on Amazon</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
