import { Field, Formik, FormikProps, useFormikContext } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validationSchema from "../../validation/shopping";
import {
  getCity,
  getCityUAPoshta,
  getNumberMail,
  postMail,
} from "../../services/api";
import debounce from "lodash.debounce";
import summaryFunction from "../Basket/SummaryPrice/summaryFunction";
import { useCallback } from "react";
import NovaPoshta from "./NovaPoshta/NovaPoshta";
import UkrPoshta from "./UkrPoshta/UkrPoshta";
import Button from "../Button/Button";

import {
  Form,
  Ul,
  DivButton,
  InputNumber,
  Li,
  DivUp,
  DivDown,
  Input,
} from "./MakeOnOrder.styled";
import { clearShoppingCard } from "../../redux/clothes/clothes-actions";
import { getUser } from "../../redux/auth/auth-selectors";

const MakeOnOrder = ({ clothes, setOpenOrder, notify, deleteBasket }) => {
  //   const [signUpForm, setSignUpForm] = useState(false);
  const [adresses, setAdresses] = useState([]);
  const [inputCity, setInputCity] = useState("");
  const [status, setStatus] = useState("idle");
  const [number, setNumber] = useState("");
  const [department, setDepartment] = useState(null);
  const [radio, setRadio] = useState("");
  const user = useSelector(getUser);
  // const [service, setService] = useState("");
  console.log(user);
  const dispatch = useDispatch();

  const handleDepartment = ({ target: { name, value } }) => {
    setInputCity("");
    setNumber("");
    setRadio(value);
  };

  const handleInput = ({ target: { name, value } }) => {
    switch (name) {
      case "city":
        return setInputCity(value);
      case "department":
        return setNumber(value);
      default:
        return;
    }
  };

  //   const changeForm = () => {
  //     setSignUpForm(!signUpForm);
  //   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(authOperations.login({ email, password }));
  //   toggleModal();
  //   setEmail("");
  //   setPassword("");
  // };

  useEffect(() => {
    if (inputCity.length > 0) {
      changeCity();
    }
    const point = inputCity.indexOf(",");
    const comma = inputCity.indexOf(".");
    if (inputCity.length >= 1 && comma > 0 && point > 0) {
      changeDepartment();
    }
  }, [changeCity, changeDepartment, inputCity, number]);

  const changeCity = useCallback(() => {
    getCity(inputCity).then((data) => {
      setAdresses(data.data[0]?.Addresses);
    });
    //   setStatus("loading");
    //   getCity(e.target.value)
    //     .then((data) => {
    //       setAdresses(data.data[0]?.Addresses);
    //     })
    //     .catch(console.error);
    //   setStatus("success");
  }, [inputCity]);

  const changeDepartment = useCallback(() => {
    const point = inputCity.indexOf(",");
    const comma = inputCity.indexOf(".");
    console.log(inputCity);
    console.log(point);
    console.log(comma);
    if (inputCity.length <= 1 && !comma && !point) {
      return;
    }
    const allCity = inputCity.split(".")[1];
    console.log(allCity);
    const onlyCity = allCity.split(",")[0];
    getNumberMail({ city: onlyCity.trim(), number: number })
      .then((data) => {
        console.log(data);
        setDepartment(data?.data[0]?.Description);
      })
      .catch(console.error);
  }, [inputCity, number]);
  //   console.log(inputCity);

  //   console.log(adresses);
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const handleSubmit = (values, formikProps) => {
    console.log(inputCity);
    console.log(number);
    console.log(radio);

    if (inputCity === "" || radio === "" || number === "") {
      console.log("YRA");
      notify(`Заповніть всю інформацію !!`);

      return;
    }
    const numOrder = getRandomInt(999999);
    const order = {
      numberOrder: numOrder,
      name: values.name,
      surname: values.surname,
      email: values.email,
      phone: values.phone,
      city: inputCity,
      number: number,
      clothes: clothes,
      summary: summaryFunction(clothes),
      service: radio,
    };

    postMail(order).then((data) => {
      console.log(data);
    });
    deleteBasket();

    notify(
      `Ваше замовлення відправленнinputCityо, найближчим часом з вами зв'яжуться!`,
      numOrder
    );

    formikProps.resetForm();
    setInputCity("");
    setNumber("");
    setRadio("");
    setOpenOrder(false);
  };

  return (
    <Formik
      initialValues={{
        email: user.email ? user.email : "",
        phone: "",
        name: user.name ? user.name : "",
        surname: user.lastName ? user.lastName : "",
        picked: "",
      }}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={(values, formikProps) => {
        console.log(values);
        handleSubmit(values, formikProps);

        // const { email, password } = values;

        // dispatch(authOperations.login({ email, password }));
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
        <Form
          onSubmit={(e) => {
            e.preventDefault();

            // handleSubmit();
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
            <DivUp>
              {!user.name && !user.lastName && !user.email && (
                <>
                  <Li>
                    <label htmlFor="name">
                      {"Ім'я"}
                      {!values.name.length || errors.name ? (
                        <span> *</span>
                      ) : (
                        <></>
                      )}
                    </label>
                    <br />
                    <Input
                      type="name"
                      name="name"
                      placeholder="Ім'я"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <br />
                    <span>
                      {touched.name && errors.name ? errors.name : ""}
                    </span>
                  </Li>

                  <Li>
                    <label htmlFor="surname">
                      Прізвище
                      {!values.surname.length || errors.surname ? (
                        <span> *</span>
                      ) : (
                        <></>
                      )}
                    </label>
                    <br />
                    <Input
                      type="surname"
                      name="surname"
                      placeholder="Прізвище"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.surname}
                    />
                    <br />
                    <span>
                      {touched.surname && errors.surname ? errors.surname : ""}
                    </span>
                  </Li>

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
                </>
              )}
              <Li>
                <label htmlFor="phone">
                  Номер телефона
                  {!values.phone.length || errors.phone ? (
                    <span> *</span>
                  ) : (
                    <></>
                  )}
                </label>

                <br />
                <div>
                  <span>+38</span>
                  <InputNumber
                    type="tel"
                    name="phone"
                    placeholder="..."
                    maxLength="30"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.number}
                  />
                </div>

                <span>{touched.phone && errors.phone ? errors.phone : ""}</span>
              </Li>
            </DivUp>
            <DivDown>
              <div id="my-radio-group">Виберіть спосіб доставки</div>

              <Li role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field
                    type="radio"
                    name="picked"
                    value="nova"
                    onChange={handleDepartment}
                    checked={radio === "nova"}
                  />
                  Нова почта
                </label>
                <label>
                  <Field
                    type="radio"
                    name="picked"
                    value="ukr"
                    checked={radio === "ukr"}
                    onChange={handleDepartment}
                  />
                  Укрпошта
                </label>
              </Li>

              {/* 
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="nova"
                  onChange={handleChange}
                />
                Нова почта
              </label>
              <label>
                <Field
                  type="radio"
                  name="picked"
                  value="ukr"
                  onChange={handleChange}
                />
                Укрпошта
              </label>
            </div> */}
              {radio === "" ? (
                <></>
              ) : radio === "nova" ? (
                <NovaPoshta
                  handleInput={handleInput}
                  adresses={adresses}
                  department={department}
                  inputCity={inputCity}
                />
              ) : (
                <UkrPoshta
                  handleInput={handleInput}
                  adresses={adresses}
                  inputCity={inputCity}
                />
              )}
            </DivDown>

            {/* <NovaPoshta
              handleInput={handleInput}
              adresses={adresses}
              department={department}
              inputCity={inputCity}
            /> */}
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

            {/* <button type="submit" onClick={changeForm}>
              SignUp
            </button> */}
          </Ul>
          <br />
          <DivButton>
            <Button
              type="submit"
              height="30px"
              width="200px"
              text={"Замовити"}
              handleClick={handleSubmit}
            ></Button>
          </DivButton>
        </Form>
      )}
    </Formik>
  );
};

export default MakeOnOrder;

