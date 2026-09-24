"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinic, navLinks } from "@/data/clinic";
import { CloseIcon, MenuIcon, PawIcon, PhoneIcon } from "./Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Add a subtle shadow once the user scrolls down.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-ink-100 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <Link
        href="/"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </Link>

      <nav
        className="container-page flex h-16 items-center justify-between gap-4"
        aria-label="Primary"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
            <PawIcon className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold text-ink-950 sm:text-base">
              {clinic.shortName}
            </span>
            <span className="hidden text-xs font-medium text-ink-500 sm:block">
              Houston, TX
            </span>
          </span>
        </Link>

        {/* Desktop links — flat, no dropdown */}
        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop call button */}
        <a
          href={clinic.phoneHref}
          className="btn-primary hidden shrink-0 xl:inline-flex"
        >
          <PhoneIcon className="h-4 w-4" />
          Call {clinic.phone}
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-800 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu — flat list, no dropdown */}
      <div
        id="mobile-menu"
        className={`xl:hidden ${open ? "block" : "hidden"} border-t border-ink-100 bg-white`}
      >
        <div className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={clinic.phoneHref}
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            <PhoneIcon className="h-5 w-5" />
            Call {clinic.phone}
          </a>
        </div>
      </div>
    </header>
  );
}