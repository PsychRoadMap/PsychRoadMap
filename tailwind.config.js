const flowbite = require("flowbite-react/tailwind");
import react from "@vitejs/plugin-react";


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [react(), flowbite.plugin()],
};
