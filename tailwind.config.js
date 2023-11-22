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
        primary: "var(--primary)",
        accent: "var(--accent)",
        accentHover: "var(--accent-hover)",
        product: "var(--bg-gray-product)",
        textPrimary: "var(--text-primary)",
      },
      screens: {
        tablet: "430px",
        desktop: "1024px",
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
