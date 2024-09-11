/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        xl: '10.5rem'
      },
    },
    screens: {
      sm: '100%',
      // xl: '1440px',
      md: '900px',
      xl: '1200px',
      xll: '1424px',
    },
    colors: {
      primary: 'hsl(26, 100%, 55%)',
      secondary: 'hsl(25deg 100% 76.91%)',
      'blue-900': 'hsl(220, 13%, 13%)',
      'blue-700': 'hsl(219, 9%, 45%)',
      'blue-400': 'hsl(220, 14%, 75%)',
      'blue-200': 'hsl(223, 64%, 98%)',
      'border': 'hsl(0deg 0% 90.55%)',
      white: 'hsl(0, 0%, 100%)',
      black: 'hsl(0, 0%, 0%)',
    },
    fontFamily: {
      serif: ['Kumbh Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
