/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#CE7D63',
            dark: '#B86A52',
            light: '#E19A82',
          },
          surface: {
            DEFAULT: '#0F0F0F',
            light: '#252525',
            lighter: '#2F2F2F',
          },
          dark: '#0F0F0F',
          text: {
            primary: '#FFFFFF',
            secondary: '#A0A0A0',
            muted: '#6B6B6B',
          },
        },
        fontFamily: {
          sans: ['Roboto Flex', 'sans-serif'],
        },
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
          },
        },
        boxShadow: {
          'glow': '0 0 20px rgba(206, 125, 99, 0.3)',
          'card': '0 4px 20px rgba(0, 0, 0, 0.4)',
        },
      },
    },
    plugins: [],
  }