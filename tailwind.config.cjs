/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Array: ["Array", "sans-serif"],
        Satoshi: ["Satoshi", "sans-serif"],
        ClashDisplay: ["ClashDisplay", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("flowbite/plugin"),
  ],
};
