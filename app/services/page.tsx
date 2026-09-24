import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Affordable Pet Clinic",
  description:
    "Wellness exams, vaccinations, diagnostics, dental care and surgery at Affordable Pet Clinic in Houston, TX.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}
