import Image from "next/image";
import Link from "next/link";
import {
  Li,
  Imgg,
  Div,
  DivOptions,
  Title,
  DivPrice,
  P,
} from "./ClotheItem.styled";
import { useDispatch } from "react-redux";
import { TbDiscount2 } from "react-icons/tb";
import { fetchClothesId } from "../../../../redux/clothes/clothes-operations";
import { useRouter } from "next/router";
import OnSale from "../../../OnSale/OnSale";
const ClothesItem = ({
  pathname,
  id,
  code,
  name,
  prices,
  model,
  active,
  owner,
  image,
  type,
  dell,
  discount,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { opt, price } = prices;

  return (
    <Li>
      <Div>
        <Link href={`/clothes/${id}`}>
          {discount > 0 ? (
            <TbDiscount2
              style={{ position: "relative", zIndex: "2", color: "yellow" }}
              size="40px"
            />
          ) : (
            <></>
          )}

          <Image
            src={image.url}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </Link>
      </Div>
      <DivOptions>
        <Title>{name}</Title>
        <P>code: {code}</P>
        {pathname === "" ? <P>{model}</P> : <></>}
        <>
          {type === "wholesaler" ? (
            <p>{opt} грн.</p>
          ) : (
            <OnSale price={price} discount={discount} />
          )}
        </>
        {type === "admin" ? (
          <>
            <button onClick={dell}>dell</button>
          </>
        ) : (
          <></>
        )}
      </DivOptions>
    </Li>
  );
};

export default ClothesItem;
