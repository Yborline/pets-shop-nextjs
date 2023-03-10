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

const BasketList = ({}) => {
  const dispatch = useDispatch();
  const clothesMain = useSelector(getClothes);
  const clothesBasket = useSelector(getBasket);
  const clotheActual = useSelector(getActualCard);

  // const [clotesCount, setClothesCount] = useState(clothes);
  // console.log(clotesCount);

  useEffect(() => {
    if (clotheActual.length !== clothesBasket.length) {
      dispatch(changeActualCard(clothesBasket));
    }
  }, [clothesBasket, dispatch, clothesMain, clotheActual]);

  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  const deleteCard = (_id) => {
    dispatch(deleteCardBasket(_id));
  };
  return (
    <>
      <Div>
        <Ul>
          {clotheActual.length > 0 &&
            clotheActual.map(
              ({ amount, name, code, image, model, allprice, _id }, index) => (
                // <>

                <Li key={_id}>
                  <DivImg>
                    <Image
                      style={{ borderRadius: "5px 0px 0px 5px" }}
                      src={image?.url}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100px,
              (max-width: 1200px) 50vw,
              33vw"
                    />
                  </DivImg>
                  <DivInfo>
                    <div>
                      <P>
                        {name} : {allprice.size}
                      </P>
                      {/* <P>{model}</P> */}
                      <P>{allprice.price} грн</P>
                    </div>
                    <DivDelet>
                      <DivDelCounter>
                        <Counter amount={amount} id={_id} />
                      </DivDelCounter>
                      <h3>{amount * allprice.price} грн.</h3>
                      <MdOutlineDeleteOutline
                        style={{
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                        onClick={() => deleteCard(_id)}
                        size="20px"
                      />
                    </DivDelet>

                    {/* <Counter amount={amount} id={_id} changeCard={changeCard} /> */}
                  </DivInfo>

                  {/* <button onClick={}></button> */}
                </Li>
                // </>
              )
            )}
        </Ul>
        <SummaryPrice cards={clotheActual} />
      </Div>
    </>
  );
};

export default BasketList;
