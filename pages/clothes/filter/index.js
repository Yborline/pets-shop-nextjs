import ClothesListType from "../../../components/ClothesList/ClothesListType";
import { getType } from "../../../redux/clothes/clothes-selector";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import usePagination from "../../../hook";
import { fetchType } from "../../../redux/clothes/clothes-operations";
import { getCountType } from "../../../redux/clothes/clothes-selector";
import { useState } from "react";
const Embroidery = () => {
  const dispatch = useDispatch();
  const clothes = useSelector(getType);
  const count = useSelector(getCountType);
  const router = useRouter();
  const path = router.pathname.slice(9);
  const [page, setPage] = useState("Page=1");
  const handleChange = (event, value) => {
    // setPage(value);
    router.push(router.pathname + `/page=${value}`);
  };

  useEffect(() => {
    dispatch(fetchType({ page, path }));
  }, [dispatch, page, path]);

  return (
    <>
      <ClothesListType clothes={clothes} />
      {clothes.length === 0 ? (
        <></>
      ) : (
        <Pagination
          currentPage={page}
          clothes={clothes}
          count={count}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

// export async function getStaticPaths() {
//   const { data } = await fetchAll();
//   const paths = data.map((cloth) => ({
//     params: { id: cloth._id },
//   }));
//   return { paths, fallback: true };
// }
// export async function getStaticProps({ params }) {
//   const data = await getComments(params.id);
//   const { data: result } = await getClothById(params.id);
//   return {
//     props: {
//       cloth: result.result || null,
//       comments: data || null,
//     },
//   };
// }

export default Embroidery;