import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClothesInfo from "../../components/ClothesInfo/ClothesInfo";
import {
  getClothes,
  getLoadingCloth,
} from "../../redux/clothes/clothes-selector";
import { getClothesId } from "../../redux/clothes/clothes-selector";
import { fetchClothesId } from "../../redux/clothes/clothes-operations";
import { DivMain } from "./[id].styled";
import { notifySuccess, notifyError } from "../../notify/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DivSpinner } from "./[id].styled";
import { ThreeDots } from "react-loader-spinner";

const ClothPage = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const loading = useSelector(getLoadingCloth);
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    console.log(id);
    if (id) {
      dispatch(fetchClothesId(id));
    }
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <DivSpinner>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#800000"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </DivSpinner>
      ) : (
        <DivMain>
          <ClothesInfo
            notifyError={notifyError}
            notifySuccess={notifySuccess}
          />
          <ToastContainer />
        </DivMain>
      )}
    </>
  );
};

export default ClothPage;
