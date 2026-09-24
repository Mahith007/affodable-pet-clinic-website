import React from "react";
import Link from "next/link";
import { addressLines, clinic, footerLinks, openingHours } from "@/data/clinic";
import { ClockIcon, MapPinIcon, PawIcon, PhoneIcon } from "./Icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="container-page py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                <PawIcon className="h-5 w-5" />
              </span>
              <span className="text-base font-bold text-white">
                {clinic.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-300">
              {clinic.tagline}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              Opened in November {clinic.established}. Appointments and
              walk-ins welcome; appointments receive priority.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-300">
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={clinic.phoneHref} className="hover:text-white">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 w-4 shrink-0 text-center text-xs font-bold text-brand-400">
                  F
                </span>
                <span>Fax: {clinic.fax}</span>
              </li>
              <li className="flex gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="leading-relaxed">
                  {addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Opening hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {openingHours.map((entry) => (
                <li
                  key={entry.day}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="text-ink-300">{entry.day.slice(0, 3)}</span>
                  <span
                    className={entry.closed ? "text-accent-400" : "text-white"}
                  >
                    {entry.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-xs text-ink-400">
              <ClockIcon className="h-3.5 w-3.5" />
              <span>
                {"Not an emergency hospital. For emergencies, contact an"}
                {" emergency veterinary facility."}
              </span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-400">
            &copy; {year} {clinic.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-400">
            {clinic.address.line1}, {clinic.address.city},{" "}
            {clinic.address.state} {clinic.address.zip}
          </p>
        </div>
      </div>
    </footer>
  );
}