import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClothesInfo from "../../components/ClothesInfo/ClothesInfo";
import { getClothes } from "../../redux/clothes/clothes-selector";
import { getClothesId } from "../../redux/clothes/clothes-selector";
import { fetchClothesId } from "../../redux/clothes/clothes-operations";
import { DivMain } from "./[id].styled";

const ClothPage = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(fetchClothesId(id));
    }
  }, [dispatch, id]);

  return (
    <DivMain>
      <ClothesInfo />
    </DivMain>
  );
};

export default ClothPage;
