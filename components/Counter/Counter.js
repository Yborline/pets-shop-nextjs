import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const changeNumber = (event) => {
    switch (event.currentTarget.name) {
      case "increment":
        return setNumber(number + 1);
      case "decrement":
        return number === 0 ? setNumber(number) : setNumber(number - 1);
      default:
        return number;
    }
    console.log(number);
  };

  return (
    <div>
      <button name="decrement" onClick={changeNumber}></button>
      <span>{number}</span>
      <button name="increment" onClick={changeNumber}></button>
    </div>
  );
};

export default Counter;
