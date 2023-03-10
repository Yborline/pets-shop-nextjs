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
} from "./LoginForm.styled";
import SignUpForm from "../SignUpForm/SignUpForm";
import { Field, Formik, FormikProps } from "formik";
import validationSchema from "../../validation/login";
import { getLoggedIn } from "../../redux/auth/auth-selectors";
import Button from "../Button/Button";

const LoginForm = ({ toggleModal }) => {
  //   const [name, setName] = useState("");
  const logged = useSelector(getLoggedIn);
  const [signUpForm, setSignUpForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const changeForm = () => {
    setSignUpForm(!signUpForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    toggleModal();
    setEmail("");
    setPassword("");
  };

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
          <DivClose>
            <h3>Login</h3>
            <ButtonClose onClick={toggleModal}>X</ButtonClose>
          </DivClose>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              const { email, password } = values;

              dispatch(authOperations.login({ email, password }));
              toggleModal();
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

                    <span>
                      {touched.password && errors.password
                        ? errors.password
                        : ""}
                    </span>
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
                  <Button
                    height="30px"
                    marginB="15px"
                    text="Увійти"
                    width="100%"
                    type="submit"
                    onClick={handleSubmit}
                  />

                  <button onClick={changeForm}>SignUp</button>
                  {logged && (
                    <button
                      type="button"
                      onClick={() => dispatch(authOperations.logout())}
                    >
                      exit
                    </button>
                  )}
                </Ul>
              </form>
            )}
          </Formik>
        </>
      )}
    </Div>
  );

  {
    /* <Div>
      {signUpForm ? (
        <SignUpForm toggleModal={toggleModal} changeForm={changeForm} />
      ) : (
        <>
          <DivClose>
            <h3>Login</h3>
            <button onClick={toggleModal}>X</button>
          </DivClose>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label>
              name
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              name
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>

          <button onClick={changeForm}>SignUp</button>
        </>
      )}

      <button onClick={() => dispatch(authOperations.logout())}>exit</button>
    </Div> */
  }
};

export default LoginForm;
