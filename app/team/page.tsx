import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Meet Our Team | Affordable Pet Clinic",
  description:
    "Meet Dr. Narender Cheemerla, veterinarian at Affordable Pet Clinic in Houston, TX.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <Team />
      </main>
      <Footer />
    </>
  );
}
