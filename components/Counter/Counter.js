import { useDispatch } from "react-redux";
import {
  changeCardIncrement,
  changeCardDecrement,
} from "../../redux/clothes/clothes-actions";
import { Div, Button, Span } from "./Counter.styled.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import { BiMinus } from "react-icons/bi";

const Counter = ({ amount, id, }) => {
  const dispatch = useDispatch();

  const changeNumber = (event) => {
    switch (event.currentTarget.name) {
      case "increment":
        return dispatch(changeCardIncrement(id));

      case "decrement":
        return amount === 1 ? amount : dispatch(changeCardDecrement(id));
      default:
        return number;
    }
  };

  return (
    <Div>
      <Button name="decrement" onClick={changeNumber}>
        <BiMinus />
      </Button>

      <Span>{amount}</Span>

      <Button name="increment" onClick={changeNumber}>
        <AiOutlinePlus />
      </Button>
    </Div>
  );
};

export default Counter;
