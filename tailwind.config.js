/** @type {import('tailwindcss').Config} */
export default {
  content: ['./plugins/**/*.{js,ts}', './app/**/*.{js,vue,ts}', './error.vue'],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif;",
        nunito: "'Nunito', sans-serif;",
      },
      container: {
        center: true,
        padding: '2.2rem',
      },
      zIndex: {
        100: '100',
      },
    },
  },
  plugins: [],
};
