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
const Jacket = () => {
  const dispatch = useDispatch();
  const clothes = useSelector(getType);
  const count = useSelector(getCountType);
  const router = useRouter();
  const path = router.pathname.slice(9);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
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

export default Jacket;
