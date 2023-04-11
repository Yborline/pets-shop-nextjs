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

const FilterName = () => {
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
    const normalValue = e.target.value.trim();
    debouncedChangeHandler(normalValue);

    // setValue(normalValue);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce((normalValue) => dispatch(filterSearch(normalValue)), 350),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  return (
    <Div>
      <label>
        Поиск
        <Input name="filter" type="text" onChange={handleChange} />
      </label>
    </Div>
  );
};

export default FilterName;
