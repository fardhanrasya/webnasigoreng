/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        "brand-red": "#e53e3e",
        "brand-orange": "#ed8936",
        "brand-yellow": "#ecc94b",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        heading: ["var(--font-poppins)"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        slideDown: "slideDown 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".aspect-w-16": {
          position: "relative",
          paddingBottom: "56.25%",
        },
        ".aspect-h-9": {
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        },
      });
    },
  ],
};
