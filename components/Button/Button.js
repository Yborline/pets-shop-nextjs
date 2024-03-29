import { Btn } from "./Button.styled";

const Button = ({
  active,
  name,
  type,
  width,
  margintop,
  height,
  marginbottom,
  handleClick,
  text,
  children,
}) => {
  return (
    <>
      <Btn
        $active={active}
        name={name}
        type={type}
        width={width}
        height={height}
        $marginbottom={marginbottom}
        $margintop={margintop}
        onClick={handleClick}
      >
        {text}
        {"  "}
        {children}
      </Btn>
    </>
  );
};

export default Button;
