import React from "react";
import { clinic, hoursSummary, openingHours } from "@/data/clinic";
import { ArrowRightIcon, CheckIcon, ClockIcon, PhoneIcon } from "./Icons";

const highlights = [
  "Comprehensive medical care",
  "Surgical services",
  "Affordable prices",
];

export function Hero() {
  const today = openingHours.find(
    (entry) =>
      entry.day === new Date().toLocaleDateString("en-US", { weekday: "long" }),
  );

  return (
    <section id="home" className="relative overflow-hidden bg-brand-50">
      {/* Soft decorative background shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-200/50 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-accent-100/60 blur-2xl"
      />

      <div className="container-page relative grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-24">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-brand-500" />
            Serving Houston since {clinic.established}
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink-950 sm:text-5xl">
            Veterinary care for your pet in {clinic.address.city}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
            {clinic.tagline} We welcome both appointments and walk-ins, with
            appointments receiving priority.
          </p>

          {/* Call to action */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={clinic.phoneHref} className="btn-primary w-full sm:w-auto">
              <PhoneIcon className="h-5 w-5" />
              Call Us: {clinic.phone}
            </a>
            <a href="#services" className="btn-outline w-full sm:w-auto">
              View Our Services
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Highlights */}
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-ink-700"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Visual card */}
        <div className="animate-fade-up">
          <div className="relative mx-auto max-w-md rounded-4xl border border-white bg-white p-6 shadow-soft sm:p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <ClockIcon className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-medium text-ink-500">
                  {"Today's hours"}
                </p>
                <p className="text-lg font-bold text-ink-950">
                  {today ? today.hours : "Call to confirm"}
                </p>
              </div>
            </div>

            <hr className="my-6 border-ink-100" />

            <dl className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm font-medium text-ink-500">Phone</dt>
                <dd className="text-right text-sm font-semibold">
                  <a
                    href={clinic.phoneHref}
                    className="text-brand-700 hover:underline"
                  >
                    {clinic.phone}
                  </a>
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm font-medium text-ink-500">Fax</dt>
                <dd className="text-right text-sm font-semibold text-ink-800">
                  {clinic.fax}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-4">
                <dt className="text-sm font-medium text-ink-500">Address</dt>
                <dd className="text-right text-sm font-semibold text-ink-800">
                  {clinic.address.line1}
                  <br />
                  {clinic.address.city}, {clinic.address.state}{" "}
                  {clinic.address.zip}
                </dd>
              </div>
            </dl>

            <a href="#contact" className="btn-accent mt-8 w-full">
              Get Directions & Contact Info
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}