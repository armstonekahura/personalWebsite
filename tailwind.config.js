/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": '#1e293b',          // Primary color
        //"color-primary-dark": '#0b1120',  // Primary dark
        "color-primary-light": '#334155', // Primary light
        "color-secondary": '#2563eb',       // Secondary accent
        "color-background": '#0f172a',      // Background
        "color-text-mary": '#67e8f9',
        "color-text-dark": "#94A3B8",
        "color-text-light": "#fff",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    }
  },
  plugins: [],
}

