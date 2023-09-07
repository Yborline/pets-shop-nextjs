import { useEffect } from "react";
import { useState } from "react";
import debounce from "lodash.debounce";

const SetScroll = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 200));
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [scroll, setScroll];
};

export default SetScroll;
