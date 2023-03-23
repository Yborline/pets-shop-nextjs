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
import { getClothes } from "../redux/clothes/clothes-selector";
import Pagination from "../components/Pagination/Pagination";
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

const Clothes = () => {
  const clothes = useSelector(getClothes);
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  // const {
  //   firstContentIndex,
  //   lastContentIndex,
  //   nextPage,
  //   prevPage,
  //   page,
  //   setPage,
  //   totalPages,
  // } = usePagination({
  //   contentPerPage: 11,
  //   count: clothes.length,
  // });

  return (
    <>
      <Head>
        <title>Clothes</title>
      </Head>

      <ClothesListType />
      <Pagination
        clothes={clothes}
        // page={page}
        // totalPages={totalPages}
        // nextPage={nextPage}
        // firstContentIndex={firstContentIndex}
        // lastContentIndex={lastContentIndex}
        // prevPage={prevPage}
        // setPage={setPage}
      />
    </>
  );
};

export default Clothes;
