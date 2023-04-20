import Link from "next/link";
// import { Li } from "./ClothesType.style";
import ClothesItem from "./ClothesItem/ClothesItem";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleClothes } from "../../../redux/clothes/clothes-selector";
import { fetchClothes } from "../../../redux/clothes/clothes-operations";
import { useEffect } from "react";
import { Ul, H3 } from "./ClothesList.styled";
import { useRouter } from "next/router";
import { getLocationOrigin } from "next/dist/shared/lib/utils";
import { getLoggedIn, getUser } from "../../../redux/auth/auth-selectors";
import changeGroup from "./changeGroup";
import { deleteClothes } from "../../../redux/clothes/clothes-operations";
import Pagination from "../../Pagination/Pagination";

const ClothesList = ({ clothes = [] }) => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchClothes());
  // }, [dispatch]);

  const { user } = useSelector(getUser);
  // const clothes = useSelector(getVisibleClothes);
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = router.pathname.slice(9);

  return (
    <>
      {clothes.length === 0 ? (
        <H3>По вашому запиту нічого не знайдено</H3>
      ) : (
        <Ul>
          {
            // changeGroup(pathname, clothes) &&
            // changeGroup(pathname, clothes).map((item) => (

            clothes.map((item) => (
              <ClothesItem
                type={user}
                pathname={pathname}
                id={item._id}
                key={item._id}
                name={item.name}
                active={item.active}
                code={item.code}
                image={item.image.length > 0 ? item.image[0] : item.image}
                owner={item.owner}
                model={item.model}
                discount={item.discount}
                prices={
                  item.allprice?.xs
                  // user === "wholesaler"
                  //   ? item.allprice?.xs?.opt
                  //   : item.allprice?.xs?.price
                }
                dell={() => dispatch(deleteClothes(item._id))}
              />
            ))
          }
        </Ul>
      )}

      {/* <Pagination clothes={changeGroup(pathname, clothes)} /> */}
      {/* <Li>
        <Link href={path}>{title}</Link>
      </Li> */}
    </>
  );
};
export default ClothesList;
