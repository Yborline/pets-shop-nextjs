import Heading from "../Heading/Heading";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../../styles/ThemeConfig";
import { useContext } from "react";
import ctx from "../context/themeContext";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Div } from "./Layout.styled";

const Layout = ({ children }) => {
  const { themes } = useContext(ctx);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <ThemeProvider theme={themes == "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {isMounted && (
          <>
            <Header />
            <Div>{children}</Div>
            <Footer />
          </>
        )}
      </ThemeProvider>
    </>
  );
};

export default Layout;
