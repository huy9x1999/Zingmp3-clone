/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-add": "linear-gradient(117deg, #5a4be7, #c86dd7 102%)"
      },
      transitionProperty: {},
      boxShadow: {
        "btn-allowSlide": "0 2px 4px 0 rgba(226,102,102,.15)",
        "btn-newLeaseChart": "0 2px 10px 0 rgba(207.06, 207.06, 207.06, 0.4)"
      },
      colors: {
        primary: "#32323d",
        secondary: "#0f7070",
        "tx-gray": "#696969",
        "main-400": "#C0D8D8"
      },
      animation: {
        'slide-left': 'slide-left 0.5s ease-in-out',
      },
      keyframes: {
        "slide-left": {
          "0%": {
            "webkit-transform": "translateX(500px);",
            transform: "translateX(500px);"
          },
          "100%": {
            "webkit-transform": "translateX(0);",
            transform: "translateX(0);"
          }
        }
      }
    },
    screens: {
      1600: "1600px"
    }
  },
  plugins: []
};
