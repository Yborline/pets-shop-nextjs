import clothesMenu from "../ClothesMenu/ClothesMenu";
import ClothesType from "./ClothesType/ClothesType";
import ClothesList from "./ClothesList/ClothesList";
import { Ul, Div, DivType } from "./ClothesListType.styled";
import { useState, useEffect } from "react";
import Modal from "../Modal";
import CLothesForm from "../ClothesForm/ClothesForm";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/auth/auth-selectors";
import Link from "next/link";
import { fetchClothes } from "../../redux/clothes/clothes-operations";
import FilterName from "../Filter/FilterName/FilterName";
import Pagination from "../Pagination/Pagination";
// import { useSelector } from "react-redux";
// import { getClothes } from "../../redux/clothes/clothes-selector";
import { getLoadingCloth } from "../../redux/clothes/clothes-selector";
import { ColorRing } from "react-loader-spinner";
import { Suspense } from "react";

const ClothesListType = () => {
  const user = useSelector(getUser);
  const loading = useSelector(getLoadingCloth);

  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchClothes());
  // }, [dispatch]);

  return (
    <Div>
      {/* {showModal && (
        <Modal close={toggleModal}>
          <CLothesForm onSave={toggleModal} toggleModal={toggleModal} />
        </Modal>
      )} */}
      <DivType>
        <Ul>
          {clothesMenu.map(({ page, type, id, title }) => (
            <ClothesType
              key={id}
              id={id}
              title={title}
              page={page}
              type={type}
            />
          ))}
        </Ul>
      </DivType>
      {user?.user === "admin" && <Link href="/create">Create</Link>}

      {/* {loading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      ) : ( */}

      {/* )} */}
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
