import { Btn } from "./Button.styled";

const Button = ({ marginR, handleClick, text }) => {
  return (
    <>
      <Btn marginRight={marginR} onClick={handleClick}>
        {text}
      </Btn>
    </>
  );
};

export default Button;
