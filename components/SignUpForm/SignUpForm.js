import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/auth-operatins";
import Button from "../Button/Button";
import { Field, Formik, FormikProps } from "formik";
import validationSchema from "../../validation/register";
import {
  Div,
  Ul,
  ButtonLog,
  DivClose,
  Li,
  Input,
  ButtonClose,
} from "./SignUpForm.styled";
import LoginForm from "../LoginForm/LoginForm";
import { getLoggedIn } from "../../redux/auth/auth-selectors";

const SignUpForm = ({ changeForm, toggleModal, signUpForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logged = useSelector(getLoggedIn);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const clearState = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    toggleModal();
    clearState();
  };

  return (
    <Div>
      {signUpForm === false ? (
        <LoginForm />
      ) : (
        <>
          <DivClose>
            <h3>Register</h3>
            <ButtonClose onClick={toggleModal}>X</ButtonClose>
          </DivClose>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const { name, email, password } = values;
              dispatch(authOperations.register({ name, email, password }));
              changeForm();
              toggleModal();
              // console.log(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              dirty,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <form
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(values);
                  }
                }}
              >
                <Ul>
                  {/* <GoogleAuthBtn /> */}
                  <Li>
                    <label
                      htmlFor="name"
                      className="form__label"
                      style={{ marginTop: "28px" }}
                    >
                      І'я
                      {!values.name.length || errors.name ? (
                        <span> *</span>
                      ) : (
                        <></>
                      )}
                    </label>

                    <br />
                    <Input
                      type="text"
                      name="name"
                      placeholder="..."
                      maxLength="100"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />

                    <span className="input__error">
                      {touched.name && errors.name ? errors.name : ""}
                    </span>

                    <br />
                  </Li>

                  <Li>
                    <label htmlFor="email" className="form__label">
                      Електронна адреса
                      {!values.email.length || errors.email ? (
                        <span> *</span>
                      ) : (
                        <></>
                      )}
                    </label>
                    <br />
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      maxLength="63"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <br />

                    <span className="input__error">
                      {touched.email && errors.email ? errors.email : ""}
                    </span>
                  </Li>

                  <Li>
                    <label htmlFor="password" className="form__label">
                      Пароль
                      {!values.password.length || errors.password ? (
                        <span> *</span>
                      ) : (
                        <></>
                      )}
                    </label>

                    <br />
                    <Input
                      type="password"
                      name="password"
                      placeholder="..."
                      maxLength="30"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    <br />
                    <span className="input__error">
                      {touched.password && errors.password
                        ? errors.password
                        : ""}
                    </span>
                  </Li>

                  <Li>
                    <label htmlFor="confirmPassword" className="form__label">
                      Підтвердити пароль
                      {!values.confirmPassword.length ||
                      errors.confirmPassword ? (
                        <span> *</span>
                      ) : (
                        <></>
                      )}
                    </label>
                    <br />
                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="..."
                      maxLength="30"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      onPaste={(e) => {
                        e.preventDefault();
                      }}
                    />
                    <br />

                    <span className="input__error">
                      {touched.confirmPassword && errors.confirmPassword
                        ? errors.confirmPassword
                        : ""}
                    </span>
                  </Li>
                  <Button
                    // disabled={
                    //   (!isValid && dirty) ||
                    //   (!isValid && !dirty) ||
                    //   (Object.keys(touched).length === 0 &&
                    //     touched.constructor === Object)
                    // }
                    height="30px"
                    marginB="15px"
                    text="Зареєструватися"
                    width="100%"
                    type="submit"
                    onClick={handleSubmit}
                  />

                  <button onClick={changeForm}>Login</button>

                  {logged && (
                    <button
                      type="button"
                      onClick={() => dispatch(authOperations.logout())}
                    >
                      exit
                    </button>
                  )}
                  {/* <p>
                    Вже з нами? <a href="./login">Увійти</a>
                  </p> */}
                </Ul>
              </form>
            )}
          </Formik>
        </>
      )}
    </Div>
  );
};

export default SignUpForm;
