/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      background: "var(--color-background)",
      primary: "var(--color-primary)",
      accent: "var(--color-accent)",
    },
   
    transitionTimingFunction: {
  
    },
    transitionDuration: {
    },
    extend: {
      fontFamily: {
        gilroy: ["gilroy"],
      },
    },
  },
  plugins: [],
};
