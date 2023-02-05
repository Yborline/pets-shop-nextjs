import Link from "next/link";
import { Li } from "./ClothesType.style";

const ClothesType = ({ path, title }) => {
  return (
    <>
      <Li>
        <Link href={path}>{title}</Link>
      </Li>
    </>
  );
};
export default ClothesType;
