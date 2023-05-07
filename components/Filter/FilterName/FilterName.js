import { useDispatch, useSelector } from "react-redux";
// import { changeFilterName } from "../../../redux/clothes/clothes-actions";
// import { getFilterName } from "../../../redux/clothes/clothes-selector";
import {
  fetchClothes,
  filterSearch,
} from "../../../redux/clothes/clothes-operations";
import { useState } from "react";
import debounce from "lodash.debounce";
import { useEffect } from "react";
import { useMemo } from "react";
import { Div, Input } from "./FilterName.styled";
import { FiSearch } from "react-icons/fi";

import { useTranslation } from "react-i18next";

const FilterName = ({ heightInput, saveInput, height, position }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const filterName = useSelector(getFilterName);
  // const [text, setText] = useState("");

  // const handleInput = debounce(({ target: { name, value } }) => {
  //   switch (name) {
  //     case "filter":
  //       return setText(value);

  //     default:
  //       return;
  //   }
  // }, 300);

  const handleChange = (e) => {
    const b = e.target.value.includes("\\");
    const a = e.target.value.includes("[");
    const normalValue = e.target.value.trim();

    if (!a && !b) {
      saveInput(normalValue);
      // debouncedChangeHandler({ normalValue, page: "1" });
    }
    return;
    // setValue(normalValue);
  };

  const debouncedOnChange = debounce(handleChange, 350);

  return (
    <Div position={position} height={height}>
      <label>
        {/* {t("Search")} */}
        {/* <FcSearch /> */}

        <Input
          heightInput={heightInput}
          name="filter"
          type="text"
          onChange={debouncedOnChange}
        />
        <FiSearch style={{ position: "relative", right: "25px", top: "3px" }} />
      </label>
    </Div>
  );
};

export default FilterName;

// const debouncedChangeHandler = useMemo(
//   () =>
//     debounce(
//       ({ normalValue, page }) =>
//         () =>
//           dispatch(filterSearch({ text: normalValue, page })),
//       1350
//     ),
//   [dispatch]
// );

// useEffect(() => {
//   return () => {
//     debouncedChangeHandler.cancel();
//   };
// }, [debouncedChangeHandler]);
