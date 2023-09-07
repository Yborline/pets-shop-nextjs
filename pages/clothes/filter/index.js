import ClothesListType from "../../../components/ClothesList/ClothesListType";
import { getType } from "../../../redux/clothes/clothes-selector";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import { fetchType } from "../../../redux/clothes/clothes-operations";
import { getCountType } from "../../../redux/clothes/clothes-selector";

const Embroidery = () => {
  const dispatch = useDispatch();
  const clothes = useSelector(getType);
  const count = useSelector(getCountType);
  const router = useRouter();
  const searchPage = router.query.page;
  const type = router.query.type;

  const handleChange = (event, value) => {
    if (value) {
      router.query.page = value;
      router.push(router);
      // router.push(router.pathname + `/page=${value}&type=${type}`);
    } else {
      router.query.page = stringPage;
      router.push(router);
      // router.push(router.pathname + `/page=${stringPage}`);
    }
  };

  useEffect(() => {
    if (searchPage) {
      dispatch(fetchType({ searchPage, path: type }));
    }
  }, [dispatch, searchPage, type]);

  return (
    <>
      <ClothesListType clothes={clothes} />
      {clothes.length !== 0 && (
        <Pagination
          currentPage={Number(searchPage)}
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
