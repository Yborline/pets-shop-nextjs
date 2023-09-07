import { Button } from "./ButtonUp.styled";
import SetScroll from "../../hooks/setScroll";

const ButtonUp = () => {
  const [scroll, setScroll] = SetScroll();

  const handleUpButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scroll > 250 && <Button onClick={handleUpButton} size="35px"></Button>}
    </>
  );
};

export default ButtonUp;
