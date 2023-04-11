import axios from "axios";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petshop-api-dqwd.onrender.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk(
  "users/signup",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/signup", credentials);
      // console.log(data);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const login = createAsyncThunk("users/login", async (credentials, thunkAPI) => {
  try {
    const { data } = await axios.post("auth/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.get("/auth/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    const persistedToken = state.auth.user.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get("/auth/current");

      return data;
    } catch (error) {
      window.localStorage.removeItem("persist:user");
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const authOperations = {
  fetchCurrentUser,
  logout,
  login,
  register,
};

export default authOperations;
