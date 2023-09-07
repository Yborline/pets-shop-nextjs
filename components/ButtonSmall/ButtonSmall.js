import { Btn } from "./ButtonSmall.styled.js";

const ButtonSmall = ({ marginright, handleClick, text }) => {
  return (
    <>
      <Btn $marginright={marginright} onClick={handleClick}>
        {text}
      </Btn>
    </>
  );
};

export default ButtonSmall;
