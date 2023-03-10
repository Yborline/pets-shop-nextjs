import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import { useState, useContext, useEffect } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";
import ctx from "../components/context/themeContext";
import ProviderContext from "../components/context/themeProvider";
import { wrapper, store, persistor } from "../redux/store";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import authOperations from "../redux/auth/auth-operatins";
import MyDocument from "./_document";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProviderContext>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ProviderContext>
      </PersistGate>
    </Provider>
  );
};

export default wrapper.withRedux(MyApp);
