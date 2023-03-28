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

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    // count: clothes.length,
    count: count === undefined ? 0 : count,
  });

  useEffect(() => {
    dispatch(fetchClothes({ page }));
  }, [dispatch, page]);
  return (
    <>
      <Head>
        <title>Clothes</title>
      </Head>

      <ClothesListType clothes={clothes} count={count} fetch={fetchClothes} />
      {/* <Pagination
        clothes={clothes}
        count={count}
        page={page}
        totalPages={totalPages}
        nextPage={nextPage}
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}
        prevPage={prevPage}
        setPage={setPage}
      /> */}
      <Pagination
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        clothes={clothes}
        count={count}
        // changePage={changePage}
      />
    </>
  );
};

export default Clothes;
