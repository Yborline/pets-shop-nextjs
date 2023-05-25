import Head from "next/head";
import { useSelector } from "react-redux";
import BasketList from "../components/Basket/BasketList";
import { getBasket } from "../redux/clothes/clothes-selector";
import { usePageLoading } from "../hook";
import { ColorRing } from "react-loader-spinner";
import { DivSpinner } from "../styles/basket.styled";
import Spinner from "../components/Spinner/Spinner";

const Basket = () => {
  const clothes = useSelector(getBasket);
  const { isPageLoading } = usePageLoading();

  return (
    <>
      <Head>
        <title>basket for shoping</title>
      </Head>
      {isPageLoading ? <Spinner /> : <BasketList />}
    </>
  );
};

export default Basket;
