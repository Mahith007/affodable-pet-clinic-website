import type { Metadata } from "next";
import React from "react";
import { Navbar } from "@/components/Navbar";
import { PetCare } from "@/components/PetCare";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pet Care Information | Affordable Pet Clinic",
  description:
    "Everyday pet care guidance for dogs, cats, puppies, kittens and senior pets from Affordable Pet Clinic.",
};

export default function PetCarePage() {
  return (
    <>
      <Navbar />
      <main>
        <PetCare />
      </main>
      <Footer />
    </>
  );
}
