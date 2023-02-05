import axios from "axios";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://petshop-api-dqwd.onrender.com/api";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/signup", async (credentials) => {});
