import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import ProviderContext from "../context/themeProvider";
import { wrapper, store, persistor } from "../redux/store";
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Suspense } from "react";
import FilterProvider from "../context/FilterProvider";

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ProviderContext>
          <FilterProvider>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Suspense>
          </FilterProvider>
        </ProviderContext>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
