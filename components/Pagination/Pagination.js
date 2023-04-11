import { Div } from "./Pagination.styled.jsx";

import { Pagination } from "@mui/material";

const PaginationCloth = ({ count, handleChange, currentPage }) => {
  return (
    <Div>
      <Pagination page={currentPage} count={count} onChange={handleChange} />
    </Div>
  );
};

export default PaginationCloth;
