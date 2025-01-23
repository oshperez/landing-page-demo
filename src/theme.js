import { mediaQueryFactory } from "./utils/helpers";

const breakpoints = {
  xs: "320px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
};

const mediaQueries = mediaQueryFactory(breakpoints);

const theme = {
  breakpoints: {
    values: {
      ...breakpoints,
    },
    ...mediaQueries,
  },
  palette: {
    primary: {
      main: "#ff4d5c",
      light: "#ff8289",
      dark: "#c50033",
    },
    common: {
      grey: "#f9f8fc",
      pink: "#f8e4e4",
    },
    text: {
      primary: "#420308",
      disabled: "rgba(0, 0, 0, 0.3)",
    },
  },
  shape: {
    borderRadius: "8px",
  },
  shadow: {
    boxShadow: ["5px 5px 25px rgba(0, 0, 0, 0.1)"],
    dropShadow: [
      "0px 3px 3px rgba(0, 0, 0, 0.25)",
      "4px 4px 20px rgba(0, 0, 0, 0.1)",
      "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    ],
  },
  typography: {
    fontFamily: "'Nunito', sans-serif",
    fontSize900: "4.3125rem",
    fontSize800: "3.75rem",
    fontSize700: "2.125rem",
    fontSize600: "1.5rem",
    fontSize500: "1.25rem",
    fontSize400: "1rem",
    fontSize300: "0.875rem",
    fontSize200: "0.75rem",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightSemiBold: 600,
    fontWeightBold: 700,
  },
  spacing: {
    xs: "0.25em",
    sm: "0.5em",
    md: "1em",
    lg: "2em",
    xl: "4em",
    xxl: "8em",
  },
};

export default theme;
