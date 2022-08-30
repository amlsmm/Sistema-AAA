/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    fontFamily: {
    sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary-dark': 'var(--primary-dark)',
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-lightest': 'var(--primary-lightest)',

        'secondary-dark': 'var(--secondary-dark)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-lightest': 'var(--secondary-lightest)',

        white: 'var(--white)',
        black: 'var(--black)',
        transparent: 'transparent',
        current: 'currentColor',

        success: 'var(--success)',
        info: 'var(--info)',
        warning: 'var(--warning)',
        alert: 'var(--alert)',

        facebook: 'var(--facebook)',
        linkedin: 'var(--linkedin)',
        twitter: 'var(--twitter)',
        youtube: 'var(--youtube)',
        whatsapp: 'var(--whatsapp)',
      },
      maxWidth: {
        'extra-extra-large': '1360px',
        'extra-large': '1152px',
        large: '920px',
        medium: '704px',
        small: '576px',  
      },
      minWidth: {
        minimum: '375px',
      },
      height: {
        'screen-1/2': '50vh',
        'screen-3/4': '75vh'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in .3s ease-in forwards',
        'fade-in-down': 'fade-in-down .3s ease-in-out',
        'fade-in-up': 'fade-in-up .3s ease-in-out',
        'fade-in-left': 'fade-in-left .3s ease-in-out',
        'fade-in-right': 'fade-in-right .3s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
