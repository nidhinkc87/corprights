import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        "2xl": "100px",
      },
    },
    extend: {
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          50: "hsl(var(--primary-50))",
          100: "hsl(var(--primary-100))",
          600: "hsl(var(--primary-600))",
          700: "hsl(var(--primary-700))",
          800: "hsl(var(--primary-800))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        gray: {
          100: "hsl(var(--gray-100))",
          200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          500: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))",
          700: "hsl(var(--gray-700))",
        },
        dark: "hsl(var(--dark))",
        white: "hsl(var(--white))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        manrope: ["Manrope-VariableFont_wght"],
        righteous: ["Righteous-Regular"],
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
