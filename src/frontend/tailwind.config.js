/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        "primary-dark": "var(--primary-dark)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-lightest": "var(--primary-lightest)",

        white: "var(--white)",
        black: "var(--black)",
        transparent: "transparent",
        current: "currentColor",

        success: "var(--success)",
        info: "var(--info)",
        warning: "var(--warning)",
        danger: "var(--danger)",
      },
      maxWidth: {
        "extra-extra-large": "1280px", // 85rem
        "extra-large": "1024px", // 70rem
        large: "768px", // 55rem
        medium: "640px", // 40rem
        small: "480px", // 30rem
      },
      minWidth: {
        minimum: "375px",
      },
      zIndex: {
        '100': 100,
        '200': 200,
        'max': 999,
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in": "fade-in .3s ease-in forwards",
        "fade-in-down": "fade-in-down .3s ease-in-out",
        "fade-in-up": "fade-in-up .3s ease-in-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
