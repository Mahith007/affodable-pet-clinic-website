# Affordable Pet Clinic — Website

A professional, modern, and fully responsive informational website for a
veterinary / pet clinic. Built with **Next.js**, **TypeScript**, and
**Tailwind CSS**.

> This is an informational website only. It intentionally has **no** online
> booking, user accounts, database, payments, or AI features.

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm start
```

## How to customise the content

All clinic details live in a single file: **`data/clinic.ts`**.

All clinic details are stored there so you can update them in one place:

- **Clinic name, tagline, phone, fax** — `clinic` object
- **Address** — `clinic.address` (the Google map updates automatically)
- **Opening hours** — `openingHours` array
- **Services** — `services` array
- **Veterinarians / team** — `veterinarians` array
- **Pet care tips** — `petCareTips` array
- **Emergency information** — `emergencyInfo` object

You generally will **not** need to edit any component to update the content.

## Project structure

```
clinic website/
├── app/
│   ├── globals.css        # Tailwind directives + shared component classes
│   ├── layout.tsx         # Root layout, metadata, fonts
│   └── page.tsx           # Home page assembling all sections
├── components/
│   ├── Icons.tsx          # Dependency-free inline SVG icon set
│   ├── Section.tsx        # Reusable <Section> and heading wrapper
│   ├── Navbar.tsx         # Sticky navigation with mobile menu
│   ├── Hero.tsx           # Hero section with Call Us button
│   ├── About.tsx          # About the clinic
│   ├── Services.tsx       # Veterinary services grid
│   ├── Team.tsx           # Veterinarians / team
│   ├── PetCare.tsx        # Pet care information
│   ├── OpeningHours.tsx   # Opening hours
│   ├── Emergency.tsx      # Emergency information
│   ├── Contact.tsx        # Contact details + map
│   └── Footer.tsx         # Professional footer
├── data/
│   └── clinic.ts          # ⭐ All clinic content lives here
└── ...config files
```

## Clinic information

All content is real clinic information and lives in `data/clinic.ts`:

| Item              | Value                                        |
| ----------------- | -------------------------------------------- |
| Clinic name       | Affordable Pet Clinic                        |
| Veterinarian      | Dr. Narender Cheemerla                       |
| Phone             | (713) 692-5100                               |
| Fax               | (713) 692-6195                               |
| Address           | 3004 Little York Rd, Houston, TX 77093       |
| Opened            | November 2005                                |
| Opening hours     | Mon–Fri 8:00 AM – 5:30 PM, Sat 8:00 AM – 12:30 PM, Sun closed |

> **Note:** Affordable Pet Clinic is **not** an emergency hospital. Pet
> owners experiencing a medical emergency should contact an emergency
> veterinary facility.

## Notes

- The map in the Contact section is a standard Google Maps embed driven by the
  address in `data/clinic.ts`. No API key is required for the embed.
- The design is responsive across desktop, tablet, and mobile.
- Accessibility: skip link, semantic landmarks, and reduced-motion support are
  included.