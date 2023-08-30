import { useEffect, useState } from "react";
import { getLoggedIn, getUserError } from "../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

const useToggleModal = () => {
  const [showModal, setShowModal] = useState(false);
  const logged = useSelector(getLoggedIn);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    if (logged) {
      setShowModal(false);
    }
  }, [logged, showModal]);

  return [showModal, toggleModal];
};

export default useToggleModal;
