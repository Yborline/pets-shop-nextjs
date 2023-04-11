import { createAction } from "@reduxjs/toolkit";

export const changeShoppingCard = createAction("clothes/changeShoppingCard");
export const changeCardIncrement = createAction("clothes/changeCardAmount");
export const changeCardDecrement = createAction("clothes/changeCardDecrement");
export const deleteCardBasket = createAction("clothes/deleteCardBasket");
export const changeActualCard = createAction("clothes/changeActualCard");
export const changeFilterName = createAction("clothes/changeFilterName");
export const clearShoppingCard = createAction("clothes/clearShopping");
