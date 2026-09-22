import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { PetCare } from "@/components/PetCare";
import { PetPortal } from "@/components/PetPortal";
import { OpeningHours } from "@/components/OpeningHours";
import { Emergency } from "@/components/Emergency";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <PetCare />
        <PetPortal />
        <OpeningHours />
        <Emergency />
        <Contact />
      </main>
      <Footer />
    </>
  );
}