import { Btn } from "./Button.styled";

const Button = ({
  type,
  width,
  marginT,
  height,
  marginB,
  handleClick,
  text,
}) => {
  return (
    <>
      <Btn
        type={type}
        width={width}
        height={height}
        marginB={marginB}
        marginT={marginT}
        onClick={handleClick}
      >
        {text}
      </Btn>
    </>
  );
};

export default Button;
