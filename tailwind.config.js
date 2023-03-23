/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      fontFamily: {
         sans: ["Poppins", "sans-serif"],
         display: ["Playfair Display", "sans-serif"],
      },
      extend: {
         spacing: {
            nav: "var(--height-nav)"
         },
         height: {
            "minus-nav": "calc(100vh - var(--height-nav))"
         }
      },
   },
   plugins: [
      require("@tailwindcss/forms")
   ],
}
