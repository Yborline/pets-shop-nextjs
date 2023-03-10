import { createAction } from "@reduxjs/toolkit";

export const changeShoppingCard = createAction("clothes/changeShoppingСart");
export const changeCardIncrement = createAction("clothes/changeCardAmount");
export const changeCardDecrement = createAction("clothes/changeCardDecrement");
export const deleteCardBasket = createAction("clothes/deleteCardBasket");
export const changeActualCard = createAction("clothes/changeActualCard");
