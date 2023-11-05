/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      width: {
        '128': '32rem',
        '120': '30rem'
      },
      height: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
