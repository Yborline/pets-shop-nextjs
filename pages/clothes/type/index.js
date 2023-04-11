import ClothesListType from "../../../components/ClothesList/ClothesListType";
import { getType } from "../../../redux/clothes/clothes-selector";
import { useRouter } from "next/router";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import usePagination from "../../../hook";
import { fetchType } from "../../../redux/clothes/clothes-operations";
import { getCountType } from "../../../redux/clothes/clothes-selector";
import { getFetchType } from "../../../services/api";
import ClothesList from "../../../components/ClothesList/ClothesList/ClothesList";
import { Div } from "./index.styled";

const Embroidery = ({ clothes, count }) => {
  // const dispatch = useDispatch();
  // const clothes = useSelector(getType);
  // const count = useSelector(getCountType);
  const router = useRouter();
  const searchPage = router.query.page;
  const type = router.query.type;
  console.log(clothes);
  const handleChange = (event, value) => {
    if (value) {
      router.query.page = value;
      router.push(router);
    } else {
      router.query.page = stringPage;
      router.push(router);
    }
  };

  // useEffect(() => {
  //   if (searchPage) {
  //     dispatch(fetchType({ searchPage, path: type }));
  //   }
  // }, [dispatch, searchPage, type]);

  return (
    <Div>
      <ClothesListType />
      <Suspense fallback={<h1>Loading...</h1>}>
        <ClothesList clothes={clothes} />
      </Suspense>
      {clothes.length === 0 ? (
        <></>
      ) : (
        <Pagination
          currentPage={Number(searchPage)}
          clothes={clothes}
          count={count}
          handleChange={handleChange}
        />
      )}
    </Div>
  );
};

// export async function getStaticPaths() {
//   const { data } = await fetchAll();
//   const paths = data.map((cloth) => ({
//     params: { id: cloth._id },
//   }));
//   return { paths, fallback: true };
// }

export async function getServerSideProps({ query }) {
  const data = await getFetchType({ page: query.page, path: query.type });

  return {
    props: {
      clothes: data.type || null,
      count: data.allPage || null,
    },
  };
}

// Embroidery.getServerSideProps = async ({ query }) => {
//   const data = await getFetchType({ page: query.page, path: query.type });

//   return {
//     clothes: data.type || null,
//     count: data.allPage || null,
//   };
// };

export default Embroidery;
