import Image from "next/image";
import Link from "next/link";
import { Li, Imgg, Div, DivOptions, Title } from "./ClotheItem.styled";
import { deleteClothes } from "../../../../redux/clothes/clothes-operations";
import { useDispatch } from "react-redux";

const ClothesItem = ({
  pathname,
  id,
  code,
  name,
  price,
  model,
  active,
  owner,
  image,
}) => {
  const dispatch = useDispatch();
  return (
    <Li>
      <Div>
        <Link href={`/clothes/${id}`}>
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
        <p>code: {code}</p>
        {pathname === "" ? <p>{model}</p> : <></>}
        <p>{price} грн.</p>
        <button onClick={() => dispatch(deleteClothes(id))}></button>
      </DivOptions>
    </Li>
  );
};

export default ClothesItem;
