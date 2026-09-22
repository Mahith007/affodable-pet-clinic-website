import React from "react";
import { clinic, emergencyInfo } from "@/data/clinic";
import { AlertIcon, PhoneIcon } from "./Icons";
import { Section, SectionHeading } from "./Section";

export function Emergency() {
  return (
    <Section id="emergency" className="bg-accent-50">
      <SectionHeading
        eyebrow="Emergency information"
        title="Important emergency notice"
        description={emergencyInfo.bannerText}
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-start">
        {/* Warning signs */}
        <div className="rounded-2xl border border-accent-200 bg-white p-6 shadow-card sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-100 text-accent-600">
              <AlertIcon className="h-6 w-6" />
            </span>
            <h3 className="text-lg font-semibold">
              Signs that may need urgent care
            </h3>
          </div>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {emergencyInfo.warnings.map((warning) => (
              <li key={warning} className="flex gap-2.5 text-sm text-ink-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                <span className="leading-relaxed">{warning}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl bg-accent-50 p-4 text-sm font-medium leading-relaxed text-accent-800">
            {emergencyInfo.note}
          </p>
        </div>

        {/* Notice card */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-accent-200 bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold">
              We are not an emergency hospital
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              {emergencyInfo.notice}
            </p>
          </div>

          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
            <h3 className="text-base font-semibold">Contact us</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              For non-emergency questions, appointments, or to check
              availability, please call our clinic during opening hours.
            </p>
            <a href={clinic.phoneHref} className="btn-primary mt-5 w-full">
              <PhoneIcon className="h-5 w-5" />
              Call Us: {clinic.phone}
            </a>
            <p className="mt-4 text-xs leading-relaxed text-ink-500">
              If your pet is experiencing a medical emergency, please contact an
              emergency veterinary facility immediately.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}