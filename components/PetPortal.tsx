import React from "react";
import { petPortal } from "@/data/clinic";
import { ArrowRightIcon, PawIcon } from "./Icons";
import { Section } from "./Section";

export function PetPortal() {
  return (
    <Section id="pet-portal" className="bg-white">
      <div className="overflow-hidden rounded-4xl bg-brand-600 px-6 py-10 text-white shadow-soft sm:px-10 sm:py-12">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
              <PawIcon className="h-7 w-7" />
            </span>
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {petPortal.heading}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-brand-50 sm:text-base">
                {petPortal.description}
              </p>
            </div>
          </div>

          <a
            href={petPortal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white w-full shrink-0 sm:w-auto"
          >
            {petPortal.action}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}