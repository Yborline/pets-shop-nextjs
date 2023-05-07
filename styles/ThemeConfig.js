import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  // gray: "#696969",
  headerlist: "#F8D2D6",
  yelow: "#FFE8E8",
  basketList: "#FFF5EE",
  textBlack: "	#800000",
  text: "	#800000",
  // hoverText: "white",
  textActive: "#20B2AA",
  yelowLight: "#FFDDE1",
  yelowLightTop: "#FFE8E8",
  mobilMenu: "#C0C0C0",
  discount: "gray",
  actualPrice: "#DC143C",
  hover: "#C71585",
  hoverButton: "#FFB6C1",
  error: "#FFB6C1",
  backgroundCart: "#FFF0F5",
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
  // gray: "#708090",
  headerlist: "#2F4F4F",
  yelow: "#da70d6",
  basketList: "#708090",
  // hoverText: "black",
  textActive: "#da70d6",
  yelowLight: "#696969",
  text: "#DCDCDC",
  textBlack: "black",
  discount: "#FFF5EE",
  actualPrice: "#DC143C",
  mobilMenu: "#708090",
  hover: "#20B2AA",
  hoverButton: "#708090",
  error: "#FFB6C1",
  backgroundCart: "#A9A9A9",
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
