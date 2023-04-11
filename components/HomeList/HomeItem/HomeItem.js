import Link from "next/link";
import { Li } from "./HomeItem.styled";

const HomeItem = ({ type, title, page }) => {
  return (
    <>
      <Li>
        <Link
          href={{
            pathname: "/clothes/type",
            query: { page: page, type: type },
          }}
        >
          {title}
        </Link>
      </Li>
    </>
  );
};

export default HomeItem;
