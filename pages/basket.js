import Head from "next/head";
import { useSelector } from "react-redux";
import BasketList from "../components/Basket/BasketList";
import { getBasket } from "../redux/clothes/clothes-selector";

const Basket = () => {
  const clothes = useSelector(getBasket);

  return (
    <>
      <Head>
        <title>basket for shoping</title>
      </Head>
      <BasketList />
    </>
  );
};

export default Basket;
