import Heading from "../components/Heading/Heading";
import Head from "next/head";
import { useState, useEffect } from "react";
import ClothesListType from "../components/ClothesList/ClothesListType";
import Modal from "../components/Modal";
import ClothesForm from "../components/ClothesForm/ClothesForm";

import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchClothes } from "../redux/clothes/clothes-operations";

import { useRouter } from "next/router";
import usePagination from "../hook";
import { useSelector } from "react-redux";
import { getClothes, getCount } from "../redux/clothes/clothes-selector";

import PaginationCloth from "../components/Pagination/Pagination";
import FilterName from "../components/Filter/FilterName/FilterName";
// export const getStaticProprs = async (context) => {
//   const response = await fetch(
//     "https://petshop-api-dqwd.onrender.com/api/clothes"
//   );
//   const data = await response.json();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { clothes: data },
//   };
// };
console.log(fetchClothes);
const Clothes = () => {
  // const [pages, setPage] = useState(1);
  const clothes = useSelector(getClothes);
  const count = useSelector(getCount);
  const { pathname } = useRouter();
  const dispatch = useDispatch();

  // const changePage = (page) => {
  //   setPage(page);
  // };

  // const {
  //   firstContentIndex,
  //   lastContentIndex,
  //   nextPage,
  //   prevPage,
  //   page,
  //   setPage,
  //   totalPages,
  // } = usePagination({
  //   contentPerPage: 10,
  //   // count: clothes.length,
  //   count: count === undefined ? 0 : count,
  // });
  const [currentPage, setCurrentPage] = useState(1);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    dispatch(fetchClothes({ page: currentPage }));
  }, [dispatch, currentPage]);
  return (
    <div>
      <Head>
        <title>Clothes</title>
      </Head>
      <FilterName />
      <ClothesListType clothes={clothes} count={count} fetch={fetchClothes} />

      {clothes.length === 0 ? (
        <></>
      ) : (
        <PaginationCloth
          clothes={clothes}
          count={count}
          handleChange={handleChange}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Clothes;
