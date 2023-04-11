import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ClothesInfo from "../../components/ClothesInfo/ClothesInfo";
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
import { fetchAll, getClothById, getComments } from "../../services/api";
import Comments from "../../components/Coments/Coments";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { lazy } from "react";
const ClothesInfo = lazy(() =>
  import("../../components/ClothesInfo/ClothesInfo")
);

const ClothPage = ({ cloth, comments = null }) => {
  // useEffect(() => {
  //   console.log(id);
  //   if (id) {
  //     dispatch(fetchClothesId(id));

  // getComments(id).then((data) =>
  //   data === undefined ? null : setComent(data)
  // );
  //   }
  // }, [dispatch, id]);
  // console.log(coment);

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
      <Suspense
        fallback={
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
        }
      >
        <DivMain>
          <ClothesInfo
            cloth={cloth}
            notifyError={notifyError}
            notifySuccess={notifySuccess}
          />

          <ToastContainer />
          {comments ? <Comments coments={comments} /> : <></>}
        </DivMain>
      </Suspense>
      {/* )} */}
    </>
  );
};

export async function getStaticPaths() {
  const { data } = await fetchAll();
  const paths = data.map((cloth) => ({
    params: { id: cloth._id },
  }));
  return { paths, fallback: true };
}
export async function getStaticProps({ params }) {
  const data = await getComments(params.id);
  const { data: result } = await getClothById(params.id);
  return {
    props: {
      cloth: result.result || null,
      comments: data || null,
    },
  };
}

export default ClothPage;
