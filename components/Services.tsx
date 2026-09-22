import React from "react";
import { services } from "@/data/clinic";
import { ServiceIcon } from "./Icons";
import { Section, SectionHeading } from "./Section";

export function Services() {
  return (
    <Section id="services" className="bg-ink-50">
      <SectionHeading
        eyebrow="Veterinary services"
        title="Complete care for every stage of life"
        description="From routine wellness visits to advanced diagnostics and surgery, we offer a full range of services under one roof."
      />

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <li
            key={service.title}
            className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-card transition-transform duration-200 hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-700 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <ServiceIcon name={service.icon} className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-base font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              {service.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}