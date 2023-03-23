import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import {
  addClothes,
  deleteClothes,
  fetchClothes,
  fetchClothesId,
  updateById,
  updateDiscount,
} from "./clothes-operations";
import {
  changeShoppingCard,
  changeCardIncrement,
  changeCardDecrement,
  deleteCardBasket,
  changeActualCard,
  changeFilterName,
} from "./clothes-actions";

export const items = createReducer(
  { clothes: [], id: {} },
  {
    // [fetchClothes.fulfilled]: (state, { payload = {} }) => ({
    //   ...state,
    //   clothes: [...payload.data.clothes],
    // }),
    [fetchClothes.fulfilled]: (state, { payload = {} }) => ({
      ...state,
      clothes: [...payload.data.clothes],
      count: payload.allElements,
    }),
    [fetchClothesId.fulfilled]: (state, { payload = {} }) => ({
      ...state,
      id: { ...payload.data.result },
    }),
    [addClothes.fulfilled]: (state, { payload }) => ({
      ...state,
      clothes: [...state.clothes, payload.data],
    }),

    [updateById.fulfilled]: (state, { payload }) => ({
      ...state,
      clothes: [
        ...state.clothes.filter((item) => item._id !== payload._id),
        payload.data.result,
      ],
    }),
    [deleteClothes.fulfilled]: (state, { payload }) => ({
      ...state,
      clothes: [
        ...state.clothes.filter((item) => payload?.data?._id !== item._id),
      ],
    }),
    [updateDiscount.fulfilled]: (state, { payload }) => ({
      ...state,
      clothes: [
        ...state.clothes.filter((item) => payload.data._id !== item._id),
        payload.data,
      ],
      id: { ...payload.data },
    }),
  }
);

export const shoppingCart = createReducer(
  { clothes: [] },
  {
    [changeActualCard]: (state, { payload = {} }) => ({
      ...state,
      clothes: [
        ...state.clothes.filter((item) => {
          return payload.some((item2) => item._id === item2._id);
        }),
      ],
      // clothes: [...state.clothes, payload],
    }),
    [changeShoppingCard]: (state, { payload = {} }) => ({
      ...state,
      clothes: [...state.clothes, payload],
    }),
    [changeCardIncrement]: (state, { payload = {} }) => ({
      ...state,
      clothes: [
        ...state.clothes.map((card) =>
          card._id === payload
            ? {
                ...card,
                amount: card.amount + 1,
              }
            : card
        ),
      ],
    }),
    [changeCardDecrement]: (state, { payload = {} }) => ({
      ...state,
      clothes: [
        ...state.clothes.map((card) =>
          card._id === payload
            ? {
                ...card,
                amount: card.amount - 1,
              }
            : card
        ),
      ],
    }),
    [deleteCardBasket]: (state, { payload }) => ({
      ...state,
      clothes: [...state.clothes.filter((card) => card._id !== payload)],
    }),
  }
);

export const changeFilter = createReducer(
  { filterName: "" },
  {
    [changeFilterName]: (state, { payload = "" }) => ({
      ...state,
      filterName: payload,
    }),
  }
);

export const loadingCloth = createReducer(false, {
  [fetchClothes.pending]: () => true,
  [fetchClothes.fulfilled]: () => false,
  [fetchClothes.rejected]: () => false,
  // [fetchClothes.pending]: () => true,
  // [fetchClothes.fulfilled]: () => false,
  // [fetchClothes.rejected]: () => false,
  [addClothes.pending]: () => true,
  [addClothes.fulfilled]: () => false,
  [addClothes.rejected]: () => false,
  [fetchClothesId.pending]: () => true,
  [fetchClothesId.fulfilled]: () => false,
  [fetchClothesId.rejected]: () => false,
});
