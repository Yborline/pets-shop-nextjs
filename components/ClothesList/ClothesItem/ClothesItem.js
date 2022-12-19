import Link from "next/link";
import { Li } from "./ClothesItem.style";

const ClotheItem = () => {
  return (
    <>
      <Li>
        <Link href={path}>{title}</Link>
      </Li>
    </>
  );
};
export default ClotheItem;
