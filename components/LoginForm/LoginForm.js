import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "../../redux/auth/auth-operatins";
import {
  Div,
  Ul,
  ButtonLog,
  DivClose,
  Li,
  Input,
  ButtonClose,
  Error,
} from "./LoginForm.styled";
import SignUpForm from "../SignUpForm/SignUpForm";
import { Field, Formik, FormikProps } from "formik";
import validationSchema from "../../validation/login";
import {
  getLoggedIn,
  getUser,
  getUserError,
  getUserLoading,
} from "../../redux/auth/auth-selectors";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import { notifyErrorAll, notifySuccessAll } from "../../notify/notify";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";
import useToggleSignUpForm from "../../hooks/useToggleSignUpForm";

const LoginForm = ({ toggleModal }) => {
  //   const [name, setName] = useState("");
  const { t } = useTranslation();
  const logged = useSelector(getLoggedIn);
  const loading = useSelector(getUserLoading);
  // const user = useSelector(getUser);
  const [signUpForm, changeForm] = useToggleSignUpForm();
  const error = useSelector(getUserError);
  console.log(error);
  const dispatch = useDispatch();

  return (
    <Div>
      {signUpForm ? (
        <SignUpForm
          signUpForm={signUpForm}
          toggleModal={toggleModal}
          changeForm={changeForm}
        />
      ) : (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <>
                {" "}
                <DivClose>
                  <h3>{t("Login")}</h3>
                  <ButtonClose onClick={toggleModal}>X</ButtonClose>
                </DivClose>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    remember: false,
                  }}
                  validateOnBlur
                  validationSchema={validationSchema}
                  onSubmit={async (values, bag) => {
                    const { email, password, remember } = values;

                    dispatch(
                      authOperations.login({ email, password, remember })
                    );

                    // toggleModal();

                    // navigate('/library');
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
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                      }}

                      // onKeyDown={(e) => {
                      //   if (e.key === "Enter") {
                      //     e.preventDefault();
                      //     handleSubmit(values);
                      //   }
                      // }}
                    >
                      <Ul>
                        {/* <GoogleAuthBtn /> */}
                        <Li>
                          <label htmlFor="email">
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
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <br />
                          <span>
                            {touched.email && errors.email ? errors.email : ""}
                          </span>
                        </Li>
                        <Li>
                          <label htmlFor="password">
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

                          <span>
                            {touched.password && errors.password
                              ? errors.password
                              : ""}
                          </span>
                        </Li>
                        <Li>
                          <label>
                            <Field type="checkbox" name="user" />
                            {t("Remember me")}
                          </label>
                        </Li>
                        {/* <Button
                    // disabled={
                    //   (!isValid && dirty) ||
                    //   (!isValid && !dirty) ||
                    //   (Object.keys(touched).length === 0 &&
                    //     touched.constructor === Object)
                    // }
                    type="submit"
                    onClick={handleSubmit}
                    color="#FFFFFF"
                    backgroundColor="#FF6B08"
                  >
                    Увійти
                  </Button> */}
                        {error === "Request failed with status code 401" ||
                        error === "Request failed with status code 400" ? (
                          <Error>Невірна почта або пароль </Error>
                        ) : (
                          <></>
                        )}
                        <Button
                          height="30px"
                          marginbottom="15px"
                          text={t("Sign in")}
                          width="100%"
                          type="submit"
                          handleClick={handleSubmit}
                        />
                        <Button
                          height="30px"
                          marginbottom="15px"
                          text={t("Sign up")}
                          width="100%"
                          type="submit"
                          handleClick={changeForm}
                        ></Button>
                      </Ul>
                    </form>
                  )}
                </Formik>
              </>

              {logged && (
                <Button
                  height="30px"
                  marginB="15px"
                  text="Exit"
                  width="100%"
                  type="submit"
                  handleClick={() => dispatch(authOperations.logout())}
                >
                  {t("Exit")}
                </Button>
              )}
            </>
          )}
        </>
      )}
    </Div>
  );
};

export default LoginForm;
