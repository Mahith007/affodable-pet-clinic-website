// =============================================================================
// CLINIC INFORMATION
// -----------------------------------------------------------------------------
// This file is the SINGLE SOURCE OF TRUTH for all clinic details.
// It contains the real information for Affordable Pet Clinic.
// =============================================================================

export const clinic = {
  name: "Affordable Pet Clinic",
  shortName: "Affordable Pet Clinic",
  tagline:
    "Comprehensive medical and surgical care for small-animal patients at affordable prices.",
  // The clinic opened in November 2005.
  established: "2005",
  // Primary contact phone number and a ready-to-use click-to-call link.
  phone: "(713) 692-5100",
  phoneHref: "tel:+17136925100",
  fax: "(713) 692-6195",
  address: {
    line1: "3004 Little York Rd",
    line2: "",
    city: "Houston",
    state: "TX",
    zip: "77093",
    country: "United States",
  },
};

// Convenience helpers so components can stay clean
export const fullAddress = [
  clinic.address.line1,
  clinic.address.line2,
  `${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`,
]
  .filter(Boolean)
  .join(", ");

export const addressLines = [
  clinic.address.line1,
  clinic.address.line2,
  `${clinic.address.city}, ${clinic.address.state} ${clinic.address.zip}`,
].filter(Boolean);

// Online pet portal - pet owners can register to view records or update info.
export const petPortal = {
  name: "Pet Portal",
  url: "https://account.greatpetcare.com/",
  heading: "Access your new pet portal!",
  description:
    "View your pet's records or update information by registering for your new pet portal.",
  action: "Open Pet Portal",
};

// Google Maps embed query for the map section.
export const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  fullAddress,
)}&output=embed`;

// A plain link users can click to open directions in Google Maps
export const mapDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  fullAddress,
)}`;

// -----------------------------------------------------------------------------
// OPENING HOURS
// -----------------------------------------------------------------------------
export type HoursEntry = {
  day: string;
  hours: string;
  // Whether the clinic is closed that day (styled differently)
  closed?: boolean;
};

export const openingHours: HoursEntry[] = [
  { day: "Monday", hours: "8:00 AM - 5:30 PM" },
  { day: "Tuesday", hours: "8:00 AM - 5:30 PM" },
  { day: "Wednesday", hours: "8:00 AM - 5:30 PM" },
  { day: "Thursday", hours: "8:00 AM - 5:30 PM" },
  { day: "Friday", hours: "8:00 AM - 5:30 PM" },
  { day: "Saturday", hours: "8:00 AM - 12:30 PM" },
  { day: "Sunday", hours: "Closed", closed: true },
];

// Compact summary used in the Contact section.
export const hoursSummary = [
  { label: "Mon - Fri", value: "8:00 AM - 5:30 PM" },
  { label: "Saturday", value: "8:00 AM - 12:30 PM" },
  { label: "Sunday", value: "Closed" },
];

// -----------------------------------------------------------------------------
// SERVICES
// -----------------------------------------------------------------------------
export type Service = {
  title: string;
  description: string;
  icon: string; // inline SVG path key defined in components/Icons.tsx
};

export const services: Service[] = [
  {
    title: "Wellness Examinations",
    description:
      "Routine check-ups to monitor your pet's overall health and catch problems early.",
    icon: "stethoscope",
  },
  {
    title: "Puppy & Kitten Examinations",
    description:
      "First visits and growth-stage care to get your newest family member off to a healthy start.",
    icon: "paw",
  },
  {
    title: "Annual Physical Examinations",
    description:
      "Yearly head-to-tail evaluations for adult pets to keep them healthy and up to date.",
    icon: "clipboard",
  },
  {
    title: "Vaccinations",
    description:
      "Core and lifestyle vaccines tailored to your pet's age, health, and risk of exposure.",
    icon: "syringe",
  },
  {
    title: "In-House Laboratory Testing",
    description:
      "On-site lab work for fast, accurate results during your visit.",
    icon: "flask",
  },
  {
    title: "Pre-Anesthetic Blood Testing",
    description:
      "Blood work before surgery to help ensure your pet is safe under anesthesia.",
    icon: "droplet",
  },
  {
    title: "Senior Pet Blood Testing",
    description:
      "Screening for older pets to detect age-related conditions early.",
    icon: "droplet",
  },
  {
    title: "Heartworm Testing",
    description:
      "Testing to detect heartworm infection so treatment can begin promptly.",
    icon: "microscope",
  },
  {
    title: "Parvovirus Testing",
    description:
      "Rapid testing for parvovirus in dogs showing gastrointestinal signs.",
    icon: "microscope",
  },
  {
    title: "Giardia Testing",
    description:
      "Testing for the Giardia parasite in pets with digestive upset.",
    icon: "microscope",
  },
  {
    title: "Fecal Examinations",
    description:
      "Screening for intestinal parasites and other digestive concerns.",
    icon: "microscope",
  },
  {
    title: "Urinalysis",
    description:
      "Urine testing to help assess kidney, bladder, and overall health.",
    icon: "droplet",
  },
  {
    title: "X-Rays",
    description:
      "Diagnostic imaging to evaluate bones, organs, and other internal structures.",
    icon: "xray",
  },
  {
    title: "Glaucoma Testing",
    description:
      "Eye pressure screening to help detect glaucoma in at-risk pets.",
    icon: "eye",
  },
  {
    title: "Dental Examinations",
    description:
      "Oral health assessments to identify dental disease and discomfort.",
    icon: "tooth",
  },
  {
    title: "Dental Cleaning & Polishing",
    description:
      "Professional cleaning and polishing to help prevent pain and disease.",
    icon: "tooth",
  },
  {
    title: "Dental Extractions",
    description:
      "Removal of diseased or damaged teeth when needed for your pet's comfort.",
    icon: "tooth",
  },
  {
    title: "Spay & Neuter",
    description:
      "Routine surgical sterilization with careful monitoring throughout.",
    icon: "scalpel",
  },
  {
    title: "Soft-Tissue Surgery",
    description:
      "Surgical care for soft-tissue conditions, performed with close monitoring.",
    icon: "scalpel",
  },
  {
    title: "C-Sections",
    description:
      "Surgical assistance for complicated or difficult births when needed.",
    icon: "heart-pulse",
  },
  {
    title: "Hospitalization",
    description:
      "In-clinic care and monitoring for pets who need extra attention, subject to availability.",
    icon: "bed",
  },
  {
    title: "Heartworm Prevention & Treatment",
    description:
      "Preventive care and treatment plans to protect your pet from heartworm disease.",
    icon: "shield",
  },
  {
    title: "Internal & External Parasite Treatment",
    description:
      "Prevention and treatment for fleas, ticks, and internal parasites.",
    icon: "shield",
  },
  {
    title: "Veterinary Diets",
    description:
      "Nutritional support and prescription diets to suit your pet's needs.",
    icon: "bowl",
  },
];

