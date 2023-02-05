import Image from "next/image";

const ClothesItem = ({
  id,
  code,
  name,
  price,
  model,
  active,
  owner,
  image,
}) => {
  return (
    <li>
      <img src={image.url} alt={name} width={400} height={200} />
      <h3>{name}</h3>
      <p>{code}</p>
      <p>{model}</p>
      <p>{price}</p>
      <p>{active}</p>
    </li>
  );
};

export default ClothesItem;
