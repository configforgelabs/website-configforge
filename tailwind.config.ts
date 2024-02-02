/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        '5xl': "40px"
      },
      colors: {
        primary: '#1A56DB',
        gray: {
          500: "#6B7280"
        }
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }

}

