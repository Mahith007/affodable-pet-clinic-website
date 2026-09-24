import React from "react";

// Small, dependency-free icon set. All icons render as inline SVG so the site
// ships with no extra packages. Sizes are controlled via the `className` prop.

type IconProps = {
  className?: string;
};

export function PhoneIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export function MapPinIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function PawIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <ellipse cx="6" cy="10" rx="2" ry="2.6" />
      <ellipse cx="10.5" cy="7" rx="2" ry="2.8" />
      <ellipse cx="15.5" cy="7" rx="2" ry="2.8" />
      <ellipse cx="19.5" cy="10" rx="2" ry="2.6" />
      <path d="M12.6 12c-2.7 0-5.1 1.8-5.1 4.2 0 1.9 1.5 3 3.3 3 .9 0 1.4-.3 2.1-.3s1.2.3 2.1.3c1.8 0 3.3-1.1 3.3-3 0-2.4-2.4-4.2-5.7-4.2Z" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m20 6-11 11-5-5" />
    </svg>
  );
}

export function AlertIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

export function CloseIcon({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

// Social icons -------------------------------------------------------------

export function FacebookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.29-.04-1.27-.13-2.41-.13-2.39 0-4.02 1.46-4.02 4.13v2.3H7.6V14h2.66v8h3.24Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </svg>
  );
}

export function XIcons({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.53 3H21l-7.19 8.21L22 21h-6.56l-5.14-6.72L4.4 21H1l7.59-8.67L2 3h6.72l4.65 6.14L17.53 3Zm-1.15 16h1.9L7.7 4.9H5.66L16.38 19Z" />
    </svg>
  );
}

export function YouTubeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

// Service icons ------------------------------------------------------------
// These are keyed by the `icon` value defined in data/clinic.ts.

export function ServiceIcon({
  name,
  className = "h-6 w-6",
}: IconProps & { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    className,
  };

  switch (name) {
    case "stethoscope":
      return (
        <svg {...common}>
          <path d="M5 3v5a5 5 0 0 0 10 0V3" />
          <path d="M10 13v2a5 5 0 0 0 5 5 4 4 0 0 0 4-4v-2" />
          <circle cx="19" cy="9" r="1.6" />
          <path d="M19 9v3" />
        </svg>
      );
    case "syringe":
      return (
        <svg {...common}>
          <path d="m18 2 4 4" />
          <path d="m17 7 3-3" />
          <path d="M19 9 9 19l-5 1 1-5 10-10Z" />
          <path d="m12 12-2-2" />
          <path d="m15 15-2-2" />
        </svg>
      );
    case "tooth":
      return (
        <svg {...common}>
          <path d="M12 5.5C11 4 9.5 3 8 3 5.5 3 4 5 4 7.8c0 1.6.4 2.6.7 4 .3 1.3.5 2.5.6 4.2.1 1.6.7 3 .9 4 .2 1 .3 1 .9 1 .9 0 1.2-1.2 1.4-2.6.2-1.4.4-2.6 1.5-2.6s1.3 1.2 1.5 2.6c.2 1.4.5 2.6 1.4 2.6.6 0 .7 0 .9-1 .2-1 .8-2.4.9-4 .1-1.7.3-2.9.6-4.2.3-1.4.7-2.4.7-4C20 5 18.5 3 16 3c-1.5 0-3 1-4 2.5Z" />
        </svg>
      );
    case "scalpel":
      return (
        <svg {...common}>
          <path d="M14 4 4 14l-1 3 3-1L16 6a2.83 2.83 0 0 0-2-2Z" />
          <path d="m13 9 2 2" />
          <path d="M14 16h7" />
        </svg>
      );
    case "microscope":
      return (
        <svg {...common}>
          <path d="M6 18h12" />
          <path d="M9 18a6 6 0 0 0 5-9" />
          <path d="M12 9 8 5l2-2 4 4Z" />
          <path d="M10 7 6 11" />
        </svg>
      );
    case "heart-pulse":
      return (
        <svg {...common}>
          <path d="M19.5 12.6 12 20l-7.5-7.4a5 5 0 0 1 7.1-7l.4.4.4-.4a5 5 0 0 1 7.1 7Z" />
          <path d="M3.5 12h4l1.5-3 2 5 1.5-2h4.5" />
        </svg>
      );
    case "chip":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M10 3v2" />
          <path d="M14 3v2" />
          <path d="M10 19v2" />
          <path d="M14 19v2" />
          <path d="M3 10h2" />
          <path d="M3 14h2" />
          <path d="M19 10h2" />
          <path d="M19 14h2" />
        </svg>
      );
    case "bowl":
      return (
        <svg {...common}>
          <path d="M3 11h18a9 9 0 0 1-18 0Z" />
          <path d="M8 8c0-2 1.5-3 4-3s4 1 4 3" />
          <path d="M12 5V3" />
        </svg>
      );
    case "paw":
      return (
        <svg {...common}>
          <ellipse cx="6" cy="10" rx="2" ry="2.4" />
          <ellipse cx="10.5" cy="7.5" rx="2" ry="2.6" />
          <ellipse cx="15.5" cy="7.5" rx="2" ry="2.6" />
          <ellipse cx="19.5" cy="10" rx="2" ry="2.4" />
          <path d="M12.7 12.2c-2.5 0-4.7 1.7-4.7 3.9 0 1.7 1.4 2.8 3.1 2.8.8 0 1.3-.3 1.9-.3s1.1.3 1.9.3c1.7 0 3.1-1 3.1-2.8 0-2.2-2.3-3.9-5.3-3.9Z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="6" y="4" width="12" height="17" rx="2" />
          <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
          <path d="M9 11h6" />
          <path d="M9 15h6" />
        </svg>
      );
    case "flask":
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v5.5L5.5 17a2 2 0 0 0 1.7 3h9.6a2 2 0 0 0 1.7-3L14 8.5V3" />
          <path d="M7.5 14h9" />
        </svg>
      );
    case "droplet":
      return (
        <svg {...common}>
          <path d="M12 3s6 6.4 6 10.5A6 6 0 0 1 6 13.5C6 9.4 12 3 12 3Z" />
        </svg>
      );
    case "xray":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M12 7v10" />
          <path d="M9 9.5h6" />
          <path d="M9 14.5h6" />
        </svg>
      );
    case "eye":
      return (
        <svg {...common}>
          <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "bed":
      return (
        <svg {...common}>
          <path d="M3 18v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6" />
          <path d="M3 14h18" />
          <path d="M7 10V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4l3 2" />
        </svg>
      );
  }
}