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
import { DivMain } from "../../styles/[id].styled";
import { notifySuccess, notifyError } from "../../notify/notify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DivSpinner } from "../../styles/[id].styled";
import { ColorRing, ThreeDots } from "react-loader-spinner";
import { fetchAll, getClothById, getComments } from "../../services/api";
import Comments from "../../components/Comments/Comments";
import { usePageLoading } from "../../hook";
import ClothesInfo from "../../components/ClothesInfo/ClothesInfo";
import CommentAdd from "../../components/CommentAdd/CommentAdd";

const ClothPage = ({ cloth, comments = [] }) => {
  const [newComment, setNewComment] = useState({});

  console.log(newComment);
  const changeComment = (text) => {
    setNewComment(text);
  };
  const { isPageLoading } = usePageLoading();
  const dispatch = useDispatch();

  // const router = useRouter();
  // const loading = useSelector(getLoadingCloth);
  // const { id } = router.query;
  // console.log(comments);
  // console.log(cloth);
  // const [coment, setComent] = useState(null);

  // useEffect(() => {
  //   console.log(id);
  //   if (id) {
  //     dispatch(fetchClothesId(id));

  //     getComments(id).then((data) =>
  //       data === undefined ? null : setComent(data)
  //     );
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
      {isPageLoading ? (
        <DivSpinner>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </DivSpinner>
      ) : (
        <DivMain>
          <ClothesInfo
            cloth={cloth}
            notifyError={notifyError}
            notifySuccess={notifySuccess}
          />

          <ToastContainer />
          <CommentAdd save={changeComment} id={cloth} />
          <Comments
            newComment={newComment}
            comments={comments ? comments : []}
          />
        </DivMain>
      )}
      {/* )} */}
    </>
  );
};

export async function getServerSideProps({ params }) {
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
