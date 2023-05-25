import { useDispatch, useSelector } from "react-redux";
import CLothesForm from "../components/ClothesForm/ClothesForm";
import { getUser } from "../redux/auth/auth-selectors";

import { DivSpinner } from "../styles/create.styled";
import { ThreeDots } from "react-loader-spinner";
import { getLoadingCloth } from "../redux/clothes/clothes-selector";
import { use, useEffect } from "react";
import { fetchClothes } from "../redux/clothes/clothes-operations";
import { notifySuccess } from "../notify/notify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ToastifyContainer from "../components/ToastifyContainer/ToastifyContainer";

const Create = () => {
  const type = useSelector(getUser);
  const loading = useSelector(getLoadingCloth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  const create = {
    name: "",
    code: "",
    allprice: {
      xs: { price: "", opt: "", active: false },
      s: { price: "", opt: "", active: false },
      sm: { price: "", opt: "", active: false },
      m: { price: "", opt: "", active: false },
      ml: { price: "", opt: "", active: false },
      l: { price: "", opt: "", active: false },
      xl: { price: "", opt: "", active: false },
      xxl: { price: "", opt: "", active: false },
      xl3: { price: "", opt: "", active: false },
      xl4: { price: "", opt: "", active: false },
      xl5: { price: "", opt: "", active: false },
      xl6: { price: "", opt: "", active: false },
      xl7: { price: "", opt: "", active: false },
    },
    active: false,
    model: "",
    description: "",
  };
  return (
    <>
      {/* {loading ? (
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
      ) : ( */}
      <>
        {type?.user === "admin" ? (
          <CLothesForm notify={notifySuccess} initial={create} />
        ) : (
          <h2>Такой страницы нет</h2>
        )}
        <ToastifyContainer />
      </>
      {/* )} */}
    </>
  );
};

export default Create;
