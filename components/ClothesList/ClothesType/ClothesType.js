import Link from "next/link";
import { LinkActive, LinkNormal, Li } from "./ClothesType.styled";
import { useRouter } from "next/router";
import usePagination from "../../../hook";
import { useSelector } from "react-redux";
import { getClothes } from "../../../redux/clothes/clothes-selector";

const ClothesType = ({ id, path, title, page, type }) => {
  const { pathname } = useRouter();
  console.log(page);
  console.log(type);

  return (
    <>
      <Li key={id}>
        <Link
          href={{
            pathname: "/clothes/type",
            query: { page: page, type: type },
          }}
        >
          {pathname === path ? (
            <LinkActive>{title}</LinkActive>
          ) : (
            <LinkNormal>{title}</LinkNormal>
          )}
        </Link>
        {/* <Link href={path}>{title}</Link> */}
      </Li>
    </>
  );
};
export default ClothesType;
