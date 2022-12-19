import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { useState, useContext, useEffect } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";
import ctx from "../components/context/themeContext";
import ProviderContext from "../components/context/themeProvider";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ProviderContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProviderContext>
  );
};

export default MyApp;
