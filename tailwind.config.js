/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-add": "linear-gradient(117deg, #5a4be7, #c86dd7 102%)"
      },
      transitionProperty: {
        "stroke-dashoffset": "stroke-dashoffset",
        width: "width"
      },
      transitionTimingFunction: {
        "850ms": "850ms"
      },
      boxShadow: {
        "btn-allowSlide": "0 2px 4px 0 rgba(226,102,102,.15)",
        "btn-newLeaseChart": "0 2px 10px 0 rgba(207.06, 207.06, 207.06, 0.4)",
        "sidebar-right":
          "0 1px 0 rgba(0,0,0,0.3),0 1px 6px rgba(0,0,0,0.3),inset 0 1px 1px hsla(0,0%,100%,0.3)",
        "sidebar-right-tab": "0 1px 3px 0 rgba(0, 0, 0, .07)"
      },
      dropShadow: { "playlist-thumb": "0 5px 8px 0 rgba(0,0,0,.2)" },
      colors: {
        primary: "#32323d",
        secondary: "#0f7070",
        third: "#0e8080",
        "tx-gray": "#696969",
        "main-400": "#C0D8D8",
        body: "#ced9d9",
        green: "#1dc186",
        red: "#e35050"
      },
      animation: {
        "slide-left": "slide-left 0.5s ease-in-out"
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
      1600: "1600px",
      1228: "1228px",
      1024:'1024px'
    }
  },
  plugins: []
};
