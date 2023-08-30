import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import BasketList from "../components/Basket/BasketList";
import { getBasket, getActualCard } from "../redux/clothes/clothes-selector";
import { usePageLoading } from "../hooks/hook";
import { ColorRing } from "react-loader-spinner";
import { DivSpinner } from "../styles/basket.styled";
import Spinner from "../components/Spinner/Spinner";
import { changeActualCard } from "../redux/clothes/clothes-actions";
import { useEffect } from "react";

const Basket = () => {
  const dispatch = useDispatch();
  const { isPageLoading } = usePageLoading();
  const clothesBasket = useSelector(getBasket);
  const clotheActual = useSelector(getActualCard);
  useEffect(() => {
    if (clotheActual.length !== clothesBasket.length) {
      dispatch(changeActualCard(clotheActual));
    }
  }, [clotheActual, clothesBasket, dispatch]);

  return (
    <>
      <Head>
        <title>basket for shoping</title>
      </Head>
      {isPageLoading ? (
        <Spinner />
      ) : (
        <BasketList clothesBasket={clothesBasket} clotheActual={clotheActual} />
      )}
    </>
  );
};

export default Basket;
