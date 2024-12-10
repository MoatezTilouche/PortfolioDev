/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     flowbite.content(),
     
    "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
