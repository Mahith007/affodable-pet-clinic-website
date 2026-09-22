import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand color - calm medical teal
        brand: {
          50: "#eefbf7",
          100: "#d5f5ec",
          200: "#aeeadb",
          300: "#78d9c4",
          400: "#41bfa7",
          500: "#1fa48e",
          600: "#128473",
          700: "#116a5e",
          800: "#12544c",
          900: "#134740",
          950: "#042a26",
        },
        // Accent - warm and friendly
        accent: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdba8",
          300: "#ffc070",
          400: "#ff9b37",
          500: "#ff7d10",
          600: "#f05f06",
          700: "#c74607",
          800: "#9e370e",
          900: "#7f2f0f",
          950: "#451505",
        },
        // Deep slate for text and dark sections
        ink: {
          50: "#f5f7f9",
          100: "#e9edf2",
          200: "#cfd8e3",
          300: "#a5b6c9",
          400: "#748ea9",
          500: "#52708f",
          600: "#3f5876",
          700: "#344760",
          800: "#2e3d51",
          900: "#2a3546",
          950: "#1c2431",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(18, 84, 76, 0.25)",
        card: "0 4px 20px -8px rgba(28, 36, 49, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;