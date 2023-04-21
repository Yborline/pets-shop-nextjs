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
  discount: "gray",
  hover: "#C71585",
  hoverButton: "#FFB6C1",
  error: "#FFB6C1",
  li1: "#ffffff",
  li2: "#fffff7",
  li3: "#fffeef",
  li4: "#fffee8",
  li5: "#fffee0",
  li6: "#fffdd8",
  li7: "#fffdd0",
  li8: "#fffdd0",
  li9: "#fbf9d4",
  li10: "#f8f6d8",
  li11: "#f4f2dc",
  li12: "#f0efe0",
  li13: "#ecebe4",
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
  discount: "gray",
  mobilMenu: "#708090",
  hover: "#20B2AA",
  hoverButton: "#708090",
  error: "#FFB6C1",
  li1: "#ffffff",
  li2: "#fffff7",
  li3: "#fffeef",
  li4: "#fffee8",
  li5: "#fffee0",
  li6: "#fffdd8",
  li7: "#fffdd0",
  li8: "#fffdd0",
  li9: "#fbf9d4",
  li10: "#f8f6d8",
  li11: "#f4f2dc",
  li12: "#f0efe0",
  li13: "#ecebe4",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.yelowLight};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    list-style: none;
  }`;
