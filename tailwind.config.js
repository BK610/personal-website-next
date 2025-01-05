const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        serif: ["Aleo", ...defaultTheme.fontFamily.serif],
      },
      /*
      Generated on https://palettte.app. Exported JSON at the end of the file.
      */
      // colors: {
      //   mygreen: {
      //     900: "#09341E",
      //     800: "#134A2D",
      //     700: "#20603D",
      //     600: "#30764E",
      //     500: "#448B62",
      //     400: "#5CA178",
      //     300: "#77B78C",
      //     200: "#95CDAA",
      //     100: "#B7E2C6",
      //     50: "#DDF8E6",
      //   },
      //   myorange: {
      //     900: "#F28118",
      //     800: "#F48B2C",
      //     700: "#F59641",
      //     600: "#F7A155",
      //     500: "#F8AC6A",
      //     400: "#F9B87F",
      //     300: "#FBC494",
      //     200: "#FCD0AA",
      //     100: "#FCEAD1",
      //     50: "#FDF5E9",
      //   },
      //   mypurple: {
      //     600: "#8761BD",
      //     500: "#9A75CE",
      //     400: "#AE8CDE",
      //     300: "#C3A4EF",
      //     200: "#D9BEFF",
      //   },
      // },
      backgroundImage: {
        base: "url('/img/base.svg')",
        "base-dark": "url('/img/base-dark.svg')",
      },
      keyframes: {
        wiggle: {
          "25%": { transform: "rotate(-1deg)" },
          "75%": { transform: "rotate(1deg)" },
        },
        wigglelg: {
          "25%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(5deg)" },
        },
        slowgrow: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.1)",
          },
        },
        bounceleft: {
          "0%, 100%": {
            transform: "translateX(0%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateX(-25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        bounceup: {
          "0%, 100%": {
            transform: "translateY(0%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        spinslow: "spin 2s linear infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        wigglelg: "wigglelg 1s ease-in-out infinite",
        slowgrow: "slowgrow 1s ease-in-out infinite",
        bounceleft: "bounceleft 1s infinite",
        bounceup: "bounceup 1s infinite",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

/*
Generated JSON for color configuration from https://palettte.app
[
  {
    "paletteName": "New Palette",
    "swatches": [
      {
        "name": "New Swatch",
        "color": "0D4729"
      },
      {
        "name": "New Swatch",
        "color": "135833"
      },
      {
        "name": "New Swatch",
        "color": "19693D"
      },
      {
        "name": "New Swatch",
        "color": "217B48"
      },
      {
        "name": "New Swatch",
        "color": "2A8C53"
      },
      {
        "name": "New Swatch",
        "color": "349D5E"
      },
      {
        "name": "New Swatch",
        "color": "3EAE69"
      },
      {
        "name": "New Swatch",
        "color": "4AC075"
      },
      {
        "name": "New Swatch",
        "color": "57D181"
      },
      {
        "name": "New Swatch",
        "color": "65E28E"
      }
    ]
  },
  {
    "paletteName": "New Palette",
    "swatches": [
      {
        "name": "New Swatch",
        "color": "F28118"
      },
      {
        "name": "New Swatch",
        "color": "F48B2C"
      },
      {
        "name": "New Swatch",
        "color": "F59641"
      },
      {
        "name": "New Swatch",
        "color": "F7A155"
      },
      {
        "name": "New Swatch",
        "color": "F8AC6A"
      },
      {
        "name": "New Swatch",
        "color": "F9B87F"
      },
      {
        "name": "New Swatch",
        "color": "FBC494"
      },
      {
        "name": "New Swatch",
        "color": "FCD0AA"
      },
      {
        "name": "New Swatch",
        "color": "FEDCC0"
      },
      {
        "name": "New Swatch",
        "color": "FFE9D6"
      }
    ]
  },
  {
    "paletteName": "New Palette",
    "swatches": [
      {
        "name": "New Swatch",
        "color": "8761BD"
      },
      {
        "name": "New Swatch",
        "color": "9A75CE"
      },
      {
        "name": "New Swatch",
        "color": "AE8CDE"
      },
      {
        "name": "New Swatch",
        "color": "C3A4EF"
      },
      {
        "name": "New Swatch",
        "color": "D9BEFF"
      }
    ]
  }
]
*/
