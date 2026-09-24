import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { PetPortal } from "@/components/PetPortal";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Access Pet Portal | Affordable Pet Clinic",
  description:
    "Register for the Affordable Pet Clinic pet portal to view your pet's records or update information.",
};

export default function PetPortalPage() {
  return (
    <>
      <Navbar />
      <main>
        <PetPortal />
      </main>
      <Footer />
    </>
  );
}
