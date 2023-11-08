import { Field, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addClothes, updateById } from "../../redux/clothes/clothes-operations";
import {
  Form,
  DivPrice,
  DivTop,
  Label,
  TextArea,
  InputImg,
  DivInputTop,
} from "./ClothesForm.styled.jsx";
import LabelInput from "./LabelInput/LabelInput";
import formDataAppend from "./auxiliaryForms/formDataAppend";
import options from "./auxiliaryForms/options";
import Button from "../Button/Button";
import validationSchema from "../../validation/clothes";
import { useRouter } from "next/router";
import Spinner from "../Spinner/Spinner";
import useLoadingNotify from "../../hooks/useLoadingNotify";

const CLothesForm = ({ loading, initial, notify, cloth, id }) => {
  const dispatch = useDispatch();

  const { pathname } = useRouter();
  const [img, setImage] = useState(null);
  const [_, setClick] = useLoadingNotify();

  const incrementPercentage = 0.05;
  const incrementPercentageOpt = 0.35;
  const allprice = {};
  let currentPrice = "";
  const getAllPrice = (values) => {
    currentPrice = values;
    const keys = [
      "xs",
      "s",
      "sm",
      "m",
      "ml",
      "l",
      "xl",
      "xxl",
      "xl3",
      "xl4",
      "xl5",
      "xl6",
      "xl7",
    ];

    for (let i = 0; i < keys.length; i++) {
      const ceilNumber = Math.ceil(currentPrice);
      allprice[keys[i]] = {
        price: ceilNumber,
        opt: Math.ceil(ceilNumber - ceilNumber * incrementPercentageOpt),
        active: true,
      };
      currentPrice = currentPrice + currentPrice * incrementPercentage;
    }
  };

  return (
    <Formik
      initialValues={initial}
      alidateOnBlur
      validationSchema={validationSchema}
      onSubmit={(values, formikProps) => {
        const { price, ...rest } = values;
        if (img.length > 3) {
          alert("Не більше 3 фото");
          return;
        }

        getAllPrice(price);

        const newObj = {
          ...rest,
          allprice,
        };
        if (pathname === "/create") {
          console.log(newObj);
          dispatch(addClothes(formDataAppend(newObj, img)));
          // formikProps.resetForm(initial);
          setClick(values.name, "библиотеку");
        } else {
          dispatch(
            updateById({
              id,
              values: formDataAppend(newObj, img),
            })
          );
          setClick(values.name, "библиотеку");
          // formikProps.resetForm("");
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <Form
          id="form"
          encType="multipart/form-data"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
              <DivTop>
                <DivInputTop>
                  <Label>image</Label>
                  <InputImg
                    multiple
                    id="image"
                    name="image"
                    type="file"
                    onChange={(event) => {
                      setImage(event.target.files);
                    }}
                  />
                  {errors.image && touched.image && errors.image}
                </DivInputTop>
                <DivInputTop>
                  <Label>name</Label>
                  <input
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.name && touched.name && errors.name}
                </DivInputTop>
                <DivInputTop>
                  <Label>Model</Label>
                  <Field component="select" name="model">
                    <option
                      value=""
                      defaultValue={"Choose here"}
                      disabled
                      hidden
                    >
                      Виберіть модель
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Field>
                  {errors.model && touched.model && errors.model}
                </DivInputTop>
                <DivInputTop>
                  <Label>active</Label>
                  <input
                    type="checkbox"
                    name="active"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.active ? true : false}
                    checked={values.active === true}
                  ></input>
                  {errors.active && touched.active && errors.active}
                </DivInputTop>
                <DivInputTop>
                  <Label>description</Label>
                  <TextArea
                    type="text"
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    style={{ whiteSpace: "pre-wrap" }}
                  />
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </DivInputTop>
              </DivTop>
              <DivPrice>
                <LabelInput
                  name="xs"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values}
                  valueError={values}
                  errors={errors}
                  touched={errors}
                />
                {/* <LabelInput
                  name="s"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.s}
                  errors={errors.allprice?.s}
                  touched={errors.allprice?.s}
                />
                <LabelInput
                  name="sm"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.sm}
                  errors={errors.allprice?.sm}
                  touched={errors.allprice?.sm}
                />

                <LabelInput
                  name="m"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.m}
                  errors={errors.allprice?.m}
                  touched={errors.allprice?.m}
                />
                <LabelInput
                  name="ml"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.ml}
                  errors={errors.allprice?.ml}
                  touched={touched.allprice?.ml}
                />
                <LabelInput
                  name="l"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.l}
                  errors={errors.allprice?.l}
                  touched={touched.allprice?.l}
                />
                <LabelInput
                  name="xl"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.xl}
                  errors={errors.allprice?.xl}
                  touched={touched.allprice?.xl}
                />
                <LabelInput
                  name="xxl"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.xxl}
                  errors={errors.allprice?.xxl}
                  touched={touched.allprice?.xxl}
                />
                <LabelInput
                  name="xl3"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.xl3}
                  errors={errors.allprice?.xl3}
                  touched={touched.allprice?.xl3}
                />
                <LabelInput
                  name="xl4"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.xl4}
                  errors={errors.allprice?.xl4}
                  touched={touched.allprice?.xl4}
                />
                <LabelInput
                  name="xl5"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.xl5}
                  errors={errors.allprice?.xl5}
                  touched={touched.allprice?.xl5}
                />
                <LabelInput
                  name="xl6"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.xl6}
                  errors={errors.allprice?.xl6}
                  touched={touched.allprice?.xl6}
                />
                <LabelInput
                  name="xl7"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  value={values.allprice.xl7}
                  errors={errors.allprice?.xl7}
                  touched={touched.allprice?.xl7}
                /> */}
              </DivPrice>
              <Button
                marginT="50px;"
                width="100%"
                height="30px"
                type="submit"
                text="Submit"
                // disabled={isSubmitting}
              />
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default CLothesForm;
