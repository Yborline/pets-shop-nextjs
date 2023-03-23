import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClothes } from "../../../redux/clothes/clothes-operations";
import ClothesListType from "../../../components/ClothesList/ClothesListType";
import { useRouter } from "next/router";
import { getClothes, getCount } from "../../../redux/clothes/clothes-selector";
import Pagination from "../../../components/Pagination/Pagination";

const IdPages = () => {
  const clothes = useSelector(getClothes);
  const count = useSelector(getCount);
  const dispatch = useDispatch();
  const router = useRouter();
  const { page } = router.query;
  console.log(page);
  useEffect(() => {
    dispatch(fetchClothes({ page }));
  }, [dispatch, page]);

  return (
    <div>
      <ClothesListType />
      <Pagination clothes={clothes} count={count} />
    </div>
  );
};

export default IdPages;
