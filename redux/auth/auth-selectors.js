export const getUserName = (state) => state.auth.user.user;

export const getLoggedIn = (state) => state.auth.user.isLoggedIn;
export const getUser = (state) => state.auth.user.user;
export const getLoading = (state) => state.auth.loading;
export const getUserError = (state) => state.auth.error;
export const getUserLoading = (state) => state.auth.loading;
