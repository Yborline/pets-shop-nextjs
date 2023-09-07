import ClothesItem from "./ClothesItem/ClothesItem";
import { useDispatch, useSelector } from "react-redux";
import { getLoadingCloth } from "../../../redux/clothes/clothes-selector";
import { Ul, H3 } from "./ClothesList.styled";
import { useRouter } from "next/router";
import { getUser } from "../../../redux/auth/auth-selectors";
import { deleteClothes } from "../../../redux/clothes/clothes-operations";

const ClothesList = ({ clothes = [] }) => {
  const loadingCloth = useSelector(getLoadingCloth);
  const { user } = useSelector(getUser);
  const router = useRouter();
  const dispatch = useDispatch();
  const pathname = router.pathname.slice(9);

  return (
    <div style={{ marginTop: "20px" }}>
      {clothes.length === 0 && !loadingCloth ? (
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
    </div>
  );
};
export default ClothesList;
