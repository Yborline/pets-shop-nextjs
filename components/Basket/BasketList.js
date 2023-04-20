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
  SummaryTittle,
  DivButton,
  TitleSumm,
} from "./BasketList.styled";
import Image from "next/image";
import Counter from "../Counter/Counter";
import { useEffect, useState } from "react";
import {
  changeActualCard,
  changeShoppingCart,
  clearShoppingCard,
  deleteCardBasket,
} from "../../redux/clothes/clothes-actions";
import { MdOutlineDeleteOutline } from "react-icons/md";
import actualCard from "./actualCard";
import SummaryPrice from "./summaryPrice/SummaryPrice";
import { fetchClothes } from "../../redux/clothes/clothes-operations";
import OnSale from "../OnSale/OnSale";
import BasketItem from "./BasketItem/BasketItem";
import MakeOnOrder from "../MakeOnOrder/MakeOnOrder";
import { notifySuccessOrder } from "../../notify/notify";
import { ToastContainer } from "react-toastify";
import Button from "../Button/Button";
import "react-toastify/dist/ReactToastify.css";

const BasketList = ({}) => {
  const dispatch = useDispatch();
  const clothesMain = useSelector(getClothes);
  const clothesBasket = useSelector(getBasket);
  const clotheActual = useSelector(getActualCard);
  const [openOrder, setOpenOrder] = useState(false);

  // const [clotesCount, setClothesCount] = useState(clothes);
  // console.log(clotesCount);
  console.log(clotheActual);
  console.log(clotheActual.length);
  console.log(clothesBasket.length);
  useEffect(() => {
    if (clotheActual.length !== clothesBasket.length) {
      dispatch(changeActualCard(clotheActual));
    }
  }, [clotheActual, clothesBasket, dispatch]);

  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  const notify = (text) => {
    notifySuccessOrder(text);
  };

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
            <SummaryTittle>
              <TitleSumm>Cумма до сплати :</TitleSumm>
              <SummaryPrice tag="h4" cards={clotheActual} />
            </SummaryTittle>
            <DivButton>
              <Button
                height="30px"
                width="200px"
                text={!openOrder ? "Зробити замовлення" : "Закрити замовлення"}
                handleClick={() => setOpenOrder(!openOrder)}
              ></Button>
            </DivButton>
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
            />
            {openOrder && (
              <MakeOnOrder
                setOpenOrder={setOpenOrder}
                clothes={clotheActual}
                notify={notify}
                deleteBasket={() => dispatch(clearShoppingCard())}
              />
            )}
          </>
        ) : (
          <p>Ваша корзина порожня!</p>
        )}
      </Div>
    </>
  );
};

export default BasketList;
