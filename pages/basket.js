import Head from "next/head";
import { useSelector } from "react-redux";
import BasketList from "../components/Basket/BasketList";
import { getBasket } from "../redux/clothes/clothes-selector";
import { usePageLoading } from "../hook";
import { ColorRing } from "react-loader-spinner";
import { DivSpinner } from "../styles/basket.styled";

const Basket = () => {
  const clothes = useSelector(getBasket);
  const { isPageLoading } = usePageLoading();

  return (
    <>
      <Head>
        <title>basket for shoping</title>
      </Head>
      {isPageLoading ? (
        <DivSpinner>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </DivSpinner>
      ) : (
        <BasketList />
      )}
    </>
  );
};

export default Basket;
