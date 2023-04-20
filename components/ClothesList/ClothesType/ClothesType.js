import Link from "next/link";
import { LinkActive, LinkNormal, Li } from "./ClothesType.styled";
import { useRouter } from "next/router";
import usePagination from "../../../hook";
import { useSelector } from "react-redux";
import { getClothes } from "../../../redux/clothes/clothes-selector";

const ClothesType = ({ id, title, page, type, parent }) => {
  const { query } = useRouter();
  return (
    <>
      {" "}
      <Link
        key={id}
        href={{
          pathname: "/clothes/type",
          query: { page: page, type: type },
        }}
      >
        <Li parent={parent}>
          {type === query.type ? (
            <LinkActive>{title}</LinkActive>
          ) : (
            <LinkNormal parent={parent}>{title}</LinkNormal>
          )}

          {/* <Link href={path}>{title}</Link> */}
        </Li>
      </Link>
    </>
  );
};
export default ClothesType;
