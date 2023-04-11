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
  async ({ page, contentPerPage }, thunkAPI) => {
    try {
      const { data } = await axios.get(`/clothes?page=${page}&limit=30`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAllClothes = createAsyncThunk(
  "clothes/fetchAllClothes",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/clothes/all`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchType = createAsyncThunk(
  "clothes/fetchType",
  async ({ page, path }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `/clothes/${path}?page=${page}&limit=30`
      );
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

export const updateById = createAsyncThunk(
  "clohes/updateClothesId",
  async ({ id, values }, thunkAPI) => {
    console.log(id);
    console.log(values);
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.put(`/clothes/${id}`, values);
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

export const updateDiscount = createAsyncThunk(
  "clothes/updateDiscount",
  async ({ id, discountState }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.patch(
        `/clothes/${id}/discount`,
        discountState
      );
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const filterSearch = createAsyncThunk(
  "clothes/fiterSearch",
  async (value, thunkAPI) => {
    try {
      const { data } = await axios.post(`clothes/filter`, { text: value });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
