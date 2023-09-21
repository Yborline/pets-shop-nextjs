import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { getLoadingCloth } from "../redux/clothes/clothes-selector";
import { notifySuccess } from "../notify/notify";
const useLoadingNotify = () => {
  const [click, setClick] = useState(false);
  const loading = useSelector(getLoadingCloth);
  const [name, setName] = useState({ name: "", text: "" });

  const submitFormNotify = (name, text) => {
    setClick(true);
    setName({ name, text });
  };

  useEffect(() => {
    if (loading === false && click) {
      notifySuccess(name.name, name.text);
      setClick(false);
    }
  }, [click, loading, name]);

  return [click, submitFormNotify];
};

export default useLoadingNotify;
