import { createSelector } from "@reduxjs/toolkit";

export const getClothes = (state) => state.clothes.items.clothes;
export const getAllClothes = (state) => state.clothes.items.allClothes;
export const getCount = (state) => state.clothes.items.count;
export const getType = (state) => state.clothes.items.type;
export const getCountType = (state) => state.clothes.items.countType;
export const getClothesId = (state) => state.clothes.items.id;
export const getLoadingCloth = (state) => state.clothes.loadingCloth;
export const getBasket = (state) => state.shopping.clothes;
export const getAmount = (state) => state.shopping.clothes.amount;
export const getFilterName = (state) => state.clothes.changeFilter.filterName;

export const getActualCard = createSelector(
  [getAllClothes, getBasket],
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

export const getVisibleClothes = createSelector(
  [getClothes, getFilterName],
  (clothes, filter) => {
    const normalizedFilter = filter.toLowerCase();

    const visible = clothes.filter(
      (cloth) =>
        cloth.name.toLowerCase().includes(normalizedFilter) ||
        cloth.code.includes(normalizedFilter)
    );

    // if (visible.length === 0) {
    //   const visibleCode = clothes.filter((cloth) => )
    // }

    return visible;
  }
);
