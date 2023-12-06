/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin';

export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}", 'node_modules/preline/dist/*.js'],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["35px", "50px"],
      "4xl": ["48px", "58px"],
      "5xl": ["64px", "72px"],
      "6xl": ["72px", "80px"],
      "7xl": ["80px", "88px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        // palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#053B50",
        secondary: "#176B87",
        sub1: "64CCC5",
        "blue-keuangan": "#8ECDDD",
        "blue-manajemen": "#7091F5",
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "tosca-desain": "#D4E2D4",
        "purple-soft": "#D0BFFF",
        "brown-desain": "#AC7D88",
        footer: "#164863",
        "yellow-pemasaran": "#EBE76C",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [
   prelinePlugin,

  ],
};
