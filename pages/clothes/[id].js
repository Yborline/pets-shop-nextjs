import { useState } from "react";

import { DivMain } from "../../styles/[id].styled";
import { notifySuccess, notifyError } from "../../notify/notify";

import "react-toastify/dist/ReactToastify.css";

import { getClothById, getComments } from "../../services/api";
// import Comments from "../../components/Comments/Comments";
import { usePageLoading } from "../../hooks/hook";
// import CommentAdd from "../../components/CommentAdd/CommentAdd";
import Spinner from "../../components/Spinner/Spinner";
import dynamic from "next/dynamic";

const ClothesInfo = dynamic(
  () => import("../../components/ClothesInfo/ClothesInfo"),
  {
    loading: () => <Spinner />,
  }
);
// const CommentAdd = dynamic(
//   () => import("../../components/CommentAdd/CommentAdd"),
//   {
//     loading: () => <Spinner />,
//   }
// );
// const Comments = dynamic(() => import("../../components/Comments/Comments"), {
//   loading: () => <Spinner />,
// });

const ClothPage = ({ cloth = {}, comments = [] }) => {
  const [newComment, setNewComment] = useState({});

  console.log(newComment);
  const changeComment = (text) => {
    setNewComment(text);
  };
  const { isPageLoading } = usePageLoading();

  return (
    <>
      {isPageLoading ? (
        <Spinner />
      ) : (
        <DivMain>
          <ClothesInfo
            cloth={cloth}
            notifyError={notifyError}
            notifySuccess={notifySuccess}
          />

          {/* {cloth && (
            <>
              <CommentAdd save={changeComment} id={cloth} />
              <Comments newComment={newComment} comments={comments} />
            </>
          )} */}
        </DivMain>
      )}
      {/* )} */}
    </>
  );
};

export async function getServerSideProps({ params }) {
  const data = await getComments(params.id);
  const result = await getClothById(params.id);
  console.log(result);
  return {
    props: {
      cloth: result || null,
      comments: data || null,
    },
  };
}

export default ClothPage;
