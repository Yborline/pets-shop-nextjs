import axios from "axios";
axios.defaults.baseURL = "https://petshop-api-dqwd.onrender.com/api/";

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
  name,
  surname,
  email,
  phone,
  city,
  number,
  clothes,
  summary,
}) => {
  try {
    const { data } = await axios.post(`/clothes/mail`, {
      name,
      surname,
      email,
      phone,
      city,
      number,
      clothes,
      summary,
    });
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
