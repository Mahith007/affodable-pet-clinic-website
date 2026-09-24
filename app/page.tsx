import React from "react";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { OpeningHours } from "@/components/OpeningHours";
import { Emergency } from "@/components/Emergency";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <About />
        <OpeningHours />
        <Emergency />
        <Contact />
      </main>
      <Footer />
    </>
  );
}