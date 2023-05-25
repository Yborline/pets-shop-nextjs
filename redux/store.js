import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";

import { createWrapper } from "next-redux-wrapper";
import {
  items,
  shoppingCart,
  loadingCloth,
  loadingAllCloth,
  // changeFilter,
  errorCloth,
} from "./clothes/clothes-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { authReducer, error, loading } from "./auth/auth-reducer";

// const persitingReducers = createFilter(`authReducer.token`);

// const middleware =
//   process.env.NODE_ENV === "development"
//     ? [
//         ...getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         }),
//         logger,
//       ]
//     : [
//         ...getDefaultMiddleware({
//           serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//           },
//         }),
//       ];
const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const authPersistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

const shoppingPersistConfig = {
  key: "shop",
  storage,
};

const authRootReduceer = combineReducers({
  user: persistReducer(authPersistConfig, authReducer),
  loading,
  error,
});

export const store = configureStore({
  reducer: {
    auth: authRootReduceer,
    // clothes: combineReducers({ loadingCloth, items }),
    clothes: combineReducers({
      loadingCloth,
      loadingAllCloth,
      items,
      errorCloth,
    }),
    shopping: persistReducer(shoppingPersistConfig, shoppingCart),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});
const makeStore = () => store;

export const persistor = persistStore(store);

export const wrapper = createWrapper(makeStore);
// const persistor = persistStore(store);
// export { persistor, store };
