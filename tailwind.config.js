/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        // Light mode colors
        light: {
          background: '#ffffff',
          foreground: '#171717',
          primary: '#7c3aed', // purple-600
          secondary: '#a78bfa', // purple-400
          accent: '#c4b5fd', // purple-300
          muted: '#f5f3ff', // purple-50
        },
        // Dark mode colors
        dark: {
          background: '#0a0a0a',
          foreground: '#ededed',
          primary: '#8b5cf6', // purple-500
          secondary: '#a78bfa', // purple-400
          accent: '#6d28d9', // purple-700
          muted: '#2e1065', // purple-950
        },
      },
      backgroundImage: {
        'linear': 'linear-gradient(var(--tw-gradient-stops))',
        'radial': 'radial-gradient(var(--tw-gradient-stops))',
        'conic': 'conic-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  safelist: [
    {
      pattern: /bg-(linear|radial|conic)-\[.+\]/,
    },
  ],
}
