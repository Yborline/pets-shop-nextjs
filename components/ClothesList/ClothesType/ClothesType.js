import Link from "next/link";
import { LiActive, LiNormal } from "./ClothesType.styled";
import { useRouter } from "next/router";
import usePagination from "../../../hooks/hook";
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
        {type === query.type ? (
          <LiActive>{title}</LiActive>
        ) : (
          <LiNormal>{title}</LiNormal>
        )}
      </Link>
    </>
  );
};
export default ClothesType;
