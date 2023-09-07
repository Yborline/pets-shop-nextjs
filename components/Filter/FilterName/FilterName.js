import { Div, Input } from "./FilterName.styled.jsx";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import ctxInput from "../../../context/filterContext";

const FilterName = ({ heightinput, height, position, marginbottom }) => {
  const { input, inputIn } = useContext(ctxInput);

  const handleChange = (value) => {
    console.log(value);
    const b = value.includes("\\");
    const a = value.includes("[");
    const normalValue = value.trim();

    if (!a && !b) {
      inputIn(normalValue);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    return;
  };

  return (
    <Div $position={position} height={height} $marginbottom={marginbottom}>
      <label style={{ position: "relative" }}>
        <Input
          height={heightinput}
          name="filter"
          type="text"
          value={input}
          debounceTimeout={500}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
        <FiSearch style={{ position: "absolute", right: "10px", top: "6px" }} />
      </label>
    </Div>
  );
};

export default FilterName;
