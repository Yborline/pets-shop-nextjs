import usePagination from "../../hook";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchClothes } from "../../redux/clothes/clothes-operations";
import axios from "axios";
import { getCount } from "../../redux/clothes/clothes-selector";
import Link from "next/link";

const Pagination = ({
  clothes,
  firstContentIndex,
  lastContentIndex,
  nextPage,
  prevPage,
  page,
  setPage,
  totalPages,
}) => {
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
