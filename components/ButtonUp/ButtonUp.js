import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Button } from "./ButtonUp.styled";
import s from "./ButtonUp.module.css";
import { useEffect } from "react";
import { useState } from "react";
import debounce from "lodash.debounce";
import { useRef } from "react";

const ButtonUp = () => {
  const [scroll, setScroll] = useState(0);
  const windowWidth = useRef(window.innerWidth);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 200));
    return () => window.removeEventListener("scroll", handleScroll);
    // window.removeEventListener("scroll", debounce(handleScroll), 200);
  }, []);

  console.log(scroll);

  return (
    <>
      {scroll > 250 && windowWidth.current < 767 ? (
        <BsFillArrowUpCircleFill
          onClick={handleUpButton}
          className={s.button}
          size="35px"
        ></BsFillArrowUpCircleFill>
      ) : (
        <></>
      )}
    </>
  );
};

export default ButtonUp;
