import usePagination from "../../hook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchClothes } from "../../redux/clothes/clothes-operations";
import axios from "axios";
import { getCount } from "../../redux/clothes/clothes-selector";
import Link from "next/link";

const Pagination = ({ clothes }) => {
  const dispatch = useDispatch();
  const [allPage, setAllPage] = useState(0);
  axios.defaults.baseURL = "https://petshop-api-dqwd.onrender.com/api/";

  //   useEffect(() => {
  //     axios.get(`/clothes?&limit=1000`).then(function (response) {
  //       console.log(response.data.data.clothes.length);
  //       setAllPage(response.data.data.clothes.length);
  //     });

  //   }, []);
  //   const allClothes = async (_, thunkAPI) => {
  //     try {
  //       await axios.get(`/clothes?&limit=1000`).then(function (response) {
  //         console.log(response.data.data.clothes.length);
  //         return response.data.data.clothes.length;
  //       });
  //     } catch (error) {}
  //   };

  //   console.log(allClothes());

  const count = useSelector(getCount);
  console.log(count);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: count === undefined ? 0 : count,
  });

  // const pageCount = Math.ceil(count / 10);

  //   const dispatch = useDispatch();
  //   console.log(nextPage);

  useEffect(() => {
    dispatch(fetchClothes({ page }));
  }, [dispatch, page]);
  return (
    <>
      <div className="items">
        {clothes.slice(firstContentIndex, lastContentIndex).map((el) => (
          <div className="item" key={el._id}></div>
        ))}
      </div>
      <div className="pagination">
        <p className="text">
          {page}/{totalPages}
        </p>
        <button onClick={prevPage} className="page">
          &larr;
        </button>

        {[...Array(totalPages).keys()].map((el) => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${page === el + 1 ? "active" : ""}`}
          >
            {el + 1}
          </button>
        ))}

        {/* {pageCount === page ? (
          <></>
        ) : ( */}
        <button
          href={`/clothes/filter/${page + 1}`}
          onClick={nextPage}
          className="page"
        >
          &rarr;
        </button>
        {/* )} */}
      </div>
    </>
  );
};

export default Pagination;
