import { useState } from "react";

const useToggleSignUpForm = () => {
  const [signUpForm, setSignUpForm] = useState(false);

  const changeForm = () => {
    setSignUpForm(!signUpForm);
  };

  return [signUpForm, changeForm];
};

export default useToggleSignUpForm;