// -----------------------------------------------------------------------------
// VETERINARIAN / TEAM
// -----------------------------------------------------------------------------
export type Vet = {
  name: string;
  role: string;
  // Optional - only shown when provided. Not invented for this clinic.
  credentials?: string;
  bio: string;
  // Optional initials used for the avatar circle (falls back to name initials)
  initials?: string;
};

export const veterinarians: Vet[] = [
  {
    name: "Dr. Narender Cheemerla",
    role: "Veterinarian",
    bio: "Dr. Cheemerla cares for small-animal patients at Affordable Pet Clinic, providing comprehensive medical and surgical care at affordable prices.",
    initials: "NC",
  },
];

// -----------------------------------------------------------------------------
// PET CARE TIPS
// -----------------------------------------------------------------------------
export type CareTip = {
  title: string;
  summary: string;
  points: string[];
};

export const petCareTips: CareTip[] = [
  {
    title: "Dogs",
    summary: "General daily habits that help keep your dog healthy.",
    points: [
      "Provide daily exercise appropriate for your dog's age and size.",
      "Keep fresh water available at all times.",
      "Feed a balanced diet suited to your dog's life stage.",
      "Ask us about routine preventive care and check-ups.",
    ],
  },
  {
    title: "Cats",
    summary: "General everyday care for cats.",
    points: [
      "Provide scratching posts and enrichment.",
      "Keep the litter box clean and in a quiet spot.",
      "Offer fresh water away from the litter box.",
      "Ask us about routine preventive care and check-ups.",
    ],
  },
  {
    title: "Puppies & Kittens",
    summary: "General guidance for young pets.",
    points: [
      "Ask us about an appropriate vaccination schedule.",
      "Introduce new experiences gently and positively.",
      "Ask us about parasite prevention.",
      "Feed a diet formulated for growth.",
    ],
  },
  {
    title: "Senior Pets",
    summary: "General considerations for older pets.",
    points: [
      "Ask us how often your senior pet should be seen.",
      "Watch for changes in appetite, weight, or behaviour.",
      "Keep gentle exercise part of the routine.",
      "Make home adjustments for comfort and mobility.",
    ],
  },
];

// -----------------------------------------------------------------------------
// EMERGENCY INFORMATION
// -----------------------------------------------------------------------------
export const emergencyInfo = {
  // Important notice - the clinic is not an emergency hospital.
  notice:
    "Affordable Pet Clinic is not an emergency hospital. If your pet is experiencing a medical emergency, please contact an emergency veterinary facility immediately.",
  bannerText:
    "Affordable Pet Clinic is not an emergency hospital. For a medical emergency, please contact an emergency veterinary facility right away.",
  // General signs that may indicate an emergency.
  warnings: [
    "Difficulty breathing or choking",
    "Collapse, seizure, or loss of consciousness",
    "Severe bleeding that will not stop",
    "Suspected poisoning or toxin ingestion",
    "Repeated vomiting or diarrhoea with weakness",
    "Bloated, painful, or distended abdomen",
    "Inability to urinate, especially in male cats",
    "Major trauma such as being hit by a vehicle",
  ],
  note: "These are general signs only and are not a diagnosis. If you are unsure, contact an emergency veterinary facility for guidance.",
};

// -----------------------------------------------------------------------------
// NAVIGATION (used by the navbar and footer)
// -----------------------------------------------------------------------------
// Top-level navigation — every page shows directly, no dropdown.
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/services" },
  { label: "Meet Our Team", href: "/team" },
  { label: "Pet Care Information", href: "/pet-care" },
  { label: "Access Pet Portal", href: "/pet-portal" },
  { label: "Hours", href: "/#hours" },
  { label: "Emergency", href: "/#emergency" },
  { label: "Contact", href: "/#contact" },
];

export type NavDropdownItem = {
  label: string;
  href: string;
  description: string;
};

// Kept for backwards compatibility (no longer used by the navbar).
export const menuDropdownLinks: NavDropdownItem[] = [
  {
    label: "Services",
    href: "/services",
    description: "Wellness, diagnostics, dental & surgery",
  },
  {
    label: "Meet Our Team",
    href: "/team",
    description: "Get to know our veterinarian",
  },
  {
    label: "Pet Care Information",
    href: "/pet-care",
    description: "Everyday advice for happy, healthy pets",
  },
  {
    label: "Access Pet Portal",
    href: "/pet-portal",
    description: "View records or update information",
  },
];

// Every link for the footer (same flat list as the header).
export const footerLinks = [...navLinks];