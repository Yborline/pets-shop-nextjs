import Link from "next/link";
// import { Li } from "./ClothesType.style";
import ClothesItem from "./ClothesItem/ClothesItem";

const ClothesList = ({ list }) => {
  console.log(list);
  return (
    <>
      <ul>
        {list &&
          list.map((item) => (
            <ClothesItem
              id={item._id}
              key={item._id}
              name={item.name}
              active={item.active}
              code={item.code}
              image={item.image}
              owner={item.owner}
              model={item.model}
              price={item.price}
            />
          ))}
      </ul>
      {/* <Li>
        <Link href={path}>{title}</Link>
      </Li> */}
    </>
  );
};
export default ClothesList;
