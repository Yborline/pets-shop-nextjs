import Heading from "../Heading/Heading";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, lightTheme, darkTheme } from "../../styles/ThemeConfig";
import { useContext } from "react";
import ctx from "../../context/themeContext";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Div, Wrapper, Body } from "./Layout.styled";
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operatins";
import { fetchAllClothes } from "../../redux/clothes/clothes-operations";

const Layout = ({ children }) => {
  const { themes, toggleTheme } = useContext(ctx);
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsMounted(true);
    if (!isMounted) {
      dispatch(authOperations.fetchCurrentUser());
      dispatch(fetchAllClothes());
    }
  }, [dispatch, isMounted]);

  return (
    <Body>
      {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <ThemeProvider theme={themes === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        {isMounted && (
          <Wrapper>
            <Header />
            <Div>{children}</Div>
            <Footer />
          </Wrapper>
        )}
      </ThemeProvider>
    </Body>
  );
};

export default Layout;
