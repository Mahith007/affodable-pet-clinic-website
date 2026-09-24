"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clinic, menuDropdownLinks, navLinks } from "@/data/clinic";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  PawIcon,
  PhoneIcon,
} from "./Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const pathname = usePathname();
  const menuActive = menuDropdownLinks.some((item) => item.href === pathname);

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

  // Close the desktop dropdown on outside click / Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  // Close menus whenever the route changes.
  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-ink-100 bg-white/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <Link
        href="/#home"
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
          href="/#home"
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

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-haspopup="true"
              className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-50 hover:text-brand-700 ${
                menuActive ? "bg-brand-50 text-brand-700" : "text-ink-700"
              }`}
            >
              Menu
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
              />
            </button>
            {menuOpen ? (
              <div className="absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-2">
                <ul className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-2 shadow-soft">
                  {menuDropdownLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-xl px-4 py-3 transition-colors hover:bg-brand-50"
                      >
                        <span className="block text-sm font-semibold text-ink-900">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-xs text-ink-500">
                          {item.description}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </li>
          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop call button */}
        <a
          href={clinic.phoneHref}
          className="btn-primary hidden shrink-0 lg:inline-flex"
        >
          <PhoneIcon className="h-4 w-4" />
          Call {clinic.phone}
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-800 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${open ? "block" : "hidden"} border-t border-ink-100 bg-white`}
      >
        <div className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.slice(0, 2).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 overflow-hidden rounded-lg border border-ink-100">
              <button
                type="button"
                onClick={() => setMobileMenuOpen((v) => !v)}
                aria-expanded={mobileMenuOpen}
                className="flex w-full items-center justify-between bg-ink-50 px-3 py-2.5 text-left text-base font-semibold text-ink-900"
              >
                Menu
                <ChevronDownIcon
                  className={`h-5 w-5 text-ink-500 transition-transform duration-200 ${mobileMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              <ul
                className={`${mobileMenuOpen ? "block" : "hidden"} divide-y divide-ink-100 bg-white`}
              >
                {menuDropdownLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-5 py-3 text-ink-800 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <span className="block text-base font-medium">
                        {item.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-ink-500">
                        {item.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {navLinks.slice(2).map((link) => (
              <li key={link.href}>
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