import { Field, Formik, FormikProps, useFormikContext } from "formik";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import validationSchema from "../../validation/login";
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

const MakeOnOrder = ({ clothes }) => {
  //   const [signUpForm, setSignUpForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adresses, setAdresses] = useState([]);
  const [inputCity, setInputCity] = useState("");
  const [status, setStatus] = useState("idle");
  const [number, setNumber] = useState(null);
  const [department, setDepartment] = useState(null);
  const [radio, setRadio] = useState("");
  // const [service, setService] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authOperations.login({ email, password }));
    toggleModal();
    setEmail("");
    setPassword("");
  };

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

  console.log(number);

  const changeRadio = (handleChange) => {};
  return (
    <Formik
      initialValues={{
        email: "",
        number: "",
        name: "",
        surname: "",
        picked: "",
      }}
      validateOnBlur
      //   validationSchema={validationSchema}
      onSubmit={(values) => {
        const order = {
          name: values.name,
          surname: values.surname,
          email: values.email,
          phone: values.number,
          city: inputCity,
          number: number,
          clothes: clothes,
          summary: summaryFunction(clothes),
          service: radio,
        };
        postMail(order).then((data) => {
          console.log(data);
        });
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
          <ul>
            {/* <GoogleAuthBtn /> */}
            <li>
              <label htmlFor="name">
                Ім'я
                {!values.name.length || errors.name ? <span> *</span> : <></>}
              </label>
              <br />
              <input
                type="name"
                name="name"
                placeholder="Ім'я"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <br />
              <span>{touched.name && errors.name ? errors.name : ""}</span>
            </li>
            <li>
              <label htmlFor="surname">
                Прізвище
                {!values.surname.length || errors.surname ? (
                  <span> *</span>
                ) : (
                  <></>
                )}
              </label>
              <br />
              <input
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
            </li>

            <li>
              <label htmlFor="email">
                Електронна адреса
                {!values.email.length || errors.email ? <span> *</span> : <></>}
              </label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <br />
              <span>{touched.email && errors.email ? errors.email : ""}</span>
            </li>

            <li>
              <label htmlFor="number">
                Номер телефона
                {!values.number.length || errors.number ? (
                  <span> *</span>
                ) : (
                  <></>
                )}
              </label>

              <br />
              <input
                type="tel"
                name="number"
                placeholder="..."
                maxLength="30"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.number}
              />
              <br />

              <span>
                {touched.number && errors.number ? errors.number : ""}
              </span>
            </li>
            <div id="my-radio-group">Виберіть спосіб доставки</div>

            <div role="group" aria-labelledby="my-radio-group">
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
            </div>

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
            <button
              height="30px"
              marginB="15px"
              text="Увійти"
              width="100%"
              type="submit"
              onClick={handleSubmit}
            >
              Замовити
            </button>

            {/* <button type="submit" onClick={changeForm}>
              SignUp
            </button> */}
          </ul>
        </form>
      )}
    </Formik>
  );
};

export default MakeOnOrder;

// <li>
//   <input
//     // onChange={debounce(changeDepartment, 300)}
//     onChange={debounce(handleInput, 300)}
//     type="text"
//     name="department"
//     id="department"
//     list="num"
//   />
//   {/* {number === undefined || number.length === 0 ? (
//     <p>Писати тільки українською мовою</p>
//   ) : ( */}
//   <datalist id="num">
//     {/* {number.map((item) => {
//         return ( */}
//     <option key={department} value={department}>
//       {department}
//     </option>
//     {/* ); })} */}
//   </datalist>
//   {/* )} */}
// </li>
