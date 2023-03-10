import { useDispatch, useSelector } from "react-redux";
import CLothesForm from "../components/ClothesForm/ClothesForm";
import { getUser } from "../redux/auth/auth-selectors";

import { DivSpinner } from "./create.styled";
import { ThreeDots } from "react-loader-spinner";
import { getLoadingCloth } from "../redux/clothes/clothes-selector";
import { use, useEffect } from "react";
import { fetchClothes } from "../redux/clothes/clothes-operations";

const Create = () => {
  const type = useSelector(getUser);
  const loading = useSelector(getLoadingCloth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchClothes());
  }, [dispatch]);

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
        <>
          {type?.user === "admin" ? (
            <CLothesForm />
          ) : (
            <h2>Такой страницы нет</h2>
          )}
        </>
      )}
    </>
  );
};

export default Create;
