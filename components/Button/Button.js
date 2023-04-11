import { Btn } from "./Button.styled";

const Button = ({
  active,
  name,
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
        active={active}
        name={name}
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
