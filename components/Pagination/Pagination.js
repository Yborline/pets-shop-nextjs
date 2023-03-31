// import { Div, DivNumb, DivPagination, Text, Button, Item } from "./Pagination";

// const Pagination = ({
//   clothes,
//   firstContentIndex,
//   lastContentIndex,
//   nextPage,
//   prevPage,
//   page,
//   setPage,
//   totalPages,
// }) => {
//   console.log(totalPages);
//   return (
//     <>
//       <DivNumb>
//         {clothes.slice(firstContentIndex, lastContentIndex).map((el) => (
//           <Item key={el._id}></Item>
//         ))}
//       </DivNumb>
//       <DivPagination>
//         <Text>
//           {page}/{totalPages}
//         </Text>
//         <Button onClick={prevPage}>
//           {/* &larr; */}
//           ssss
//         </Button>

//         {[...Array(totalPages).keys()].map((el) => (
//           <Button
//             onClick={() => setPage(el + 1)}
//             key={el}
//             // className={`page ${page === el + 1 ? "active" : ""}`}
//           >
//             {el + 1}
//           </Button>
//         ))}

//         {/* {pageCount === page ? (
//           <></>
//         ) : ( */}
//         <Button
//           // href={`/clothes/filter/${page + 1}`}
//           onClick={nextPage}
//         >
//           ---
//           {/* &rarr; */}
//         </Button>
//         {/* )} */}
//       </DivPagination>
//     </>
//   );
// };

// export default Pagination;

// import { Div, DivNumb, DivPagination, Text, Button, Item } from "./Pagination";

// const Pagination = ({
//   clothes,
//   firstContentIndex,
//   lastContentIndex,
//   nextPage,
//   prevPage,
//   page,
//   setPage,
//   totalPages,
// }) => {
//   return (
//     <>
//       <DivNumb>
//         {clothes.slice(firstContentIndex, lastContentIndex).map((el) => (
//           <Item key={el._id}></Item>
//         ))}
//       </DivNumb>
//       <DivPagination>
//         <Text>
//           {page}/{totalPages}
//         </Text>
//         <Button onClick={prevPage}>&larr;</Button>

//         {[...Array(totalPages).keys()].map((el) => (
//           <Button
//             onClick={() => setPage(el + 1)}
//             key={el}
//             // className={`page ${page === el + 1 ? "active" : ""}`}
//           >
//             {el + 1}
//           </Button>
//         ))}

//         {/* {pageCount === page ? (
//           <></>
//         ) : ( */}
//         <Button href={`/clothes/filter/${page + 1}`} onClick={nextPage}>
//           &rarr;
//         </Button>
//         {/* )} */}
//       </DivPagination>
//     </>
//   );
// };

// export default Pagination;
import s from "./Pagination.module.css";
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
  console.log(totalPages);
  return (
    <>
      {/* <div className="items">
        {clothes.slice(firstContentIndex, lastContentIndex).map((el) => (
          <div className="item" key={el._id}></div>
        ))}
      </div> */}
      <div className={s.divPagination}>
        <p className={s.text}>
          {page}/{totalPages}
        </p>
        <button onClick={prevPage} className={s.page}>
          &larr;
        </button>

        {[...Array(totalPages).keys()].map((el) => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`${s.page} ${page === el + 1 ? s.active : ""}  `}
          >
            {el + 1}
          </button>
        ))}

        {/* {pageCount === page ? (
          <></>
        ) : ( */}
        <button
          // href={`/clothes/filter/${page + 1}`}
          onClick={nextPage}
          className={s.page}
        >
          &rarr;
        </button>
        {/* )} */}
      </div>
    </>
  );
};

export default Pagination;
