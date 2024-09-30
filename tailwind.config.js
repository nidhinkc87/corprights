/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // container: {
    // center: true,
    // padding: {
    //   DEFAULT: "1rem",
    //   md: "2rem",
    //   "2xl": "100px",
    //   "3xl": "122px",
    // },
    // },
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px",
    //   "2xl": "1440px",
    //   "3xl": "1512px",
    //   "4xl": "1920px",
    // },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          "2xl": "100px",
        },
      },
      fontFamily: {
        manrope: "Manrope",
        righteous: "Righteous",
      },
      fontSize: {
        xs: ["8.21px", "11.49px"],
        sm: ["13.6px", "23.79px"],
        base: ["14px", "25px"],
        lg: ["15.3px", "25.49px"],
        xl: ["16px", "25.2px"],
        "2xl": ["18px", "30px"],
        "3xl": ["20px", "38px"],
        "4xl": ["24px", "33.4px"],
        "5xl": ["32px", "46px"],
        "6xl": ["40px", "58px"],
        "7xl": ["56px", "68px"],
        "8xl": ["60px", "88px"],
        "9xl": ["68px", ""],
        "10xl": ["96px", "83px"],
      },
      colors: {
        background: "#181818",
        primary: {
          DEFAULT: "#2BB162",
          50: "#F1FCF4",
          100: "#CDF4DD",
          600: "#209952",
          700: "#1C7943",
          800: "#1B6038",
        },
        secondary: "#017275",
        transparent: "transparent",
        dark: "#333333",
        white: "#fff",
        gray: {
          100: "#E0E0E0",
          200: "#BDBDBD",
          300: "#99999A",
          400: "#706F6F",
          500: "#4F4F4F",
          600: "#333333",
        },
        card: "#FBFBFB",
        success: "#27AE60",
        warning: "#E2B93B",
        error: "#EB5757",
        input: "#CFCFCF3B",
      },
      boxShadow: {
        "card-20dp": "0px 24.29px 29.15px 0px #32324712",
        "card-20dp-sm": "0px 20.64px 24.77px 0px #32324712",
        "card-16dp": "0px 14.58px 19.43px 0px hsba(240, 30%, 28%, 0.08)",
        "card-9dp": "0px 9.72px 9.72px 0px hsba(240, 30%, 28%, 0.08)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(93.94deg, #017275 6.45%, #2BB162 93.55%)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
        "infinite-scroll-vertical":
          "infinite-scroll-vertical 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "infinite-scroll-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
