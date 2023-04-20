import { createReducer } from "@reduxjs/toolkit";
import authOperations from "./auth-operatins";
import { combineReducers } from "redux";

const initialState = {
  user: { name: null, email: null, type: null },
  token: null,
  isLoggedIn: false,
  isPageRefreshing: false,
};

export const authReducer = createReducer(initialState, {
  [authOperations.register.fulfilled]: (state, { payload = "" }) =>
    // payload === undefined ?
    ({
      ...state,
      // user: payload.user,
    }),
  // : {
  //     ...state,
  //     user: null,
  //   },
  [authOperations.login.fulfilled]: (state, { payload }) => ({
    ...state,
    isLoggedIn: true,
    token: payload.token,
    user: { ...payload.user },
  }),
  [authOperations.logout.fulfilled]: (state, _) => ({
    ...state,
    user: { name: null, email: null, type: null },
    token: null,
    isLoggedIn: false,
  }),
  [authOperations.fetchCurrentUser.pending]: (state, { payload }) => ({
    ...state,
    isPageRefreshing: true,
  }),
  [authOperations.fetchCurrentUser.rejected]: (state, { payload }) => ({
    ...state,
    isLoggedIn: false,
    token: null,
    isPageRefreshing: false,
  }),
  [authOperations.fetchCurrentUser.fulfilled]: (state, { payload }) => ({
    ...state,
    user: { ...payload?.user },
    // isLoggedIn: payload ? true : false,
    isLoggedIn: true,
    //
    isPageRefreshing: false,
  }),
});

export const loading = createReducer(false, {
  [authOperations.register.pending]: () => true,
  [authOperations.register.fulfilled]: () => false,
  [authOperations.register.rejected]: () => false,
  [authOperations.login.pending]: () => true,
  [authOperations.login.fulfilled]: () => false,
  [authOperations.login.rejected]: () => false,
  [authOperations.logout.pending]: () => true,
  [authOperations.logout.fulfilled]: () => false,
  [authOperations.logout.rejected]: () => false,
  [authOperations.fetchCurrentUser.pending]: () => true,
  [authOperations.fetchCurrentUser.fulfilled]: () => false,
  [authOperations.fetchCurrentUser.rejected]: () => false,
});

export const error = createReducer(null, {
  [authOperations.register.rejected]: (_, action) => action.payload,
  [authOperations.register.pending]: () => null,
  [authOperations.login.rejected]: (_, action) => action.payload,
  [authOperations.login.pending]: () => null,
  [authOperations.logout.rejected]: (_, action) => action.payload.message,
  [authOperations.logout.pending]: () => null,
  [authOperations.fetchCurrentUser.rejected]: (_, action) => action.payload,
  [authOperations.fetchCurrentUser.pending]: () => null,
});
