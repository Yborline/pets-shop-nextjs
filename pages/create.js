import { useDispatch, useSelector } from "react-redux";
import CLothesForm from "../components/ClothesForm/ClothesForm";
import { getUser } from "../redux/auth/auth-selectors";
import { use, useEffect } from "react";
import { fetchClothes } from "../redux/clothes/clothes-operations";
import { notifySuccess } from "../notify/notify";

import ToastifyContainer from "../components/ToastifyContainer/ToastifyContainer";
import { getLoadingCloth } from "../redux/clothes/clothes-selector";

const Create = () => {
  const loading = useSelector(getLoadingCloth);
  const type = useSelector(getUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

  const create = {
    name: "",

    // allprice: {
    price: "",
    // xs: { price: "", opt: "", active: false },
    // s: { price: "", opt: "", active: false },
    // sm: { price: "", opt: "", active: false },
    // m: { price: "", opt: "", active: false },
    // ml: { price: "", opt: "", active: false },
    // l: { price: "", opt: "", active: false },
    // xl: { price: "", opt: "", active: false },
    // xxl: { price: "", opt: "", active: false },
    // xl3: { price: "", opt: "", active: false },
    // xl4: { price: "", opt: "", active: false },
    // xl5: { price: "", opt: "", active: false },
    // xl6: { price: "", opt: "", active: false },
    // xl7: { price: "", opt: "", active: false },
    // },
    active: false,
    model: "",
    description: "",
  };
  return (
    <>
      <>
        {type?.user === "admin" ? (
          <CLothesForm
            loading={loading}
            notify={notifySuccess}
            initial={create}
          />
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
