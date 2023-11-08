import axios from "axios";
axios.defaults.baseURL = "https://petshop-api-dqwd.onrender.com/api/";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const getCity = async (value) =>
  fetch("https://api.novaposhta.ua/v2.0/json/", {
    method: "POST",
    body: JSON.stringify({
      modelName: "Address",
      calledMethod: "searchSettlements",
      methodProperties: {
        CityName: `${value}`,
        Limit: "50",
        Page: "1",
      },
      apiKey: "27227bf58c490de0ca6662bd12e6f1ac",
    }),
  }).then((response) => {
    return response.json();
  });

export const getNumberMail = async ({ city, number }) =>
  fetch("https://api.novaposhta.ua/v2.0/json/", {
    method: "POST",
    body: JSON.stringify({
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: `${city}`,
        Limit: "50",
        Page: "1",
        WarehouseId: `${number}`,
      },
      apiKey: "27227bf58c490de0ca6662bd12e6f1ac",
    }),
  }).then((response) => {
    return response.json();
  });

export const getComments = async (id) => {
  try {
    const { data } = await axios.get(`/comments/${id}`);
    return data.data.result;
  } catch (error) {
    return error.message;
  }
};

export const addComment = async ({ id, text }) => {
  try {
    const { data } = await axios.post(`/comments/${id}`, { text: text });
    return data.result;
  } catch (error) {
    return error.message;
  }
};
export const getClothById = async (id) => {
  try {
    const { data } = await axios.get(`/clothes/${id}`);
    return data?.data?.result;
  } catch (error) {
    return error.message;
  }
};

export const fetchAll = async (id) => {
  try {
    const { data } = await axios.get(`/clothes/all`);

    return data;
  } catch (error) {
    return error.message;
  }
};

export const getFetchType = async ({ page, path }) => {
  try {
    const { data } = await axios.get(
      `/clothes/type/${path}?page=${page}&limit=30`
    );
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getFetchClothes = async ({ page }) => {
  try {
    const { data } = await axios.get(`/clothes?page=${page}&limit=30`);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getFetchClothesId = async (id) => {
  try {
    const { data } = await axios.get(`/clothes/${id}`);
    return data.data.result;
  } catch (error) {
    return error.message;
  }
};

export const getImagesHome = async () => {
  try {
    const { data } = await axios.get("/images");
    return data;
  } catch (error) {
    return error.message;
  }
};

export const addImagesHome = createAsyncThunk(
  "images/addImages",
  async (values, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.post("/images", values, {
        headers: { "content-type": "mulpipart/form-data" },
      });
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteImagesHome = createAsyncThunk(
  "images/deleteImagesHome",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.user.token;
    token.set(persistedToken);
    try {
      const { data } = await axios.delete(`/images/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const postMail = async ({
//   name,
//   surname,
//   email,
//   phone,
//   city,
//   number,
//   clothes,
//   summary,
// }) =>
//   fetch("https://petshop-api-dqwd.onrender.com/api/clothes/mail/", {
//     method: "POST",
//     body: JSON.stringify({
//       name,
//       surname,
//       email,
//       phone,
//       city,
//       number,
//       clothes,
//       summary,
//     }),
//   }).then((response) => {
//     return response.json();
//   });

export const postMail = async ({
  numberOrder,
  name,
  surname,
  email,
  phone,
  city,
  number,
  clothes,
  summary,
  service,
}) => {
  try {
    const { data } = await axios.post(`/clothes/mail`, {
      numberOrder,
      name,
      surname,
      email,
      phone,
      city,
      number,
      clothes,
      summary,
      service,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
