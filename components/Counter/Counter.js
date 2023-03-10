import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeCardIncrement,
  changeCardDecrement,
} from "../../redux/clothes/clothes-actions";
import { Div, Button, Span } from "./Counter.styled";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Counter = ({ amount, id, changeCard }) => {
  // const [number, setNumber] = useState(1);
  const dispatch = useDispatch();

  const changeNumber = (event) => {
    switch (event.currentTarget.name) {
      case "increment":
        return dispatch(changeCardIncrement(id));
      // setNumber(number + 1) && changeCard(number + 1);
      case "decrement":
        return amount === 1 ? amount : dispatch(changeCardDecrement(id));
      // number === 1
      //   ? setNumber(number) && changeCard(number)
      //   : setNumber(number - 1) && changeCard(number - 1);
      default:
        return number;
    }
  };

  return (
    <Div>
      <Button name="decrement" onClick={changeNumber}>
        <AiOutlineArrowLeft />
      </Button>

      <Span>{amount}</Span>

      <Button name="increment" onClick={changeNumber}>
        <AiOutlineArrowRight />
      </Button>
    </Div>
  );
};

export default Counter;
