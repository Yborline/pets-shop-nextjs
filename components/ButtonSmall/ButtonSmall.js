import { Btn } from "./ButtonSmall.styled";

const ButtonSmall = ({ marginR, handleClick, text }) => {
  return (
    <>
      <Btn marginRight={marginR} onClick={handleClick}>
        {text}
      </Btn>
    </>
  );
};

export default ButtonSmall;
