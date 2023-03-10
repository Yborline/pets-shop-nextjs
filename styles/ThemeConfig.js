import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  gray: "#696969",
  green: "#FFF5EE",
  yelow: "#C71585",
  basketList: "#FFF5EE",
  textBlack: "	#800000",
  text: "	#800000",
  hoverText: "white",
  yelowLight: "#FFF5EE",
  mobilMenu: "#C0C0C0",
};

export const darkTheme = {
  gray: "#708090",
  green: "#2F4F4F",
  yelow: "#da70d6",
  basketList: "#708090",
  hoverText: "black",
  yelowLight: "#696969",
  text: "white",
  textBlack: "black",

  mobilMenu: "#708090",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.yelowLight};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }`;
