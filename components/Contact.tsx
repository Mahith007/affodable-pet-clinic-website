import React from "react";
import {
  addressLines,
  clinic,
  hoursSummary,
  mapDirectionsUrl,
  mapEmbedSrc,
} from "@/data/clinic";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from "./Icons";
import { Section, SectionHeading } from "./Section";

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <SectionHeading
        eyebrow="Contact & location"
        title="Visit us or get in touch"
        description="We welcome appointments and walk-ins, with appointments receiving priority. Reach us by phone or stop by the clinic."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:items-start">
        {/* Contact details */}
        <div className="space-y-6 lg:col-span-2">
          {/* Phone */}
          <div className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold">Phone</h3>
              <a
                href={clinic.phoneHref}
                className="mt-1 block text-sm font-medium text-brand-700 hover:underline"
              >
                {clinic.phone}
              </a>
              <p className="text-xs text-ink-500">Fax: {clinic.fax}</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
              <MapPinIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold">Address</h3>
              <address className="mt-1 not-italic text-sm leading-relaxed text-ink-600">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={mapDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:underline"
              >
                Get directions
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          {/* Hours summary */}
          <div className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-card">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
              <ClockIcon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold">Hours</h3>
              <ul className="mt-1 space-y-1 text-sm text-ink-600">
                {hoursSummary.map((row) => (
                  <li key={row.label}>
                    {row.label}: {row.value}
                  </li>
                ))}
              </ul>
              <a
                href="#hours"
                className="mt-2 inline-block text-sm font-semibold text-brand-700 hover:underline"
              >
                See full hours
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={clinic.phoneHref} className="btn-primary w-full sm:w-auto">
              <PhoneIcon className="h-5 w-5" />
              Call Us
            </a>
            <a
              href={mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full sm:w-auto"
            >
              <MapPinIcon className="h-4 w-4" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border border-ink-100 shadow-card">
            <iframe
              title={`Map showing the location of ${clinic.name}`}
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 sm:h-96 lg:h-[32rem]"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-xs text-ink-500">
            {clinic.address.line1}, {clinic.address.city},{" "}
            {clinic.address.state} {clinic.address.zip}
          </p>
        </div>
      </div>
    </Section>
  );
}