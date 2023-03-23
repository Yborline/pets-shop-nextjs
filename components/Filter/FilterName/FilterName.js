import { useDispatch, useSelector } from "react-redux";
import { changeFilterName } from "../../../redux/clothes/clothes-actions";
import { getFilterName } from "../../../redux/clothes/clothes-selector";

const FilterName = () => {
  const dispatch = useDispatch();
  const filterName = useSelector(getFilterName);

  return (
    <div>
      <input
        type="text"
        value={filterName}
        onChange={(event) =>
          dispatch(changeFilterName(event.currentTarget.value))
        }
      />
    </div>
  );
};

export default FilterName;
