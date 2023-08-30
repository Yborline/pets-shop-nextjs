import clothesMenu from "../clothesMenu/clothesMenu";
import ClothesType from "./ClothesType/ClothesType";
import ClothesList from "./ClothesList/ClothesList";
import {
  Ul,
  Div,
  DivType,
  Select,
  Option,
  DivOther,
  DivReset,
} from "./ClothesListType.styled";
// import { useState, useEffect } from "react";
// import Modal from "../Modal";
// import CLothesForm from "../ClothesForm/ClothesForm";
import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../../redux/auth/auth-selectors";
// import Link from "next/link";
// import { fetchClothes } from "../../redux/clothes/clothes-operations";
// import FilterName from "../Filter/FilterName/FilterName";
// import Pagination from "../Pagination/Pagination";
// import { useSelector } from "react-redux";
// import { getClothes } from "../../redux/clothes/clothes-selector";
import { getLoadingCloth } from "../../redux/clothes/clothes-selector";
import { ColorRing } from "react-loader-spinner";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useContext } from "react";
import ctxInput from "../../context/filterContext";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

const ClothesListType = () => {
  const { input, inputIn } = useContext(ctxInput);
  const windowWidth = useRef(window.innerWidth);

  const params = useSearchParams();

  const loading = useSelector(getLoadingCloth);
  const { t } = useTranslation();
  const search = params.get("type");
  console.log(search);
  const router = useRouter();

  const handleChange = ({ target }) => {
    router.push({
      pathname: `/clothes/type`,
      query: { page: "1", type: target.value },
    });
  };

  const handleClick = () => {
    router.push({
      pathname: `/clothes`,
      query: { page: "1" },
    });
    inputIn("");
  };

  return (
    <Div>
      <DivOther>
        {windowWidth.current > 767 ? (
          <Ul style={{ padding: "0px" }}>
            <button type="button" onClick={handleClick}>
              reset
            </button>
            {clothesMenu.map(({ page, type, id, title, parent }) => (
              <ClothesType
                key={id}
                id={id}
                title={t(`${title}`)}
                page={page}
                type={type}
                parent={parent}
              />
            ))}
          </Ul>
        ) : (
          <DivReset>
            <Select
              // value={select}
              defaultValue={search ? search : "Model"}
              onChange={(event) => handleChange(event)}
            >
              {!search && (
                <option value={"Model"} disabled hidden>
                  {t("Model")}
                </option>
              )}
              {clothesMenu.map(({ page, type, id, title }) => (
                <Option
                  value={type}
                  key={id}
                  id={id}

                  // title={t(`${title}`)}
                >
                  {title}
                </Option>
              ))}
            </Select>
            <button type="button" onClick={handleClick}>
              reset
            </button>
          </DivReset>
        )}
      </DivOther>
    </Div>
  );
};

export default ClothesListType;

// const type = [
//   { id: 1, title: "Overalls", path: "/clothes/overalls" },
//   { id: 2, title: "Vest", path: "/clothes/vest" },
//   { id: 3, title: "Blanket", path: "/clothes/blanket" },
//   { id: 4, title: "Jacket", path: "/clothes/jacket" },
//   { id: 5, title: "Suits", path: "/clothes/suits" },
//   { id: 6, title: "Skinny", path: "/clothes/skinny" },
//   { id: 7, title: "Bomber", path: "/clothes/bomber" },
//   { id: 8, title: "Sweatshirt", path: "/clothes/sweatshirt" },
//   { id: 9, title: "Trousers", path: "/clothes/trousers" },
//   { id: 10, title: "Hats", path: "/clothes/hats" },
//   { id: 11, title: "Scarves", path: "/clothes/scarves" },
//   { id: 12, title: "T-shirts", path: "/clothes/tShirt" },
//   { id: 13, title: "Singlet", path: "/clothes/singlet" },
//   { id: 14, title: "Shirt", path: "/clothes/shirt" },
//   { id: 15, title: "Embroidery", path: "/clothes/embroidery" },
//   { id: 16, title: "Dress", path: "/clothes/dress" },
//   { id: 17, title: "Skirt", path: "/clothes/skirt" },
//   { id: 18, title: "Briefs", path: "/clothes/briefs" },
// ];
// import ClothesType from "./ClothesType/ClothesType";
// import ClothesItem from "./ClothesList/ClothesList";
// import { Ul } from "./ClothesListType.styled";
// import { useSelector } from "react-redux";
// import { getClothes } from "../../redux/clothes/clothes-selector";

// const ClothesListType = () => {
//   const clothes = useSelector(getClothes);
//   console.log(clothes);
//   return (
//     <>
//       <Ul>
//         {type.map(({ id, title, path }) => (
//           <ClothesType key={id} title={title} path={path} />
//         ))}
//       </Ul>
//       <ClothesItem list={clothes} />
//     </>
//   );
// };

// export default ClothesListType;
