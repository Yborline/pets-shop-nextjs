import {
  DivDelCounter,
  DivDelet,
  DivImg,
  DivInfo,
  TitleCard,
  Img,
} from "./BasketItem.styled.jsx";

import OnSale from "../../OnSale/OnSale";
import Counter from "../../Counter/Counter";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteCardBasket } from "../../../redux/clothes/clothes-actions";
import s from "./BasketItem.module.css";
import Link from "next/link";

const BasketItem = ({ amount, name, image, allprice, _id, discount }) => {
  const noImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png";
  const dispatch = useDispatch();
  const deleteCard = (_id) => {
    dispatch(deleteCardBasket(_id));
  };

  return (
    <>
      <DivImg>
        <Link href={`/clothes/${_id.split("-")[0]}`}>
          <Img
            loading="lazy"
            style={{ borderRadius: "5px 0px 0px 5px" }}
            src={image[0]?.url ? image[0]?.url : noImage}
            alt={name}
            fill
            sizes="(max-width: 768px) 100px,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Link>
      </DivImg>
      <DivInfo>
        <div>
          <Link href={`/clothes/${_id.split("-")[0]}`}>
            <TitleCard>
              {name} : {allprice.size}
            </TitleCard>
            <OnSale price={allprice.price} discount={discount} />
          </Link>
        </div>
        <DivDelet>
          <DivDelCounter>
            <Counter amount={amount} id={_id} />
          </DivDelCounter>
          <h3>{amount * (allprice.price - discount)} грн.</h3>
          <MdOutlineDeleteOutline
            className={s.delete}
            onClick={() => deleteCard(_id)}
            size="30px"
          />
        </DivDelet>
      </DivInfo>
    </>
  );
};

export default BasketItem;
