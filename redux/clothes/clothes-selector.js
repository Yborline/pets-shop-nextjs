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
// export const getLoadingClothe = (state) => state.clothes.loadingCloth;

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

export const getActualCard = createSelector(
  [getAllClothes, getBasket],
  (clothes, basket) => {
    if (clothes.length === 0) {
      return basket;
    }

    // const similarityArray = arraysIвBrief.filter((item) => {
    //   return clothes.some((item2) => item2._id === item[0]);
    // });
    const arraysIвBrief = basket.map((item) => item._id.split("-"));

    const similarityArray = arraysIвBrief.filter((item) => {
      return clothes.some((item2) => item2._id === item[0]);
    });

    // const ActualPrice = basket.map((item) => {
    //   const idBasket = item._id.split("-");
    //   const normalCloth = clothes.filter((item2) => item2._id === idBasket[0]);
    //   const price = basket.map(item => {});
    // });
    // const normalId = array.join("");
    const arrayId = similarityArray.map((item) => item.join("-"));

    const newArray = basket.filter((item) => {
      return arrayId.some((item2) => item._id === item2);
    });
    // console.log(newArray);

    const actualP = newArray.map((item) => {
      const arrayBasketNormalId = clothes.filter(
        (item2) => item.code === item2.code
      );
      return arrayBasketNormalId;
    });

    const normalArray = actualP.flat();
    const add = [];

    basket.map((item) => {
      const arrayBasketNormalId = normalArray.map((item2) => {
        if (item._id.includes(item2._id)) {
          if (
            item.allprice.price !== item2.allprice[item.allprice.size]?.price ||
            item.discount !== item2.discount
          ) {
            const newBasket = {
              ...item,
              discount: item2.discount,
              allprice: {
                price: item2.allprice[item.allprice.size]?.price,
                size: item.allprice.size,
              },
            };

            const actualP = add.find((item) => item._id === newBasket._id);
            if (!actualP) {
              return add.push(newBasket);
            }
            return;
          } else {
            const hhh = add.find((item4) => item4._id === item._id);
            if (!hhh) {
              return add.push(item);
            }
            // return add.push(item);
          }
        }
      });
      // const ddddd = basket.filter(
      //   (item) => item._id !== arrayBasketNormalId._id
      // );
      // ddddd.push(arrayBasketNormalId);
      return;
    });
    console.log(add);
    return add;
  }
);
