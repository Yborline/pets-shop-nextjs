import {
  DivDelCounter,
  DivDelet,
  P,
  DivImg,
  DivInfo,
} from "./BasketItem.styled";
import Image from "next/image";
import OnSale from "../../OnSale/OnSale";
import Counter from "../../Counter/Counter";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCardBasket } from "../../../redux/clothes/clothes-actions";

const BasketItem = ({
  amount,
  name,
  code,
  image,
  model,
  allprice,
  _id,
  discount,
  index,
}) => {
  const dispatch = useDispatch();
  // const [currentPrice, setCurrentPrice] = useState(null);
  const deleteCard = (_id) => {
    dispatch(deleteCardBasket(_id));
  };
  // console.log(currentPrice);
  // const changePrice = (price) => {
  //   setCurrentPrice(price);
  // };

  return (
    <>
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
          <OnSale
            // changePrice={changePrice}
            price={allprice.price}
            discount={discount}
          />

          {/* <P>{allprice.price} грн</P> */}
        </div>
        <DivDelet>
          <DivDelCounter>
            <Counter amount={amount} id={_id} />
          </DivDelCounter>
          <h3>{amount * (allprice.price - discount)} грн.</h3>
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
    </>
  );
};

export default BasketItem;