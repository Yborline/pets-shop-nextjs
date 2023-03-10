import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petshop-api-dqwd.onrender.com/api/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const fetchClothes = createAsyncThunk(
  "clothes/fetchClothes",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/clothes`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchClothesId = createAsyncThunk(
  "clohes/fetchClothesId",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/clothes/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addClothes = createAsyncThunk(
  "clothes/addClothes",
  async (values, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.post("/clothes", values, {
        headers: { "content-type": "mulpipart/form-data" },
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteClothes = createAsyncThunk(
  "clothes/deleteClothes",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.delete(`/clothes/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
