import Link from "next/link";
import { Li } from "./HomeItem.styled";

const HomeItem = ({ path, title }) => {
  return (
    <>
      <Li>
        <Link href={path}>{title}</Link>
      </Li>
    </>
  );
};

export default HomeItem;
