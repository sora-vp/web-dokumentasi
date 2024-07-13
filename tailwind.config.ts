import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#d5c5b9",
  600: "#8a623f",
  900: "#402e1f",
  950: "#2d2118",
};
const gray = {
  100: "#f6f6f7",
  200: "#eeedee",
  300: "#c3c1c3",
  400: "#8d8a8d",
  500: "#59575a",
  700: "#39373a",
  800: "#282628",
  900: "#191819",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin()],
};
