import {
  getBasket,
  getClothes,
  getActualCard,
} from "../../redux/clothes/clothes-selector";
import { useDispatch, useSelector } from "react-redux";
import {
  Div,
  Li,
  DivImg,
  DivInfo,
  ButtonDelete,
  DivDelCounter,
  Ul,
  DivDelet,
  P,
} from "./BasketList.styled";
import Image from "next/image";
import Counter from "../Counter/Counter";
import { useEffect, useState } from "react";
import {
  changeActualCard,
  changeShoppingCart,
  deleteCardBasket,
} from "../../redux/clothes/clothes-actions";
import { MdOutlineDeleteOutline } from "react-icons/md";
import actualCard from "./actualCard";
import SummaryPrice from "./summaryPrice/SummaryPrice";
import { fetchClothes } from "../../redux/clothes/clothes-operations";
import OnSale from "../OnSale/OnSale";
import BasketItem from "./BasketItem/BasketItem";

const BasketList = ({}) => {
  const dispatch = useDispatch();
  const clothesMain = useSelector(getClothes);
  const clothesBasket = useSelector(getBasket);
  const clotheActual = useSelector(getActualCard);

  // const [clotesCount, setClothesCount] = useState(clothes);
  // console.log(clotesCount);
  console.log(clotheActual.length);
  console.log(clothesBasket.length);
  useEffect(() => {
    if (clotheActual.length !== clothesBasket.length) {
      dispatch(changeActualCard(clotheActual));
    }
  }, [clothesBasket, dispatch, clothesMain, clotheActual]);

  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  return (
    <>
      <Div>
        {clotheActual.length > 0 ? (
          <>
            <Ul>
              {clotheActual.map(
                (
                  { amount, name, code, image, model, allprice, _id, discount },
                  index
                ) => (
                  // <>

                  <Li key={_id}>
                    {/* <button onClick={}></button> */}
                    <BasketItem
                      amount={amount}
                      name={name}
                      code={code}
                      image={image}
                      model={model}
                      allprice={allprice}
                      _id={_id}
                      discount={discount}
                      index={index}
                    />
                  </Li>
                  // </>
                )
              )}
            </Ul>
            <SummaryPrice cards={clotheActual} />
          </>
        ) : (
          <p>Ваша корзина пуста!</p>
        )}
      </Div>
    </>
  );
};

export default BasketList;
