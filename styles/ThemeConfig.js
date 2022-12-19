import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  gray: "#696969",
  green: "#20B2AA",
  yelow: "$FFDAB9",

  text: "	#800000",
  hoverText: "white",
  yelowLight: "#FAEBD7",
};

export const darkTheme = {
  gray: "#708090",
  green: "#2F4F4F",
  yelow: "#C0C0C0",
  hoverText: "black",
  yelowLight: "#696969",
  text: "white",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.yelowLight};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }`;
