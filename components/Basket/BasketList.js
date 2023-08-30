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
  DivEndOrder,
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
import SummaryPrice from "./SummaryPrice/SummaryPrice";
import { fetchClothes } from "../../redux/clothes/clothes-operations";
import OnSale from "../OnSale/OnSale";
import BasketItem from "./BasketItem/BasketItem";
import MakeOnOrder from "../MakeOnOrder/MakeOnOrder";
import { notifySuccessOrder } from "../../notify/notify";
import { ToastContainer } from "react-toastify";
import Button from "../Button/Button";
import "react-toastify/dist/ReactToastify.css";
import { usePageLoading } from "../../hooks/hook";
import Spinner from "../Spinner/Spinner";

const BasketList = ({ clotheActual, clothesBasket }) => {
  const dispatch = useDispatch();
  const { isPageLoading } = usePageLoading();
  const [openOrder, setOpenOrder] = useState(false);
  const [numberOrder, setNumberOrder] = useState(null);

  const notify = (text, number) => {
    notifySuccessOrder(text);
    setNumberOrder(number);
  };

  return (
    <>
      <Div>
        {clotheActual.length > 0 ? (
          isPageLoading ? (
            <Spinner />
          ) : (
            <>
              <Ul>
                {clotheActual.map(
                  (
                    {
                      amount,
                      name,
                      code,
                      image,
                      model,
                      allprice,
                      _id,
                      discount,
                    },
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
                  text={
                    !openOrder ? "Зробити замовлення" : "Закрити замовлення"
                  }
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
          )
        ) : (
          <DivEndOrder>
            {numberOrder && (
              <>
                <h3>Ваш номер заказу #{numberOrder}</h3>
                <p>
                  {"Запам'ятайте або запишіть собі для питань по замовленню"}
                </p>
              </>
            )}
            <h3>Ваша корзина порожня!</h3>
          </DivEndOrder>
        )}
      </Div>
    </>
  );
};

export default BasketList;
