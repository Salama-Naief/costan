/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      green: {
        50: "#e7efe7",
        100: "#10c792",
        300: "#36c109",
      },
      pirple: {
        50: "#e5d7fd",
        100: "#bf58f2",
      },
      yellow: {
        50: "#fff8e7",
        100: "#ffd061",
      },
      orange: {
        50: "#fffae6",
        100: "#ff8b00",
      },
      red: {
        50: "#ffe7e7",
        100: "#f06161",
      },
      blue: {
        50: "#deebff",
        100: "#0065FF",
        150: "#00b8d9",
        200: "#0747a6",
        300: "#4587f7",
        400: "#395185",
      },
      error: "#f05c5c",
      gray: {
        50: "#f8f8f8",
        100: "#c4c4c7",
      },
      textColor: {
        100: "#70708d",
        50: "#f8f9fe",
        white: "white",
      },
    },
  },
  plugins: [],
};
