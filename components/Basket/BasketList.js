import { getBasket, getClothes } from "../../redux/clothes/clothes-selector";
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

const BasketList = ({}) => {
  const dispatch = useDispatch();
  const clothesMain = useSelector(getClothes);
  const clothes = useSelector(getBasket);
  const [cloth, setCloth] = useState(actualCard(clothes, clothesMain));
  // const [clotesCount, setClothesCount] = useState(clothes);
  // console.log(clotesCount);

  useEffect(() => {
    if (cloth.length > 0) {
      dispatch(changeActualCard(cloth));
    }
  }, [cloth, clothes.length, dispatch]);

  console.log(clothes);

  const changeCard = (counter) => {
    const card = clothes.map((item) => console.log(item.allprice.amount));
    setClothesCount(card);
  };

  const deleteCard = (_id) => {
    dispatch(deleteCardBasket(_id));
  };
  return (
    <>
      <Div>
        <Ul>
          {clothes !== [] &&
            clothes.map(
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
                        <Counter
                          amount={amount}
                          id={_id}
                          changeCard={changeCard}
                        />
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
        <SummaryPrice cards={clothes} />
      </Div>
    </>
  );
};

export default BasketList;
