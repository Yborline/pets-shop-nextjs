import ClothesListType from "../../../components/ClothesList/ClothesListType";
import { getType } from "../../../redux/clothes/clothes-selector";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../../components/Pagination/Pagination";
import usePagination from "../../../hook";
import { fetchType } from "../../../redux/clothes/clothes-operations";
import { getCountType } from "../../../redux/clothes/clothes-selector";
const Bomber = () => {
  const dispatch = useDispatch();
  const clothes = useSelector(getType);
  const count = useSelector(getCountType);
  const router = useRouter();
  const path = router.pathname.slice(9);
  console.log(clothes);
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
    dispatch(fetchType({ page, path }));
  }, [dispatch, page, path]);

  return (
    <>
      <ClothesListType clothes={clothes} />
      <Pagination
        firstContentIndex={firstContentIndex}
        lastContentIndex={lastContentIndex}
        nextPage={nextPage}
        prevPage={prevPage}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        clothes={clothes}
      />
    </>
  );
};

export default Bomber;
