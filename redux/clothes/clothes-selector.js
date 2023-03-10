import { createSelector } from "@reduxjs/toolkit";

export const getClothes = (state) => state.clothes.items.clothes;
export const getClothesId = (state) => state.clothes.items.id;
export const getLoadingCloth = (state) => state.clothes.loadingCloth;
export const getBasket = (state) => state.shopping.clothes;
export const getAmount = (state) => state.shopping.clothes.amount;

export const getActualCard = createSelector(
  [getClothes, getBasket],
  (clothes, basket) => {
    if (clothes.length === 0) {
      return basket;
    }
    const arraysIвBrief = basket.map((item) => item._id.split("-"));

    const similarityArray = arraysIвBrief.filter((item) => {
      return clothes.some((item2) => item2._id === item[0]);
    });

    // const normalId = array.join("");
    const arrayId = similarityArray.map((item) => item.join("-"));

    const newArray = basket.filter((item) => {
      return arrayId.some((item2) => item._id === item2);
    });

    return newArray;
  }
);
