import React from "react";
import { clinic } from "@/data/clinic";
import { CheckIcon } from "./Icons";
import { Section, SectionHeading } from "./Section";

const values = [
  {
    title: "Comprehensive medical & surgical care",
    body: "We provide medical and surgical care for small-animal patients, from routine wellness visits to advanced procedures.",
  },
  {
    title: "Affordable prices",
    body: "We are committed to keeping quality veterinary care accessible with affordable pricing.",
  },
  {
    title: "Appointments & walk-ins",
    body: "We accept both appointments and walk-ins. Appointments receive priority, so we recommend calling ahead.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Text */}
        <div>
          <SectionHeading
            eyebrow="About the clinic"
            title={`Welcome to ${clinic.name}`}
            description={`${clinic.name} opened in November ${clinic.established} and serves pet owners in ${clinic.address.city} and the surrounding area. We provide comprehensive medical and surgical care for small-animal patients at affordable prices.`}
            align="left"
          />

          <div className="mt-8 space-y-6">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{value.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-600">
                    {value.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Contact the clinic
            </a>
          </div>
        </div>

        {/* Info panel */}
        <div className="rounded-4xl bg-brand-600 p-8 text-white shadow-soft sm:p-10">
          <h3 className="text-xl font-semibold text-white">Clinic details</h3>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="font-semibold text-brand-100">Address</dt>
              <dd className="mt-1 text-white">
                {clinic.address.line1}
                <br />
                {clinic.address.city}, {clinic.address.state}{" "}
                {clinic.address.zip}
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-100">Phone</dt>
              <dd className="mt-1">
                <a href={clinic.phoneHref} className="text-white hover:underline">
                  {clinic.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-100">Fax</dt>
              <dd className="mt-1 text-white">{clinic.fax}</dd>
            </div>
            <div>
              <dt className="font-semibold text-brand-100">Opened</dt>
              <dd className="mt-1 text-white">November {clinic.established}</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}