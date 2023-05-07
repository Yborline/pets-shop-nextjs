import { combineReducers } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import {
  addClothes,
  deleteClothes,
  fetchAllClothes,
  fetchClothes,
  fetchClothesId,
  fetchType,
  filterSearch,
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
  clearShoppingCard,
} from "./clothes-actions";

export const items = createReducer(
  { allClothes: [], id: {}, clothes: [] },
  {
    // [fetchClothes.fulfilled]: (state, { payload = {} }) => ({
    //   ...state,
    //   clothes: [...payload.data],
    // }),
    [filterSearch.fulfilled]: (state, { payload = [] }) => ({
      ...state,
      clothes: [...payload.data],
      count: payload.allPage,
    }),
    [fetchClothes.fulfilled]: (state, { payload = [] }) => ({
      ...state,
      clothes: [...payload.data],
      count: payload.allPage,
    }),
    [fetchAllClothes.fulfilled]: (state, { payload = [] }) => ({
      ...state,
      allClothes: [...payload.data],
    }),
    // [fetchType.fulfilled]: (state, { payload = [] }) => ({
    //   ...state,
    //   type: [...payload.type],
    //   countType: payload.allPage,
    // }),
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
      clothes: [...payload],
    }),

    [clearShoppingCard]: (state, { payload }) => ({
      ...state,
      clothes: [],
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

// export const changeFilter = createReducer(
//   { filterName: "" },
//   {
//     [changeFilterName]: (state, { payload = "" }) => ({
//       ...state,
//       filterName: payload,
//     }),
//   }
// );

export const loadingCloth = createReducer(false, {
  [filterSearch.pending]: () => true,
  [filterSearch.fulfilled]: () => false,
  [filterSearch.rejected]: () => false,
  [fetchClothes.pending]: () => true,
  [fetchClothes.fulfilled]: () => false,
  [fetchClothes.rejected]: () => false,
  [fetchAllClothes.pending]: () => true,
  [fetchAllClothes.fulfilled]: () => false,
  [fetchAllClothes.rejected]: () => false,

  [addClothes.pending]: () => true,
  [addClothes.fulfilled]: () => false,
  [addClothes.rejected]: () => false,
  [fetchClothesId.pending]: () => true,
  [fetchClothesId.fulfilled]: () => false,
  [fetchClothesId.rejected]: () => false,
  [fetchType.pending]: () => true,
  [fetchType.fulfilled]: () => false,
  [fetchType.rejected]: () => false,
});

export const errorCloth = createReducer(null, {
  [fetchAllClothes.rejected]: (_, action) => action.payload,
  [fetchAllClothes.pending]: () => null,
  [fetchType.rejected]: (_, action) => action.payload,
  [fetchType.pending]: () => null,
  [fetchClothes.rejected]: (_, action) => action.payload,
  [fetchClothes.pending]: () => null,
  [filterSearch.rejected]: (_, action) => action.payload,
  [filterSearch.pending]: () => null,
});
