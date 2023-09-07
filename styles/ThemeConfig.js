import { createGlobalStyle } from "styled-components";
export const lightTheme = {
  gray: "#696969",
  headerlist: "#F8D2D6",
  backgroundMainLogo: " ",
  yelow: "#FFE8E8",
  active: "#FF69B4",
  basketList: "#ffe4e1",
  headerMainlist: "#F8D2D6",
  textBlack: "	#800000",
  text: "#800000",
  Menu: "#FFDDE1",
  hoverMenu: "#F8D2D6",
  textActive: "#20B2AA",
  yelowLight: "#FFDDE1",
  yelowLightTop: "#FFE8E8",
  mobilMenu: "#ffb6c1",
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
  red: "red",
  moon: "#F4A460",
  hoverRgb: "199,21,133",
  hart: "#DC143C",
  button: "#ffe4e1",
  buttonShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
  basketShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
};

export const darkTheme = {
  gray: "#708090",
  headerlist: "#0a5751",
  headerMainlist: "#283d3d",
  yelow: "#da70d6",
  basketList: "#3f5f5f",
  active: "#DA70D6",
  Menu: "#2F4F4F",
  hoverMenu: "#3f5f5f",
  backgroundMainLogo: "#2F4F4F",
  // hoverText: "black",
  textActive: "#da70d6",
  yelowLight: "#2F4F4F",
  text: "#DCDCDC",
  textBlack: "black",
  discount: "#FFF5EE",
  actualPrice: "#DC143C",
  mobilMenu: "#708090",
  hover: "#20B2AA",
  hoverButton: "#708090",
  error: "#FFB6C1",
  backgroundCart: "#2F4F4F",
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
  red: "red",
  moon: "#FFFF00",
  hoverRgb: "32,178,170",
  hart: "#d7231a",
  button: "#3b444b",
  buttonShadow: "0px 0px 10px 0px rgba(255,255,255,1)",
  basketShadow: "0px 0px 4px 0px rgba(255,255,255,1)",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.yelowLight};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
    list-style: none;
  }`;
