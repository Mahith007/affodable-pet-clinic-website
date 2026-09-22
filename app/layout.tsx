import type { Metadata, Viewport } from "next";
import React from "react";
import { clinic } from "@/data/clinic";
import "./globals.css";

export const metadata: Metadata = {
  title: `${clinic.name} | Veterinary Care in ${clinic.address.city}`,
  description: `${clinic.tagline} Full-service veterinary clinic in ${clinic.address.city}, ${clinic.address.state}. Call ${clinic.phone}.`,
  keywords: [
    "veterinary clinic",
    "veterinarian",
    "pet care",
    "animal hospital",
    clinic.address.city,
  ],
  openGraph: {
    title: clinic.name,
    description: clinic.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#128473",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}