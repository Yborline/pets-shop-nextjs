import Heading from "../components/Heading/Heading";
import Head from "next/head";
import { useState, useEffect } from "react";
import ClothesListType from "../components/ClothesList/ClothesListType";
import Modal from "../components/Modal";
import ClothesForm from "../components/ClothesForm/ClothesForm";

import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchClothes,
  filterSearch,
} from "../redux/clothes/clothes-operations";

import { useRouter } from "next/router";
import usePagination from "../hook";
import { useSelector } from "react-redux";
import {
  getClothes,
  getCount,
  getLoadingCloth,
} from "../redux/clothes/clothes-selector";

import PaginationCloth from "../components/Pagination/Pagination";
import FilterName from "../components/Filter/FilterName/FilterName";
import ClothesList from "../components/ClothesList/ClothesList/ClothesList";
import { Div, DivSpinner, DivColumn } from "../styles/clothes.styled";
import { usePageLoading } from "../hook";
import { ColorRing } from "react-loader-spinner";
import { getFetchClothes } from "../services/api";

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

const Clothes = () =>
  // { clothes, count }
  {
    const { isPageLoading } = usePageLoading();
    const loadingCloth = useSelector(getLoadingCloth);
    const clothes = useSelector(getClothes);
    const count = useSelector(getCount);
    const [input, setInput] = useState("");

    // const { pathname } = useRouter();
    const dispatch = useDispatch();
    const router = useRouter();
    const searchPage = router.query.page;

    const handleChange = (event, value) => {
      if (value) {
        router.query.page = value;
        router.push(`${router.pathname}?page=${router.query.page}`);
      }
      // else {
      //   router.query.page = stringPage;
      //   router.push(router);
      // }
    };

    useEffect(() => {
      if (input === "") {
        if (searchPage) {
          dispatch(fetchClothes({ page: searchPage }));
        } else {
          dispatch(fetchClothes({ page: "1" }));
        }
      } else {
        dispatch(filterSearch({ text: input, page: searchPage }));
      }
    }, [dispatch, input, searchPage]);

    return (
      <Div>
        <Head>
          <title>Clothes</title>
        </Head>
        <FilterName value={input} saveInput={setInput} />
        <DivColumn>
          <ClothesListType clothes={clothes} count={count} />
          <div>
            {loadingCloth || isPageLoading ? (
              <DivSpinner>
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </DivSpinner>
            ) : (
              <>
                <ClothesList clothes={clothes} />
                {clothes.length === 0 ? (
                  <></>
                ) : (
                  <PaginationCloth
                    clothes={clothes}
                    count={count}
                    handleChange={handleChange}
                    currentPage={Number(searchPage)}
                  />
                )}
              </>
            )}
          </div>
        </DivColumn>
      </Div>
    );
  };

// export async function getServerSideProps({ query }) {
//   const data = await getFetchClothes({ page: query.page });

//   return {
//     props: {
//       clothes: data?.data || null,
//       count: data?.allPage || null,
//     },
//   };
// }

export default Clothes;
