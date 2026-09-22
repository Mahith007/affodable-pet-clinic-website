import React from "react";
import { clinic, openingHours } from "@/data/clinic";
import { ClockIcon, PhoneIcon } from "./Icons";
import { Section, SectionHeading } from "./Section";

export function OpeningHours() {
  const todayName = new Date().toLocaleDateString("en-US", { weekday: "long" });

  return (
    <Section id="hours" className="bg-white">
      <SectionHeading
        eyebrow="Opening hours"
        title="When we are open"
        description="Our team is available throughout the week. Please call ahead to confirm holiday hours."
      />

      <div className="mx-auto mt-12 grid max-w-4xl gap-8 lg:grid-cols-5 lg:items-start">
        {/* Hours list */}
        <div className="lg:col-span-3">
          <ul className="divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
            {openingHours.map((entry) => {
              const isToday = entry.day === todayName;
              return (
                <li
                  key={entry.day}
                  className={`flex items-center justify-between gap-4 px-5 py-4 ${
                    isToday ? "bg-brand-50" : ""
                  }`}
                >
                  <span className="flex items-center gap-2 text-sm font-medium text-ink-800">
                    {entry.day}
                    {isToday ? (
                      <span className="rounded-full bg-brand-600 px-2 py-0.5 text-xs font-semibold text-white">
                        Today
                      </span>
                    ) : null}
                  </span>
                  <span
                    className={`text-sm font-semibold ${
                      entry.closed ? "text-accent-600" : "text-ink-700"
                    }`}
                  >
                    {entry.hours}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Info card */}
        <aside className="rounded-2xl bg-ink-950 p-6 text-white shadow-soft lg:col-span-2">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
            <ClockIcon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-white">
            Questions about a visit?
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-200">
            Give us a call and our friendly team will help you find a time that
            works for you and your pet.
          </p>
          <a href={clinic.phoneHref} className="btn-white mt-6 w-full">
            <PhoneIcon className="h-5 w-5" />
            {clinic.phone}
          </a>
          <p className="mt-4 text-xs leading-relaxed text-ink-400">
            Affordable Pet Clinic is not an emergency hospital. Outside of
            opening hours, or in an emergency, please contact an emergency
            veterinary facility.
          </p>
        </aside>
      </div>
    </Section>
  );
}