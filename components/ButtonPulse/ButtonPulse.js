import { Btn } from "./ButtonPulse.styled";

const ButtonPulse = ({
  active,
  name,
  type,
  width,
  margintop,
  height,
  marginbottom,
  handleClick,
  text,
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
      </Btn>
    </>
  );
};

export default ButtonPulse;
