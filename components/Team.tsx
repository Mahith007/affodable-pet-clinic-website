import React from "react";
import { veterinarians, type Vet } from "@/data/clinic";
import { Section, SectionHeading } from "./Section";

function getInitials(vet: Vet) {
  if (vet.initials) return vet.initials;
  return vet.name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function Team() {
  return (
    <Section id="team" className="bg-white">
      <SectionHeading
        eyebrow="Meet our team"
        title="Our veterinarian"
        description="Your pet is cared for by our veterinarian, Dr. Narender Cheemerla."
      />

      <ul className="mx-auto mt-12 grid max-w-3xl gap-6">
        {veterinarians.map((vet) => (
          <li
            key={vet.name}
            className="flex flex-col items-center gap-6 rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-card sm:flex-row sm:p-8 sm:text-left"
          >
            <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-brand-100 text-3xl font-bold text-brand-700">
              {getInitials(vet)}
            </span>
            <div>
              <h3 className="text-xl font-semibold">{vet.name}</h3>
              <p className="mt-1 text-sm font-medium text-brand-700">
                {vet.role}
              </p>
              {vet.credentials ? (
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-ink-400">
                  {vet.credentials}
                </p>
              ) : null}
              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {vet.bio}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}