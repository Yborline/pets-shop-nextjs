const type = [
  { id: 1, title: "Overalls", path: "/clothes/overalls/overalls" },
  { id: 2, title: "Hoodies", path: "/clothes/hoodies/hoodies" },
  { id: 3, title: "T-shirts", path: "/clothes/t-shirts/t-shirts" },
  { id: 4, title: "Suits", path: "/clothes/suits/suits" },
  {
    id: 5,
    title: "Windbreakers",
    path: "/clothes/windbreakers/windbreakers",
  },
  { id: 6, title: "Dresses", path: "/clothes/dresses/dresses" },
  { id: 7, title: "Hats", path: "/clothes/hats/hats" },
  { id: 8, title: "Footwear", path: "/clothes/footwear/footwear" },
  { id: 9, title: "Couch/plaid", path: "/clothes/couch/couch" },
  { id: 10, title: "Diapers", path: "/clothes/diapers/diapers" },
  {
    id: 11,
    title: "For large dogs",
    path: "/clothes/forLargeDogs/forLargeDogs",
  },
];
import ClothesType from "./ClothesType/ClothesType";
import ClothesItem from "./ClothesList/ClothesList";

const ClothesListType = ({ clothes }) => {
  console.log(clothes);
  return (
    <>
      <ul>
        {type.map(({ id, title, path }) => (
          <ClothesType key={id} title={title} path={path} />
        ))}
      </ul>
      <ClothesItem list={clothes} />
    </>
  );
};

export default ClothesListType;
