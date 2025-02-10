import { merge } from 'lodash';
import { primary as primaryColor, secondary as secondaryColor } from './app/dashboard/config/colors';


/** @type {import('tailwindcss').Config} */

const pageTheme = {
  extend: {
    colors: {
      background: "var(--background)",
      foreground: "var(--foreground)",
    },
    fontFamily: {
      "work-sans": ["Work Sans", "sans-serif"],
    },
    backgroundColor: {
      "primary-blue": "#02A6E5",
    },
    textColor: {
      "primary-blue": "#02A6E5",
    },
    borderColor: {
      "primary-blue": "#02A6E5",
    },
    gridTemplateColumns: {
      "auto-fit": "repeat(auto-fit, minmax(300px, 1fr))",
    },
    screens: {
      xs: "320px",
    },
  },
};

// const primary = "#02A6E5";
// const secondary = "#F29F05";
const primary = primaryColor;
const secondary = secondaryColor;

const dashboardTheme = {
  extend: {
    colors: {
      primary: primary,
      secondary: secondary,
    },
    backgroundColor: {
      contentbg: "#F1F4FB",
      primary: primary,
      secondary: secondary,
    },
    backgroundImage: {
      sidebar: "linear-gradient(to bottom, #038BB5, #026C8E)",
    },
    borderColor: {
      primary: primary,
      secondary: secondary,
    },
    boxShadow: {
      headerbutton: "2px 2px 8px 0px rgba(31, 38, 71, 0.08)",
    },
    screens: {
      xs: "376px",
      xxs: "321px",
    },
    gridTemplateColumns: {
      "auto-200": "repeat(auto-fit, minmax(200px, 1fr))",
      "auto-100": "repeat(auto-fit, minmax(100px, 1fr))",
    },
  },
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: merge({}, pageTheme, dashboardTheme),
  plugins: [],
};
