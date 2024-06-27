/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "1.5/1": "1.5 / 1",
      },
    },
  },
  plugins: [],
};
