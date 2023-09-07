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
  H3,
} from "./SignUpForm.styled";
import LoginForm from "../LoginForm/LoginForm";
import { getLoggedIn, getUser } from "../../redux/auth/auth-selectors";
import { useTranslation } from "react-i18next";

const SignUpForm = ({ changeForm, toggleModal, signUpForm }) => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { t } = useTranslation();
  const logged = useSelector(getLoggedIn);
  const dispatch = useDispatch();
  const type = useSelector(getUser);

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case "name":
  //       return setName(value);
  //     case "email":
  //       return setEmail(value);
  //     case "password":
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const clearState = () => {
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(authOperations.register({ name, email, password }));
  //   toggleModal();
  //   clearState();
  // };

  return (
    <Div>
      {signUpForm === false ? (
        <LoginForm />
      ) : (
        <>
          <DivClose>
            <H3>{t("Sign up")}</H3>
            <ButtonClose onClick={toggleModal}>X</ButtonClose>
          </DivClose>
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              user: false,
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const { name, lastName, email, password, user } = values;
              dispatch(
                authOperations.register({
                  name: name.toLowerCase().trim(),
                  lastName: lastName.toLowerCase().trim(),
                  email: email.toLowerCase().trim(),
                  password,
                  user: user === false ? "user" : "wholesaler",
                })
              );
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
                      {t("Name")}
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
                    <label
                      htmlFor="name"
                      className="form__label"
                      style={{ marginTop: "28px" }}
                    >
                      {t("SurName")}
                      {!values.name.length || errors.name ? (
                        <span> *</span>
                      ) : (
                        <></>
                      )}
                    </label>

                    <br />
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="..."
                      maxLength="100"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />

                    <span>
                      {touched.lastName && errors.lastName
                        ? errors.lastName
                        : ""}
                    </span>

                    <br />
                  </Li>

                  <Li>
                    <label htmlFor="email" className="form__label">
                      {t("Email")}
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
                      {t("Password")}
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
                      {t("Confirm password")}
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
                  {type.user === "admin" ? (
                    <Li>
                      <label>
                        <Field type="checkbox" name="user" />
                        Опт
                      </label>
                    </Li>
                  ) : (
                    <></>
                  )}

                  <Button
                    // disabled={
                    //   (!isValid && dirty) ||
                    //   (!isValid && !dirty) ||
                    //   (Object.keys(touched).length === 0 &&
                    //     touched.constructor === Object)
                    // }
                    height="30px"
                    marginbottom="15px"
                    text={t("Sign up")}
                    width="100%"
                    type="submit"
                    handleClick={handleSubmit}
                  />

                  <Button
                    height="30px"
                    marginbottom="15px"
                    text={t("Sign in")}
                    width="100%"
                    type="submit"
                    handleClick={changeForm}
                  >
                    Login
                  </Button>

                  {logged && (
                    <Button
                      height="30px"
                      marginB="15px"
                      text={t("Exit")}
                      width="100%"
                      type="submit"
                      handleClick={() => dispatch(authOperations.logout())}
                    ></Button>
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
