import React from "react";
import { petCareTips } from "@/data/clinic";
import { CheckIcon } from "./Icons";
import { Section, SectionHeading } from "./Section";

export function PetCare() {
  return (
    <Section id="pet-care" className="bg-ink-50">
      <SectionHeading
        eyebrow="Pet care information"
        title="Everyday advice for happy, healthy pets"
        description="A few simple habits go a long way. Here is our quick guide for caring for your companion between visits."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {petCareTips.map((tip) => (
          <article
            key={tip.title}
            className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card"
          >
            <h3 className="text-base font-semibold text-brand-700">
              {tip.title}
            </h3>
            <p className="mt-1 text-sm text-ink-500">{tip.summary}</p>
            <ul className="mt-4 space-y-2.5">
              {tip.points.map((point) => (
                <li key={point} className="flex gap-2.5 text-sm text-ink-700">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}