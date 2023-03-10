import Link from "next/link";
// import { Li } from "./ClothesType.style";
import ClothesItem from "./ClothesItem/ClothesItem";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../../../redux/clothes/clothes-selector";
import { fetchClothes } from "../../../redux/clothes/clothes-operations";
import { useEffect } from "react";
import { Ul } from "./ClothesList.styled";
import { useRouter } from "next/router";

const ClothesList = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchClothes());
  // }, [dispatch]);

  const clothes = useSelector(getClothes);
  const router = useRouter();
  const pathname = router.pathname.slice(9);
  const filterClothes = (path) => {
    switch (path) {
      case "":
        return clothes;
      case "overalls":
        const overall = clothes.filter((item) => item.model === "overall");

        return overall;
      case "vest":
        const vest = clothes.filter((item) => item.model === "vest");

        return vest;
      case "blanket":
        const blanket = clothes.filter((item) => item.model === "blanket");

        return blanket;
      case "jacket":
        const jacket = clothes.filter((item) => item.model === "jacket");

        return jacket;
      case "suits":
        const suit = clothes.filter((item) => item.model === "suit");

        return suit;
      case "skinny":
        const skinny = clothes.filter((item) => item.model === "skinny");

        return skinny;
      case "bomber":
        const bomber = clothes.filter((item) => item.model === "bomber");

        return bomber;
      case "sweatshirt":
        const sweatshirt = clothes.filter(
          (item) => item.model === "sweatshirt"
        );

        return sweatshirt;
      case "trousers":
        const trousers = clothes.filter((item) => item.model === "trousers");

        return trousers;
      case "hats":
        const hats = clothes.filter((item) => item.model === "hats");

        return hats;
      case "scarves":
        const scarves = clothes.filter((item) => item.model === "scarves");

        return scarves;
      case "tShirt":
        const tShirt = clothes.filter((item) => item.model === "tShirt");

        return tShirt;
      case "singlet":
        const singlet = clothes.filter((item) => item.model === "singlet");

        return singlet;
      case "shirt":
        const shirt = clothes.filter((item) => item.model === "shirt");

        return shirt;
      case "embroidery":
        const embroidery = clothes.filter(
          (item) => item.model === "embroidery"
        );

        return embroidery;
      case "dress":
        const dress = clothes.filter((item) => item.model === "dress");

        return dress;

      case "skirt":
        const skirt = clothes.filter((item) => item.model === "skirt");

        return skirt;

      case "briefs":
        const briefs = clothes.filter((item) => item.model === "briefs");

        return briefs;

      default:
        return clothes;
    }
  };

  return (
    <>
      <Ul>
        {filterClothes(pathname) &&
          filterClothes(pathname).map((item) => (
            <ClothesItem
              pathname={pathname}
              id={item._id}
              key={item._id}
              name={item.name}
              active={item.active}
              code={item.code}
              image={item.image}
              owner={item.owner}
              model={item.model}
              price={item.allprice?.xs?.price}
            />
          ))}
      </Ul>
      {/* <Li>
        <Link href={path}>{title}</Link>
      </Li> */}
    </>
  );
};
export default ClothesList;
